import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,a as e}from"./app-08e26ff4.js";const i={},r=e(`<h1 id="find-命令" tabindex="-1"><a class="header-anchor" href="#find-命令" aria-hidden="true">#</a> Find 命令</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 常规用法

// 搜索一个目录所有文件

<span class="token function">find</span> ./app/archive/aegis-censor  <span class="token parameter variable">-name</span> <span class="token string">&quot;*.go&quot;</span> <span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">grep</span> <span class="token string">&quot;panic(&quot;</span>


// 高级用法
// 搜索一个目录，并且可以排除其他目录
// 注意 ./app/archive 为需要扫描路径
// 注意 ./app/archive/material，./app/archive/crm 为排除的路径
// 注意 <span class="token operator">!</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;main.go&quot;</span> 排除main.go 文件
<span class="token function">find</span> ./app/archive/aegis-censor <span class="token parameter variable">-path</span> ./app/archive/aegis-censor/service/internal <span class="token parameter variable">-prune</span> <span class="token parameter variable">-o</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-path</span> ./app/archive/aegis-censor/service/configs <span class="token parameter variable">-prune</span> <span class="token parameter variable">-o</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-name</span> <span class="token string">&quot;*.go&quot;</span> <span class="token punctuation">\\</span>
<span class="token operator">!</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;main.go&quot;</span> <span class="token punctuation">\\</span>
-print<span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">grep</span> <span class="token string">&quot;panic(&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[r];function t(c,o){return n(),s("div",null,p)}const v=a(i,[["render",t],["__file","find.html.vue"]]);export{v as default};
