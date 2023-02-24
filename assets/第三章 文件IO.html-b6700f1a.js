import{_ as n,V as s,W as a,$ as e}from"./framework-7d796c00.js";const p={},t=e(`<h1 id="第三章-文件io" tabindex="-1"><a class="header-anchor" href="#第三章-文件io" aria-hidden="true">#</a> 第三章 文件IO</h1><p>I/O函数就是打开文件，读文件，写文件，在绝大数unix系统中只需用到5个函数open、read、write、lseek、close。</p><p>不同缓存长度对read和write有影响。unbuffered I/O（不带缓冲的I/O）与后面标准I/O函数</p><p>所谓不带缓存就是说read和write都调用内核的一个系统调用。</p><p>不带缓冲的I/O不是ISO C的组成部分，是POSIX.1核Single UNIX Specification的组成部分</p><h3 id="文件描述符-fd" tabindex="-1"><a class="header-anchor" href="#文件描述符-fd" aria-hidden="true">#</a> 文件描述符-fd</h3><p>对于内核而言，打开的文件都是通过fd引用</p><p>非负整数</p><p>打开或者创建文件时，内核向进程返回一个fd</p><p>POSIX.1 幻数0、1、2被标准化，STDIN_FILENO、STDOUT_FILENO、STDERR_FILENO，这些常量通常写在&lt;unistd.h&gt;</p><p>fd的范围 0~OPEN_MAX-1，现在基本没啥限制</p><h2 id="open和openat" tabindex="-1"><a class="header-anchor" href="#open和openat" aria-hidden="true">#</a> open和openat</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>path<span class="token punctuation">,</span><span class="token keyword">int</span> oflag<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回fd</span>
<span class="token comment">/*
oflag:（在&lt;fcntl.h&gt;)
O_RDONLY 0
O_WRONLY 1
O_RDWR   2
O_EXEC
O_SEARCH（应用与目录，其实就是打开目录时验证搜索权限,就是后续对返回的fd进行操作就不需要再次检查对该目录的搜索权限，不过书中涉及的操作系统都不支持这个参数，不用记了）
----
可选，也就是第三个参数及以上
O_APPEND
O_CLOEXEC
O_CEEAT
O_DIRECTOR
O_EXCL 如果同时指定O_CREAT，如文件已存在则出错，其实用途就是测试一个文件是否存在，而且原子操作
O_NOCTTY path是终端设备的情况
O_NONBLOCK 后面说吧
O_SYNC 每次write都要等待物理上I/O操作完成，就是文件+属性都更新后
O_TRUNC 文件存在而且写或读写打开，那么将其长度截断为0
O_TTY_INIT 又是终端，有TTY
O_DSYNC 和sync区别就是，文件更新后，不用等到属性也更新后才去write
O_RSYNC 直到所有进程对文件同一部分挂起的写操作完成，在这之前所有进程对这个fd进行read操作等待，就是等
*/</span>

<span class="token keyword">int</span> <span class="token function">openat</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">,</span><span class="token keyword">const</span> <span class="token operator">*</span>path<span class="token punctuation">,</span><span class="token keyword">int</span> oflag<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回fd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>open与openat三种可能性，区别就是fd引起的</p><ul><li>path为绝对路径，那么fd就被忽略，两函数相当了</li><li>path是相对路径，fd是相对路径在文件系统中的开始地址（fd需要相对路径获得，感觉在openat之前用open获取到了这个fd）</li><li>path相对路径，fd是AT_FDCWD，两者又相当了</li></ul><p>openat是POSIX.1加的，不属于ISO C，主要为了线程可以用相对路径打开，因为一个进程下的多个不同线程很难在统一时间工作在不同目录中</p><p>还可以避免TOCTTOU，time-of-check-to-time-of-use，其实就是2依赖1，1执行后2执行，但是要上中间1的涉及的文件变了，那么2就很难讲了，其实就是原子性</p><p>小ps：文件名过长，是默默截断不报错还是报错，是个历史问题，不同系统处理方式不同，但是POSIX.1有个常量POSIX_NO_TRUNC(trunc出现了，上面oflag可选参数也有这个单词)，但是现在大多数系统文件名255最大长度，通常没谁蛋疼超过这个，所有很少会有这个问题 2018-4-3 23:11</p><h2 id="文件i-o" tabindex="-1"><a class="header-anchor" href="#文件i-o" aria-hidden="true">#</a> 文件I/O</h2><p>I/O函数就是打开文件，读文件，写文件，在绝大数unix系统中只需用到5个函数open、read、write、lseek、close。</p><p>不同缓存长度对read和write有影响。unbuffered I/O（不带缓冲的I/O）与后面标准I/O函数</p><p>所谓不带缓存就是说read和write都调用内核的一个系统调用。</p><p>不带缓冲的I/O不是ISO C的组成部分，是POSIX.1核Single UNIX Specification的组成部分</p><h3 id="文件描述符-fd-1" tabindex="-1"><a class="header-anchor" href="#文件描述符-fd-1" aria-hidden="true">#</a> 文件描述符-fd</h3><p>对于内核而言，打开的文件都是通过fd引用</p><p>非负整数</p><p>打开或者创建文件时，内核向进程返回一个fd</p><p>POSIX.1 幻数0、1、2被标准化，STDIN_FILENO、STDOUT_FILENO、STDERR_FILENO，这些常量通常写在&lt;unistd.h&gt;</p><p>fd的范围 0~OPEN_MAX-1，现在基本没啥限制</p><h2 id="open和openat-1" tabindex="-1"><a class="header-anchor" href="#open和openat-1" aria-hidden="true">#</a> open和openat</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;fcntl.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>path<span class="token punctuation">,</span><span class="token keyword">int</span> oflag<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回fd</span>
<span class="token comment">/*
oflag:（在&lt;fcntl.h&gt;)
O_RDONLY 0
O_WRONLY 1
O_RDWR   2
O_EXEC
O_SEARCH（应用与目录，其实就是打开目录时验证搜索权限,就是后续对返回的fd进行操作就不需要再次检查对该目录的搜索权限，不过书中涉及的操作系统都不支持这个参数，不用记了）
----
上面5个只能有一个，下面的可选通过或，比如 O_RDWR|O_APPEND
O_APPEND
O_CLOEXEC 把FD_CLOEXEC常量设置为文件描述符标志
O_CREAT 没有就创建
O_DIRECTOR
O_EXCL 如果同时指定O_CREAT，如文件已存在则出错，其实用途就是测试一个文件是否存在，而且原子操作(也就是测试+创建)
O_NOCTTY path是终端设备的情况
O_NONBLOCK 后面说吧--非阻塞模式
O_SYNC 每次write都要等待物理上I/O操作完成，就是文件+属性都更新后--等待同步写完成
O_TRUNC 有点复杂
O_TTY_INIT 又是终端，有TTY
O_DSYNC 和sync区别就是，文件更新后，不用等到属性也更新后才去write--等待同步写完成
O_RSYNC 直到所有进程对文件同一部分挂起的写操作完成，在这之前所有进程对这个fd进行read操作等待，就是等--同步读和写
*/</span>

<span class="token keyword">int</span> <span class="token function">openat</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">,</span><span class="token keyword">const</span> <span class="token operator">*</span>path<span class="token punctuation">,</span><span class="token keyword">int</span> oflag<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回fd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>open与openat三种可能性，区别就是fd引起的</p><ul><li>path为绝对路径，那么fd就被忽略，两函数相当了</li><li>path是相对路径，fd是相对路径在文件系统中的开始地址（fd需要相对路径获得，感觉在openat之前用open获取到了这个fd）</li><li>path相对路径，fd是AT_FDCWD，两者又相当了</li></ul><p>openat是POSIX.1加的，不属于ISO C，主要为了线程可以用相对路径打开，因为一个进程下的多个不同线程很难在统一时间工作在不同目录中</p><p>还可以避免TOCTTOU，time-of-check-to-time-of-use，其实就是2依赖1，1执行后2执行，但是要上中间1的涉及的文件变了，那么2就很难讲了，其实就是原子性</p><p>小ps：文件名过长，是默默截断不报错还是报错，是个历史问题，不同系统处理方式不同，但是POSIX.1有个常量POSIX_NO_TRUNC(trunc出现了，上面oflag可选参数也有这个单词)，但是现在大多数系统文件名255最大长度，通常没谁蛋疼超过这个，所有很少会有这个问题</p><p>2018-4-3 23:11</p><h2 id="creat" tabindex="-1"><a class="header-anchor" href="#creat" aria-hidden="true">#</a> creat</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;fcntl.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">creat</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>path<span class="token punctuation">,</span><span class="token class-name">mode_t</span> mode<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//等效与</span>
<span class="token keyword">int</span> <span class="token function">open</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span>O_WRONLY<span class="token operator">|</span>O_CREAT<span class="token operator">|</span>O_TRUNC<span class="token punctuation">,</span>mode<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>早期，open只能打开存在的文件</p><p>现在open新版支持了</p><p>creat不足之处在于只能以只写方式打开和创建文件</p><p>如果文件已经存在那么会被截断0</p><h2 id="close" tabindex="-1"><a class="header-anchor" href="#close" aria-hidden="true">#</a> close</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 0成功，-1出错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一个进程终止时，内核自动关闭它所有打开的文件，所有可以利用这一点，不显式</p><h2 id="lseek" tabindex="-1"><a class="header-anchor" href="#lseek" aria-hidden="true">#</a> lseek</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token class-name">off_t</span> <span class="token function">lseek</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">,</span><span class="token class-name">off_t</span> offset<span class="token punctuation">,</span><span class="token keyword">int</span> whence<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
whence:
SEEK_SET 从头开始+offset
SEEK_CUR 从当前开始+offset，为正或负
SEEK_END 为文件末尾+offset，为正或负
*/</span>
od <span class="token operator">-</span>c file<span class="token punctuation">.</span>txt <span class="token comment">// -c是以字符打印文件内容，打印空洞，空洞会显示\\0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当打开一个文件的时候，除非指定<code>O_APPEND</code>，否则该偏移量被设置为0</p><p>空洞不会占用磁盘块</p><p>偏移量，如果off_t 是32位整型，那么文件最大长度就是2^31-1</p><h2 id="read" tabindex="-1"><a class="header-anchor" href="#read" aria-hidden="true">#</a> read</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token class-name">ssize_t</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">,</span><span class="token keyword">void</span> <span class="token operator">*</span>buf<span class="token punctuation">,</span><span class="token class-name">size_t</span> nbytes<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 0表示已读到文件尾</span>
<span class="token comment">/*
经典定义
int read(int fd,char *buf,unsigned nbytes);
为了和ISO C一致才改的
void *表示通用指针
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ssize_t有符号，size_t无符号，和 SSIZE_MAX常量有关</p><h2 id="write" tabindex="-1"><a class="header-anchor" href="#write" aria-hidden="true">#</a> write</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token class-name">ssize_t</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">,</span><span class="token keyword">const</span> <span class="token keyword">void</span> <span class="token operator">*</span>buf<span class="token punctuation">,</span><span class="token class-name">size_t</span> nbytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>出错，要么磁盘写满了，要么超过了一个给定进程的文件长度的限制</p><p>注意，如果打开时指定了O_APPEND，那么每次写操作之前，会追加写</p><h2 id="i-o的效率" tabindex="-1"><a class="header-anchor" href="#i-o的效率" aria-hidden="true">#</a> I/O的效率</h2><p>通常unix的shell提供一种方法，在标准输入打开一个文件读，在标准输出上创建或重写一个文件，这使得程序不必打开输入和输出文件，而且可以使用I/O的重定向功能</p><p>unix系统在进程终止时会自动关闭所有打开的fd</p><p>unix系统内核，对应文本文件和二进制文件没区别</p><p>关于读write的参数buf多少，需要测试</p><p>早期计算机主存是用铁氧体磁芯(ferrite cord)，也是&#39;core dump&#39;词的由来</p><h2 id="文件共享" tabindex="-1"><a class="header-anchor" href="#文件共享" aria-hidden="true">#</a> 文件共享</h2><p>unix支持不同进程间共享打开文件</p><p>内核的所有I/O数据结构有3种</p><ol><li>每个进程都有一个进程表项，包含<strong>fd表</strong>，里面有<strong>fd</strong>、<strong>fd标志</strong>、<strong>指向一个文件表的指针</strong></li><li>文件表，<strong>文件状态标志</strong>（读，写，追加，同步，非阻塞等）、<strong>当前文件偏移量</strong>、<strong>指向该文件v节点的指针</strong></li><li>v节点结构，<strong>文件类型</strong>、<strong>对此文件进行操作函数的指针</strong>、<strong>i节点-索引节点(大多数文件)(当前文件长度)</strong></li></ol><p>ps i节点包含了<strong>文件所有者</strong>、<strong>文件长度</strong>、<strong>指向文件实际数据块在磁盘上的位置指针等</strong>，linux没有使用v节点，而是使用了i节点结构</p><p>文件表各自拥有</p><p>场景：两个独立进程各自打开同一个文件，那么分成各自文件表分开，但是都指向同一个v节点表</p><p>流程：</p><p>write后，文件表中偏移量写入，如果超过当前文件长度，那么会将i节点中当前文件长度设为当前偏移量</p><p>lseek定位到文件尾，和用O_APPEND打开文件是不同的，前者写不会追加写</p><p>fd标志和文件状态标志的作用范围区别，前者只用于一个进程的一个fd，后者应用于所有指向该文件表的任何进程中的fd 2018-4-8 23:55</p><h2 id="原子操作" tabindex="-1"><a class="header-anchor" href="#原子操作" aria-hidden="true">#</a> 原子操作</h2><p>早期unix不支持open的<code>O_APPEND</code></p><p>多个进程同时追加写同一个文件（都有各自的文件表，但是共享同一个v节点），会有问题</p><p><code>O_APPEND</code>提供了原子性，在内核每次写之前，都将偏移量设置到尾端</p><h3 id="原子函数pread和pwrite" tabindex="-1"><a class="header-anchor" href="#原子函数pread和pwrite" aria-hidden="true">#</a> 原子函数pread和pwrite</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token class-name">ssize_t</span> <span class="token function">pread</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">,</span><span class="token keyword">void</span> <span class="token operator">*</span>buf<span class="token punctuation">,</span><span class="token class-name">size_t</span> nbytes<span class="token punctuation">,</span><span class="token class-name">off_t</span> offset<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">sseize_t</span> <span class="token function">pwrite</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">,</span><span class="token keyword">const</span> <span class="token keyword">void</span> <span class="token operator">*</span>buf<span class="token punctuation">,</span><span class="token class-name">size_t</span> nbytes<span class="token punctuation">,</span><span class="token class-name">off_t</span> offset<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相当于先lseek再read/write</p><p>创建一个文件</p><p>open(char,O_RDWR|O_CREAT|O_EXCL)，原子操作：测试+新建文件</p><h2 id="dup和dup2" tabindex="-1"><a class="header-anchor" href="#dup和dup2" aria-hidden="true">#</a> dup和dup2</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">dup</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">dup2</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">,</span><span class="token keyword">int</span> fd2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
<span class="token keyword">int</span> fd1<span class="token punctuation">,</span> fd2<span class="token punctuation">,</span> fd3<span class="token punctuation">,</span> fd4<span class="token punctuation">;</span>
fd1 <span class="token operator">=</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;f1&quot;</span><span class="token punctuation">,</span> O_RDWR<span class="token punctuation">)</span><span class="token punctuation">;</span>
fd2 <span class="token operator">=</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;f2&quot;</span><span class="token punctuation">,</span> O_RDWR<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两函数都可以复制一个现有的fd，进程表两条记录的fd都指向同一个文件表（注意和上面两个独立进程打开同一个文件的区别，同一个进程的文件表会共用）</p><p>open同一个文件两次返回不同fd，那么也会有不同文件表(每次调用open函数都会分配一个新的文件表)</p><h2 id="sync-fsync和fdatasync" tabindex="-1"><a class="header-anchor" href="#sync-fsync和fdatasync" aria-hidden="true">#</a> sync,fsync和fdatasync</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">fsync</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">fdatasync</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">)</span><span class="token punctuation">;</span>
以上两个成功返回<span class="token number">0</span>
<span class="token keyword">void</span> <span class="token function">sync</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sync只是将写入任务排入队列就返回，不会阻塞</p><p>系统守护进程update一般30s调用sync</p><p>fsync等写到磁盘(data+atrribute)才会结束</p><p>fdatasync等写到磁盘(data)才会结束</p><h2 id="fcntl" tabindex="-1"><a class="header-anchor" href="#fcntl" aria-hidden="true">#</a> fcntl</h2><p>改变已经打开文件的属性</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;fcntl.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">fcntl</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">,</span><span class="token keyword">int</span> cmd<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token comment">/* arg*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//成功则依赖于cmd</span>
<span class="token comment">/*
cmd 5中功能
F_DUPFD或F_DUPFD_CLOEXEC  都复制一个已有fd，后者还设置新fd的标志值
dup(fd) 相当于 fcntl(fd,F_DUPFD,0)
dup(fd,fd2) 相当于 close(fd2) fcntl(fd,F_DUPFD,fd2)
涉及的FD_CLOEXEC在第八章说
F_GETFD或F_SETFD          fd标志(就是这个常量FD_CLOEXEC)
很多现有程序不使用FD_CLOEXEC，直接用默认的0，或者1
F_GETFL或F_SETFL          文件状态标志(open函数里的)
F_SETFL:O_APPEND,O_NONBLOCK,O_SYNC,O_DSYNC,O_RSYNC,O_FSYNC,O_ASYNC
F_GETOWN或F_SETOWN        异步I/O所有权，获取/设置信号正的进程id或者负的进程组ID(绝对值)
第14章说
F_GETLK,F_SSETLK或F_SETKW 记录锁
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>标准输出上fcntl设置O_SYNC将不起作用，不报错，因为这是shell打开的</p><h2 id="ioctl" tabindex="-1"><a class="header-anchor" href="#ioctl" aria-hidden="true">#</a> ioctl</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span><span class="token comment">//system v</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/ioctl.h&gt;</span><span class="token comment">//bsd and linux</span></span>
<span class="token keyword">int</span> <span class="token function">ioctl</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">,</span> <span class="token keyword">int</span> request<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dev-fd" tabindex="-1"><a class="header-anchor" href="#dev-fd" aria-hidden="true">#</a> /dev/fd</h2><p>打开文件/dev/fd/n等效与复制描述符n</p><p>fd = open(&quot;/dev/fd/0&quot;,mode) 等效于 fd=dup(0)</p><p>如果先前fd 0被打开为只读，那么我们也只能对fd进行读操作，即使fd = open(&quot;/dev/fd/0&quot;,O_RDWR)</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>因为read和write都在内核执行，所有称为不带缓冲的I/O函数</p><p>2018-4-9 23:55</p>`,107),i=[t];function c(o,l){return s(),a("div",null,i)}const r=n(p,[["render",c],["__file","第三章 文件IO.html.vue"]]);export{r as default};
