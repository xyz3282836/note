import{_ as e,W as t,X as l,Y as s,Z as n,$ as p,a0 as i,C as o}from"./framework-52f8fb67.js";const c={},r=i(`<h1 id="wsl2" tabindex="-1"><a class="header-anchor" href="#wsl2" aria-hidden="true">#</a> wsl2</h1><h2 id="脚本" tabindex="-1"><a class="header-anchor" href="#脚本" aria-hidden="true">#</a> 脚本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token assign-left variable">hostip</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /etc/resolv.conf <span class="token operator">|</span> <span class="token function">grep</span> nameserver <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ print $2 }&#39;</span><span class="token variable">)</span></span>
<span class="token assign-left variable">wslip</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">hostname</span> <span class="token parameter variable">-I</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span>
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">10808</span>
 
<span class="token assign-left variable">PROXY_HTTP</span><span class="token operator">=</span><span class="token string">&quot;socks5://<span class="token variable">\${hostip}</span>:<span class="token variable">\${port}</span>&quot;</span>
 
<span class="token function-name function">set_proxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${PROXY_HTTP}</span>&quot;</span>
  <span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTP_PROXY</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${PROXY_HTTP}</span>&quot;</span>
 
  <span class="token builtin class-name">export</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${PROXY_HTTP}</span>&quot;</span>
  <span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTPS_proxy</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${PROXY_HTTP}</span>&quot;</span>
 
  <span class="token builtin class-name">export</span> <span class="token assign-left variable">ALL_PROXY</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${PROXY_SOCKS5}</span>&quot;</span>
  <span class="token builtin class-name">export</span> <span class="token assign-left variable">all_proxy</span><span class="token operator">=</span><span class="token variable">\${PROXY_SOCKS5}</span>
 
  <span class="token function">git</span> config <span class="token parameter variable">--global</span> http.https://github.com.proxy <span class="token variable">\${PROXY_HTTP}</span>
  <span class="token function">git</span> config <span class="token parameter variable">--global</span> https.https://github.com.proxy <span class="token variable">\${PROXY_HTTP}</span>
 
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Proxy has been opened.&quot;</span>
<span class="token punctuation">}</span>
 
<span class="token function-name function">unset_proxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">unset</span> http_proxy
  <span class="token builtin class-name">unset</span> HTTP_PROXY
  <span class="token builtin class-name">unset</span> https_proxy
  <span class="token builtin class-name">unset</span> HTTPS_PROXY
  <span class="token builtin class-name">unset</span> ALL_PROXY
  <span class="token builtin class-name">unset</span> all_proxy
  <span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> http.https://github.com.proxy
  <span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> https.https://github.com.proxy
 
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Proxy has been closed.&quot;</span>
<span class="token punctuation">}</span>
 
<span class="token function-name function">test_setting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Host IP:&quot;</span> <span class="token variable">\${hostip}</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;WSL IP:&quot;</span> <span class="token variable">\${wslip}</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Try to connect to Google...&quot;</span>
  <span class="token assign-left variable">resp</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-I</span> <span class="token parameter variable">-s</span> --connect-timeout <span class="token number">5</span> <span class="token parameter variable">-m</span> <span class="token number">5</span> <span class="token parameter variable">-w</span> <span class="token string">&quot;%{http_code}&quot;</span> <span class="token parameter variable">-o</span> /dev/null www.google.com<span class="token variable">)</span></span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${resp}</span> <span class="token operator">=</span> <span class="token number">200</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Proxy setup succeeded!&quot;</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Proxy setup failed!&quot;</span>
  <span class="token keyword">fi</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;set&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  set_proxy
 
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;unset&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  unset_proxy
 
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  test_setting
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Unsupported arguments.&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>source ./proxy.sh set</code>：开启代理</li><li><code>source ./proxy.sh unset</code>：关闭代理</li><li><code>source ./proxy.sh test</code>：查看代理状态</li></ul>`,4),u={href:"https://www.cnblogs.com/tuilk/p/16287472.html",target:"_blank",rel:"noopener noreferrer"};function k(v,d){const a=o("ExternalLinkIcon");return t(),l("div",null,[r,s("p",null,[n("参考："),s("a",u,[n("https://www.cnblogs.com/tuilk/p/16287472.html"),p(a)])])])}const m=e(c,[["render",k],["__file","wsl set proxy.html.vue"]]);export{m as default};
