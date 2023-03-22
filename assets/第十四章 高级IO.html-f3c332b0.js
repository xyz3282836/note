const e=JSON.parse('{"key":"v-9354be2a","path":"/apue/%E7%AC%AC%E5%8D%81%E5%9B%9B%E7%AB%A0%20%E9%AB%98%E7%BA%A7IO.html","title":"第十四章 高级 IO","lang":"zh-CN","frontmatter":{"description":"第十四章 高级 IO 非阻塞 IO fd 是阻塞还是非阻塞是可以设置的，这也直接影响系统调用函数是否阻塞还是非阻塞（直接返回错误） 对于一个给定的 fd，有两种方法可以指定为非阻塞 IO open 的时候指定 O_NOBLOCK 已经 open 的 fd，使用 fcntl 函数设置 O_NOBLOCK 记录锁 fcntl 记录锁 #include &lt;fcntl.h&gt; int fcntl(int fd,int cmd,../* struct flock *flockptr */);","head":[["meta",{"property":"og:url","content":"https://www.ruizhou.cf/apue/%E7%AC%AC%E5%8D%81%E5%9B%9B%E7%AB%A0%20%E9%AB%98%E7%BA%A7IO.html"}],["meta",{"property":"og:site_name","content":"rz文档"}],["meta",{"property":"og:title","content":"第十四章 高级 IO"}],["meta",{"property":"og:description","content":"第十四章 高级 IO 非阻塞 IO fd 是阻塞还是非阻塞是可以设置的，这也直接影响系统调用函数是否阻塞还是非阻塞（直接返回错误） 对于一个给定的 fd，有两种方法可以指定为非阻塞 IO open 的时候指定 O_NOBLOCK 已经 open 的 fd，使用 fcntl 函数设置 O_NOBLOCK 记录锁 fcntl 记录锁 #include &lt;fcntl.h&gt; int fcntl(int fd,int cmd,../* struct flock *flockptr */);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-11T14:36:50.000Z"}],["meta",{"property":"article:author","content":"rz"}],["meta",{"property":"article:modified_time","content":"2023-03-11T14:36:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第十四章 高级 IO\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-11T14:36:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"rz\\",\\"url\\":\\"https://github.com/xyz3282836/monodoc\\"}]}"]]},"headers":[{"level":2,"title":"非阻塞 IO","slug":"非阻塞-io","link":"#非阻塞-io","children":[]},{"level":2,"title":"记录锁","slug":"记录锁","link":"#记录锁","children":[{"level":3,"title":"fcntl 记录锁","slug":"fcntl-记录锁","link":"#fcntl-记录锁","children":[]},{"level":3,"title":"锁的隐含继承和释放","slug":"锁的隐含继承和释放","link":"#锁的隐含继承和释放","children":[]},{"level":3,"title":"FreeBSD 实现","slug":"freebsd-实现","link":"#freebsd-实现","children":[]},{"level":3,"title":"建议性锁和强制性锁","slug":"建议性锁和强制性锁","link":"#建议性锁和强制性锁","children":[]}]},{"level":2,"title":"I/O 多路转接","slug":"i-o-多路转接","link":"#i-o-多路转接","children":[]},{"level":2,"title":"select 和 pselect","slug":"select-和-pselect","link":"#select-和-pselect","children":[]},{"level":2,"title":"函数 poll","slug":"函数-poll","link":"#函数-poll","children":[]},{"level":2,"title":"异步 IO","slug":"异步-io","link":"#异步-io","children":[{"level":3,"title":"System V 异步 IO","slug":"system-v-异步-io","link":"#system-v-异步-io","children":[]},{"level":3,"title":"BSD 异步 IO","slug":"bsd-异步-io","link":"#bsd-异步-io","children":[]},{"level":3,"title":"POSIX 异步 IO","slug":"posix-异步-io","link":"#posix-异步-io","children":[]}]},{"level":2,"title":"readv 和 writev","slug":"readv-和-writev","link":"#readv-和-writev","children":[]},{"level":2,"title":"存储映射 IO","slug":"存储映射-io","link":"#存储映射-io","children":[]}],"git":{"createdTime":1678545410000,"updatedTime":1678545410000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":1}]},"readingTime":{"minutes":12.4,"words":3721},"filePathRelative":"apue/第十四章 高级IO.md","localizedDate":"2023年3月11日","excerpt":"<h1> 第十四章 高级 IO</h1>\\n<h2> 非阻塞 IO</h2>\\n<p>fd 是阻塞还是非阻塞是可以设置的，这也直接影响系统调用函数是否阻塞还是非阻塞（直接返回错误）</p>\\n<p>对于一个给定的 fd，有两种方法可以指定为非阻塞 IO</p>\\n<ol>\\n<li>open 的时候指定 O_NOBLOCK</li>\\n<li>已经 open 的 fd，使用 fcntl 函数设置 O_NOBLOCK</li>\\n</ol>\\n<h2> 记录锁</h2>\\n<h3> fcntl 记录锁</h3>\\n<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;fcntl.h&gt;</span></span>\\n<span class=\\"token keyword\\">int</span> <span class=\\"token function\\">fcntl</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> fd<span class=\\"token punctuation\\">,</span><span class=\\"token keyword\\">int</span> cmd<span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token comment\\">/* struct flock *flockptr */</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
