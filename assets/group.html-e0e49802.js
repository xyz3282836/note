import{_ as n,W as s,X as a,a0 as t}from"./framework-1046fca1.js";const e={},p=t(`<h1 id="group" tabindex="-1"><a class="header-anchor" href="#group" aria-hidden="true">#</a> group</h1><p>缓存方法执行的结果</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Group is a lazy load container.</span>
<span class="token keyword">type</span> Group <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token builtin">new</span>  <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	objs sync<span class="token punctuation">.</span>Map
	sync<span class="token punctuation">.</span>RWMutex
<span class="token punctuation">}</span>
<span class="token comment">// NewGroup news a group container.</span>
<span class="token keyword">func</span> <span class="token function">NewGroup</span><span class="token punctuation">(</span><span class="token builtin">new</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">*</span>Group <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token builtin">new</span> <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;container.group: can&#39;t assign a nil to the new function&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Group<span class="token punctuation">{</span>
		<span class="token builtin">new</span><span class="token punctuation">:</span> <span class="token builtin">new</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Get gets the object by the given key.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>g <span class="token operator">*</span>Group<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span>key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// Reset resets the new function and deletes all existing objects.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>g <span class="token operator">*</span>Group<span class="token punctuation">)</span> <span class="token function">Reset</span><span class="token punctuation">(</span><span class="token builtin">new</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// Clear deletes all objects.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>g <span class="token operator">*</span>Group<span class="token punctuation">)</span> <span class="token function">Clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","group.html.vue"]]);export{r as default};
