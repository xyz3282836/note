import{_ as n,W as s,X as a,Y as t}from"./framework-2fbbe1ff.js";const e={},p=t(`<h1 id="pool-池" tabindex="-1"><a class="header-anchor" href="#pool-池" aria-hidden="true">#</a> pool 池</h1><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// A Pool must not be copied after first use.</span>
<span class="token keyword">type</span> Pool <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	noCopy noCopy

	local     unsafe<span class="token punctuation">.</span>Pointer <span class="token comment">// local fixed-size per-P pool, actual type is [P]poolLocal 每个P一个，pid为索引</span>
	localSize <span class="token builtin">uintptr</span>        <span class="token comment">// size of the local array</span>

	victim     unsafe<span class="token punctuation">.</span>Pointer <span class="token comment">// local from previous cycle</span>
	victimSize <span class="token builtin">uintptr</span>        <span class="token comment">// size of victims array</span>

	<span class="token comment">// New optionally specifies a function to generate</span>
	<span class="token comment">// a value when Get would otherwise return nil.</span>
	<span class="token comment">// It may not be changed concurrently with calls to Get.</span>
	New <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> any
<span class="token punctuation">}</span>
<span class="token keyword">type</span> poolLocal <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	poolLocalInternal
	<span class="token comment">// Prevents false sharing on widespread platforms with</span>
	<span class="token comment">// 128 mod (cache line size) = 0 .</span>
	pad <span class="token punctuation">[</span><span class="token number">128</span> <span class="token operator">-</span> unsafe<span class="token punctuation">.</span><span class="token function">Sizeof</span><span class="token punctuation">(</span>poolLocalInternal<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token number">128</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
<span class="token punctuation">}</span>
<span class="token comment">// Local per-P Pool appendix.</span>
<span class="token keyword">type</span> poolLocalInternal <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	private any       <span class="token comment">// Can be used only by the respective P.只能当前 P 获取</span>
	shared  poolChain <span class="token comment">// Local P can pushHead/popHead; any P can popTail.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Pool<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> any <span class="token punctuation">{</span>
	<span class="token keyword">if</span> race<span class="token punctuation">.</span>Enabled <span class="token punctuation">{</span>
		race<span class="token punctuation">.</span><span class="token function">Disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	l<span class="token punctuation">,</span> pid <span class="token operator">:=</span> p<span class="token punctuation">.</span><span class="token function">pin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// 内部runtime_procPin来禁止其他m抢占这个P，下面要获取当前P下pool中private</span>
	x <span class="token operator">:=</span> l<span class="token punctuation">.</span>private
	l<span class="token punctuation">.</span>private <span class="token operator">=</span> <span class="token boolean">nil</span>
	<span class="token keyword">if</span> x <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token comment">// Try to pop the head of the local shard. We prefer</span>
		<span class="token comment">// the head over the tail for temporal locality of</span>
		<span class="token comment">// reuse.</span>
		x<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">=</span> l<span class="token punctuation">.</span>shared<span class="token punctuation">.</span><span class="token function">popHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> x <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			x <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">getSlow</span><span class="token punctuation">(</span>pid<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token function">runtime_procUnpin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// 和上方 pin</span>
	<span class="token keyword">if</span> race<span class="token punctuation">.</span>Enabled <span class="token punctuation">{</span>
		race<span class="token punctuation">.</span><span class="token function">Enable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> x <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			race<span class="token punctuation">.</span><span class="token function">Acquire</span><span class="token punctuation">(</span><span class="token function">poolRaceAddr</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> x <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> p<span class="token punctuation">.</span>New <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		x <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> x
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Pool<span class="token punctuation">)</span> <span class="token function">pin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>poolLocal<span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	pid <span class="token operator">:=</span> <span class="token function">runtime_procPin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// In pinSlow we store to local and then to localSize, here we load in opposite order.</span>
	<span class="token comment">// Since we&#39;ve disabled preemption, GC cannot happen in between.</span>
	<span class="token comment">// Thus here we must observe local at least as large localSize.</span>
	<span class="token comment">// We can observe a newer/larger local, it is fine (we must observe its zero-initialized-ness).</span>
	s <span class="token operator">:=</span> <span class="token function">runtime_LoadAcquintptr</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>p<span class="token punctuation">.</span>localSize<span class="token punctuation">)</span> <span class="token comment">// load-acquire</span>
	l <span class="token operator">:=</span> p<span class="token punctuation">.</span>local                              <span class="token comment">// load-consume</span>
	<span class="token keyword">if</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>pid<span class="token punctuation">)</span> <span class="token operator">&lt;</span> s <span class="token punctuation">{</span> <span class="token comment">// s是local的poolLocal数组大小，每个P一个poolLocal</span>
		<span class="token keyword">return</span> <span class="token function">indexLocal</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> pid<span class="token punctuation">)</span><span class="token punctuation">,</span> pid
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> p<span class="token punctuation">.</span><span class="token function">pinSlow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","pool.html.vue"]]);export{r as default};
