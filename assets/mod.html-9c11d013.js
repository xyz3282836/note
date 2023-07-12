import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c as o,b as e,d as a,e as t,a as n}from"./app-5693ca20.js";const d="/assets/go-mod-replace-demo-1786553e.png",c={},p=n(`<h1 id="mod" tabindex="-1"><a class="header-anchor" href="#mod" aria-hidden="true">#</a> mod</h1><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//目标 repo 有哪些版本
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v={href:"https://www.cnblogs.com/apocelipes/p/9537659.html",target:"_blank",rel:"noopener noreferrer"},m=n('<figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go get <span class="token parameter variable">-u</span> git.bilibili.co/live-dev/go-live<span class="token punctuation">[</span>@latest<span class="token operator">|</span>@master<span class="token operator">|</span>@1.2.6<span class="token punctuation">]</span>
go mod edit <span class="token parameter variable">-replace</span><span class="token operator">=</span>go-live<span class="token operator">=</span>git.bilibili.co/live-dev/go-live@v1.2.6

@latest 优先tag，有tag则最新tag，没有则最新commit
@master master分支的最新commit

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function u(b,g){const s=l("ExternalLinkIcon");return r(),o("div",null,[p,e("p",null,[a("参考："),e("a",v,[a("https://www.cnblogs.com/apocelipes/p/9537659.html"),t(s)])]),m])}const _=i(c,[["render",u],["__file","mod.html.vue"]]);export{_ as default};
