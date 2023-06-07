import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,a}from"./app-339f552b.js";const t={},i=a(`<h1 id="sort-interface" tabindex="-1"><a class="header-anchor" href="#sort-interface" aria-hidden="true">#</a> sort interface</h1><p>定义了</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Interface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token comment">// Len is the number of elements in the collection.</span>
	<span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>

	<span class="token comment">// Less reports whether the element with index i</span>
	<span class="token comment">// must sort before the element with index j.</span>
	<span class="token comment">//</span>
	<span class="token comment">// If both Less(i, j) and Less(j, i) are false,</span>
	<span class="token comment">// then the elements at index i and j are considered equal.</span>
	<span class="token comment">// Sort may place equal elements in any order in the final result,</span>
	<span class="token comment">// while Stable preserves the original input order of equal elements.</span>
	<span class="token comment">//</span>
	<span class="token comment">// Less must describe a transitive ordering:</span>
	<span class="token comment">//  - if both Less(i, j) and Less(j, k) are true, then Less(i, k) must be true as well.</span>
	<span class="token comment">//  - if both Less(i, j) and Less(j, k) are false, then Less(i, k) must be false as well.</span>
	<span class="token comment">//</span>
	<span class="token comment">// Note that floating-point comparison (the &lt; operator on float32 or float64 values)</span>
	<span class="token comment">// is not a transitive ordering when not-a-number (NaN) values are involved.</span>
	<span class="token comment">// See Float64Slice.Less for a correct implementation for floating-point values.</span>
	<span class="token function">Less</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>

	<span class="token comment">// Swap swaps the elements with indexes i and j.</span>
	<span class="token function">Swap</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[i];function o(c,p){return s(),e("div",null,l)}const m=n(t,[["render",o],["__file","sort.html.vue"]]);export{m as default};
