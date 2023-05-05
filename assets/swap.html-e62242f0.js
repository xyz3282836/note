import{_ as i,X as t,Y as l,$ as s,a0 as e,a1 as a,Z as p,E as r}from"./framework-5a8052d6.js";const o="/assets/ubuntu-swap-5a05ee2e.png",c={},d=p(`<h1 id="swap" tabindex="-1"><a class="header-anchor" href="#swap" aria-hidden="true">#</a> Swap</h1><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">free</span> <span class="token parameter variable">-m</span>

swap --show（swap -s）

<span class="token function">grep</span> SwapTotal /proc/meminfo

// Swappiness is a property of the Linux kernel that changes the balance between swapping out runtime memory, as opposed to dropping pages from the system page cache. Swappiness can be <span class="token builtin class-name">set</span> to values between <span class="token number">0</span> and <span class="token number">100</span> inclusive. A low value means the kernel will try to avoid swapping as much as possible where a higher value instead will <span class="token function">make</span> the kernel aggressively try to use swap space. The default value is <span class="token number">60</span>, and <span class="token keyword">for</span> <span class="token function">most</span> desktop systems, setting it to <span class="token number">100</span> may affect the overall performance, whereas setting it lower <span class="token punctuation">(</span>even <span class="token number">0</span><span class="token punctuation">)</span> may improve interactivity <span class="token punctuation">(</span>by decreasing response latency.
<span class="token function">cat</span> /proc/sys/vm/swappiness
// 临时修改
<span class="token builtin class-name">echo</span> <span class="token number">60</span> <span class="token operator">&gt;</span> /proc/sys/vm/swappiness
// 或者
<span class="token function">sysctl</span> <span class="token assign-left variable">vm.swappiness</span><span class="token operator">=</span><span class="token number">60</span>
// 永久修改，需要重启，本质就是每次开启加载下这个新配置
<span class="token builtin class-name">echo</span> <span class="token string">&#39;vm.swappiness=60&#39;</span> <span class="token operator">&gt;&gt;</span> /etc/sysctl.conf

// 利用dd来划分空间
<span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/zero <span class="token assign-left variable">of</span><span class="token operator">=</span>swapfile <span class="token assign-left variable">bs</span><span class="token operator">=</span>1M <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">980</span>
<span class="token function">chmod</span> <span class="token number">600</span> swapfile
// 转换成swap类型文件
<span class="token function">mkswap</span> swapfile

<span class="token function">swapon</span> swapfile
// 卸载
swapoff swapfile


// 永久生效
<span class="token function">vim</span> /etc/fstab
// 添加
swapfile-path none swap defaults <span class="token number">0</span> <span class="token number">0</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="推荐-swap-大小" tabindex="-1"><a class="header-anchor" href="#推荐-swap-大小" aria-hidden="true">#</a> 推荐 swap 大小</h2><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> reference</h2>',6),u={href:"https://qiyuan-z.github.io/2020/08/24/Ubuntu%E5%A2%9E%E5%8A%A0swap%E4%BA%A4%E6%8D%A2%E7%A9%BA%E9%97%B4/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.cnblogs.com/kerrycode/p/5246383.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://opensource.com/article/19/2/swap-space-poll",target:"_blank",rel:"noopener noreferrer"};function b(h,f){const n=r("ExternalLinkIcon");return t(),l("div",null,[d,s("p",null,[s("a",u,[e("https://qiyuan-z.github.io/2020/08/24/Ubuntu 增加 swap 交换空间/"),a(n)])]),s("p",null,[s("a",v,[e("https://www.cnblogs.com/kerrycode/p/5246383.html"),a(n)])]),s("p",null,[s("a",m,[e("https://opensource.com/article/19/2/swap-space-poll"),a(n)])])])}const w=i(c,[["render",b],["__file","swap.html.vue"]]);export{w as default};
