import{_ as n,W as s,X as a,a0 as e}from"./framework-1046fca1.js";const t={},i=e(`<h1 id="第十三章-守护进程" tabindex="-1"><a class="header-anchor" href="#第十三章-守护进程" aria-hidden="true">#</a> 第十三章 守护进程</h1><h2 id="守护进程的特征" tabindex="-1"><a class="header-anchor" href="#守护进程的特征" aria-hidden="true">#</a> 守护进程的特征</h2><h2 id="编程规则" tabindex="-1"><a class="header-anchor" href="#编程规则" aria-hidden="true">#</a> 编程规则</h2><ol><li><p>首先要做的是调用 umask 将文件模式创建屏蔽字设置为一个已知值</p></li><li><p>调用 fork，然后使父进程 exit</p></li><li><p>调用setsid 创建一个新会话：使调用进程：（a）成为</p><p>新会话的首进程，（b）成为一个新进程组的组长进程，（c）没有控制终端</p></li><li><p>将当前工作目录更改为根目录</p></li><li><p>关闭不再需要的文件描述符</p></li><li><p>某些守护进程打开/dev/null 使其具有文件描述符 0、1 和2</p></li></ol><h2 id="出错记录" tabindex="-1"><a class="header-anchor" href="#出错记录" aria-hidden="true">#</a> 出错记录</h2><p>3 种产生日志消息的方法</p><ol><li>内核例程可以调用 log 函数</li><li>大多数用户进程（守护进程）调用 syslog(3)函数来产生日志消息</li><li>无论一个用户进程是在此主机上，还是在通过 TCP/IP 网络连接到此主机的其他主机上， 都可将日志消息发向 UDP 端口 514</li></ol><p>syslogd 守护进程读取所有 3 种格式的日志消息</p><ol><li>紧急消息可发送至系统管理员（若已登录）</li><li>警告消息则可记录到一个文件中</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;syslog.h&gt;</span></span>
<span class="token keyword">void</span> <span class="token function">openlog</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>ident<span class="token punctuation">,</span> <span class="token keyword">int</span> option<span class="token punctuation">,</span> <span class="token keyword">int</span> facility<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">syslog</span><span class="token punctuation">(</span><span class="token keyword">int</span> priority<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>format<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">closelog</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">setlogmask</span><span class="token punctuation">(</span><span class="token keyword">int</span> maskpri<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;syslog.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdarg.h&gt;</span></span>
<span class="token keyword">void</span> <span class="token function">vsyslog</span><span class="token punctuation">(</span><span class="token keyword">int</span> priority<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>format<span class="token punctuation">,</span> va_list arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单实例守护进程" tabindex="-1"><a class="header-anchor" href="#单实例守护进程" aria-hidden="true">#</a> 单实例守护进程</h2><p>lockfile(fd)</p><h2 id="守护进程的惯例" tabindex="-1"><a class="header-anchor" href="#守护进程的惯例" aria-hidden="true">#</a> 守护进程的惯例</h2><p>若守护进程使用锁文件，那么该文件通常存储在/var/run 目录中(可能需要具有超级用户权限才能在此目录下创建文件)，锁文件的名字通常是 name.pid，其中，name 是该守护进程或服务的名字。例如，cron 守护进程锁文件的名 字是/var/run/crond.pid</p><p>若守护进程支持配置选项，那么配置文件通常存放在/etc 目录中。配置文件的名字通常 是 name.conf，其中，name 是该守护进程或服务的名字</p><p>守护进程可用命令行启动， 但通常它们是由系统初始化脚本之一（/etc/rc<em>或 /etc/init.d/</em>）启动的。如果在守护进程终止时，应当自动地重新启动它，则我们可 在/etc/inittab 中为该守护进程包括 respawn 记录项，这样，init 就将重新启动该 守护进程。下面是centos7的inttab文件，已被取代</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># inittab is no longer used when using systemd.</span>
<span class="token comment">#</span>
<span class="token comment"># ADDING CONFIGURATION HERE WILL HAVE NO EFFECT ON YOUR SYSTEM.</span>
<span class="token comment">#</span>
<span class="token comment"># Ctrl-Alt-Delete is handled by /usr/lib/systemd/system/ctrl-alt-del.target</span>
<span class="token comment">#</span>
<span class="token comment"># systemd uses &#39;targets&#39; instead of runlevels. By default, there are two main targets:</span>
<span class="token comment">#</span>
<span class="token comment"># multi-user.target: analogous to runlevel 3</span>
<span class="token comment"># graphical.target: analogous to runlevel 5</span>
<span class="token comment">#</span>
<span class="token comment"># To view current default target, run:</span>
<span class="token comment"># systemctl get-default</span>
<span class="token comment">#</span>
<span class="token comment"># To set a default target, run:</span>
<span class="token comment"># systemctl set-default TARGET.target</span>
<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="客户进程-服务器进程模型" tabindex="-1"><a class="header-anchor" href="#客户进程-服务器进程模型" aria-hidden="true">#</a> 客户进程-服务器进程模型</h2>`,19),l=[i];function o(c,p){return s(),a("div",null,l)}const r=n(t,[["render",o],["__file","第十三章 守护进程.html.vue"]]);export{r as default};
