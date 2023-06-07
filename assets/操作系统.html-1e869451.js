import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as p,a as r}from"./app-339f552b.js";const t={},c=r('<h1 id="进程与线程" tabindex="-1"><a class="header-anchor" href="#进程与线程" aria-hidden="true">#</a> 进程与线程</h1><h2 id="同步" tabindex="-1"><a class="header-anchor" href="#同步" aria-hidden="true">#</a> 同步</h2><p>临界区：对多进程串行化来安全访问公共资源，只有个一个线程可以访问，其他挂起</p><p>互斥量：互斥对象机制，相当于锁，和临界区相识，但是可以命名即跨进程使用，需要更多资源来创建，所以进程内部使用临界区速度更快，资源占用更少</p><p>信号量：允许统一时刻访问同一资源的最大线程数目。本质上，信号量是一个计数器</p><p>PV 操作和信号量</p><p>互斥量，信号量，事件都可以跨进程使用</p><p>进程间通信方法：</p><ol><li><p>访问系统公共空间或者外设，注册表、数据库等磁盘文件访问，但是都不算，因为效率低，有实时性要求</p></li><li><p>进程间通信包括管道、系统 IPC(包含消息队列，信号量、共存存储)、socket</p></li></ol><h2 id="死锁" tabindex="-1"><a class="header-anchor" href="#死锁" aria-hidden="true">#</a> 死锁</h2><p>两个或者两个以上的进程在执行过程中，竞争资源或者相互通信造成阻塞现象</p><p>以下是 C 的 5 个区，和 java 不同的</p><p>栈 stack 由编译器自动释放</p><p>堆 heap 可以程序释放</p><p>静态区、全局区 程序结束后释放</p><p>常量区</p><p>代码区</p>',17),i=[c];function h(o,d){return a(),p("div",null,i)}const _=e(t,[["render",h],["__file","操作系统.html.vue"]]);export{_ as default};
