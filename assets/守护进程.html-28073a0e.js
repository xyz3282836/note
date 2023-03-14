import{_ as n,W as s,X as a,Y as t}from"./framework-3ab8bde0.js";const p={},e=t(`<h1 id="守护进程" tabindex="-1"><a class="header-anchor" href="#守护进程" aria-hidden="true">#</a> 守护进程</h1><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;apue.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;syslog.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;fcntl.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/resource.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">daemonize</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>cmd<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> i<span class="token punctuation">,</span> fd0<span class="token punctuation">,</span> fd1<span class="token punctuation">,</span> fd2<span class="token punctuation">;</span>
	<span class="token class-name">pid_t</span> pid<span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">rlimit</span> rl<span class="token punctuation">;</span>
	<span class="token keyword">struct</span> <span class="token class-name">sigaction</span> sa<span class="token punctuation">;</span>

	<span class="token comment">/*
	 * Clear file creation mask.
	 * 清除mask
	 */</span>
	<span class="token function">umask</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">/*
	 * Get maximum number of file descriptors.
	 * 获得最大fd
	 */</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getrlimit</span><span class="token punctuation">(</span>RLIMIT_NOFILE<span class="token punctuation">,</span> <span class="token operator">&amp;</span>rl<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token function">err_quit</span><span class="token punctuation">(</span><span class="token string">&quot;%s: can&#39;t get file limit&quot;</span><span class="token punctuation">,</span> cmd<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">/*
	 * Become a session leader to lose controlling TTY.
	 * 父进程关闭，子进程setsid
	 * 子进程继承了父进程的进程组 ID，但获得了一个新的进程 ID，这就保证了子进程不是一个 进程组的组长进程，setsid 调用的先决条件
	 *
	 */</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>pid <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token function">err_quit</span><span class="token punctuation">(</span><span class="token string">&quot;%s: can&#39;t fork&quot;</span><span class="token punctuation">,</span> cmd<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">/* parent */</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">/*
	 * 该进程不能是进程组组长进程
	 * setsid后发生 a.新会话的首进程，b.成为一个新进程组的组长进程，c.没有控制终端。(如果在调用setsid前，该进程有控制终端，那么与该终端的联系被解除)
	 */</span>
	<span class="token function">setsid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">/*
	 * Ensure future opens won&#39;t allocate controlling TTYs.
	 * 忽略hup挂起信号
	 */</span>
	sa<span class="token punctuation">.</span>sa_handler <span class="token operator">=</span> SIG_IGN<span class="token punctuation">;</span>
	<span class="token function">sigemptyset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>sa<span class="token punctuation">.</span>sa_mask<span class="token punctuation">)</span><span class="token punctuation">;</span>
	sa<span class="token punctuation">.</span>sa_flags <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">sigaction</span><span class="token punctuation">(</span>SIGHUP<span class="token punctuation">,</span> <span class="token operator">&amp;</span>sa<span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token function">err_quit</span><span class="token punctuation">(</span><span class="token string">&quot;%s: can&#39;t ignore SIGHUP&quot;</span><span class="token punctuation">,</span> cmd<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">//进程已经成为无终端的会话首进程,但它可以重新申请打开一个控制终端（因为会话首进程能与控制终端建立连接）</span>
	<span class="token comment">//所以fork子进程，终止父进程，这样子进程不是会话首进程，就不能与终端建立连接，来获得控制终端</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>pid <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token function">err_quit</span><span class="token punctuation">(</span><span class="token string">&quot;%s: can&#39;t fork&quot;</span><span class="token punctuation">,</span> cmd<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">/* parent 终止父进程 */</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">/*
	 * Change the current working directory to the root so
	 * we won&#39;t prevent file systems from being unmounted.
	 * 更改工作目录，如果父进程的工作目录可卸载那就出问题了
	 */</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">chdir</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token function">err_quit</span><span class="token punctuation">(</span><span class="token string">&quot;%s: can&#39;t change directory to /&quot;</span><span class="token punctuation">,</span> cmd<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">/*
	 * Close all open file descriptors.
	 * 关闭所以fd
	 */</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>rl<span class="token punctuation">.</span>rlim_max <span class="token operator">==</span> RLIM_INFINITY<span class="token punctuation">)</span>
		rl<span class="token punctuation">.</span>rlim_max <span class="token operator">=</span> <span class="token number">1024</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> rl<span class="token punctuation">.</span>rlim_max<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
		<span class="token function">close</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">/*
	 * Attach file descriptors 0, 1, and 2 to /dev/null.
	 * 将fd 0，1，2 指向/dev/null
	 */</span>
	fd0 <span class="token operator">=</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;/dev/null&quot;</span><span class="token punctuation">,</span> O_RDWR<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//fd 应该是0</span>
	fd1 <span class="token operator">=</span> <span class="token function">dup</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//fd1 应该是1</span>
	fd2 <span class="token operator">=</span> <span class="token function">dup</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//fd2 应该是2</span>

	<span class="token comment">/*
	 * Initialize the log file.
	 *
	 */</span>
	<span class="token function">openlog</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> LOG_CONS<span class="token punctuation">,</span> LOG_DAEMON<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>fd0 <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">||</span> fd1 <span class="token operator">!=</span> <span class="token number">1</span> <span class="token operator">||</span> fd2 <span class="token operator">!=</span> <span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">syslog</span><span class="token punctuation">(</span>LOG_ERR<span class="token punctuation">,</span> <span class="token string">&quot;unexpected file descriptors %d %d %d&quot;</span><span class="token punctuation">,</span>
			   fd0<span class="token punctuation">,</span> fd1<span class="token punctuation">,</span> fd2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">daemonize</span><span class="token punctuation">(</span><span class="token string">&quot;ll&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[e];function o(i,l){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","守护进程.html.vue"]]);export{r as default};
