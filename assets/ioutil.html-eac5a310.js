import{_ as n,W as s,X as a,a0 as e}from"./framework-1046fca1.js";const o={},t=e(`<h1 id="io便捷操作函数集" tabindex="-1"><a class="header-anchor" href="#io便捷操作函数集" aria-hidden="true">#</a> io便捷操作函数集</h1><h2 id="nopcloser" tabindex="-1"><a class="header-anchor" href="#nopcloser" aria-hidden="true">#</a> NopCloser</h2><p>有时候我们需要传递一个 io.ReadCloser 的实例，而我们现在有一个 io.Reader 的实例，比如：strings.Reader ，这个时候 NopCloser 就派上用场了。它包装一个io.Reader，返回一个 io.ReadCloser ，而相应的 Close 方法啥也不做，只是返回 nil。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>    rc<span class="token punctuation">,</span> ok <span class="token operator">:=</span> body<span class="token punctuation">.</span><span class="token punctuation">(</span>io<span class="token punctuation">.</span>ReadCloser<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token operator">&amp;&amp;</span> body <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        rc <span class="token operator">=</span> ioutil<span class="token punctuation">.</span><span class="token function">NopCloser</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如，在标准库 net/http 包中的 NewRequest，接收一个 io.Reader 的 body，而实际上，Request 的 Body 的类型是 io.ReadCloser，因此，代码内部进行了判断，如果传递的 io.Reader 也实现了 io.ReadCloser 接口，则转换，否则通过ioutil.NopCloser 包装转换一下。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ReadAll</span><span class="token punctuation">(</span>r io<span class="token punctuation">.</span>Reader<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">ReadFile</span><span class="token punctuation">(</span>filename <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">WriteFile</span><span class="token punctuation">(</span>filename <span class="token builtin">string</span><span class="token punctuation">,</span> data <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> perm os<span class="token punctuation">.</span>FileMode<span class="token punctuation">)</span> <span class="token builtin">error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=[t];function i(c,l){return s(),a("div",null,p)}const r=n(o,[["render",i],["__file","ioutil.html.vue"]]);export{r as default};
