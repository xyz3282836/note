import{_ as n,W as s,X as a,a0 as t}from"./framework-1046fca1.js";const p={},e=t(`<h1 id="主要思路" tabindex="-1"><a class="header-anchor" href="#主要思路" aria-hidden="true">#</a> 主要思路</h1><blockquote><p>注意，plan9 和 intel 汇编指令不同</p></blockquote><p>replacefunc 替换 rawfunc</p><h2 id="全局" tabindex="-1"><a class="header-anchor" href="#全局" aria-hidden="true">#</a> 全局</h2><p>先不区分协程，全局生效，虽然会有很多问题</p><p>先找到replacefunc和rawfunc 内存地址，</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>replacefuncReflectValue <span class="token operator">=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>replacefunc<span class="token punctuation">)</span> <span class="token comment">// 获取reflect.Value</span>
replacefuncPtr <span class="token operator">:=</span> <span class="token function">uintprt</span><span class="token punctuation">(</span>unsate<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>replacefuncReflectValue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//??</span>
<span class="token comment">// replacefunc 内存地址做处理，</span>
<span class="token keyword">func</span> <span class="token function">jmp</span><span class="token punctuation">(</span>to <span class="token builtin">uintptr</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">{</span>
    <span class="token number">0x48</span><span class="token punctuation">,</span> <span class="token number">0xBA</span><span class="token punctuation">,</span>     <span class="token comment">// movabs rdx</span>
    <span class="token function">byte</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">byte</span><span class="token punctuation">(</span>to <span class="token operator">&gt;&gt;</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">byte</span><span class="token punctuation">(</span>to <span class="token operator">&gt;&gt;</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">byte</span><span class="token punctuation">(</span>to <span class="token operator">&gt;&gt;</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">byte</span><span class="token punctuation">(</span>to <span class="token operator">&gt;&gt;</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">byte</span><span class="token punctuation">(</span>to <span class="token operator">&gt;&gt;</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">byte</span><span class="token punctuation">(</span>to <span class="token operator">&gt;&gt;</span> <span class="token number">48</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">byte</span><span class="token punctuation">(</span>to <span class="token operator">&gt;&gt;</span> <span class="token number">56</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// movabs rdx,to</span>
    <span class="token number">0xFF</span><span class="token punctuation">,</span> <span class="token number">0xE2</span><span class="token punctuation">,</span>     <span class="token comment">// jmp rdx</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[e];function o(u,l){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","monkey patch.html.vue"]]);export{k as default};
