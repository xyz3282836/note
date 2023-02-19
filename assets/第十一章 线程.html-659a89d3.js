import{_ as n,W as s,X as a,a0 as t}from"./framework-1046fca1.js";const e={},p=t(`<h1 id="第十一章-线程" tabindex="-1"><a class="header-anchor" href="#第十一章-线程" aria-hidden="true">#</a> 第十一章 线程</h1><h2 id="线程标识" tabindex="-1"><a class="header-anchor" href="#线程标识" aria-hidden="true">#</a> 线程标识</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;pthread.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">pthread_equal</span><span class="token punctuation">(</span><span class="token class-name">pthread_t</span> tid1<span class="token punctuation">,</span><span class="token class-name">pthread_t</span> tid2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">pthread_t</span> <span class="token function">pthread_self</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//线程通过这个函数获取自身线程id</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>线程 ID 是用 pthread_t 数据类型来表示的，实现的时候可以用一个结构来代表 pthread_t 数据类型，所以可移植的操作 系统实现不能把它作为整数处理。因此必须使用一个函数来对两个线程 ID 进行比较。</p><h2 id="线程创建" tabindex="-1"><a class="header-anchor" href="#线程创建" aria-hidden="true">#</a> 线程创建</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;pthread.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">pthread_create</span><span class="token punctuation">(</span><span class="token class-name">pthread_t</span> <span class="token operator">*</span>restrict tidp<span class="token punctuation">,</span><span class="token keyword">const</span> <span class="token class-name">pthread_attr_t</span> <span class="token operator">*</span>restrict attr<span class="token punctuation">,</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span>start_rtn<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">void</span> <span class="token operator">*</span>restrict arg<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//fork</span>
<span class="token keyword">void</span> <span class="token function">pthread_exit</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>rval_ptr<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//exit</span>
<span class="token keyword">int</span> <span class="token function">pthread_join</span><span class="token punctuation">(</span><span class="token class-name">pthread_t</span> thread<span class="token punctuation">,</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token operator">*</span>rval_ptr<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//waitpid</span>
<span class="token keyword">int</span> <span class="token function">pthread_cancel</span><span class="token punctuation">(</span><span class="token class-name">pthread_t</span> tid<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//abort</span>
<span class="token keyword">void</span> <span class="token function">pthread_cleanup_push</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span>rtn<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">void</span> <span class="token operator">*</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//atexit</span>
<span class="token keyword">void</span> <span class="token function">pthread_cleanup_pop</span><span class="token punctuation">(</span><span class="token keyword">int</span> execute<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回线程信息指针，设置线程属性，开始函数地址，以及参数的结构体</p><p>FreeBSD 使用指向线程数据结构的指针作为它的线程 ID。</p><h2 id="线程终止" tabindex="-1"><a class="header-anchor" href="#线程终止" aria-hidden="true">#</a> 线程终止</h2><p>单个线程可以通过 3 种方式退出，因此可以在不终止整个进程的情况下，停止它的控制流</p><p>（1）线程可以简单地从启动例程中返回，返回值是线程的退出码。</p><p>（2）线程可以被同一进程中的其他线程取消。</p><p>（3）线程调用 pthread_exit。</p><h2 id="线程同步" tabindex="-1"><a class="header-anchor" href="#线程同步" aria-hidden="true">#</a> 线程同步</h2><h3 id="互斥量-mutex" tabindex="-1"><a class="header-anchor" href="#互斥量-mutex" aria-hidden="true">#</a> 互斥量 mutex</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;pthread.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">pthread_mutex_init</span><span class="token punctuation">(</span><span class="token class-name">pthread_mutex_t</span> <span class="token operator">*</span>restrict mutex<span class="token punctuation">,</span><span class="token keyword">const</span> <span class="token class-name">pthread_mutexattr_t</span> <span class="token operator">*</span>restrict attr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">pthread_mutex_destory</span><span class="token punctuation">(</span><span class="token class-name">pthread_mutex_t</span> <span class="token operator">*</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//阻塞加锁</span>
<span class="token keyword">int</span> <span class="token function">pthread_mutex_lock</span><span class="token punctuation">(</span><span class="token class-name">pthread_mutex_t</span> <span class="token operator">*</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//非阻塞加锁</span>
<span class="token keyword">int</span> <span class="token function">pthread_mutex_trylock</span><span class="token punctuation">(</span><span class="token class-name">pthread_mutex_t</span> <span class="token operator">*</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">pthread_mutex_unlock</span><span class="token punctuation">(</span><span class="token class-name">pthread_mutex_t</span> <span class="token operator">*</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用前需要初始化</p><p>要用默认的属性初始化互斥量，只需把 attr 设为 NULL</p><p>11.10步骤就是 init-&gt;抢lock去+1-&gt;使用对象-&gt;抢lock去-1/destory lock</p><p>多个互斥量很容易死锁，需要排序</p><p>比如A和B两个互斥量，约定原则，锁A之前必须先锁B，那么所有线程都必须先抢B，如果一个线程抢到了B，由于没人抢A（抢了也会释放，因为没拿到B），所以很容易拿到A去锁，也就是多个互斥量通过约定顺序，使之看成一个互斥量</p><h3 id="pthread-mutex-timedlock" tabindex="-1"><a class="header-anchor" href="#pthread-mutex-timedlock" aria-hidden="true">#</a> pthread_mutex_timedlock</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;pthread.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;time.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">pthread_mutex_timedlock</span><span class="token punctuation">(</span><span class="token class-name">pthrea_mutex_t</span> <span class="token operator">*</span>restrict mutex<span class="token punctuation">,</span><span class="token keyword">const</span> <span class="token keyword">struct</span> <span class="token class-name">timespec</span> <span class="token operator">*</span>restrict tsptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="读写锁" tabindex="-1"><a class="header-anchor" href="#读写锁" aria-hidden="true">#</a> 读写锁</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;pthread.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">pthread_rwlock_init</span><span class="token punctuation">(</span><span class="token class-name">pthread_rwlock_t</span> <span class="token operator">*</span>restrict rwlock<span class="token punctuation">,</span><span class="token keyword">const</span> <span class="token class-name">pthread_rwlockattr_t</span> <span class="token operator">*</span>restrict attr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">pthread_rwlock_destory</span><span class="token punctuation">(</span><span class="token class-name">pthread_rwlock_t</span> <span class="token operator">*</span>rwlock<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">pthread_rwlock_rdlock</span><span class="token punctuation">(</span><span class="token class-name">thread_rwlock_t</span> <span class="token operator">*</span>rwlock<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">pthread_rwlock_wrlock</span><span class="token punctuation">(</span><span class="token class-name">thread_rwlock_t</span> <span class="token operator">*</span>rwlock<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">pthread_rwlock_unlock</span><span class="token punctuation">(</span><span class="token class-name">thread_rwlock_t</span> <span class="token operator">*</span>rwlock<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">pthread_rwlock_tryrdlock</span><span class="token punctuation">(</span><span class="token class-name">thread_rwlock_t</span> <span class="token operator">*</span>rwlock<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">pthread_rwlock_trywrlock</span><span class="token punctuation">(</span><span class="token class-name">thread_rwlock_t</span> <span class="token operator">*</span>rwlock<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当读写锁处于读模式锁住的状态，而这时有一个线程试图以写模式获取锁时，读写锁通常会阻塞随后的读模式锁请求</p><h3 id="带有超时的读写锁" tabindex="-1"><a class="header-anchor" href="#带有超时的读写锁" aria-hidden="true">#</a> 带有超时的读写锁</h3><p>rwlock</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;pthread.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;time.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">pthread_rwlock_timedrdlock</span><span class="token punctuation">(</span><span class="token class-name">pthread_rwlock_t</span> <span class="token operator">*</span>restrict rwlock<span class="token punctuation">,</span><span class="token keyword">const</span> <span class="token keyword">struct</span> <span class="token class-name">timespec</span> <span class="token operator">*</span>restrict tsptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">pthread_rwlock_timedwrlock</span><span class="token punctuation">(</span><span class="token class-name">pthread_rwlock_t</span> <span class="token operator">*</span>restrict rwlock<span class="token punctuation">,</span><span class="token keyword">const</span> <span class="token keyword">struct</span> <span class="token class-name">timespec</span> <span class="token operator">*</span>restrict tsptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="条件变量" tabindex="-1"><a class="header-anchor" href="#条件变量" aria-hidden="true">#</a> 条件变量</h3><p>cond</p><p>线程在改变条件状态之前必须首先锁住互斥量</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;pthread.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">pthread_cond_init</span><span class="token punctuation">(</span><span class="token class-name">pthread_conf_t</span> <span class="token operator">*</span>restrict cond<span class="token punctuation">,</span><span class="token keyword">const</span> <span class="token class-name">pthread_condattr_t</span> <span class="token operator">*</span>restrict attr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">pthread_cond_destory</span><span class="token punctuation">(</span><span class="token class-name">pthread_cond_t</span> <span class="token operator">*</span>cond<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">pthread_cond_wait</span><span class="token punctuation">(</span><span class="token class-name">pthread_conf_t</span> <span class="token operator">*</span>restrict cond<span class="token punctuation">,</span><span class="token class-name">pthread_mutex_t</span> <span class="token operator">*</span>restrict mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">pthread_cond_timedwait</span><span class="token punctuation">(</span><span class="token class-name">pthread_conf_t</span> <span class="token operator">*</span>restrict cond<span class="token punctuation">,</span><span class="token class-name">pthread_mutex_t</span> <span class="token operator">*</span>restrict mutex<span class="token punctuation">,</span><span class="token keyword">const</span> <span class="token keyword">struct</span> <span class="token class-name">timespec</span> <span class="token operator">*</span>restrict tsptr<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">pthread_cond_signal</span><span class="token punctuation">(</span><span class="token class-name">pthread_cond_t</span> <span class="token operator">*</span>cond<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">pthread_cond_broadcast</span><span class="token punctuation">(</span><span class="token class-name">pthread_cond_t</span> <span class="token operator">*</span>cond<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自旋锁" tabindex="-1"><a class="header-anchor" href="#自旋锁" aria-hidden="true">#</a> 自旋锁</h3><p>互斥量基本就可以替代自旋锁了</p><h3 id="屏障" tabindex="-1"><a class="header-anchor" href="#屏障" aria-hidden="true">#</a> 屏障</h3><p>允许任意数量的线程等待，直到所有的线程完成处理工作， 而线程不需要退出。所有线程达到屏障后可以接着工作。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;pthread.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">pthread_barrier_init</span><span class="token punctuation">(</span><span class="token class-name">pthread_barrier_t</span> <span class="token operator">*</span>restrict barrier<span class="token punctuation">,</span><span class="token keyword">const</span> <span class="token class-name">pthread_barrierattr_t</span> <span class="token operator">*</span>restrict attr<span class="token punctuation">,</span><span class="token keyword">unsigned</span> <span class="token keyword">int</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">pthread_barrier_destory</span><span class="token punctuation">(</span><span class="token class-name">pthread_barrier_t</span> <span class="token operator">*</span>barrier<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">pthread_barrier_wait</span><span class="token punctuation">(</span><span class="token class-name">pthread_barrier_t</span> <span class="token operator">*</span>barrier<span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38),c=[p];function o(l,r){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","第十一章 线程.html.vue"]]);export{d as default};
