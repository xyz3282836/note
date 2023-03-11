import{_ as n,W as s,X as a,Y as p}from"./framework-7d39e0da.js";const t={},e=p(`<h1 id="c-语言指针数组" tabindex="-1"><a class="header-anchor" href="#c-语言指针数组" aria-hidden="true">#</a> c 语言指针数组</h1><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">;</span><span class="token comment">//此时p已经有内存地址</span>
<span class="token operator">*</span>p <span class="token operator">=</span> a<span class="token punctuation">;</span><span class="token comment">//这个操作是指针p指向的值 进行更新</span>

<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span> <span class="token comment">//此时指针p的值为a的内存地址</span>

<span class="token keyword">int</span> c<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> c1<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
c本身是个指针，但是不可重新修改地址，而且c会自动转化为值，所以gdb p c打印出的是值，而 p <span class="token operator">&amp;</span>c打印出地址
<span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> c<span class="token punctuation">;</span><span class="token comment">//此操作就是地址赋值，但是 int *p = &amp;c (报错：从不兼容的指针类型初始化，当然只是warning)，数组c进行指针赋值，那么c就不能当成值来处理，和gdb 将c作值处理不一样的；</span>

<span class="token keyword">int</span> c<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>
数组本质是指针常量，可以修改值，但是不可重新修改地址，在低地址段
p<span class="token operator">++</span>
c<span class="token operator">++</span>就是错的

p <span class="token operator">=</span> c
c <span class="token operator">=</span> c1 错的

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> a1<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>b<span class="token punctuation">;</span>
    <span class="token comment">//a = a1; 这是不可以的，数组是指针常量，也就是指针和数组的区别，数据段低地址不可更改，栈段高地址可以更改</span>
    b <span class="token operator">=</span> a<span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a %p\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a %s\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b %p\\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b %s\\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a[1] %s\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a[1] %c\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*a[1] %p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b[1] %s\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b[1] %c\\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*b[1] %p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;------------\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



    <span class="token comment">// int c[]={1,2};</span>
    <span class="token comment">// int *d = &amp;c;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[e];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","c语言指针数组.html.vue"]]);export{r as default};
