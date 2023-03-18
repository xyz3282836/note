import{_ as o,W as p,X as d,Z as n,$ as s,a0 as a,a1 as i,Y as e,C as l}from"./framework-2fbbe1ff.js";const r="/assets/go-gmp-f7a999e3.png",u="/assets/gmp-gosched-f3bb8114.png",m="/assets/gmp-schedule-225d4d0b.png",v="/assets/gmp-findRunnable-9c338a70.png",k="/assets/gmp-execute-188e9507.png",b={},g=e('<h1 id="gmp" tabindex="-1"><a class="header-anchor" href="#gmp" aria-hidden="true">#</a> gmp</h1><p>Go 程序执行过</p><p>可执行文件（go 编译好的可执行文件）开始执行</p><p>_rt0_amd64_windows // 不同平台执行入口不同</p><p>_rt0_amd64_linux // 不同平台执行入口不同</p><p>...osinit... // 一系列的检测和初始化</p><p>schedinit 调度初始化，按照 GOMAXPROCS 这个环境变量决定创建多少个 p，allp 的数量</p><p>创建 main goroutine 之前 allp[0]-&gt;m0-&gt;g0</p><p>以 runtime.run 为程序入口，new main goroutine(newproc 函数调用)</p><p>创建 main goroutine 之后，main goroutine 会加入到当前 p 也就是 allp[0]的本地 runq 中</p><p>mstart(--&gt;schedule()) 函数开启循环调度，是所有工作线程的入口，主要是调用 schedule 函数，执行调度循环</p><p>m0 开始执行关联 p 中的 main goroutine，goroutine 中执行 runtime.main</p><p>runtime.main 中会创建 sysmon，package init ...</p><p>call main.main</p><p>...</p><p>代码中使用 go 来创建协程，会被编译器转换为 newproc 函数调用，newproc 会给 goroutine 构造一个栈帧，目的让其协程运行完毕后可以返回 goexit()函数中，进行协程资源处理的工作</p><p>exit runtime.main 会调用 exit 函数结束进程</p><p>几个重要数据结构</p><p>runtime.g 协程结构</p><p>runtime.m 工作线程结构</p><p>runtime.p 调度结构 runq</p><p>runtime.schedt 调度器结构，调度相关信息结构 midle，pidle，runq</p><p>全局变量 g0 是主线程对应的 g，也就是上面的 main goroutine，并且<strong>在主线程栈上分配</strong>，空间大，g0 持有 m0 的指针</p><p>全局变量 m0 是主线程对应的 m，m0 持有 g0 的指针，并且最开始 m0 执行的协程就是 g0</p><p>没有全局变量 p0</p><p>全局变量 allgs 记录所有 g</p><p>全局变量 allm 记录所有 m</p><p>全局变量 allp 记录所有 p</p><p>全局变量 sched 记录所有空闲的 m，空闲的 p</p><p>最终 go 的调度模型只有 gm，导致各个 m 争抢 g，加了锁，性能很差</p><p>后面引入了 runtime.p 有个本地 runq [256]guintptr，这样只要把一个 p 关联到一个 m，m 就可以从 p 这里直接获取 g，p 有个本地 runq，但是还是存在一个全局 runq，保存在全局变量 sched 中</p><p>如果 p 的本地 runq 满了，就会放到全局 sched 的 runq 中，而 m 先从自己 p 的本地 runq 获取 g，都处理完了就从全局 runq 中获取 g 来执行，如果全局 runq 也没了那就从别的 p 的本地 runq 获取 g</p><p>allp[0] 也就是 allp 的第一个 p 于 m0 关联起来</p><p>time.Sleep 会调用 gopark 函数，把当前协程状态从_Grunning 改为 _Gwaiting，不会把当前协程 g 返回到本地 runq 中，而是在 timer 总等待，继而调用 schedule()进行调度，让其他 g 可以执行，等到 sleep 时间到了，timer 会把之前的 g 重新设置为 _Grunnable，并且重新放回本地 runq 中</p><p>一个协程中，使用 go 关键字启动一个新的协程，会把这个新协程加入自己 p 的本地 runq 中，当时如果有新的空闲的 p，就会启动新的线程关联到这个空闲的 p，并且把这个新协程加入空闲 p 的本地 runq 中</p><h2 id="新" tabindex="-1"><a class="header-anchor" href="#新" aria-hidden="true">#</a> 新</h2><h2 id="线程" tabindex="-1"><a class="header-anchor" href="#线程" aria-hidden="true">#</a> 线程</h2><p>通常语义中的线程，指的是内核级线程，核心点如下：</p><ol><li>是操作系统最小调度单元</li><li>创建、销毁、调度交由内核完成，cpu 需完成用户态与内核态间的切换</li><li>可充分利用多核，实现并行</li></ol><h2 id="传统协程" tabindex="-1"><a class="header-anchor" href="#传统协程" aria-hidden="true">#</a> 传统协程</h2><p>协程是用户态，依赖内核线程，并且是 1:N 一对多的关系，一个协程阻塞会造成整个协程组阻塞</p><ol><li>与线程存在映射关系，为 M：1</li><li>创建、销毁、调度在用户态完成，对内核透明，所以更轻</li><li>从属同一个内核级线程，无法并行；一个协程阻塞会导致从属同一线程的所有协程无法执行</li></ol><h2 id="goroutine" tabindex="-1"><a class="header-anchor" href="#goroutine" aria-hidden="true">#</a> goroutine</h2><p>go 对协程做了优化成为了 goroutine，协程和线程加了一层调度，可以 N:M 多对多，可以并发执行</p><ol><li>与线程存在映射关系，为 M：N</li><li>创建、销毁、调度在用户态完成，对内核透明，足够轻便</li><li>可利用多个线程，实现并行</li><li>通过调度器的斡旋，实现和线程间的动态绑定和灵活调度</li><li>栈空间大小可动态扩缩，因地制宜</li></ol><h2 id="对比" tabindex="-1"><a class="header-anchor" href="#对比" aria-hidden="true">#</a> 对比</h2><p>三个模型的各项能力对比如下:</p><table><thead><tr><th style="text-align:center;"><strong>模型</strong></th><th style="text-align:center;"><strong>弱依赖内核</strong></th><th style="text-align:center;"><strong>可并行</strong></th><th style="text-align:center;"><strong>可应对阻塞</strong></th><th style="text-align:center;"><strong>栈可动态扩缩</strong></th></tr></thead><tbody><tr><td style="text-align:center;">线程</td><td style="text-align:center;">❎</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❎</td></tr><tr><td style="text-align:center;">协程</td><td style="text-align:center;">✅</td><td style="text-align:center;">❎</td><td style="text-align:center;">❎</td><td style="text-align:center;">❎</td></tr><tr><td style="text-align:center;">goroutine</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr></tbody></table><h2 id="gmp-1" tabindex="-1"><a class="header-anchor" href="#gmp-1" aria-hidden="true">#</a> GMP</h2><ol><li>M 是线程的抽象；G 是 goroutine；P 是承上启下的调度器</li><li>M 调度 G 前，需要和 P 绑定</li><li>全局有多个 M 和多个 P，但同时并行的 G 的最大数量等于 P 的数量</li><li>G 的存放队列有三类：P 的本地队列；全局队列；和 wait 队列（图中未展示，为 io 阻塞就绪态 goroutine 队列）</li><li>M 调度 G 时，优先取 P 本地队列，其次取全局队列，最后取 wait 队列；这样的好处是，取本地队列时，可以接近于无锁化，减少全局锁竞争</li><li>为防止不同 P 的闲忙差异过大，设立 work-stealing 机制，本地队列为空的 P 可以尝试从其他 P 本地队列偷取一半的 G 补充到自身队列</li></ol><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="g" tabindex="-1"><a class="header-anchor" href="#g" aria-hidden="true">#</a> g</h3><ol><li>g 即 goroutine，是 golang 中对协程的抽象</li><li>g 有自己的运行栈、状态、以及执行的任务函数（用户通过 go func 指定）</li><li>g 需要绑定到 p 才能执行，在 g 的视角中，p 就是它的 cpu</li></ol><p>包含<code>m的指针</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> g <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">// Stack parameters.</span>
	<span class="token comment">// stack describes the actual stack memory: [stack.lo, stack.hi).</span>
	<span class="token comment">// stackguard0 is the stack pointer compared in the Go stack growth prologue.</span>
	<span class="token comment">// It is stack.lo+StackGuard normally, but can be StackPreempt to trigger a preemption.</span>
	<span class="token comment">// stackguard1 is the stack pointer compared in the C stack growth prologue.</span>
	<span class="token comment">// It is stack.lo+StackGuard on g0 and gsignal stacks.</span>
	<span class="token comment">// It is ~0 on other goroutine stacks, to trigger a call to morestackc (and crash).</span>
	stack       stack   <span class="token comment">// offset known to runtime/cgo</span>
	stackguard0 <span class="token builtin">uintptr</span> <span class="token comment">// offset known to liblink</span>
	stackguard1 <span class="token builtin">uintptr</span> <span class="token comment">// offset known to liblink</span>

	_panic    <span class="token operator">*</span>_panic <span class="token comment">// innermost panic - offset known to liblink</span>
	_defer    <span class="token operator">*</span>_defer <span class="token comment">// innermost defer</span>
	m         <span class="token operator">*</span>m      <span class="token comment">// current m; offset known to arm liblink</span>
	sched     gobuf
	syscallsp <span class="token builtin">uintptr</span> <span class="token comment">// if status==Gsyscall, syscallsp = sched.sp to use during gc</span>
	syscallpc <span class="token builtin">uintptr</span> <span class="token comment">// if status==Gsyscall, syscallpc = sched.pc to use during gc</span>
	stktopsp  <span class="token builtin">uintptr</span> <span class="token comment">// expected sp at top of stack, to check in traceback</span>
	<span class="token comment">// param is a generic pointer parameter field used to pass</span>
	<span class="token comment">// values in particular contexts where other storage for the</span>
	<span class="token comment">// parameter would be difficult to find. It is currently used</span>
	<span class="token comment">// in three ways:</span>
	<span class="token comment">// 1. When a channel operation wakes up a blocked goroutine, it sets param to</span>
	<span class="token comment">//    point to the sudog of the completed blocking operation.</span>
	<span class="token comment">// 2. By gcAssistAlloc1 to signal back to its caller that the goroutine completed</span>
	<span class="token comment">//    the GC cycle. It is unsafe to do so in any other way, because the goroutine&#39;s</span>
	<span class="token comment">//    stack may have moved in the meantime.</span>
	<span class="token comment">// 3. By debugCallWrap to pass parameters to a new goroutine because allocating a</span>
	<span class="token comment">//    closure in the runtime is forbidden.</span>
	param        unsafe<span class="token punctuation">.</span>Pointer
	atomicstatus <span class="token builtin">uint32</span>
	stackLock    <span class="token builtin">uint32</span> <span class="token comment">// sigprof/scang lock; TODO: fold in to atomicstatus</span>
	goid         <span class="token builtin">int64</span>
	schedlink    guintptr
	waitsince    <span class="token builtin">int64</span>      <span class="token comment">// approx time when the g become blocked</span>
	waitreason   waitReason <span class="token comment">// if status==Gwaiting</span>

	preempt       <span class="token builtin">bool</span> <span class="token comment">// preemption signal, duplicates stackguard0 = stackpreempt</span>
	preemptStop   <span class="token builtin">bool</span> <span class="token comment">// transition to _Gpreempted on preemption; otherwise, just deschedule</span>
	preemptShrink <span class="token builtin">bool</span> <span class="token comment">// shrink stack at synchronous safe point</span>

	<span class="token comment">// asyncSafePoint is set if g is stopped at an asynchronous</span>
	<span class="token comment">// safe point. This means there are frames on the stack</span>
	<span class="token comment">// without precise pointer information.</span>
	asyncSafePoint <span class="token builtin">bool</span>

	paniconfault <span class="token builtin">bool</span> <span class="token comment">// panic (instead of crash) on unexpected fault address</span>
	gcscandone   <span class="token builtin">bool</span> <span class="token comment">// g has scanned stack; protected by _Gscan bit in status</span>
	throwsplit   <span class="token builtin">bool</span> <span class="token comment">// must not split stack</span>
	<span class="token comment">// activeStackChans indicates that there are unlocked channels</span>
	<span class="token comment">// pointing into this goroutine&#39;s stack. If true, stack</span>
	<span class="token comment">// copying needs to acquire channel locks to protect these</span>
	<span class="token comment">// areas of the stack.</span>
	activeStackChans <span class="token builtin">bool</span>
	<span class="token comment">// parkingOnChan indicates that the goroutine is about to</span>
	<span class="token comment">// park on a chansend or chanrecv. Used to signal an unsafe point</span>
	<span class="token comment">// for stack shrinking. It&#39;s a boolean value, but is updated atomically.</span>
	parkingOnChan <span class="token builtin">uint8</span>

	raceignore     <span class="token builtin">int8</span>     <span class="token comment">// ignore race detection events</span>
	sysblocktraced <span class="token builtin">bool</span>     <span class="token comment">// StartTrace has emitted EvGoInSyscall about this goroutine</span>
	tracking       <span class="token builtin">bool</span>     <span class="token comment">// whether we&#39;re tracking this G for sched latency statistics</span>
	trackingSeq    <span class="token builtin">uint8</span>    <span class="token comment">// used to decide whether to track this G</span>
	runnableStamp  <span class="token builtin">int64</span>    <span class="token comment">// timestamp of when the G last became runnable, only used when tracking</span>
	runnableTime   <span class="token builtin">int64</span>    <span class="token comment">// the amount of time spent runnable, cleared when running, only used when tracking</span>
	sysexitticks   <span class="token builtin">int64</span>    <span class="token comment">// cputicks when syscall has returned (for tracing)</span>
	traceseq       <span class="token builtin">uint64</span>   <span class="token comment">// trace event sequencer</span>
	tracelastp     puintptr <span class="token comment">// last P emitted an event for this goroutine</span>
	lockedm        muintptr
	sig            <span class="token builtin">uint32</span>
	writebuf       <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
	sigcode0       <span class="token builtin">uintptr</span>
	sigcode1       <span class="token builtin">uintptr</span>
	sigpc          <span class="token builtin">uintptr</span>
	gopc           <span class="token builtin">uintptr</span>         <span class="token comment">// pc of go statement that created this goroutine</span>
	ancestors      <span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span>ancestorInfo <span class="token comment">// ancestor information goroutine(s) that created this goroutine (only used if debug.tracebackancestors)</span>
	startpc        <span class="token builtin">uintptr</span>         <span class="token comment">// pc of goroutine function</span>
	racectx        <span class="token builtin">uintptr</span>
	waiting        <span class="token operator">*</span>sudog         <span class="token comment">// sudog structures this g is waiting on (that have a valid elem ptr); in lock order</span>
	cgoCtxt        <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">uintptr</span>      <span class="token comment">// cgo traceback context</span>
	labels         unsafe<span class="token punctuation">.</span>Pointer <span class="token comment">// profiler labels</span>
	timer          <span class="token operator">*</span>timer         <span class="token comment">// cached timer for time.Sleep</span>
	selectDone     <span class="token builtin">uint32</span>         <span class="token comment">// are we participating in a select and did someone win the race?</span>

	<span class="token comment">// Per-G GC state</span>

	<span class="token comment">// gcAssistBytes is this G&#39;s GC assist credit in terms of</span>
	<span class="token comment">// bytes allocated. If this is positive, then the G has credit</span>
	<span class="token comment">// to allocate gcAssistBytes bytes without assisting. If this</span>
	<span class="token comment">// is negative, then the G must correct this by performing</span>
	<span class="token comment">// scan work. We track this in bytes to make it fast to update</span>
	<span class="token comment">// and check for debt in the malloc hot path. The assist ratio</span>
	<span class="token comment">// determines how this corresponds to scan work debt.</span>
	gcAssistBytes <span class="token builtin">int64</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,55),h=n("li",null,"m：在 p 的代理，负责执行当前 g 的 m",-1),f=n("li",null,"sched.pc：保存 CPU 的 rip 寄存器的值，指向程序下一条执行指令的地址",-1),y=n("li",null,"sched.ret：保存系统调用的返回值",-1),w=n("li",null,"sched.bp：保存 CPU 的 rbp 寄存器的值，存储函数栈帧的起始位置",-1),x=e(`<h4 id="g-的状态" tabindex="-1"><a class="header-anchor" href="#g-的状态" aria-hidden="true">#</a> g 的状态</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	<span class="token comment">// G status</span>
	<span class="token comment">//</span>
	<span class="token comment">// Beyond indicating the general state of a G, the G status</span>
	<span class="token comment">// acts like a lock on the goroutine&#39;s stack (and hence its</span>
	<span class="token comment">// ability to execute user code).</span>
	<span class="token comment">//</span>
	<span class="token comment">// If you add to this list, add to the list</span>
	<span class="token comment">// of &quot;okay during garbage collection&quot; status</span>
	<span class="token comment">// in mgcmark.go too.</span>
	<span class="token comment">//</span>
	<span class="token comment">// TODO(austin): The _Gscan bit could be much lighter-weight.</span>
	<span class="token comment">// For example, we could choose not to run _Gscanrunnable</span>
	<span class="token comment">// goroutines found in the run queue, rather than CAS-looping</span>
	<span class="token comment">// until they become _Grunnable. And transitions like</span>
	<span class="token comment">// _Gscanwaiting -&gt; _Gscanrunnable are actually okay because</span>
	<span class="token comment">// they don&#39;t affect stack ownership.</span>

	<span class="token comment">// _Gidle means this goroutine was just allocated and has not</span>
	<span class="token comment">// yet been initialized.</span>
	_Gidle <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// 0</span>

	<span class="token comment">// _Grunnable means this goroutine is on a run queue. It is</span>
	<span class="token comment">// not currently executing user code. The stack is not owned.</span>
	_Grunnable <span class="token comment">// 1</span>

	<span class="token comment">// _Grunning means this goroutine may execute user code. The</span>
	<span class="token comment">// stack is owned by this goroutine. It is not on a run queue.</span>
	<span class="token comment">// It is assigned an M and a P (g.m and g.m.p are valid).</span>
	_Grunning <span class="token comment">// 2</span>

	<span class="token comment">// _Gsyscall means this goroutine is executing a system call.</span>
	<span class="token comment">// It is not executing user code. The stack is owned by this</span>
	<span class="token comment">// goroutine. It is not on a run queue. It is assigned an M.</span>
	_Gsyscall <span class="token comment">// 3</span>

	<span class="token comment">// _Gwaiting means this goroutine is blocked in the runtime.</span>
	<span class="token comment">// It is not executing user code. It is not on a run queue,</span>
	<span class="token comment">// but should be recorded somewhere (e.g., a channel wait</span>
	<span class="token comment">// queue) so it can be ready()d when necessary. The stack is</span>
	<span class="token comment">// not owned *except* that a channel operation may read or</span>
	<span class="token comment">// write parts of the stack under the appropriate channel</span>
	<span class="token comment">// lock. Otherwise, it is not safe to access the stack after a</span>
	<span class="token comment">// goroutine enters _Gwaiting (e.g., it may get moved).</span>
	_Gwaiting <span class="token comment">// 4</span>

	<span class="token comment">// _Gmoribund_unused is currently unused, but hardcoded in gdb</span>
	<span class="token comment">// scripts.</span>
	_Gmoribund_unused <span class="token comment">// 5</span>

	<span class="token comment">// _Gdead means this goroutine is currently unused. It may be</span>
	<span class="token comment">// just exited, on a free list, or just being initialized. It</span>
	<span class="token comment">// is not executing user code. It may or may not have a stack</span>
	<span class="token comment">// allocated. The G and its stack (if any) are owned by the M</span>
	<span class="token comment">// that is exiting the G or that obtained the G from the free</span>
	<span class="token comment">// list.</span>
	_Gdead <span class="token comment">// 6</span>

	<span class="token comment">// _Genqueue_unused is currently unused.</span>
	_Genqueue_unused <span class="token comment">// 7</span>

	<span class="token comment">// _Gcopystack means this goroutine&#39;s stack is being moved. It</span>
	<span class="token comment">// is not executing user code and is not on a run queue. The</span>
	<span class="token comment">// stack is owned by the goroutine that put it in _Gcopystack.</span>
	_Gcopystack <span class="token comment">// 8</span>

	<span class="token comment">// _Gpreempted means this goroutine stopped itself for a</span>
	<span class="token comment">// suspendG preemption. It is like _Gwaiting, but nothing is</span>
	<span class="token comment">// yet responsible for ready()ing it. Some suspendG must CAS</span>
	<span class="token comment">// the status to _Gwaiting to take responsibility for</span>
	<span class="token comment">// ready()ing this G.</span>
	_Gpreempted <span class="token comment">// 9</span>

	_Gscan          <span class="token operator">=</span> <span class="token number">0x1000</span>
	_Gscanrunnable  <span class="token operator">=</span> _Gscan <span class="token operator">+</span> _Grunnable  <span class="token comment">// 0x1001</span>
	_Gscanrunning   <span class="token operator">=</span> _Gscan <span class="token operator">+</span> _Grunning   <span class="token comment">// 0x1002</span>
	_Gscansyscall   <span class="token operator">=</span> _Gscan <span class="token operator">+</span> _Gsyscall   <span class="token comment">// 0x1003</span>
	_Gscanwaiting   <span class="token operator">=</span> _Gscan <span class="token operator">+</span> _Gwaiting   <span class="token comment">// 0x1004</span>
	_Gscanpreempted <span class="token operator">=</span> _Gscan <span class="token operator">+</span> _Gpreempted <span class="token comment">// 0x1009</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>_Gidle 值为 0，为协程开始创建时的状态，此时尚未初始化完成</li><li>_Grunnable 值 为 1，协程在待执行队列中，等待被执行</li><li>_Grunning 值为 2，协程正在执行，同一时刻一个 p 中只有一个 g 处于此状态</li><li>_Gsyscall 值为 3，协程正在执行系统调用</li><li>_Gwaiting 值为 4，协程处于挂起态，需要等待被唤醒. gc、channel 通信或者锁操作时经常会进入这种状态</li><li>_Gdead 值为 6，协程刚<code>初始化完成</code>或者<code>已经被销毁</code>，会处于此状态</li><li>_Gcopystack 值为 8，协程正在栈扩容流程中</li><li>_Greempted 值为 9，协程被抢占后的状态</li></ol><h3 id="m" tabindex="-1"><a class="header-anchor" href="#m" aria-hidden="true">#</a> m</h3><ol><li>m 即 machine，是 golang 中对线程的抽象</li><li>m 不直接执行 g，而是先和 p 绑定，由其实现代理</li><li>借由 p 的存在，m 无需和 g 绑死，也无需记录 g 的状态信息，因此 g 在全生命周期中可以实现跨 m 执行</li></ol><p>包含<code>g0的指针</code>，g0 不是用户协程，而是负责 g 之间的切换调度</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> m <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	g0      <span class="token operator">*</span>g     <span class="token comment">// goroutine with scheduling stack</span>
	morebuf gobuf  <span class="token comment">// gobuf arg to morestack</span>
	divmod  <span class="token builtin">uint32</span> <span class="token comment">// div/mod denominator for arm - known to liblink</span>
	<span class="token boolean">_</span>       <span class="token builtin">uint32</span> <span class="token comment">// align next field to 8 bytes</span>

	<span class="token comment">// Fields not known to debuggers.</span>
	procid        <span class="token builtin">uint64</span>            <span class="token comment">// for debuggers, but offset not hard-coded</span>
	gsignal       <span class="token operator">*</span>g                <span class="token comment">// signal-handling g</span>
	goSigStack    gsignalStack      <span class="token comment">// Go-allocated signal handling stack</span>
	sigmask       sigset            <span class="token comment">// storage for saved signal mask</span>
	tls           <span class="token punctuation">[</span>tlsSlots<span class="token punctuation">]</span><span class="token builtin">uintptr</span> <span class="token comment">// thread-local storage (for x86 extern register)</span>
	mstartfn      <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	curg          <span class="token operator">*</span>g       <span class="token comment">// current running goroutine</span>
	caughtsig     guintptr <span class="token comment">// goroutine running during fatal signal</span>
	p             puintptr <span class="token comment">// attached p for executing go code (nil if not executing go code)</span>
	nextp         puintptr
	oldp          puintptr <span class="token comment">// the p that was attached before executing a syscall</span>
	id            <span class="token builtin">int64</span>
	mallocing     <span class="token builtin">int32</span>
	throwing      <span class="token builtin">int32</span>
	preemptoff    <span class="token builtin">string</span> <span class="token comment">// if != &quot;&quot;, keep curg running on this m</span>
	locks         <span class="token builtin">int32</span>
	dying         <span class="token builtin">int32</span>
	profilehz     <span class="token builtin">int32</span>
	spinning      <span class="token builtin">bool</span> <span class="token comment">// m is out of work and is actively looking for work</span>
	blocked       <span class="token builtin">bool</span> <span class="token comment">// m is blocked on a note</span>
	newSigstack   <span class="token builtin">bool</span> <span class="token comment">// minit on C thread called sigaltstack</span>
	printlock     <span class="token builtin">int8</span>
	incgo         <span class="token builtin">bool</span>   <span class="token comment">// m is executing a cgo call</span>
	freeWait      <span class="token builtin">uint32</span> <span class="token comment">// if == 0, safe to free g0 and delete m (atomic)</span>
	fastrand      <span class="token builtin">uint64</span>
	needextram    <span class="token builtin">bool</span>
	traceback     <span class="token builtin">uint8</span>
	ncgocall      <span class="token builtin">uint64</span>      <span class="token comment">// number of cgo calls in total</span>
	ncgo          <span class="token builtin">int32</span>       <span class="token comment">// number of cgo calls currently in progress</span>
	cgoCallersUse <span class="token builtin">uint32</span>      <span class="token comment">// if non-zero, cgoCallers in use temporarily</span>
	cgoCallers    <span class="token operator">*</span>cgoCallers <span class="token comment">// cgo traceback if crashing in cgo call</span>
	park          note
	alllink       <span class="token operator">*</span>m <span class="token comment">// on allm</span>
	schedlink     muintptr
	lockedg       guintptr
	createstack   <span class="token punctuation">[</span><span class="token number">32</span><span class="token punctuation">]</span><span class="token builtin">uintptr</span> <span class="token comment">// stack that created this thread.</span>
	lockedExt     <span class="token builtin">uint32</span>      <span class="token comment">// tracking for external LockOSThread</span>
	lockedInt     <span class="token builtin">uint32</span>      <span class="token comment">// tracking for internal lockOSThread</span>
	nextwaitm     muintptr    <span class="token comment">// next m waiting for lock</span>
	waitunlockf   <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token operator">*</span>g<span class="token punctuation">,</span> unsafe<span class="token punctuation">.</span>Pointer<span class="token punctuation">)</span> <span class="token builtin">bool</span>
	waitlock      unsafe<span class="token punctuation">.</span>Pointer
	waittraceev   <span class="token builtin">byte</span>
	waittraceskip <span class="token builtin">int</span>
	startingtrace <span class="token builtin">bool</span>
	syscalltick   <span class="token builtin">uint32</span>
	freelink      <span class="token operator">*</span>m <span class="token comment">// on sched.freem</span>

	<span class="token comment">// these are here because they are too large to be on the stack</span>
	<span class="token comment">// of low-level NOSPLIT functions.</span>
	libcall   libcall
	libcallpc <span class="token builtin">uintptr</span> <span class="token comment">// for cpu profiler</span>
	libcallsp <span class="token builtin">uintptr</span>
	libcallg  guintptr
	syscall   libcall <span class="token comment">// stores syscall parameters on windows</span>

	vdsoSP <span class="token builtin">uintptr</span> <span class="token comment">// SP for traceback while in VDSO call (0 if not in call)</span>
	vdsoPC <span class="token builtin">uintptr</span> <span class="token comment">// PC for traceback while in VDSO call</span>

	<span class="token comment">// preemptGen counts the number of completed preemption</span>
	<span class="token comment">// signals. This is used to detect when a preemption is</span>
	<span class="token comment">// requested, but fails. Accessed atomically.</span>
	preemptGen <span class="token builtin">uint32</span>

	<span class="token comment">// Whether this is a pending preemption signal on this M.</span>
	<span class="token comment">// Accessed atomically.</span>
	signalPending <span class="token builtin">uint32</span>

	dlogPerM

	mOS

	<span class="token comment">// Up to 10 locks held by this m, maintained by the lock ranking code.</span>
	locksHeldLen <span class="token builtin">int</span>
	locksHeld    <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span>heldLockInfo
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>g0：一类特殊的调度协程，不用于执行用户函数，负责执行 g 之间的切换调度. 与 m 的关系为 1:1</li><li>tls：thread-local storage，线程本地存储，存储内容只对当前线程可见. 线程本地存储的是 m.tls 的地址，m.tls[0] 存储的是当前运行的 g，因此线程可以通过 g 找到当前的 m、p、g0 等信息</li></ol><h3 id="p" tabindex="-1"><a class="header-anchor" href="#p" aria-hidden="true">#</a> p</h3><ol><li>p 即 processor，是 golang 中的调度器</li><li>p 是 gmp 的中枢，借由 p 承上启下，实现 g 和 m 之间的动态有机结合</li><li>对 g 而言，p 是其 cpu，g 只有被 p 调度，才得以执行</li><li>对 m 而言，p 是其执行代理，为其提供必要信息的同时（可执行的 g、内存分配情况等），并隐藏了繁杂的调度细节</li><li>p 的数量决定了 g 最大并行数量，可由用户通过 GOMAXPROCS 进行设定（超过 CPU 核数时无意义）</li></ol><p>包含 runq 本队 g 的队列，头标识，尾标识，下一个执行的 p</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> p <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	id          <span class="token builtin">int32</span>
	status      <span class="token builtin">uint32</span> <span class="token comment">// one of pidle/prunning/...</span>
	link        puintptr
	schedtick   <span class="token builtin">uint32</span>     <span class="token comment">// incremented on every scheduler call</span>
	syscalltick <span class="token builtin">uint32</span>     <span class="token comment">// incremented on every system call</span>
	sysmontick  sysmontick <span class="token comment">// last tick observed by sysmon</span>
	m           muintptr   <span class="token comment">// back-link to associated m (nil if idle)</span>
	mcache      <span class="token operator">*</span>mcache
	pcache      pageCache
	raceprocctx <span class="token builtin">uintptr</span>

	deferpool    <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>_defer <span class="token comment">// pool of available defer structs (see panic.go)</span>
	deferpoolbuf <span class="token punctuation">[</span><span class="token number">32</span><span class="token punctuation">]</span><span class="token operator">*</span>_defer

	<span class="token comment">// Cache of goroutine ids, amortizes accesses to runtime·sched.goidgen.</span>
	goidcache    <span class="token builtin">uint64</span>
	goidcacheend <span class="token builtin">uint64</span>

	<span class="token comment">// Queue of runnable goroutines. Accessed without lock.</span>
	runqhead <span class="token builtin">uint32</span>
	runqtail <span class="token builtin">uint32</span>
	runq     <span class="token punctuation">[</span><span class="token number">256</span><span class="token punctuation">]</span>guintptr
	<span class="token comment">// runnext, if non-nil, is a runnable G that was ready&#39;d by</span>
	<span class="token comment">// the current G and should be run next instead of what&#39;s in</span>
	<span class="token comment">// runq if there&#39;s time remaining in the running G&#39;s time</span>
	<span class="token comment">// slice. It will inherit the time left in the current time</span>
	<span class="token comment">// slice. If a set of goroutines is locked in a</span>
	<span class="token comment">// communicate-and-wait pattern, this schedules that set as a</span>
	<span class="token comment">// unit and eliminates the (potentially large) scheduling</span>
	<span class="token comment">// latency that otherwise arises from adding the ready&#39;d</span>
	<span class="token comment">// goroutines to the end of the run queue.</span>
	<span class="token comment">//</span>
	<span class="token comment">// Note that while other P&#39;s may atomically CAS this to zero,</span>
	<span class="token comment">// only the owner P can CAS it to a valid G.</span>
	runnext guintptr

	<span class="token comment">// Available G&#39;s (status == Gdead)</span>
	gFree <span class="token keyword">struct</span> <span class="token punctuation">{</span>
		gList
		n <span class="token builtin">int32</span>
	<span class="token punctuation">}</span>

	sudogcache <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>sudog
	sudogbuf   <span class="token punctuation">[</span><span class="token number">128</span><span class="token punctuation">]</span><span class="token operator">*</span>sudog

	<span class="token comment">// Cache of mspan objects from the heap.</span>
	mspancache <span class="token keyword">struct</span> <span class="token punctuation">{</span>
		<span class="token comment">// We need an explicit length here because this field is used</span>
		<span class="token comment">// in allocation codepaths where write barriers are not allowed,</span>
		<span class="token comment">// and eliminating the write barrier/keeping it eliminated from</span>
		<span class="token comment">// slice updates is tricky, moreso than just managing the length</span>
		<span class="token comment">// ourselves.</span>
		<span class="token builtin">len</span> <span class="token builtin">int</span>
		buf <span class="token punctuation">[</span><span class="token number">128</span><span class="token punctuation">]</span><span class="token operator">*</span>mspan
	<span class="token punctuation">}</span>

	tracebuf traceBufPtr

	<span class="token comment">// traceSweep indicates the sweep events should be traced.</span>
	<span class="token comment">// This is used to defer the sweep start event until a span</span>
	<span class="token comment">// has actually been swept.</span>
	traceSweep <span class="token builtin">bool</span>
	<span class="token comment">// traceSwept and traceReclaimed track the number of bytes</span>
	<span class="token comment">// swept and reclaimed by sweeping in the current sweep loop.</span>
	traceSwept<span class="token punctuation">,</span> traceReclaimed <span class="token builtin">uintptr</span>

	palloc persistentAlloc <span class="token comment">// per-P to avoid mutex</span>

	<span class="token boolean">_</span> <span class="token builtin">uint32</span> <span class="token comment">// Alignment for atomic fields below</span>

	<span class="token comment">// The when field of the first entry on the timer heap.</span>
	<span class="token comment">// This is updated using atomic functions.</span>
	<span class="token comment">// This is 0 if the timer heap is empty.</span>
	timer0When <span class="token builtin">uint64</span>

	<span class="token comment">// The earliest known nextwhen field of a timer with</span>
	<span class="token comment">// timerModifiedEarlier status. Because the timer may have been</span>
	<span class="token comment">// modified again, there need not be any timer with this value.</span>
	<span class="token comment">// This is updated using atomic functions.</span>
	<span class="token comment">// This is 0 if there are no timerModifiedEarlier timers.</span>
	timerModifiedEarliest <span class="token builtin">uint64</span>

	<span class="token comment">// Per-P GC state</span>
	gcAssistTime         <span class="token builtin">int64</span> <span class="token comment">// Nanoseconds in assistAlloc</span>
	gcFractionalMarkTime <span class="token builtin">int64</span> <span class="token comment">// Nanoseconds in fractional mark worker (atomic)</span>

	<span class="token comment">// gcMarkWorkerMode is the mode for the next mark worker to run in.</span>
	<span class="token comment">// That is, this is used to communicate with the worker goroutine</span>
	<span class="token comment">// selected for immediate execution by</span>
	<span class="token comment">// gcController.findRunnableGCWorker. When scheduling other goroutines,</span>
	<span class="token comment">// this field must be set to gcMarkWorkerNotWorker.</span>
	gcMarkWorkerMode gcMarkWorkerMode
	<span class="token comment">// gcMarkWorkerStartTime is the nanotime() at which the most recent</span>
	<span class="token comment">// mark worker started.</span>
	gcMarkWorkerStartTime <span class="token builtin">int64</span>

	<span class="token comment">// gcw is this P&#39;s GC work buffer cache. The work buffer is</span>
	<span class="token comment">// filled by write barriers, drained by mutator assists, and</span>
	<span class="token comment">// disposed on certain GC state transitions.</span>
	gcw gcWork

	<span class="token comment">// wbBuf is this P&#39;s GC write barrier buffer.</span>
	<span class="token comment">//</span>
	<span class="token comment">// TODO: Consider caching this in the running G.</span>
	wbBuf wbBuf

	runSafePointFn <span class="token builtin">uint32</span> <span class="token comment">// if 1, run sched.safePointFn at next safe point</span>

	<span class="token comment">// statsSeq is a counter indicating whether this P is currently</span>
	<span class="token comment">// writing any stats. Its value is even when not, odd when it is.</span>
	statsSeq <span class="token builtin">uint32</span>

	<span class="token comment">// Lock for timers. We normally access the timers while running</span>
	<span class="token comment">// on this P, but the scheduler can also do it from a different P.</span>
	timersLock mutex

	<span class="token comment">// Actions to take at some time. This is used to implement the</span>
	<span class="token comment">// standard library&#39;s time package.</span>
	<span class="token comment">// Must hold timersLock to access.</span>
	timers <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>timer

	<span class="token comment">// Number of timers in P&#39;s heap.</span>
	<span class="token comment">// Modified using atomic instructions.</span>
	numTimers <span class="token builtin">uint32</span>

	<span class="token comment">// Number of timerDeleted timers in P&#39;s heap.</span>
	<span class="token comment">// Modified using atomic instructions.</span>
	deletedTimers <span class="token builtin">uint32</span>

	<span class="token comment">// Race context used while executing timer functions.</span>
	timerRaceCtx <span class="token builtin">uintptr</span>

	<span class="token comment">// scannableStackSizeDelta accumulates the amount of stack space held by</span>
	<span class="token comment">// live goroutines (i.e. those eligible for stack scanning).</span>
	<span class="token comment">// Flushed to gcController.scannableStackSize once scannableStackSizeSlack</span>
	<span class="token comment">// or -scannableStackSizeSlack is reached.</span>
	scannableStackSizeDelta <span class="token builtin">int64</span>

	<span class="token comment">// preempt is set to indicate that this P should be enter the</span>
	<span class="token comment">// scheduler ASAP (regardless of what G is running on it).</span>
	preempt <span class="token builtin">bool</span>

	<span class="token comment">// Padding is no longer needed. False sharing is now not a worry because p is large enough</span>
	<span class="token comment">// that its size class is an integer multiple of the cache line size (for any of our architectures).</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>runq：本地 goroutine 队列，最大长度为 256</li><li>runqhead：队列头部</li><li>runqtail：队列尾部</li><li>runnext：下一个可执行的 goroutine</li></ol><h3 id="全局队列" tabindex="-1"><a class="header-anchor" href="#全局队列" aria-hidden="true">#</a> 全局队列</h3><p>sched 是全局 goroutine 队列的封装，因为 p 可以获取这里面的 g，所以包含了锁</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> schedt <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">// accessed atomically. keep at top to ensure alignment on 32-bit systems.</span>
	goidgen   <span class="token builtin">uint64</span>
	lastpoll  <span class="token builtin">uint64</span> <span class="token comment">// time of last network poll, 0 if currently polling</span>
	pollUntil <span class="token builtin">uint64</span> <span class="token comment">// time to which current poll is sleeping</span>

	lock mutex

	<span class="token comment">// When increasing nmidle, nmidlelocked, nmsys, or nmfreed, be</span>
	<span class="token comment">// sure to call checkdead().</span>

	midle        muintptr <span class="token comment">// idle m&#39;s waiting for work</span>
	nmidle       <span class="token builtin">int32</span>    <span class="token comment">// number of idle m&#39;s waiting for work</span>
	nmidlelocked <span class="token builtin">int32</span>    <span class="token comment">// number of locked m&#39;s waiting for work</span>
	mnext        <span class="token builtin">int64</span>    <span class="token comment">// number of m&#39;s that have been created and next M ID</span>
	maxmcount    <span class="token builtin">int32</span>    <span class="token comment">// maximum number of m&#39;s allowed (or die)</span>
	nmsys        <span class="token builtin">int32</span>    <span class="token comment">// number of system m&#39;s not counted for deadlock</span>
	nmfreed      <span class="token builtin">int64</span>    <span class="token comment">// cumulative number of freed m&#39;s</span>

	ngsys <span class="token builtin">uint32</span> <span class="token comment">// number of system goroutines; updated atomically</span>

	pidle      puintptr <span class="token comment">// idle p&#39;s</span>
	npidle     <span class="token builtin">uint32</span>
	nmspinning <span class="token builtin">uint32</span> <span class="token comment">// See &quot;Worker thread parking/unparking&quot; comment in proc.go.</span>

	<span class="token comment">// Global runnable queue.</span>
	runq     gQueue
	runqsize <span class="token builtin">int32</span>

	<span class="token comment">// disable controls selective disabling of the scheduler.</span>
	<span class="token comment">//</span>
	<span class="token comment">// Use schedEnableUser to control this.</span>
	<span class="token comment">//</span>
	<span class="token comment">// disable is protected by sched.lock.</span>
	disable <span class="token keyword">struct</span> <span class="token punctuation">{</span>
		<span class="token comment">// user disables scheduling of user goroutines.</span>
		user     <span class="token builtin">bool</span>
		runnable gQueue <span class="token comment">// pending runnable Gs</span>
		n        <span class="token builtin">int32</span>  <span class="token comment">// length of runnable</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Global cache of dead G&#39;s.</span>
	gFree <span class="token keyword">struct</span> <span class="token punctuation">{</span>
		lock    mutex
		stack   gList <span class="token comment">// Gs with stacks</span>
		noStack gList <span class="token comment">// Gs without stacks</span>
		n       <span class="token builtin">int32</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Central cache of sudog structs.</span>
	sudoglock  mutex
	sudogcache <span class="token operator">*</span>sudog

	<span class="token comment">// Central pool of available defer structs.</span>
	deferlock mutex
	deferpool <span class="token operator">*</span>_defer

	<span class="token comment">// freem is the list of m&#39;s waiting to be freed when their</span>
	<span class="token comment">// m.exited is set. Linked through m.freelink.</span>
	freem <span class="token operator">*</span>m

	gcwaiting  <span class="token builtin">uint32</span> <span class="token comment">// gc is waiting to run</span>
	stopwait   <span class="token builtin">int32</span>
	stopnote   note
	sysmonwait <span class="token builtin">uint32</span>
	sysmonnote note

	<span class="token comment">// safepointFn should be called on each P at the next GC</span>
	<span class="token comment">// safepoint if p.runSafePointFn is set.</span>
	safePointFn   <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token operator">*</span>p<span class="token punctuation">)</span>
	safePointWait <span class="token builtin">int32</span>
	safePointNote note

	profilehz <span class="token builtin">int32</span> <span class="token comment">// cpu profiling rate</span>

	procresizetime <span class="token builtin">int64</span> <span class="token comment">// nanotime() of last change to gomaxprocs</span>
	totaltime      <span class="token builtin">int64</span> <span class="token comment">// ∫gomaxprocs dt up to procresizetime</span>

	<span class="token comment">// sysmonlock protects sysmon&#39;s actions on the runtime.</span>
	<span class="token comment">//</span>
	<span class="token comment">// Acquire and hold this mutex to block sysmon from interacting</span>
	<span class="token comment">// with the rest of the runtime.</span>
	sysmonlock mutex

	<span class="token comment">// timeToRun is a distribution of scheduling latencies, defined</span>
	<span class="token comment">// as the sum of time a G spends in the _Grunnable state before</span>
	<span class="token comment">// it transitions to _Grunning.</span>
	<span class="token comment">//</span>
	<span class="token comment">// timeToRun is protected by sched.lock.</span>
	timeToRun timeHistogram
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>lock：一把操作全局队列时使用的锁</li><li>runq：全局 goroutine 队列</li><li>runqsize：全局 goroutine 队列的容量</li></ol><h2 id="调度" tabindex="-1"><a class="header-anchor" href="#调度" aria-hidden="true">#</a> 调度</h2><p>有两种 g，一种 g0，一种普通 g，m 通过 p 调度执行的 goroutine 永远在普通 g 和 g0 之间进行切换</p><p>g0 通过<code>func gogo(buf *gobuf)</code>调度 g，g 需要主动让渡或被动调度时，再通过<code>func mcall(fn func(*g))</code>交还执行权</p><h3 id="调度类型" tabindex="-1"><a class="header-anchor" href="#调度类型" aria-hidden="true">#</a> 调度类型</h3><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>g 包含 m，m 包含 g0，p 和 m 绑定或者解绑，p 包含本地 g 的队列</p><h4 id="主动调度" tabindex="-1"><a class="header-anchor" href="#主动调度" aria-hidden="true">#</a> 主动调度</h4><p>用户执行 runtime 下<code>func Gosched()</code>当前的 g 会主动让出 p 的执行权，从 running 状态转换成 runnable 状态，并且放到全局队列中，而且这个 g 对应的 m 的 g0 会重新寻找其他可执行的 g</p><h4 id="被动调度" tabindex="-1"><a class="header-anchor" href="#被动调度" aria-hidden="true">#</a> 被动调度</h4><p>典型场景，获取锁失败被阻塞；写一个满的 chan，或者读一空 chan 都会陷入阻塞；主要依赖 <code>func gopark()</code>，g 的状态变为 waiting 状态</p>',27),_=n("code",null,"func goready()",-1),G=e('<h4 id="正常调度" tabindex="-1"><a class="header-anchor" href="#正常调度" aria-hidden="true">#</a> 正常调度</h4><p>比较简单，g 中的执行任务已完成，g0 会将当前 g 置为死亡状态，发起新一轮调度</p><h4 id="抢占调度" tabindex="-1"><a class="header-anchor" href="#抢占调度" aria-hidden="true">#</a> 抢占调度</h4><p>前三种都是用户态，并且由 m 下的 g0 完成，唯独抢占调度不同。</p><p>典型场景，比如<code>g陷入系统调用时间过长</code>，且全局的 p 资源比较紧缺，又由于<code>g和m是绑定的不能变</code>要继续执行，此时将 <code>p 和 g，m解绑</code>，抢占出来用于其他 g 的调度，等 g 完成系统调用后，会重新进入可执行队列中等待被调度。</p><p>因为发起系统调用时需要打破用户态的边界进入内核态，此时 m 也会因系统调用而陷入僵直，无法主动完成抢占调度的行为，所以需要一个全局角色，也就是全局监控者 g，这个全局监控者 g 会越过 p 直接与一个 m 进行绑定，不断轮询对所有 p 的执行状况进行监控. 倘若发现满足抢占调度的条件，则会从第三方的角度出手干预，主动发起该动作。</p><h3 id="调度流程" tabindex="-1"><a class="header-anchor" href="#调度流程" aria-hidden="true">#</a> 调度流程</h3><figure><img src="'+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>以 g0 -&gt; g -&gt; g0 的一轮循环为例进行串联</li><li>g0 执行 <code>schedule()</code> 函数，寻找到用于执行的 g</li><li>g0 执行 <code>execute()</code> 方法，更新当前 g、p 的状态信息，并调用 <code>gogo()</code> 方法，将执行权交给 g</li><li>g 因主动让渡( <code>gosche_m()</code> )、被动调度( <code>park_m()</code> )、正常结束( <code>goexit0()</code> )等原因，调用 <code>m_call()</code> 函数，执行权重新回到 g0 手中</li><li>g0 执行 <code>schedule()</code> 函数，开启新一轮循环</li></ol><h4 id="schedule" tabindex="-1"><a class="header-anchor" href="#schedule" aria-hidden="true">#</a> schedule</h4><p>调度流程的主干方法是位于 runtime/proc.go 中的 schedule 函数，此时的执行权位于 g0 手中</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// One round of scheduler: find a runnable goroutine and execute it.</span>
<span class="token comment">// Never returns.</span>
<span class="token keyword">func</span> <span class="token function">schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	_g_ <span class="token operator">:=</span> <span class="token function">getg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> _g_<span class="token punctuation">.</span>m<span class="token punctuation">.</span>locks <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token function">throw</span><span class="token punctuation">(</span><span class="token string">&quot;schedule: holding locks&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> _g_<span class="token punctuation">.</span>m<span class="token punctuation">.</span>lockedg <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token function">stoplockedm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token function">execute</span><span class="token punctuation">(</span>_g_<span class="token punctuation">.</span>m<span class="token punctuation">.</span>lockedg<span class="token punctuation">.</span><span class="token function">ptr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// Never returns.</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// We should not schedule away from a g that is executing a cgo call,</span>
	<span class="token comment">// since the cgo call is using the m&#39;s g0 stack.</span>
	<span class="token keyword">if</span> _g_<span class="token punctuation">.</span>m<span class="token punctuation">.</span>incgo <span class="token punctuation">{</span>
		<span class="token function">throw</span><span class="token punctuation">(</span><span class="token string">&quot;schedule: in cgo&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

top<span class="token punctuation">:</span>
	pp <span class="token operator">:=</span> _g_<span class="token punctuation">.</span>m<span class="token punctuation">.</span>p<span class="token punctuation">.</span><span class="token function">ptr</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	pp<span class="token punctuation">.</span>preempt <span class="token operator">=</span> <span class="token boolean">false</span>

	<span class="token keyword">if</span> sched<span class="token punctuation">.</span>gcwaiting <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token function">gcstopm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">goto</span> top
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> pp<span class="token punctuation">.</span>runSafePointFn <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token function">runSafePointFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Sanity check: if we are spinning, the run queue should be empty.</span>
	<span class="token comment">// Check this before calling checkTimers, as that might call</span>
	<span class="token comment">// goready to put a ready goroutine on the local run queue.</span>
	<span class="token keyword">if</span> _g_<span class="token punctuation">.</span>m<span class="token punctuation">.</span>spinning <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>pp<span class="token punctuation">.</span>runnext <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">||</span> pp<span class="token punctuation">.</span>runqhead <span class="token operator">!=</span> pp<span class="token punctuation">.</span>runqtail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">throw</span><span class="token punctuation">(</span><span class="token string">&quot;schedule: spinning with local work&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token function">checkTimers</span><span class="token punctuation">(</span>pp<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

	<span class="token keyword">var</span> gp <span class="token operator">*</span>g
	<span class="token keyword">var</span> inheritTime <span class="token builtin">bool</span>

	<span class="token comment">// Normal goroutines will check for need to wakeP in ready,</span>
	<span class="token comment">// but GCworkers and tracereaders will not, so the check must</span>
	<span class="token comment">// be done here instead.</span>
	tryWakeP <span class="token operator">:=</span> <span class="token boolean">false</span>
	<span class="token keyword">if</span> trace<span class="token punctuation">.</span>enabled <span class="token operator">||</span> trace<span class="token punctuation">.</span>shutdown <span class="token punctuation">{</span>
		gp <span class="token operator">=</span> <span class="token function">traceReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> gp <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token function">casgstatus</span><span class="token punctuation">(</span>gp<span class="token punctuation">,</span> _Gwaiting<span class="token punctuation">,</span> _Grunnable<span class="token punctuation">)</span>
			<span class="token function">traceGoUnpark</span><span class="token punctuation">(</span>gp<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
			tryWakeP <span class="token operator">=</span> <span class="token boolean">true</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> gp <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> gcBlackenEnabled <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		gp <span class="token operator">=</span> gcController<span class="token punctuation">.</span><span class="token function">findRunnableGCWorker</span><span class="token punctuation">(</span>_g_<span class="token punctuation">.</span>m<span class="token punctuation">.</span>p<span class="token punctuation">.</span><span class="token function">ptr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> gp <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			tryWakeP <span class="token operator">=</span> <span class="token boolean">true</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> gp <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token comment">// Check the global runnable queue once in a while to ensure fairness.</span>
		<span class="token comment">// Otherwise two goroutines can completely occupy the local runqueue</span>
		<span class="token comment">// by constantly respawning each other.</span>
		<span class="token keyword">if</span> _g_<span class="token punctuation">.</span>m<span class="token punctuation">.</span>p<span class="token punctuation">.</span><span class="token function">ptr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>schedtick<span class="token operator">%</span><span class="token number">61</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> sched<span class="token punctuation">.</span>runqsize <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			<span class="token function">lock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>sched<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>
			gp <span class="token operator">=</span> <span class="token function">globrunqget</span><span class="token punctuation">(</span>_g_<span class="token punctuation">.</span>m<span class="token punctuation">.</span>p<span class="token punctuation">.</span><span class="token function">ptr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
			<span class="token function">unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>sched<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> gp <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		gp<span class="token punctuation">,</span> inheritTime <span class="token operator">=</span> <span class="token function">runqget</span><span class="token punctuation">(</span>_g_<span class="token punctuation">.</span>m<span class="token punctuation">.</span>p<span class="token punctuation">.</span><span class="token function">ptr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token comment">// We can see gp != nil here even if the M is spinning,</span>
		<span class="token comment">// if checkTimers added a local goroutine via goready.</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> gp <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		gp<span class="token punctuation">,</span> inheritTime <span class="token operator">=</span> <span class="token function">findrunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// blocks until work is available</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// This thread is going to run a goroutine and is not spinning anymore,</span>
	<span class="token comment">// so if it was marked as spinning we need to reset it now and potentially</span>
	<span class="token comment">// start a new spinning M.</span>
	<span class="token keyword">if</span> _g_<span class="token punctuation">.</span>m<span class="token punctuation">.</span>spinning <span class="token punctuation">{</span>
		<span class="token function">resetspinning</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> sched<span class="token punctuation">.</span>disable<span class="token punctuation">.</span>user <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">schedEnabled</span><span class="token punctuation">(</span>gp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// Scheduling of this goroutine is disabled. Put it on</span>
		<span class="token comment">// the list of pending runnable goroutines for when we</span>
		<span class="token comment">// re-enable user scheduling and look again.</span>
		<span class="token function">lock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>sched<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>
		<span class="token keyword">if</span> <span class="token function">schedEnabled</span><span class="token punctuation">(</span>gp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// Something re-enabled scheduling while we</span>
			<span class="token comment">// were acquiring the lock.</span>
			<span class="token function">unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>sched<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			sched<span class="token punctuation">.</span>disable<span class="token punctuation">.</span>runnable<span class="token punctuation">.</span><span class="token function">pushBack</span><span class="token punctuation">(</span>gp<span class="token punctuation">)</span>
			sched<span class="token punctuation">.</span>disable<span class="token punctuation">.</span>n<span class="token operator">++</span>
			<span class="token function">unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>sched<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>
			<span class="token keyword">goto</span> top
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// If about to schedule a not-normal goroutine (a GCworker or tracereader),</span>
	<span class="token comment">// wake a P if there is one.</span>
	<span class="token keyword">if</span> tryWakeP <span class="token punctuation">{</span>
		<span class="token function">wakep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> gp<span class="token punctuation">.</span>lockedm <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token comment">// Hands off own p to the locked m,</span>
		<span class="token comment">// then blocks waiting for a new p.</span>
		<span class="token function">startlockedm</span><span class="token punctuation">(</span>gp<span class="token punctuation">)</span>
		<span class="token keyword">goto</span> top
	<span class="token punctuation">}</span>

	<span class="token function">execute</span><span class="token punctuation">(</span>gp<span class="token punctuation">,</span> inheritTime<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>寻找到下一个执行的 goroutine，使用 findRunnable</li><li>执行该 goroutine，使用 execute</li></ol><h5 id="findrunnable" tabindex="-1"><a class="header-anchor" href="#findrunnable" aria-hidden="true">#</a> findRunnable</h5><p>调度流程中，一个非常核心的步骤，就是为 m 寻找到下一个执行的 g，这部分内容位于 runtime/proc.go 的 findRunnable 方法中</p><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>todo 源码解读</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="execute" tabindex="-1"><a class="header-anchor" href="#execute" aria-hidden="true">#</a> execute</h5><p>当 g0 为 m 寻找到可执行的 g 之后，接下来就开始执行 g. 这部分内容位于 runtime/proc.go 的 execute 方法中</p><figure><img src="`+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>todo 源码解读</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Schedules gp to run on the current M.</span>
<span class="token comment">// If inheritTime is true, gp inherits the remaining time in the</span>
<span class="token comment">// current time slice. Otherwise, it starts a new time slice.</span>
<span class="token comment">// Never returns.</span>
<span class="token comment">//</span>
<span class="token comment">// Write barriers are allowed because this is called immediately after</span>
<span class="token comment">// acquiring a P in several places.</span>
<span class="token comment">//</span>
<span class="token comment">//go:yeswritebarrierrec</span>
<span class="token keyword">func</span> <span class="token function">execute</span><span class="token punctuation">(</span>gp <span class="token operator">*</span>g<span class="token punctuation">,</span> inheritTime <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	_g_ <span class="token operator">:=</span> <span class="token function">getg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// Assign gp.m before entering _Grunning so running Gs have an</span>
	<span class="token comment">// M.</span>
	_g_<span class="token punctuation">.</span>m<span class="token punctuation">.</span>curg <span class="token operator">=</span> gp
	gp<span class="token punctuation">.</span>m <span class="token operator">=</span> _g_<span class="token punctuation">.</span>m
	<span class="token function">casgstatus</span><span class="token punctuation">(</span>gp<span class="token punctuation">,</span> _Grunnable<span class="token punctuation">,</span> _Grunning<span class="token punctuation">)</span>
	gp<span class="token punctuation">.</span>waitsince <span class="token operator">=</span> <span class="token number">0</span>
	gp<span class="token punctuation">.</span>preempt <span class="token operator">=</span> <span class="token boolean">false</span>
	gp<span class="token punctuation">.</span>stackguard0 <span class="token operator">=</span> gp<span class="token punctuation">.</span>stack<span class="token punctuation">.</span>lo <span class="token operator">+</span> _StackGuard
	<span class="token keyword">if</span> <span class="token operator">!</span>inheritTime <span class="token punctuation">{</span>
		_g_<span class="token punctuation">.</span>m<span class="token punctuation">.</span>p<span class="token punctuation">.</span><span class="token function">ptr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>schedtick<span class="token operator">++</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Check whether the profiler needs to be turned on or off.</span>
	hz <span class="token operator">:=</span> sched<span class="token punctuation">.</span>profilehz
	<span class="token keyword">if</span> _g_<span class="token punctuation">.</span>m<span class="token punctuation">.</span>profilehz <span class="token operator">!=</span> hz <span class="token punctuation">{</span>
		<span class="token function">setThreadCPUProfiler</span><span class="token punctuation">(</span>hz<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> trace<span class="token punctuation">.</span>enabled <span class="token punctuation">{</span>
		<span class="token comment">// GoSysExit has to happen when we have a P, but before GoStart.</span>
		<span class="token comment">// So we emit it here.</span>
		<span class="token keyword">if</span> gp<span class="token punctuation">.</span>syscallsp <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> gp<span class="token punctuation">.</span>sysblocktraced <span class="token punctuation">{</span>
			<span class="token function">traceGoSysExit</span><span class="token punctuation">(</span>gp<span class="token punctuation">.</span>sysexitticks<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token function">traceGoStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token function">gogo</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>gp<span class="token punctuation">.</span>sched<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切换 g 的状态从 runnable 到 running，最终执行<code>gogo()</code></p><h5 id="gosched-m" tabindex="-1"><a class="header-anchor" href="#gosched-m" aria-hidden="true">#</a> gosched_m</h5><p>Gosched()方法内部调用 mcall(gosched_m)</p><p>todo 源码解读</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="park-m" tabindex="-1"><a class="header-anchor" href="#park-m" aria-hidden="true">#</a> park_m</h5><p>gopark()方法内部调用 mcall(park_m)</p><p>todo 源码解读</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="goready" tabindex="-1"><a class="header-anchor" href="#goready" aria-hidden="true">#</a> goready</h5><p>goready()</p><p>todo 源码解读</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="goexit0" tabindex="-1"><a class="header-anchor" href="#goexit0" aria-hidden="true">#</a> goexit0</h5><p>goexit1()内部调用 mcall(goexit0)</p><p>todo 源码解读</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="retake" tabindex="-1"><a class="header-anchor" href="#retake" aria-hidden="true">#</a> retake</h5><p>todo 源码解读</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="reentersyscall" tabindex="-1"><a class="header-anchor" href="#reentersyscall" aria-hidden="true">#</a> reentersyscall</h5><p>todo 源码解读</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="exitsyscall" tabindex="-1"><a class="header-anchor" href="#exitsyscall" aria-hidden="true">#</a> exitsyscall</h5><p>todo 源码解读</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> reference</h2>`,50),q={href:"https://mp.weixin.qq.com/s/jIWe3nMP6yiuXeBQgmePDg",target:"_blank",rel:"noopener noreferrer"};function S(P,C){const t=l("RouterLink"),c=l("ExternalLinkIcon");return p(),d("div",null,[g,n("ol",null,[h,n("li",null,[s("sched.sp：保存 CPU 的 rsp 寄存器的值，指向函数调用栈栈顶，参考"),a(t,{to:"/go/asm/plan9.html"},{default:i(()=>[s("go plan9 汇编")]),_:1})]),f,y,w]),x,n("p",null,[s("与之对于的"),_,s("，可以唤醒 g，从 waiting 状态变成 runnable 状态，典型场景是 g1 读唤醒写的 g2（这个 g2 写一个满 chan 情况下），g3 写唤醒 g4（这个 g4 度一空 chan 情况下），唤醒的目标 g 优先被当前 g 所在的 p 放入本地队列中，参考"),a(t,{to:"/source-code/go-standard-lib/channel/chan.html"},{default:i(()=>[s("channel 源码解读")]),_:1})]),G,n("p",null,[n("a",q,[s("https://mp.weixin.qq.com/s/jIWe3nMP6yiuXeBQgmePDg"),a(c)])])])}const I=o(b,[["render",S],["__file","gpm.html.vue"]]);export{I as default};
