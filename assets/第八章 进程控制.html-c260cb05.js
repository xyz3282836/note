const e=JSON.parse('{"key":"v-abb3f84e","path":"/raw/unix%E7%8E%AF%E5%A2%83%E9%AB%98%E7%BA%A7%E7%BC%96%E7%A8%8B/%E7%AC%AC%E5%85%AB%E7%AB%A0%20%E8%BF%9B%E7%A8%8B%E6%8E%A7%E5%88%B6.html","title":"第八章 进程控制","lang":"zh-CN","frontmatter":{"description":"fork进程标识 id为0的是调度进程，被称为交换进程swapper，是内核的一部分 id为1的是init进程，是所以孤儿进程的父进程，不是内核一部分，只是个普通进程，但是拥有root权限， fork fork后，fd会被复制到子进程，好像执行了dup函数，父子进程相同文件的fd都共享一个文件表，dup的特性 每个进程表项中fd公用相同文件表 共享当前...","head":[["meta",{"property":"og:url","content":"https://www.ruizhou.cf/raw/unix%E7%8E%AF%E5%A2%83%E9%AB%98%E7%BA%A7%E7%BC%96%E7%A8%8B/%E7%AC%AC%E5%85%AB%E7%AB%A0%20%E8%BF%9B%E7%A8%8B%E6%8E%A7%E5%88%B6.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"第八章 进程控制"}],["meta",{"property":"og:description","content":"fork进程标识 id为0的是调度进程，被称为交换进程swapper，是内核的一部分 id为1的是init进程，是所以孤儿进程的父进程，不是内核一部分，只是个普通进程，但是拥有root权限， fork fork后，fd会被复制到子进程，好像执行了dup函数，父子进程相同文件的fd都共享一个文件表，dup的特性 每个进程表项中fd公用相同文件表 共享当前..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-19T14:45:43.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-19T14:45:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第八章 进程控制\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-19T14:45:43.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"fork进程标识","slug":"fork进程标识","link":"#fork进程标识","children":[]},{"level":2,"title":"fork","slug":"fork","link":"#fork","children":[{"level":3,"title":"fork后处理fd有两种常见操作模式","slug":"fork后处理fd有两种常见操作模式","link":"#fork后处理fd有两种常见操作模式","children":[]},{"level":3,"title":"fork的两种方法","slug":"fork的两种方法","link":"#fork的两种方法","children":[]}]},{"level":2,"title":"vfork","slug":"vfork","link":"#vfork","children":[]},{"level":2,"title":"exit","slug":"exit","link":"#exit","children":[]},{"level":2,"title":"wait和waitpid","slug":"wait和waitpid","link":"#wait和waitpid","children":[]},{"level":2,"title":"waitid","slug":"waitid","link":"#waitid","children":[]},{"level":2,"title":"wait3,wait4","slug":"wait3-wait4","link":"#wait3-wait4","children":[]},{"level":2,"title":"竞争条件","slug":"竞争条件","link":"#竞争条件","children":[]},{"level":2,"title":"exec函数","slug":"exec函数","link":"#exec函数","children":[]},{"level":2,"title":"更改用户id和组id","slug":"更改用户id和组id","link":"#更改用户id和组id","children":[]},{"level":2,"title":"解释器文件","slug":"解释器文件","link":"#解释器文件","children":[]},{"level":2,"title":"system","slug":"system","link":"#system","children":[]},{"level":2,"title":"进程会计","slug":"进程会计","link":"#进程会计","children":[]},{"level":2,"title":"用户标志","slug":"用户标志","link":"#用户标志","children":[]},{"level":2,"title":"进程调度","slug":"进程调度","link":"#进程调度","children":[]},{"level":2,"title":"进程时间","slug":"进程时间","link":"#进程时间","children":[]}],"git":{"createdTime":1676817943000,"updatedTime":1676817943000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":1}]},"readingTime":{"minutes":4.61,"words":1383},"filePathRelative":"raw/unix环境高级编程/第八章 进程控制.md","localizedDate":"2023年2月19日","autoDesc":true}');export{e as data};
