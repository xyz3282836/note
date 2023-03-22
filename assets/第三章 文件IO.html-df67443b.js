const e=JSON.parse('{"key":"v-3413ac34","path":"/apue/%E7%AC%AC%E4%B8%89%E7%AB%A0%20%E6%96%87%E4%BB%B6IO.html","title":"第三章 文件 IO","lang":"zh-CN","frontmatter":{"description":"第三章 文件 IO I/O 函数就是打开文件，读文件，写文件，在绝大数 unix 系统中只需用到 5 个函数 open、read、write、lseek、close。 不同缓存长度对 read 和 write 有影响。unbuffered I/O（不带缓冲的 I/O）与后面标准 I/O 函数 所谓不带缓存就是说 read 和 write 都调用内核的一个系统调用。 不带缓冲的 I/O 不是 ISO C 的组成部分，是 POSIX.1 核 Single UNIX Specification 的组成部分 文件描述符-fd","head":[["meta",{"property":"og:url","content":"https://www.ruizhou.cf/apue/%E7%AC%AC%E4%B8%89%E7%AB%A0%20%E6%96%87%E4%BB%B6IO.html"}],["meta",{"property":"og:site_name","content":"rz文档"}],["meta",{"property":"og:title","content":"第三章 文件 IO"}],["meta",{"property":"og:description","content":"第三章 文件 IO I/O 函数就是打开文件，读文件，写文件，在绝大数 unix 系统中只需用到 5 个函数 open、read、write、lseek、close。 不同缓存长度对 read 和 write 有影响。unbuffered I/O（不带缓冲的 I/O）与后面标准 I/O 函数 所谓不带缓存就是说 read 和 write 都调用内核的一个系统调用。 不带缓冲的 I/O 不是 ISO C 的组成部分，是 POSIX.1 核 Single UNIX Specification 的组成部分 文件描述符-fd"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-11T14:36:50.000Z"}],["meta",{"property":"article:author","content":"rz"}],["meta",{"property":"article:modified_time","content":"2023-03-11T14:36:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第三章 文件 IO\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-11T14:36:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"rz\\",\\"url\\":\\"https://github.com/xyz3282836/monodoc\\"}]}"]]},"headers":[{"level":3,"title":"文件描述符-fd","slug":"文件描述符-fd","link":"#文件描述符-fd","children":[]},{"level":2,"title":"open 和 openat","slug":"open-和-openat","link":"#open-和-openat","children":[]},{"level":2,"title":"文件 I/O","slug":"文件-i-o","link":"#文件-i-o","children":[{"level":3,"title":"文件描述符-fd","slug":"文件描述符-fd-1","link":"#文件描述符-fd-1","children":[]}]},{"level":2,"title":"open 和 openat","slug":"open-和-openat-1","link":"#open-和-openat-1","children":[]},{"level":2,"title":"creat","slug":"creat","link":"#creat","children":[]},{"level":2,"title":"close","slug":"close","link":"#close","children":[]},{"level":2,"title":"lseek","slug":"lseek","link":"#lseek","children":[]},{"level":2,"title":"read","slug":"read","link":"#read","children":[]},{"level":2,"title":"write","slug":"write","link":"#write","children":[]},{"level":2,"title":"I/O 的效率","slug":"i-o-的效率","link":"#i-o-的效率","children":[]},{"level":2,"title":"文件共享","slug":"文件共享","link":"#文件共享","children":[]},{"level":2,"title":"原子操作","slug":"原子操作","link":"#原子操作","children":[{"level":3,"title":"原子函数 pread 和 pwrite","slug":"原子函数-pread-和-pwrite","link":"#原子函数-pread-和-pwrite","children":[]}]},{"level":2,"title":"dup 和 dup2","slug":"dup-和-dup2","link":"#dup-和-dup2","children":[]},{"level":2,"title":"sync,fsync 和 fdatasync","slug":"sync-fsync-和-fdatasync","link":"#sync-fsync-和-fdatasync","children":[]},{"level":2,"title":"fcntl","slug":"fcntl","link":"#fcntl","children":[]},{"level":2,"title":"ioctl","slug":"ioctl","link":"#ioctl","children":[]},{"level":2,"title":"/dev/fd","slug":"dev-fd","link":"#dev-fd","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1678545410000,"updatedTime":1678545410000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":1}]},"readingTime":{"minutes":10.87,"words":3262},"filePathRelative":"apue/第三章 文件IO.md","localizedDate":"2023年3月11日","excerpt":"<h1> 第三章 文件 IO</h1>\\n<p>I/O 函数就是打开文件，读文件，写文件，在绝大数 unix 系统中只需用到 5 个函数 open、read、write、lseek、close。</p>\\n<p>不同缓存长度对 read 和 write 有影响。unbuffered I/O（不带缓冲的 I/O）与后面标准 I/O 函数</p>\\n<p>所谓不带缓存就是说 read 和 write 都调用内核的一个系统调用。</p>\\n<p>不带缓冲的 I/O 不是 ISO C 的组成部分，是 POSIX.1 核 Single UNIX Specification 的组成部分</p>\\n<h3> 文件描述符-fd</h3>","autoDesc":true}');export{e as data};
