import{_ as a,W as n,X as s,a0 as e}from"./framework-1046fca1.js";const i={},t=e(`<h1 id="第九章-进程关系" tabindex="-1"><a class="header-anchor" href="#第九章-进程关系" aria-hidden="true">#</a> 第九章 进程关系</h1><h2 id="终端登入" tabindex="-1"><a class="header-anchor" href="#终端登入" aria-hidden="true">#</a> 终端登入</h2><h3 id="bsd" tabindex="-1"><a class="header-anchor" href="#bsd" aria-hidden="true">#</a> bsd</h3><p>当系统自举时，内核创建进程 ID 为 1 的进程，也就是 init 进程。init 进程使系统进入多用户模式。init 读取文件/etc/ttys，对每一个允许登录的终端 设备，init 调用一次 fork，它所生成的子进程则 exec getty 程序</p><p>getty 对终端设备调用 open 函数，以读、写方式将终端打开</p><p>一旦设备被打 开，则文件描述符 0、1、2 就被设置到该设备</p><p>然后 getty 输出“login: ”之类的信息，并等待用户键入用户名</p><p>login类似执行：execle(&quot;/bin/login&quot;, &quot;login&quot;, &quot;-p&quot;, username, (char *)0, envp);</p><h3 id="mac-os-x" tabindex="-1"><a class="header-anchor" href="#mac-os-x" aria-hidden="true">#</a> mac os x</h3><p>部分地基于 FreeBSD，但是有不同如下</p><p>init 的工作是由 launchd 完成的</p><p>一开始提供的就是图形终端</p><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h3><p>类似BSD</p><p>主要区别在于说明终端配置的方式</p><h3 id="solaris" tabindex="-1"><a class="header-anchor" href="#solaris" aria-hidden="true">#</a> solaris</h3><p>两种方式：</p><p>getty 方式，这与前面对 BSD 终端登录的说明一样，用于控制台</p><p>ttymon 登录，这是 SVR4 引入的一种新特性，用于 其他终端的登录</p><h2 id="网络登录" tabindex="-1"><a class="header-anchor" href="#网络登录" aria-hidden="true">#</a> 网络登录</h2><p>区别于串行终端登入至系统，不是点对点</p><h3 id="bsd-1" tabindex="-1"><a class="header-anchor" href="#bsd-1" aria-hidden="true">#</a> bsd</h3><p>inetd 等待 TCP/IP 连接请求到达主机，而当一个连接请求到达时，它执行一次 fork，然后生成的子进程 exec 适当的程序</p><h2 id="mac-os-x-1" tabindex="-1"><a class="header-anchor" href="#mac-os-x-1" aria-hidden="true">#</a> mac os x</h2><p>telnet 守护进程是从 launchd 运行的</p><h3 id="linux-1" tabindex="-1"><a class="header-anchor" href="#linux-1" aria-hidden="true">#</a> Linux</h3><h3 id="solaris-1" tabindex="-1"><a class="header-anchor" href="#solaris-1" aria-hidden="true">#</a> solaris</h3><h2 id="进程组" tabindex="-1"><a class="header-anchor" href="#进程组" aria-hidden="true">#</a> 进程组</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token class-name">pid_t</span> <span class="token function">getpgrp</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">pid_t</span> <span class="token function">getpgid</span><span class="token punctuation">(</span><span class="token class-name">pid_t</span> pid<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">getpgid</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">getpgrp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setpgid</span><span class="token punctuation">(</span><span class="token class-name">pid_t</span> pid<span class="token punctuation">,</span><span class="token class-name">pid_t</span> pgid<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//pid 进程的进程组 ID 设置为 pgid</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果这两个参数相等，则由 pid 指定的 进程变成进程组组长</p><p>如果 pid 是 0，则使用调用者的进程 ID 用作进程组 ID</p><p>如果 pgid 是 0，则由 pid 指定的进程 ID 用作进程组 ID</p><h2 id="会话" tabindex="-1"><a class="header-anchor" href="#会话" aria-hidden="true">#</a> 会话</h2><p>shell 的管道将几个进程编成一组的</p><p>进程调用setsid建立一个新会话</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token class-name">pid_t</span> <span class="token function">setsid</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>不是进程组组长，那么此函数会创建一个新会话：</p><ol><li>该进程变成新进程组组长进程</li><li>新会话的会话首进程，这个进程ID也是进程组ID，也是会话ID</li><li>如果在调用 setsid 之前该进程有一个 控制终端，那么这种联系也被切断</li></ol><p>是进程组组长，那么此函数返回出错</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token class-name">pid_t</span> <span class="token function">getsid</span><span class="token punctuation">(</span><span class="token class-name">pid_t</span> pid<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回会话首进程的进程组 ID</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="控制终端" tabindex="-1"><a class="header-anchor" href="#控制终端" aria-hidden="true">#</a> 控制终端</h2><p>一个会话可以有一个终端</p><p>建立与控制终端连接的会话首进程被称为控制进程</p><p>一个会话中几个进程组：一个前台进程组加多个后台进程组</p><h2 id="tcgetpgrp-tcsetpgrp-tcgetsid" tabindex="-1"><a class="header-anchor" href="#tcgetpgrp-tcsetpgrp-tcgetsid" aria-hidden="true">#</a> tcgetpgrp,tcsetpgrp,tcgetsid</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token class-name">pid_t</span> <span class="token function">tcgetpgrp</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回前台进程组 ID，它与在 fd 上打开的终端相关联</span>
<span class="token keyword">int</span> <span class="token function">tcsetpgrp</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">,</span><span class="token class-name">pid_t</span> pgrpid<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//fg %1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pgid 等价于 pgrp</p><h2 id="作业控制" tabindex="-1"><a class="header-anchor" href="#作业控制" aria-hidden="true">#</a> 作业控制</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>中断字符 Ctrl + c  SIGINT
退出字符 Ctrl + \\  SIGQUIT
挂起字符 Ctrl + z  SIGTSTP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后台的读 SIGTTIN 写 SIGTTOU 继续信号 SIGCONT</p><p>SIGINT</p><p>SIGTERM</p><p>SIGSTOP</p><p>SIGTSTP</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ps -o pid,ppid,pgid,sid,tpgid,comm

1. PIDTYPE_PID   pid       进程的PID
2. PIDTYPE_TGID  tgid      线程组领头进程的PID
3. PIDTYPE_PGID  pgrp/pgid 进程组领头进程的PID
4. PIDTYPE_SID   sid       会话领头进程的PID

tpgid前台进程组
当tpgid=pgid时说明此进程组是前台进程组
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="孤儿进程组" tabindex="-1"><a class="header-anchor" href="#孤儿进程组" aria-hidden="true">#</a> 孤儿进程组</h2><p>孤儿进程：一个父进程退出，而它的一个或多个子进程还在运行，那么那些子进程将成为孤儿进程。孤儿进程将被init进程(进程号为1)所收养，并由init进程对它们完成状态收集工作。</p><p>僵尸进程：一个进程使用fork创建子进程，如果子进程退出，而父进程并没有调用wait或waitpid获取子进程的状态信息，那么子进程的进程描述符仍然保存在系统中。这种进程称之为僵死进程。</p>`,58),p=[t];function d(c,l){return n(),s("div",null,p)}const o=a(i,[["render",d],["__file","第九章 进程关系.html.vue"]]);export{o as default};
