import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as e,b as n,d as o,e as c,a as l}from"./app-739499e9.js";const i="/assets/chan-send-3d4af2e8.png",u="/assets/chan-recv-9d298c09.png",k="/assets/chan-close-0bc6d6d7.png",r={},d=l(`<h1 id="channel" tabindex="-1"><a class="header-anchor" href="#channel" aria-hidden="true">#</a> channel</h1><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p>golang channel 主要用来做不同 goroutine 通信</p><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><p>注意 maxAlign 是 8，那么 maxAlign-1 的二进制就是 111，然后和 int(unsafe.Sizeof(hchan{}))取与就是取它的低三位，hchanSize 就得到的是 8 的整数倍，做对齐使用</p><p>包含 缓冲区数定义，实时统计缓冲区数，缓冲区 buf，chan 元素类型，chan 元素单位大小，接送 goroutine 队列 for 读，发送 goroutine 队列 for 写，以及两个对应的队列的 index，锁（存在并发行为）</p><ul><li>qcount：当前 channel 中存在多少个元素；</li><li>dataqsize: 当前 channel 能存放的元素容量；</li><li>buf：channel 中用于存放元素的环形缓冲区；</li><li>elemsize：channel 元素类型的大小；</li><li>closed：标识 channel 是否关闭；</li><li>elemtype：channel 元素类型；</li><li>sendx：发送元素进入环形缓冲区的 index；</li><li>recvx：接收元素所处的环形缓冲区的 index；</li><li>recvq：因接收而陷入阻塞的协程队列；</li><li>sendq：因发送而陷入阻塞的协程队列；</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	maxAlign  <span class="token operator">=</span> <span class="token number">8</span>
	hchanSize <span class="token operator">=</span> unsafe<span class="token punctuation">.</span><span class="token function">Sizeof</span><span class="token punctuation">(</span>hchan<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">uintptr</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token function">int</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Sizeof</span><span class="token punctuation">(</span>hchan<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">&amp;</span><span class="token punctuation">(</span>maxAlign<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	debugChan <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> hchan <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	qcount   <span class="token builtin">uint</span>           <span class="token comment">// total data in the queue</span>
	dataqsiz <span class="token builtin">uint</span>           <span class="token comment">// size of the circular queue</span>
	buf      unsafe<span class="token punctuation">.</span>Pointer <span class="token comment">// points to an array of dataqsiz elements</span>
	elemsize <span class="token builtin">uint16</span>
	closed   <span class="token builtin">uint32</span>
	elemtype <span class="token operator">*</span>_type <span class="token comment">// element type</span>
	sendx    <span class="token builtin">uint</span>   <span class="token comment">// send index</span>
	recvx    <span class="token builtin">uint</span>   <span class="token comment">// receive index</span>
	recvq    waitq  <span class="token comment">// list of recv waiters</span>
	sendq    waitq  <span class="token comment">// list of send waiters</span>

	<span class="token comment">// lock protects all fields in hchan, as well as several</span>
	<span class="token comment">// fields in sudogs blocked on this channel.</span>
	<span class="token comment">//</span>
	<span class="token comment">// Do not change another G&#39;s status while holding this lock</span>
	<span class="token comment">// (in particular, do not ready a G), as this can deadlock</span>
	<span class="token comment">// with stack shrinking.</span>
	lock mutex
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h3><p>无缓冲和 struct{}的 mem 都是 0</p><p>mallocgc 分配内存</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">makechan</span><span class="token punctuation">(</span>t <span class="token operator">*</span>chantype<span class="token punctuation">,</span> size <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>hchan <span class="token punctuation">{</span>
	elem <span class="token operator">:=</span> t<span class="token punctuation">.</span>elem

	<span class="token comment">// compiler checks this but be safe.</span>
	<span class="token keyword">if</span> elem<span class="token punctuation">.</span>size <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token operator">&lt;&lt;</span><span class="token number">16</span> <span class="token punctuation">{</span>
		<span class="token function">throw</span><span class="token punctuation">(</span><span class="token string">&quot;makechan: invalid channel element type&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> hchanSize<span class="token operator">%</span>maxAlign <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">||</span> elem<span class="token punctuation">.</span>align <span class="token operator">&gt;</span> maxAlign <span class="token punctuation">{</span>
		<span class="token function">throw</span><span class="token punctuation">(</span><span class="token string">&quot;makechan: bad alignment&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	mem<span class="token punctuation">,</span> overflow <span class="token operator">:=</span> math<span class="token punctuation">.</span><span class="token function">MulUintptr</span><span class="token punctuation">(</span>elem<span class="token punctuation">.</span>size<span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> overflow <span class="token operator">||</span> mem <span class="token operator">&gt;</span> maxAlloc<span class="token operator">-</span>hchanSize <span class="token operator">||</span> size <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token function">plainError</span><span class="token punctuation">(</span><span class="token string">&quot;makechan: size out of range&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Hchan does not contain pointers interesting for GC when elements stored in buf do not contain pointers.</span>
	<span class="token comment">// buf points into the same allocation, elemtype is persistent.</span>
	<span class="token comment">// SudoG&#39;s are referenced from their owning thread so they can&#39;t be collected.</span>
	<span class="token comment">// TODO(dvyukov,rlh): Rethink when collector can move allocated objects.</span>
	<span class="token keyword">var</span> c <span class="token operator">*</span>hchan
	<span class="token keyword">switch</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> mem <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
		<span class="token comment">// Queue or element size is zero.</span>
		c <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">*</span>hchan<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token function">mallocgc</span><span class="token punctuation">(</span>hchanSize<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token comment">// Race detector uses this location for synchronization.</span>
		c<span class="token punctuation">.</span>buf <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">raceaddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> elem<span class="token punctuation">.</span>ptrdata <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
		<span class="token comment">// Elements do not contain pointers.</span>
		<span class="token comment">// Allocate hchan and buf in one call.</span>
		c <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">*</span>hchan<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token function">mallocgc</span><span class="token punctuation">(</span>hchanSize<span class="token operator">+</span>mem<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		c<span class="token punctuation">.</span>buf <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">,</span> hchanSize<span class="token punctuation">)</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token comment">// Elements contain pointers.</span>
		c <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>hchan<span class="token punctuation">)</span>
		c<span class="token punctuation">.</span>buf <span class="token operator">=</span> <span class="token function">mallocgc</span><span class="token punctuation">(</span>mem<span class="token punctuation">,</span> elem<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	c<span class="token punctuation">.</span>elemsize <span class="token operator">=</span> <span class="token function">uint16</span><span class="token punctuation">(</span>elem<span class="token punctuation">.</span>size<span class="token punctuation">)</span>
	c<span class="token punctuation">.</span>elemtype <span class="token operator">=</span> elem
	c<span class="token punctuation">.</span>dataqsiz <span class="token operator">=</span> <span class="token function">uint</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span>
	<span class="token function">lockInit</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">,</span> lockRankHchan<span class="token punctuation">)</span>

	<span class="token keyword">if</span> debugChan <span class="token punctuation">{</span>
		<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;makechan: chan=&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> <span class="token string">&quot;; elemsize=&quot;</span><span class="token punctuation">,</span> elem<span class="token punctuation">.</span>size<span class="token punctuation">,</span> <span class="token string">&quot;; dataqsiz=&quot;</span><span class="token punctuation">,</span> size<span class="token punctuation">,</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> c
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发送" tabindex="-1"><a class="header-anchor" href="#发送" aria-hidden="true">#</a> 发送</h3><p>写流程</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">chansend</span><span class="token punctuation">(</span>c <span class="token operator">*</span>hchan<span class="token punctuation">,</span> ep unsafe<span class="token punctuation">.</span>Pointer<span class="token punctuation">,</span> block <span class="token builtin">bool</span><span class="token punctuation">,</span> callerpc <span class="token builtin">uintptr</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> c <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token operator">!</span>block <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span>
		<span class="token function">gopark</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> waitReasonChanSendNilChan<span class="token punctuation">,</span> traceEvGoStop<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
		<span class="token function">throw</span><span class="token punctuation">(</span><span class="token string">&quot;unreachable&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> debugChan <span class="token punctuation">{</span>
		<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;chansend: chan=&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> raceenabled <span class="token punctuation">{</span>
		<span class="token function">racereadpc</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">raceaddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> callerpc<span class="token punctuation">,</span> abi<span class="token punctuation">.</span><span class="token function">FuncPCABIInternal</span><span class="token punctuation">(</span>chansend<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token operator">!</span>block <span class="token operator">&amp;&amp;</span> c<span class="token punctuation">.</span>closed <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token function">full</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">var</span> t0 <span class="token builtin">int64</span>
	<span class="token keyword">if</span> blockprofilerate <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		t0 <span class="token operator">=</span> <span class="token function">cputicks</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token function">lock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>

	<span class="token keyword">if</span> c<span class="token punctuation">.</span>closed <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token function">unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token function">plainError</span><span class="token punctuation">(</span><span class="token string">&quot;send on closed channel&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> sg <span class="token operator">:=</span> c<span class="token punctuation">.</span>recvq<span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> sg <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token comment">// Found a waiting receiver. We pass the value we want to send</span>
		<span class="token comment">// directly to the receiver, bypassing the channel buffer (if any).</span>
		<span class="token function">send</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> sg<span class="token punctuation">,</span> ep<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> c<span class="token punctuation">.</span>qcount <span class="token operator">&lt;</span> c<span class="token punctuation">.</span>dataqsiz <span class="token punctuation">{</span>
		<span class="token comment">// Space is available in the channel buffer. Enqueue the element to send.</span>
		qp <span class="token operator">:=</span> <span class="token function">chanbuf</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> c<span class="token punctuation">.</span>sendx<span class="token punctuation">)</span>
		<span class="token keyword">if</span> raceenabled <span class="token punctuation">{</span>
			<span class="token function">racenotify</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> c<span class="token punctuation">.</span>sendx<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token function">typedmemmove</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>elemtype<span class="token punctuation">,</span> qp<span class="token punctuation">,</span> ep<span class="token punctuation">)</span>
		c<span class="token punctuation">.</span>sendx<span class="token operator">++</span>
		<span class="token keyword">if</span> c<span class="token punctuation">.</span>sendx <span class="token operator">==</span> c<span class="token punctuation">.</span>dataqsiz <span class="token punctuation">{</span>
			c<span class="token punctuation">.</span>sendx <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token punctuation">}</span>
		c<span class="token punctuation">.</span>qcount<span class="token operator">++</span>
		<span class="token function">unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token operator">!</span>block <span class="token punctuation">{</span>
		<span class="token function">unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Block on the channel. Some receiver will complete our operation for us.</span>
	gp <span class="token operator">:=</span> <span class="token function">getg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	mysg <span class="token operator">:=</span> <span class="token function">acquireSudog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	mysg<span class="token punctuation">.</span>releasetime <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token keyword">if</span> t0 <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		mysg<span class="token punctuation">.</span>releasetime <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// No stack splits between assigning elem and enqueuing mysg</span>
	<span class="token comment">// on gp.waiting where copystack can find it.</span>
	mysg<span class="token punctuation">.</span>elem <span class="token operator">=</span> ep
	mysg<span class="token punctuation">.</span>waitlink <span class="token operator">=</span> <span class="token boolean">nil</span>
	mysg<span class="token punctuation">.</span>g <span class="token operator">=</span> gp
	mysg<span class="token punctuation">.</span>isSelect <span class="token operator">=</span> <span class="token boolean">false</span>
	mysg<span class="token punctuation">.</span>c <span class="token operator">=</span> c
	gp<span class="token punctuation">.</span>waiting <span class="token operator">=</span> mysg
	gp<span class="token punctuation">.</span>param <span class="token operator">=</span> <span class="token boolean">nil</span>
	c<span class="token punctuation">.</span>sendq<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>mysg<span class="token punctuation">)</span>
	<span class="token comment">// Signal to anyone trying to shrink our stack that we&#39;re about</span>
	<span class="token comment">// to park on a channel. The window between when this G&#39;s status</span>
	<span class="token comment">// changes and when we set gp.activeStackChans is not safe for</span>
	<span class="token comment">// stack shrinking.</span>
	atomic<span class="token punctuation">.</span><span class="token function">Store8</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>gp<span class="token punctuation">.</span>parkingOnChan<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token function">gopark</span><span class="token punctuation">(</span>chanparkcommit<span class="token punctuation">,</span> unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span><span class="token punctuation">,</span> waitReasonChanSend<span class="token punctuation">,</span> traceEvGoBlockSend<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token comment">// Ensure the value being sent is kept alive until the</span>
	<span class="token comment">// receiver copies it out. The sudog has a pointer to the</span>
	<span class="token comment">// stack object, but sudogs aren&#39;t considered as roots of the</span>
	<span class="token comment">// stack tracer.</span>
	<span class="token function">KeepAlive</span><span class="token punctuation">(</span>ep<span class="token punctuation">)</span>

	<span class="token comment">// someone woke us up.</span>
	<span class="token keyword">if</span> mysg <span class="token operator">!=</span> gp<span class="token punctuation">.</span>waiting <span class="token punctuation">{</span>
		<span class="token function">throw</span><span class="token punctuation">(</span><span class="token string">&quot;G waiting list is corrupted&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	gp<span class="token punctuation">.</span>waiting <span class="token operator">=</span> <span class="token boolean">nil</span>
	gp<span class="token punctuation">.</span>activeStackChans <span class="token operator">=</span> <span class="token boolean">false</span>
	closed <span class="token operator">:=</span> <span class="token operator">!</span>mysg<span class="token punctuation">.</span>success
	gp<span class="token punctuation">.</span>param <span class="token operator">=</span> <span class="token boolean">nil</span>
	<span class="token keyword">if</span> mysg<span class="token punctuation">.</span>releasetime <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token function">blockevent</span><span class="token punctuation">(</span>mysg<span class="token punctuation">.</span>releasetime<span class="token operator">-</span>t0<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	mysg<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token boolean">nil</span>
	<span class="token function">releaseSudog</span><span class="token punctuation">(</span>mysg<span class="token punctuation">)</span>
	<span class="token keyword">if</span> closed <span class="token punctuation">{</span>
		<span class="token keyword">if</span> c<span class="token punctuation">.</span>closed <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			<span class="token function">throw</span><span class="token punctuation">(</span><span class="token string">&quot;chansend: spurious wakeup&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token function">plainError</span><span class="token punctuation">(</span><span class="token string">&quot;send on closed channel&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="接收" tabindex="-1"><a class="header-anchor" href="#接收" aria-hidden="true">#</a> 接收</h3><p>读流程</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">chanrecv</span><span class="token punctuation">(</span>c <span class="token operator">*</span>hchan<span class="token punctuation">,</span> ep unsafe<span class="token punctuation">.</span>Pointer<span class="token punctuation">,</span> block <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>selected<span class="token punctuation">,</span> received <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// raceenabled: don&#39;t need to check ep, as it is always on the stack</span>
	<span class="token comment">// or is new memory allocated by reflect.</span>

	<span class="token keyword">if</span> debugChan <span class="token punctuation">{</span>
		<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;chanrecv: chan=&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> c <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token operator">!</span>block <span class="token punctuation">{</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		<span class="token function">gopark</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> waitReasonChanReceiveNilChan<span class="token punctuation">,</span> traceEvGoStop<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
		<span class="token function">throw</span><span class="token punctuation">(</span><span class="token string">&quot;unreachable&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Fast path: check for failed non-blocking operation without acquiring the lock.</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>block <span class="token operator">&amp;&amp;</span> <span class="token function">empty</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> atomic<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>closed<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token function">empty</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// The channel is irreversibly closed and empty.</span>
			<span class="token keyword">if</span> raceenabled <span class="token punctuation">{</span>
				<span class="token function">raceacquire</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">raceaddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> ep <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				<span class="token function">typedmemclr</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>elemtype<span class="token punctuation">,</span> ep<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">var</span> t0 <span class="token builtin">int64</span>
	<span class="token keyword">if</span> blockprofilerate <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		t0 <span class="token operator">=</span> <span class="token function">cputicks</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token function">lock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>

	<span class="token keyword">if</span> c<span class="token punctuation">.</span>closed <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> c<span class="token punctuation">.</span>qcount <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> raceenabled <span class="token punctuation">{</span>
			<span class="token function">raceacquire</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">raceaddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token function">unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>
		<span class="token keyword">if</span> ep <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token function">typedmemclr</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>elemtype<span class="token punctuation">,</span> ep<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> sg <span class="token operator">:=</span> c<span class="token punctuation">.</span>sendq<span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> sg <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token comment">// Found a waiting sender. If buffer is size 0, receive value</span>
		<span class="token comment">// directly from sender. Otherwise, receive from head of queue</span>
		<span class="token comment">// and add sender&#39;s value to the tail of the queue (both map to</span>
		<span class="token comment">// the same buffer slot because the queue is full).</span>
		<span class="token function">recv</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> sg<span class="token punctuation">,</span> ep<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> c<span class="token punctuation">.</span>qcount <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token comment">// Receive directly from queue</span>
		qp <span class="token operator">:=</span> <span class="token function">chanbuf</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> c<span class="token punctuation">.</span>recvx<span class="token punctuation">)</span>
		<span class="token keyword">if</span> raceenabled <span class="token punctuation">{</span>
			<span class="token function">racenotify</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> c<span class="token punctuation">.</span>recvx<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> ep <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token function">typedmemmove</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>elemtype<span class="token punctuation">,</span> ep<span class="token punctuation">,</span> qp<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token function">typedmemclr</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>elemtype<span class="token punctuation">,</span> qp<span class="token punctuation">)</span>
		c<span class="token punctuation">.</span>recvx<span class="token operator">++</span>
		<span class="token keyword">if</span> c<span class="token punctuation">.</span>recvx <span class="token operator">==</span> c<span class="token punctuation">.</span>dataqsiz <span class="token punctuation">{</span>
			c<span class="token punctuation">.</span>recvx <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token punctuation">}</span>
		c<span class="token punctuation">.</span>qcount<span class="token operator">--</span>
		<span class="token function">unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token operator">!</span>block <span class="token punctuation">{</span>
		<span class="token function">unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// no sender available: block on this channel.</span>
	gp <span class="token operator">:=</span> <span class="token function">getg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	mysg <span class="token operator">:=</span> <span class="token function">acquireSudog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	mysg<span class="token punctuation">.</span>releasetime <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token keyword">if</span> t0 <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		mysg<span class="token punctuation">.</span>releasetime <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// No stack splits between assigning elem and enqueuing mysg</span>
	<span class="token comment">// on gp.waiting where copystack can find it.</span>
	mysg<span class="token punctuation">.</span>elem <span class="token operator">=</span> ep
	mysg<span class="token punctuation">.</span>waitlink <span class="token operator">=</span> <span class="token boolean">nil</span>
	gp<span class="token punctuation">.</span>waiting <span class="token operator">=</span> mysg
	mysg<span class="token punctuation">.</span>g <span class="token operator">=</span> gp
	mysg<span class="token punctuation">.</span>isSelect <span class="token operator">=</span> <span class="token boolean">false</span>
	mysg<span class="token punctuation">.</span>c <span class="token operator">=</span> c
	gp<span class="token punctuation">.</span>param <span class="token operator">=</span> <span class="token boolean">nil</span>
	c<span class="token punctuation">.</span>recvq<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>mysg<span class="token punctuation">)</span>
	<span class="token comment">// Signal to anyone trying to shrink our stack that we&#39;re about</span>
	<span class="token comment">// to park on a channel. The window between when this G&#39;s status</span>
	<span class="token comment">// changes and when we set gp.activeStackChans is not safe for</span>
	<span class="token comment">// stack shrinking.</span>
	atomic<span class="token punctuation">.</span><span class="token function">Store8</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>gp<span class="token punctuation">.</span>parkingOnChan<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token function">gopark</span><span class="token punctuation">(</span>chanparkcommit<span class="token punctuation">,</span> unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span><span class="token punctuation">,</span> waitReasonChanReceive<span class="token punctuation">,</span> traceEvGoBlockRecv<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

	<span class="token comment">// someone woke us up</span>
	<span class="token keyword">if</span> mysg <span class="token operator">!=</span> gp<span class="token punctuation">.</span>waiting <span class="token punctuation">{</span>
		<span class="token function">throw</span><span class="token punctuation">(</span><span class="token string">&quot;G waiting list is corrupted&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	gp<span class="token punctuation">.</span>waiting <span class="token operator">=</span> <span class="token boolean">nil</span>
	gp<span class="token punctuation">.</span>activeStackChans <span class="token operator">=</span> <span class="token boolean">false</span>
	<span class="token keyword">if</span> mysg<span class="token punctuation">.</span>releasetime <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token function">blockevent</span><span class="token punctuation">(</span>mysg<span class="token punctuation">.</span>releasetime<span class="token operator">-</span>t0<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	success <span class="token operator">:=</span> mysg<span class="token punctuation">.</span>success
	gp<span class="token punctuation">.</span>param <span class="token operator">=</span> <span class="token boolean">nil</span>
	mysg<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token boolean">nil</span>
	<span class="token function">releaseSudog</span><span class="token punctuation">(</span>mysg<span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">,</span> success
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="关闭" tabindex="-1"><a class="header-anchor" href="#关闭" aria-hidden="true">#</a> 关闭</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">closechan</span><span class="token punctuation">(</span>c <span class="token operator">*</span>hchan<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> c <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token function">plainError</span><span class="token punctuation">(</span><span class="token string">&quot;close of nil channel&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token function">lock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>
	<span class="token keyword">if</span> c<span class="token punctuation">.</span>closed <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token function">unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token function">plainError</span><span class="token punctuation">(</span><span class="token string">&quot;close of closed channel&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> raceenabled <span class="token punctuation">{</span>
		callerpc <span class="token operator">:=</span> <span class="token function">getcallerpc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token function">racewritepc</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">raceaddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> callerpc<span class="token punctuation">,</span> abi<span class="token punctuation">.</span><span class="token function">FuncPCABIInternal</span><span class="token punctuation">(</span>closechan<span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token function">racerelease</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">raceaddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	c<span class="token punctuation">.</span>closed <span class="token operator">=</span> <span class="token number">1</span>

	<span class="token keyword">var</span> glist gList

	<span class="token comment">// release all readers</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		sg <span class="token operator">:=</span> c<span class="token punctuation">.</span>recvq<span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> sg <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> sg<span class="token punctuation">.</span>elem <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token function">typedmemclr</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>elemtype<span class="token punctuation">,</span> sg<span class="token punctuation">.</span>elem<span class="token punctuation">)</span>
			sg<span class="token punctuation">.</span>elem <span class="token operator">=</span> <span class="token boolean">nil</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> sg<span class="token punctuation">.</span>releasetime <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			sg<span class="token punctuation">.</span>releasetime <span class="token operator">=</span> <span class="token function">cputicks</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		gp <span class="token operator">:=</span> sg<span class="token punctuation">.</span>g
		gp<span class="token punctuation">.</span>param <span class="token operator">=</span> unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span>sg<span class="token punctuation">)</span>
		sg<span class="token punctuation">.</span>success <span class="token operator">=</span> <span class="token boolean">false</span>
		<span class="token keyword">if</span> raceenabled <span class="token punctuation">{</span>
			<span class="token function">raceacquireg</span><span class="token punctuation">(</span>gp<span class="token punctuation">,</span> c<span class="token punctuation">.</span><span class="token function">raceaddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		glist<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>gp<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// release all writers (they will panic)</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		sg <span class="token operator">:=</span> c<span class="token punctuation">.</span>sendq<span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> sg <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		sg<span class="token punctuation">.</span>elem <span class="token operator">=</span> <span class="token boolean">nil</span>
		<span class="token keyword">if</span> sg<span class="token punctuation">.</span>releasetime <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			sg<span class="token punctuation">.</span>releasetime <span class="token operator">=</span> <span class="token function">cputicks</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		gp <span class="token operator">:=</span> sg<span class="token punctuation">.</span>g
		gp<span class="token punctuation">.</span>param <span class="token operator">=</span> unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span>sg<span class="token punctuation">)</span>
		sg<span class="token punctuation">.</span>success <span class="token operator">=</span> <span class="token boolean">false</span>
		<span class="token keyword">if</span> raceenabled <span class="token punctuation">{</span>
			<span class="token function">raceacquireg</span><span class="token punctuation">(</span>gp<span class="token punctuation">,</span> c<span class="token punctuation">.</span><span class="token function">raceaddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		glist<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>gp<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token function">unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">.</span>lock<span class="token punctuation">)</span>

	<span class="token comment">// Ready all Gs now that we&#39;ve dropped the channel lock.</span>
	<span class="token keyword">for</span> <span class="token operator">!</span>glist<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		gp <span class="token operator">:=</span> glist<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		gp<span class="token punctuation">.</span>schedlink <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token function">goready</span><span class="token punctuation">(</span>gp<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> reference</h2>',24),v={href:"https://mp.weixin.qq.com/s/QgNndPgN1kqxWh-ijSofkw",target:"_blank",rel:"noopener noreferrer"};function m(b,f){const s=t("ExternalLinkIcon");return p(),e("div",null,[d,n("p",null,[n("a",v,[o("https://mp.weixin.qq.com/s/QgNndPgN1kqxWh-ijSofkw"),c(s)])])])}const y=a(r,[["render",m],["__file","chan.html.vue"]]);export{y as default};
