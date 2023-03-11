import{_ as e,W as i,X as n,Y as a}from"./framework-7d39e0da.js";const d={},t=a(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> git</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 删除 untracked files
git clean -f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 连 untracked 的目录也一起删掉
git clean -fd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 连 gitignore 的untrack 文件/目录也一起删掉 （慎用，一般这个是用来删掉编译出来的 .o之类的文件用的）
git clean -xfd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 在用上述 git clean 前，墙裂建议加上 -n 参数来先看看会删掉哪些文件，防止重要文件被误删
git clean -nxfd
git clean -nf
git clean -nfd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),s=[t];function l(c,r){return i(),n("div",null,s)}const v=e(d,[["render",l],["__file","git.html.vue"]]);export{v as default};
