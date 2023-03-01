import{_ as n,W as s,X as a,a0 as t}from"./framework-52f8fb67.js";const e={},p=t(`<h1 id="context-timeout" tabindex="-1"><a class="header-anchor" href="#context-timeout" aria-hidden="true">#</a> context timeout</h1><h3 id="client" tabindex="-1"><a class="header-anchor" href="#client" aria-hidden="true">#</a> client</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// d 为本地配置某个下游的超时时间，c为上游传递的ctx，比较后选小的</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>d Duration<span class="token punctuation">)</span> <span class="token function">Shrink</span><span class="token punctuation">(</span>c context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">(</span>Duration<span class="token punctuation">,</span> context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> context<span class="token punctuation">.</span>CancelFunc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> deadline<span class="token punctuation">,</span> ok <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Deadline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		<span class="token keyword">if</span> ctimeout <span class="token operator">:=</span> xtime<span class="token punctuation">.</span><span class="token function">Until</span><span class="token punctuation">(</span>deadline<span class="token punctuation">)</span><span class="token punctuation">;</span> ctimeout <span class="token operator">&lt;</span> xtime<span class="token punctuation">.</span><span class="token function">Duration</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 选小的</span>
			<span class="token keyword">return</span> <span class="token function">Duration</span><span class="token punctuation">(</span>ctimeout<span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	ctx<span class="token punctuation">,</span> cancel <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithTimeout</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> xtime<span class="token punctuation">.</span><span class="token function">Duration</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> d<span class="token punctuation">,</span> ctx<span class="token punctuation">,</span> cancel
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>case1: 上游还剩下 400ms，本地默认250ms，则返回小的250ms</p><p>case2: 上游还剩下 200ms，本地默认250ms，则返回小的200ms</p><p>case3: 上游还剩下 600ms，本地配置450ms，则返回小的450ms</p><h3 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> server</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>s<span class="token punctuation">.</span>mutex<span class="token punctuation">.</span><span class="token function">RLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
conf <span class="token operator">:=</span> s<span class="token punctuation">.</span>conf
s<span class="token punctuation">.</span>mutex<span class="token punctuation">.</span><span class="token function">RUnlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// get derived timeout from grpc context,</span>
<span class="token comment">// compare with the warden configured,</span>
<span class="token comment">// and use the minimum one</span>
<span class="token comment">// warden配置的服务超时时间和ctx的超时时间，选择小的</span>
timeout <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Duration</span><span class="token punctuation">(</span>conf<span class="token punctuation">.</span>Timeout<span class="token punctuation">)</span>
<span class="token keyword">if</span> dl<span class="token punctuation">,</span> ok <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Deadline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
  <span class="token comment">// ctimeout ctx还剩下的时间</span>
	ctimeout <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Until</span><span class="token punctuation">(</span>dl<span class="token punctuation">)</span>
  <span class="token comment">// -2ms ?</span>
	<span class="token keyword">if</span> ctimeout<span class="token operator">-</span>time<span class="token punctuation">.</span>Millisecond<span class="token operator">*</span><span class="token number">2</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		ctimeout <span class="token operator">=</span> ctimeout <span class="token operator">-</span> time<span class="token punctuation">.</span>Millisecond<span class="token operator">*</span><span class="token number">2</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> timeout <span class="token operator">&gt;</span> ctimeout <span class="token punctuation">{</span>
		timeout <span class="token operator">=</span> ctimeout
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
ctx<span class="token punctuation">,</span> cancel <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">WithTimeout</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> timeout<span class="token punctuation">)</span>
<span class="token keyword">defer</span> <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>case: 上游还剩400ms，服务配置的800ms，则按照400ms超时来</p>`,9),c=[p];function o(i,u){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","ctx-time.html.vue"]]);export{k as default};
