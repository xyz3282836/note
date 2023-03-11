const n=JSON.parse(`{"key":"v-9dc54574","path":"/apue/%E5%AE%88%E6%8A%A4%E8%BF%9B%E7%A8%8B.html","title":"守护进程","lang":"zh-CN","frontmatter":{"description":"守护进程 #include \\"apue.h\\" #include &lt;syslog.h&gt; #include &lt;fcntl.h&gt; #include &lt;sys/resource.h&gt; void daemonize(const char *cmd) { \\tint i, fd0, fd1, fd2; \\tpid_t pid; \\tstruct rlimit rl; \\tstruct sigaction sa; \\t/* \\t * Clear file creation mask. \\t * 清除mask \\t */ \\tumask(0); \\t/* \\t * Get maximum number of file descriptors. \\t * 获得最大fd \\t */ \\tif (getrlimit(RLIMIT_NOFILE, &amp;rl) &lt; 0) \\t\\terr_quit(\\"%s: can't get file limit\\", cmd); \\t/* \\t * Become a session leader to lose controlling TTY. \\t * 父进程关闭，子进程setsid \\t * 子进程继承了父进程的进程组 ID，但获得了一个新的进程 ID，这就保证了子进程不是一个 进程组的组长进程，setsid 调用的先决条件 \\t * \\t */ \\tif ((pid = fork()) &lt; 0) \\t\\terr_quit(\\"%s: can't fork\\", cmd); \\telse if (pid != 0) /* parent */ \\t\\texit(0); \\t/* \\t * 该进程不能是进程组组长进程 \\t * setsid后发生 a.新会话的首进程，b.成为一个新进程组的组长进程，c.没有控制终端。(如果在调用setsid前，该进程有控制终端，那么与该终端的联系被解除) \\t */ \\tsetsid(); \\t/* \\t * Ensure future opens won't allocate controlling TTYs. \\t * 忽略hup挂起信号 \\t */ \\tsa.sa_handler = SIG_IGN; \\tsigemptyset(&amp;sa.sa_mask); \\tsa.sa_flags = 0; \\tif (sigaction(SIGHUP, &amp;sa, NULL) &lt; 0) \\t\\terr_quit(\\"%s: can't ignore SIGHUP\\", cmd); \\t//进程已经成为无终端的会话首进程,但它可以重新申请打开一个控制终端（因为会话首进程能与控制终端建立连接） \\t//所以fork子进程，终止父进程，这样子进程不是会话首进程，就不能与终端建立连接，来获得控制终端 \\tif ((pid = fork()) &lt; 0) \\t\\terr_quit(\\"%s: can't fork\\", cmd); \\telse if (pid != 0) /* parent 终止父进程 */ \\t\\texit(0); \\t/* \\t * Change the current working directory to the root so \\t * we won't prevent file systems from being unmounted. \\t * 更改工作目录，如果父进程的工作目录可卸载那就出问题了 \\t */ \\tif (chdir(\\"/\\") &lt; 0) \\t\\terr_quit(\\"%s: can't change directory to /\\", cmd); \\t/* \\t * Close all open file descriptors. \\t * 关闭所以fd \\t */ \\tif (rl.rlim_max == RLIM_INFINITY) \\t\\trl.rlim_max = 1024; \\tfor (i = 0; i &lt; rl.rlim_max; i++) \\t\\tclose(i); \\t/* \\t * Attach file descriptors 0, 1, and 2 to /dev/null. \\t * 将fd 0，1，2 指向/dev/null \\t */ \\tfd0 = open(\\"/dev/null\\", O_RDWR);//fd 应该是0 \\tfd1 = dup(0);//fd1 应该是1 \\tfd2 = dup(0); //fd2 应该是2 \\t/* \\t * Initialize the log file. \\t * \\t */ \\topenlog(cmd, LOG_CONS, LOG_DAEMON); \\tif (fd0 != 0 || fd1 != 1 || fd2 != 2) \\t{ \\t\\tsyslog(LOG_ERR, \\"unexpected file descriptors %d %d %d\\", \\t\\t\\t fd0, fd1, fd2); \\t\\texit(1); \\t} \\tprintf(\\"end\\"); } int main(int argc, char const *argv[]) { \\tdaemonize(\\"ll\\"); \\treturn 0; }","head":[["meta",{"property":"og:url","content":"https://www.ruizhou.cf/apue/%E5%AE%88%E6%8A%A4%E8%BF%9B%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"rz文档"}],["meta",{"property":"og:title","content":"守护进程"}],["meta",{"property":"og:description","content":"守护进程 #include \\"apue.h\\" #include &lt;syslog.h&gt; #include &lt;fcntl.h&gt; #include &lt;sys/resource.h&gt; void daemonize(const char *cmd) { \\tint i, fd0, fd1, fd2; \\tpid_t pid; \\tstruct rlimit rl; \\tstruct sigaction sa; \\t/* \\t * Clear file creation mask. \\t * 清除mask \\t */ \\tumask(0); \\t/* \\t * Get maximum number of file descriptors. \\t * 获得最大fd \\t */ \\tif (getrlimit(RLIMIT_NOFILE, &amp;rl) &lt; 0) \\t\\terr_quit(\\"%s: can't get file limit\\", cmd); \\t/* \\t * Become a session leader to lose controlling TTY. \\t * 父进程关闭，子进程setsid \\t * 子进程继承了父进程的进程组 ID，但获得了一个新的进程 ID，这就保证了子进程不是一个 进程组的组长进程，setsid 调用的先决条件 \\t * \\t */ \\tif ((pid = fork()) &lt; 0) \\t\\terr_quit(\\"%s: can't fork\\", cmd); \\telse if (pid != 0) /* parent */ \\t\\texit(0); \\t/* \\t * 该进程不能是进程组组长进程 \\t * setsid后发生 a.新会话的首进程，b.成为一个新进程组的组长进程，c.没有控制终端。(如果在调用setsid前，该进程有控制终端，那么与该终端的联系被解除) \\t */ \\tsetsid(); \\t/* \\t * Ensure future opens won't allocate controlling TTYs. \\t * 忽略hup挂起信号 \\t */ \\tsa.sa_handler = SIG_IGN; \\tsigemptyset(&amp;sa.sa_mask); \\tsa.sa_flags = 0; \\tif (sigaction(SIGHUP, &amp;sa, NULL) &lt; 0) \\t\\terr_quit(\\"%s: can't ignore SIGHUP\\", cmd); \\t//进程已经成为无终端的会话首进程,但它可以重新申请打开一个控制终端（因为会话首进程能与控制终端建立连接） \\t//所以fork子进程，终止父进程，这样子进程不是会话首进程，就不能与终端建立连接，来获得控制终端 \\tif ((pid = fork()) &lt; 0) \\t\\terr_quit(\\"%s: can't fork\\", cmd); \\telse if (pid != 0) /* parent 终止父进程 */ \\t\\texit(0); \\t/* \\t * Change the current working directory to the root so \\t * we won't prevent file systems from being unmounted. \\t * 更改工作目录，如果父进程的工作目录可卸载那就出问题了 \\t */ \\tif (chdir(\\"/\\") &lt; 0) \\t\\terr_quit(\\"%s: can't change directory to /\\", cmd); \\t/* \\t * Close all open file descriptors. \\t * 关闭所以fd \\t */ \\tif (rl.rlim_max == RLIM_INFINITY) \\t\\trl.rlim_max = 1024; \\tfor (i = 0; i &lt; rl.rlim_max; i++) \\t\\tclose(i); \\t/* \\t * Attach file descriptors 0, 1, and 2 to /dev/null. \\t * 将fd 0，1，2 指向/dev/null \\t */ \\tfd0 = open(\\"/dev/null\\", O_RDWR);//fd 应该是0 \\tfd1 = dup(0);//fd1 应该是1 \\tfd2 = dup(0); //fd2 应该是2 \\t/* \\t * Initialize the log file. \\t * \\t */ \\topenlog(cmd, LOG_CONS, LOG_DAEMON); \\tif (fd0 != 0 || fd1 != 1 || fd2 != 2) \\t{ \\t\\tsyslog(LOG_ERR, \\"unexpected file descriptors %d %d %d\\", \\t\\t\\t fd0, fd1, fd2); \\t\\texit(1); \\t} \\tprintf(\\"end\\"); } int main(int argc, char const *argv[]) { \\tdaemonize(\\"ll\\"); \\treturn 0; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-11T14:36:50.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-11T14:36:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"守护进程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-11T14:36:50.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1678545410000,"updatedTime":1678545410000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":1}]},"readingTime":{"minutes":1.8,"words":541},"filePathRelative":"apue/守护进程.md","localizedDate":"2023年3月11日","excerpt":"<h1> 守护进程</h1>\\n<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">\\"apue.h\\"</span></span>\\n<span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;syslog.h&gt;</span></span>\\n<span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;fcntl.h&gt;</span></span>\\n<span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;sys/resource.h&gt;</span></span>\\n\\n<span class=\\"token keyword\\">void</span> <span class=\\"token function\\">daemonize</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">const</span> <span class=\\"token keyword\\">char</span> <span class=\\"token operator\\">*</span>cmd<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">int</span> i<span class=\\"token punctuation\\">,</span> fd0<span class=\\"token punctuation\\">,</span> fd1<span class=\\"token punctuation\\">,</span> fd2<span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token class-name\\">pid_t</span> pid<span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">struct</span> <span class=\\"token class-name\\">rlimit</span> rl<span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">struct</span> <span class=\\"token class-name\\">sigaction</span> sa<span class=\\"token punctuation\\">;</span>\\n\\n\\t<span class=\\"token comment\\">/*\\n\\t * Clear file creation mask.\\n\\t * 清除mask\\n\\t */</span>\\n\\t<span class=\\"token function\\">umask</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n\\t<span class=\\"token comment\\">/*\\n\\t * Get maximum number of file descriptors.\\n\\t * 获得最大fd\\n\\t */</span>\\n\\t<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token function\\">getrlimit</span><span class=\\"token punctuation\\">(</span>RLIMIT_NOFILE<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">&amp;</span>rl<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span>\\n\\t\\t<span class=\\"token function\\">err_quit</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%s: can't get file limit\\"</span><span class=\\"token punctuation\\">,</span> cmd<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n\\t<span class=\\"token comment\\">/*\\n\\t * Become a session leader to lose controlling TTY.\\n\\t * 父进程关闭，子进程setsid\\n\\t * 子进程继承了父进程的进程组 ID，但获得了一个新的进程 ID，这就保证了子进程不是一个 进程组的组长进程，setsid 调用的先决条件\\n\\t *\\n\\t */</span>\\n\\t<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span>pid <span class=\\"token operator\\">=</span> <span class=\\"token function\\">fork</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span>\\n\\t\\t<span class=\\"token function\\">err_quit</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%s: can't fork\\"</span><span class=\\"token punctuation\\">,</span> cmd<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>pid <span class=\\"token operator\\">!=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">/* parent */</span>\\n\\t\\t<span class=\\"token function\\">exit</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n\\t<span class=\\"token comment\\">/*\\n\\t * 该进程不能是进程组组长进程\\n\\t * setsid后发生 a.新会话的首进程，b.成为一个新进程组的组长进程，c.没有控制终端。(如果在调用setsid前，该进程有控制终端，那么与该终端的联系被解除)\\n\\t */</span>\\n\\t<span class=\\"token function\\">setsid</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n\\t<span class=\\"token comment\\">/*\\n\\t * Ensure future opens won't allocate controlling TTYs.\\n\\t * 忽略hup挂起信号\\n\\t */</span>\\n\\tsa<span class=\\"token punctuation\\">.</span>sa_handler <span class=\\"token operator\\">=</span> SIG_IGN<span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">sigemptyset</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">&amp;</span>sa<span class=\\"token punctuation\\">.</span>sa_mask<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\tsa<span class=\\"token punctuation\\">.</span>sa_flags <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token function\\">sigaction</span><span class=\\"token punctuation\\">(</span>SIGHUP<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">&amp;</span>sa<span class=\\"token punctuation\\">,</span> <span class=\\"token constant\\">NULL</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span>\\n\\t\\t<span class=\\"token function\\">err_quit</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%s: can't ignore SIGHUP\\"</span><span class=\\"token punctuation\\">,</span> cmd<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n\\t<span class=\\"token comment\\">//进程已经成为无终端的会话首进程,但它可以重新申请打开一个控制终端（因为会话首进程能与控制终端建立连接）</span>\\n\\t<span class=\\"token comment\\">//所以fork子进程，终止父进程，这样子进程不是会话首进程，就不能与终端建立连接，来获得控制终端</span>\\n\\t<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span>pid <span class=\\"token operator\\">=</span> <span class=\\"token function\\">fork</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span>\\n\\t\\t<span class=\\"token function\\">err_quit</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%s: can't fork\\"</span><span class=\\"token punctuation\\">,</span> cmd<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>pid <span class=\\"token operator\\">!=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">/* parent 终止父进程 */</span>\\n\\t\\t<span class=\\"token function\\">exit</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n\\t<span class=\\"token comment\\">/*\\n\\t * Change the current working directory to the root so\\n\\t * we won't prevent file systems from being unmounted.\\n\\t * 更改工作目录，如果父进程的工作目录可卸载那就出问题了\\n\\t */</span>\\n\\t<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token function\\">chdir</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"/\\"</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span>\\n\\t\\t<span class=\\"token function\\">err_quit</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%s: can't change directory to /\\"</span><span class=\\"token punctuation\\">,</span> cmd<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n\\t<span class=\\"token comment\\">/*\\n\\t * Close all open file descriptors.\\n\\t * 关闭所以fd\\n\\t */</span>\\n\\t<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>rl<span class=\\"token punctuation\\">.</span>rlim_max <span class=\\"token operator\\">==</span> RLIM_INFINITY<span class=\\"token punctuation\\">)</span>\\n\\t\\trl<span class=\\"token punctuation\\">.</span>rlim_max <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1024</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span>i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> rl<span class=\\"token punctuation\\">.</span>rlim_max<span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span>\\n\\t\\t<span class=\\"token function\\">close</span><span class=\\"token punctuation\\">(</span>i<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n\\t<span class=\\"token comment\\">/*\\n\\t * Attach file descriptors 0, 1, and 2 to /dev/null.\\n\\t * 将fd 0，1，2 指向/dev/null\\n\\t */</span>\\n\\tfd0 <span class=\\"token operator\\">=</span> <span class=\\"token function\\">open</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"/dev/null\\"</span><span class=\\"token punctuation\\">,</span> O_RDWR<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//fd 应该是0</span>\\n\\tfd1 <span class=\\"token operator\\">=</span> <span class=\\"token function\\">dup</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//fd1 应该是1</span>\\n\\tfd2 <span class=\\"token operator\\">=</span> <span class=\\"token function\\">dup</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">//fd2 应该是2</span>\\n\\n\\t<span class=\\"token comment\\">/*\\n\\t * Initialize the log file.\\n\\t *\\n\\t */</span>\\n\\t<span class=\\"token function\\">openlog</span><span class=\\"token punctuation\\">(</span>cmd<span class=\\"token punctuation\\">,</span> LOG_CONS<span class=\\"token punctuation\\">,</span> LOG_DAEMON<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>fd0 <span class=\\"token operator\\">!=</span> <span class=\\"token number\\">0</span> <span class=\\"token operator\\">||</span> fd1 <span class=\\"token operator\\">!=</span> <span class=\\"token number\\">1</span> <span class=\\"token operator\\">||</span> fd2 <span class=\\"token operator\\">!=</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token function\\">syslog</span><span class=\\"token punctuation\\">(</span>LOG_ERR<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"unexpected file descriptors %d %d %d\\"</span><span class=\\"token punctuation\\">,</span>\\n\\t\\t\\t   fd0<span class=\\"token punctuation\\">,</span> fd1<span class=\\"token punctuation\\">,</span> fd2<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t<span class=\\"token function\\">exit</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"end\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">int</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> argc<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">char</span> <span class=\\"token keyword\\">const</span> <span class=\\"token operator\\">*</span>argv<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token function\\">daemonize</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"ll\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
