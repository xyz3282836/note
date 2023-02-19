import{_ as a,W as e,X as c,a0 as l}from"./framework-1046fca1.js";const r={},t=l('<h1 id="pcmalloc-vs-tcmalloc" tabindex="-1"><a class="header-anchor" href="#pcmalloc-vs-tcmalloc" aria-hidden="true">#</a> pcmalloc vs tcmalloc</h1><h2 id="tcmalloc" tabindex="-1"><a class="header-anchor" href="#tcmalloc" aria-hidden="true">#</a> tcmalloc</h2><p>tcmalloc 使用细颗粒度的高效自旋锁，ptmalloc2 使用per-thread arenas</p><p>tcmalloc 每个线程分配一个本地线程缓存，小的分配直接放在里面；对象可以从中心堆移动到本地线程缓存，并且周期行进行gc，将内存从本地线程缓存移动到中心缓存。</p><p>tcmalloc对应小于32K的小对象和大对象处理方式不同。大对象使用中心堆，通过页分配器（一页4K，通常是一些列的页）。</p><p>一些列的页分割成大小相同的小对象，如一页4K可以分成32个128字节对象。</p><h3 id="小对象分配" tabindex="-1"><a class="header-anchor" href="#小对象分配" aria-hidden="true">#</a> 小对象分配</h3><h3 id="大对象分配" tabindex="-1"><a class="header-anchor" href="#大对象分配" aria-hidden="true">#</a> 大对象分配</h3><h3 id="span" tabindex="-1"><a class="header-anchor" href="#span" aria-hidden="true">#</a> span</h3><h3 id="内存回收" tabindex="-1"><a class="header-anchor" href="#内存回收" aria-hidden="true">#</a> 内存回收</h3>',10),h=[t];function d(o,n){return e(),c("div",null,h)}const i=a(r,[["render",d],["__file","tcmalloc.html.vue"]]);export{i as default};
