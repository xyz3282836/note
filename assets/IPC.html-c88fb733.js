import{_ as e,V as a,W as t,$ as c}from"./framework-7d796c00.js";const r={},i=c('<h1 id="三种ipc" tabindex="-1"><a class="header-anchor" href="#三种ipc" aria-hidden="true">#</a> 三种iPC</h1><h2 id="共享内存" tabindex="-1"><a class="header-anchor" href="#共享内存" aria-hidden="true">#</a> 共享内存</h2><p>共享存储允许两个或多个进程共享一个给定的存储区</p><p>因为数据不需要在客户进程和服务器进程之间复制，所以这是最快的一种 IPC</p><p>使用共享存储时要掌握的唯一窍门是，在多个进程之间同步访问一个给定的存储区</p><p>若服务器进程正在将数据放入共享存储区，则在它做完这一操作之前，客户进程不应当去取这些数据</p><p>通常，信号量用于同步共享存储访问，也可以用记录锁或互斥量</p><p>XSI 共享存储和内存映射的文件的不同之处在于，前者没有相关的文件</p>',8),n=[i];function p(s,d){return a(),t("div",null,n)}const o=e(r,[["render",p],["__file","IPC.html.vue"]]);export{o as default};
