import{_ as n,W as e,X as s,a0 as a}from"./framework-52f8fb67.js";const t={},i=a(`<h1 id="container" tabindex="-1"><a class="header-anchor" href="#container" aria-hidden="true">#</a> container</h1><h2 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h2><p>双向链表</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Element is an element of a linked list.</span>
<span class="token keyword">type</span> Element <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">// Next and previous pointers in the doubly-linked list of elements.</span>
	<span class="token comment">// To simplify the implementation, internally a list l is implemented</span>
	<span class="token comment">// as a ring, such that &amp;l.root is both the next element of the last</span>
	<span class="token comment">// list element (l.Back()) and the previous element of the first list</span>
	<span class="token comment">// element (l.Front()).</span>
	next<span class="token punctuation">,</span> prev <span class="token operator">*</span>Element

	<span class="token comment">// The list to which this element belongs.</span>
	list <span class="token operator">*</span>List

	<span class="token comment">// The value stored with this element.</span>
	Value <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>root 根节点不放数据，外部无法获取root节点信息</p><p>使用上非环，内部实现其实是环</p><h2 id="ring" tabindex="-1"><a class="header-anchor" href="#ring" aria-hidden="true">#</a> ring</h2><p>operations on circular lists</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Ring <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	next<span class="token punctuation">,</span> prev <span class="token operator">*</span>Ring
	Value      <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// for use by client; untouched by this library</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>双向链表，环</p><p>可unlink，link，move，do</p><h2 id="heap" tabindex="-1"><a class="header-anchor" href="#heap" aria-hidden="true">#</a> heap</h2><p>包含sort.Interface: Less() Len() Swap() ,加上自己的interface: Pop(),Push()</p>`,13),l=[i];function o(c,r){return e(),s("div",null,l)}const d=n(t,[["render",o],["__file","container.html.vue"]]);export{d as default};
