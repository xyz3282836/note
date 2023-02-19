import{_ as e,W as n,X as a,a0 as s}from"./framework-1046fca1.js";const i={},l=s(`<h1 id="mod" tabindex="-1"><a class="header-anchor" href="#mod" aria-hidden="true">#</a> mod</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//目标 repo 有哪些版本
go list <span class="token parameter variable">-m</span> <span class="token parameter variable">-versions</span> repo

//实际最终使用那个版本的repo
go list <span class="token parameter variable">-m</span> all<span class="token operator">|</span><span class="token function">grep</span> repo

// 某个repo 被依赖的list
go mod graph <span class="token operator">|</span><span class="token function">grep</span> repo

// 某个repo 被引用的链路
go mod why repo


go get <span class="token punctuation">[</span>option<span class="token punctuation">]</span> repo
<span class="token parameter variable">-t</span> flag：考虑构建测试所需的module。
<span class="token parameter variable">-d</span> flag：下载每个module的源代码，但不要构建或安装它们。
<span class="token parameter variable">-v</span> flag：提供详细输出。
./… ：在整个源代码树中执行这些操作，并且仅更新所需的依赖项。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[l];function d(o,c){return n(),a("div",null,r)}const p=e(i,[["render",d],["__file","mod.html.vue"]]);export{p as default};
