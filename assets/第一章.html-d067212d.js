import{_ as n,W as s,X as a,a0 as p}from"./framework-52f8fb67.js";const t={},e=p(`<h1 id="第一章" tabindex="-1"><a class="header-anchor" href="#第一章" aria-hidden="true">#</a> 第一章</h1><p>POSIX.1</p><p>文件名：a-z,A-Z,0-9,.,-,_</p><p>ls命令的简要实现：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span><span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>

DIR <span class="token operator">*</span>dp<span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token class-name">dirent</span> <span class="token operator">*</span>dirp<span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>argc <span class="token operator">!=</span> <span class="token number">2</span><span class="token punctuation">)</span>

	<span class="token function">err_quit</span><span class="token punctuation">(</span><span class="token string">&quot;usage: ls directory_name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>dp <span class="token operator">=</span> <span class="token function">opendir</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>

	<span class="token function">err_sys</span><span class="token punctuation">(</span><span class="token string">&quot;can&#39;t open %s&quot;</span><span class="token punctuation">,</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>dirp <span class="token operator">=</span> <span class="token function">readdir</span><span class="token punctuation">(</span>dp<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>

	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s \\n&quot;</span><span class="token punctuation">,</span>dirp<span class="token operator">-&gt;</span>d_name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">closedir</span><span class="token punctuation">(</span>dp<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>标准输入(1)、标准输出(2)、标准错误(3)</p><p>不带缓冲的I/O函数：open、read、write、lseek、close</p><p>程序是一个存储在磁盘上的某个目录中的可执行文件</p><p><strong>7个exec函数（7种exec的变体）</strong></p><p><strong>fork</strong>创建一个新进程，对父进程返回子进程的进程ID，对子进程返回0；所以调用一次（在父进程），但是返回两次（父进程和子进程）</p><p><strong>execlp</strong>执行从标准输入的命令，这就用新的程序文件替换了子进程原先执行的程序文件。</p><p>fork和execlp和waitpid组合就是产生spawn一个新进程</p><p>子进程调用execlp执行新程序文件，而父进程希望等待子进程终止，这是通过waitpid实现的。</p><p><strong>用户标识</strong> 用户ID、组ID，4个字节（双字节整型存放）</p><p><strong>信号</strong> 进程三种方式处理信号</p>`,15),c=[e];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","第一章.html.vue"]]);export{r as default};
