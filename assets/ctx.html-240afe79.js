import{_ as a,W as e,X as t,Z as n,$ as c,a0 as p,Y as o,C as i}from"./framework-7d39e0da.js";const l={},u=o(`<h1 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> context</h1><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p>子继承父 context，并且传递信号从父<code>单项传播</code>子，位于 src/context 目录下</p><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><p>4 个主要方法</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// A Context carries a deadline, a cancellation signal, and other values across</span>
<span class="token comment">// API boundaries.</span>
<span class="token comment">//</span>
<span class="token comment">// Context&#39;s methods may be called by multiple goroutines simultaneously.</span>
<span class="token keyword">type</span> Context <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token comment">// Deadline returns the time when work done on behalf of this context</span>
	<span class="token comment">// should be canceled. Deadline returns ok==false when no deadline is</span>
	<span class="token comment">// set. Successive calls to Deadline return the same results.</span>
	<span class="token function">Deadline</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>deadline time<span class="token punctuation">.</span>Time<span class="token punctuation">,</span> ok <span class="token builtin">bool</span><span class="token punctuation">)</span>

	<span class="token comment">// Done returns a channel that&#39;s closed when work done on behalf of this</span>
	<span class="token comment">// context should be canceled. Done may return nil if this context can</span>
	<span class="token comment">// never be canceled. Successive calls to Done return the same value.</span>
	<span class="token comment">// The close of the Done channel may happen asynchronously,</span>
	<span class="token comment">// after the cancel function returns.</span>
	<span class="token comment">//</span>
	<span class="token comment">// WithCancel arranges for Done to be closed when cancel is called;</span>
	<span class="token comment">// WithDeadline arranges for Done to be closed when the deadline</span>
	<span class="token comment">// expires; WithTimeout arranges for Done to be closed when the timeout</span>
	<span class="token comment">// elapses.</span>
	<span class="token comment">//</span>
	<span class="token comment">// Done is provided for use in select statements:</span>
	<span class="token comment">//</span>
	<span class="token comment">//  // Stream generates values with DoSomething and sends them to out</span>
	<span class="token comment">//  // until DoSomething returns an error or ctx.Done is closed.</span>
	<span class="token comment">//  func Stream(ctx context.Context, out chan&lt;- Value) error {</span>
	<span class="token comment">//  	for {</span>
	<span class="token comment">//  		v, err := DoSomething(ctx)</span>
	<span class="token comment">//  		if err != nil {</span>
	<span class="token comment">//  			return err</span>
	<span class="token comment">//  		}</span>
	<span class="token comment">//  		select {</span>
	<span class="token comment">//  		case &lt;-ctx.Done():</span>
	<span class="token comment">//  			return ctx.Err()</span>
	<span class="token comment">//  		case out &lt;- v:</span>
	<span class="token comment">//  		}</span>
	<span class="token comment">//  	}</span>
	<span class="token comment">//  }</span>
	<span class="token comment">//</span>
	<span class="token comment">// See https://blog.golang.org/pipelines for more examples of how to use</span>
	<span class="token comment">// a Done channel for cancellation.</span>
	<span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">// If Done is not yet closed, Err returns nil.</span>
	<span class="token comment">// If Done is closed, Err returns a non-nil error explaining why:</span>
	<span class="token comment">// Canceled if the context was canceled</span>
	<span class="token comment">// or DeadlineExceeded if the context&#39;s deadline passed.</span>
	<span class="token comment">// After Err returns a non-nil error, successive calls to Err return the same error.</span>
	<span class="token function">Err</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>

	<span class="token comment">// Value returns the value associated with this context for key, or nil</span>
	<span class="token comment">// if no value is associated with key. Successive calls to Value with</span>
	<span class="token comment">// the same key returns the same result.</span>
	<span class="token comment">//</span>
	<span class="token comment">// Use context values only for request-scoped data that transits</span>
	<span class="token comment">// processes and API boundaries, not for passing optional parameters to</span>
	<span class="token comment">// functions.</span>
	<span class="token comment">//</span>
	<span class="token comment">// A key identifies a specific value in a Context. Functions that wish</span>
	<span class="token comment">// to store values in Context typically allocate a key in a global</span>
	<span class="token comment">// variable then use that key as the argument to context.WithValue and</span>
	<span class="token comment">// Context.Value. A key can be any type that supports equality;</span>
	<span class="token comment">// packages should define keys as an unexported type to avoid</span>
	<span class="token comment">// collisions.</span>
	<span class="token comment">//</span>
	<span class="token comment">// Packages that define a Context key should provide type-safe accessors</span>
	<span class="token comment">// for the values stored using that key:</span>
	<span class="token comment">//</span>
	<span class="token comment">// 	// Package user defines a User type that&#39;s stored in Contexts.</span>
	<span class="token comment">// 	package user</span>
	<span class="token comment">//</span>
	<span class="token comment">// 	import &quot;context&quot;</span>
	<span class="token comment">//</span>
	<span class="token comment">// 	// User is the type of value stored in the Contexts.</span>
	<span class="token comment">// 	type User struct {...}</span>
	<span class="token comment">//</span>
	<span class="token comment">// 	// key is an unexported type for keys defined in this package.</span>
	<span class="token comment">// 	// This prevents collisions with keys defined in other packages.</span>
	<span class="token comment">// 	type key int</span>
	<span class="token comment">//</span>
	<span class="token comment">// 	// userKey is the key for user.User values in Contexts. It is</span>
	<span class="token comment">// 	// unexported; clients use user.NewContext and user.FromContext</span>
	<span class="token comment">// 	// instead of using this key directly.</span>
	<span class="token comment">// 	var userKey key</span>
	<span class="token comment">//</span>
	<span class="token comment">// 	// NewContext returns a new Context that carries value u.</span>
	<span class="token comment">// 	func NewContext(ctx context.Context, u *User) context.Context {</span>
	<span class="token comment">// 		return context.WithValue(ctx, userKey, u)</span>
	<span class="token comment">// 	}</span>
	<span class="token comment">//</span>
	<span class="token comment">// 	// FromContext returns the User value stored in ctx, if any.</span>
	<span class="token comment">// 	func FromContext(ctx context.Context) (*User, bool) {</span>
	<span class="token comment">// 		u, ok := ctx.Value(userKey).(*User)</span>
	<span class="token comment">// 		return u, ok</span>
	<span class="token comment">// 	}</span>
	<span class="token function">Value</span><span class="token punctuation">(</span>key any<span class="token punctuation">)</span> any
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="emptyctx" tabindex="-1"><a class="header-anchor" href="#emptyctx" aria-hidden="true">#</a> emptyCtx</h2><p>常用的 todo 和 background 都是这种</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>
	background <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>emptyCtx<span class="token punctuation">)</span>
	todo       <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>emptyCtx<span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">// Background returns a non-nil, empty Context. It is never canceled, has no</span>
<span class="token comment">// values, and has no deadline. It is typically used by the main function,</span>
<span class="token comment">// initialization, and tests, and as the top-level Context for incoming</span>
<span class="token comment">// requests.</span>
<span class="token keyword">func</span> <span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Context <span class="token punctuation">{</span>
	<span class="token keyword">return</span> background
<span class="token punctuation">}</span>

<span class="token comment">// TODO returns a non-nil, empty Context. Code should use context.TODO when</span>
<span class="token comment">// it&#39;s unclear which Context to use or it is not yet available (because the</span>
<span class="token comment">// surrounding function has not yet been extended to accept a Context</span>
<span class="token comment">// parameter).</span>
<span class="token keyword">func</span> <span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Context <span class="token punctuation">{</span>
	<span class="token keyword">return</span> todo
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义-1" tabindex="-1"><a class="header-anchor" href="#定义-1" aria-hidden="true">#</a> 定义</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// An emptyCtx is never canceled, has no values, and has no deadline. It is not
// struct{}, since vars of this type must have distinct addresses.
type emptyCtx int

func (*emptyCtx) Deadline() (deadline time.Time, ok bool) {
	return
}

func (*emptyCtx) Done() &lt;-chan struct{} {
	return nil
}

func (*emptyCtx) Err() error {
	return nil
}

func (*emptyCtx) Value(key any) any {
	return nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cancelctx" tabindex="-1"><a class="header-anchor" href="#cancelctx" aria-hidden="true">#</a> cancelCtx</h2><h3 id="定义-2" tabindex="-1"><a class="header-anchor" href="#定义-2" aria-hidden="true">#</a> 定义</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// A cancelCtx can be canceled. When canceled, it also cancels any children</span>
<span class="token comment">// that implement canceler.</span>
<span class="token keyword">type</span> cancelCtx <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   Context

   mu       sync<span class="token punctuation">.</span>Mutex            <span class="token comment">// protects following fields</span>
   done     atomic<span class="token punctuation">.</span>Value          <span class="token comment">// of chan struct{}, created lazily, closed by first cancel call</span>
   children <span class="token keyword">map</span><span class="token punctuation">[</span>canceler<span class="token punctuation">]</span><span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// set to nil by the first cancel call</span>
   err      <span class="token builtin">error</span>                 <span class="token comment">// set to non-nil by the first cancel call</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="interface-实现" tabindex="-1"><a class="header-anchor" href="#interface-实现" aria-hidden="true">#</a> interface 实现</h3><p>注意 Value 中<code>额外协议</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>cancelCtx<span class="token punctuation">)</span> <span class="token function">Value</span><span class="token punctuation">(</span>key any<span class="token punctuation">)</span> any <span class="token punctuation">{</span>
  <span class="token comment">// 额外协议</span>
	<span class="token keyword">if</span> key <span class="token operator">==</span> <span class="token operator">&amp;</span>cancelCtxKey <span class="token punctuation">{</span>
		<span class="token keyword">return</span> c
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token function">value</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>cancelCtx<span class="token punctuation">)</span> <span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>
	d <span class="token operator">:=</span> c<span class="token punctuation">.</span>done<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> d <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> d<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	c<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> c<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	d <span class="token operator">=</span> c<span class="token punctuation">.</span>done<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> d <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		d <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
		c<span class="token punctuation">.</span>done<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> d<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>cancelCtx<span class="token punctuation">)</span> <span class="token function">Err</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	err <span class="token operator">:=</span> c<span class="token punctuation">.</span>err
	c<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> err
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// WithCancel returns a copy of parent with a new Done channel. The returned</span>
<span class="token comment">// context&#39;s Done channel is closed when the returned cancel function is called</span>
<span class="token comment">// or when the parent context&#39;s Done channel is closed, whichever happens first.</span>
<span class="token comment">//</span>
<span class="token comment">// Canceling this context releases resources associated with it, so code should</span>
<span class="token comment">// call cancel as soon as the operations running in this Context complete.</span>
<span class="token keyword">func</span> <span class="token function">WithCancel</span><span class="token punctuation">(</span>parent Context<span class="token punctuation">)</span> <span class="token punctuation">(</span>ctx Context<span class="token punctuation">,</span> cancel CancelFunc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> parent <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;cannot create context from nil parent&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	c <span class="token operator">:=</span> <span class="token function">newCancelCtx</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span>
	<span class="token function">propagateCancel</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> <span class="token operator">&amp;</span>c<span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>c<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> c<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> Canceled<span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="propagatecancel" tabindex="-1"><a class="header-anchor" href="#propagatecancel" aria-hidden="true">#</a> propagateCancel</h4><p>cancel 传播，主要依赖子 ctx 在父 ctx 做了注册</p><p>如果父 ctx 也是 cancelCtx 那么直接使用父 cancelCtx.children 来注册，否则直接启动一个守护进程来管理子 cancle 事件</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// propagateCancel arranges for child to be canceled when parent is.</span>
<span class="token keyword">func</span> <span class="token function">propagateCancel</span><span class="token punctuation">(</span>parent Context<span class="token punctuation">,</span> child canceler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	done <span class="token operator">:=</span> parent<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> done <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token comment">// parent is never canceled</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">select</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
		<span class="token comment">// parent is already canceled</span>
		child<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> parent<span class="token punctuation">.</span><span class="token function">Err</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> p<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token function">parentCancelCtx</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		p<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> p<span class="token punctuation">.</span>err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token comment">// parent has already been canceled</span>
			child<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> p<span class="token punctuation">.</span>children <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				p<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span>canceler<span class="token punctuation">]</span><span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			p<span class="token punctuation">.</span>children<span class="token punctuation">[</span>child<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		p<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		atomic<span class="token punctuation">.</span><span class="token function">AddInt32</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>goroutines<span class="token punctuation">,</span> <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">select</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> <span class="token operator">&lt;-</span>parent<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
				child<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> parent<span class="token punctuation">.</span><span class="token function">Err</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token keyword">case</span> <span class="token operator">&lt;-</span>child<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="parentcancelctx" tabindex="-1"><a class="header-anchor" href="#parentcancelctx" aria-hidden="true">#</a> parentCancelCtx</h4><p>cancelCtx 的 value 加了一个<code>额外协议</code>来让子 ctx 判断父 ctx 是否是 cancelCtx</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// &amp;cancelCtxKey is the key that a cancelCtx returns itself for.
var cancelCtxKey int

// parentCancelCtx returns the underlying *cancelCtx for parent.
// It does this by looking up parent.Value(&amp;cancelCtxKey) to find
// the innermost enclosing *cancelCtx and then checking whether
// parent.Done() matches that *cancelCtx. (If not, the *cancelCtx
// has been wrapped in a custom implementation providing a
// different done channel, in which case we should not bypass it.)
func parentCancelCtx(parent Context) (*cancelCtx, bool) {
	done := parent.Done()
	if done == closedchan || done == nil {
		return nil, false
	}
	p, ok := parent.Value(&amp;cancelCtxKey).(*cancelCtx)
	if !ok {
		return nil, false
	}
	pdone, _ := p.done.Load().(chan struct{})
	if pdone != done {
		return nil, false
	}
	return p, true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="timectx" tabindex="-1"><a class="header-anchor" href="#timectx" aria-hidden="true">#</a> timeCtx</h2><h3 id="定义-3" tabindex="-1"><a class="header-anchor" href="#定义-3" aria-hidden="true">#</a> 定义</h3><p>包含了 cancelCtx</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// A timerCtx carries a timer and a deadline. It embeds a cancelCtx to</span>
<span class="token comment">// implement Done and Err. It implements cancel by stopping its timer then</span>
<span class="token comment">// delegating to cancelCtx.cancel.</span>
<span class="token keyword">type</span> timerCtx <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	cancelCtx
	timer <span class="token operator">*</span>time<span class="token punctuation">.</span>Timer <span class="token comment">// Under cancelCtx.mu.</span>

	deadline time<span class="token punctuation">.</span>Time
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="interface-实现-1" tabindex="-1"><a class="header-anchor" href="#interface-实现-1" aria-hidden="true">#</a> interface 实现</h3><p>扩张了 cancelCtx 的实现</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func (c *timerCtx) Deadline() (deadline time.Time, ok bool) {
	return c.deadline, true
}


func (c *timerCtx) cancel(removeFromParent bool, err error) {
	c.cancelCtx.cancel(false, err)
	if removeFromParent {
		// Remove this timerCtx from its parent cancelCtx&#39;s children.
		removeChild(c.cancelCtx.Context, c)
	}
	c.mu.Lock()
	if c.timer != nil {
		c.timer.Stop()
		c.timer = nil
	}
	c.mu.Unlock()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建-1" tabindex="-1"><a class="header-anchor" href="#创建-1" aria-hidden="true">#</a> 创建</h3><p>withtimeout 底层用的就是 withdeadline</p><p>在 cancelCtx 基础上，也包含 propagateCancel 逻辑，新增加了定时器</p><p>注意主动 cancle 的错误和定时到了之后的 cancel 错误是不一样的</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// WithTimeout returns WithDeadline(parent, time.Now().Add(timeout)).</span>
<span class="token comment">//</span>
<span class="token comment">// Canceling this context releases resources associated with it, so code should</span>
<span class="token comment">// call cancel as soon as the operations running in this Context complete:</span>
<span class="token comment">//</span>
<span class="token comment">// 	func slowOperationWithTimeout(ctx context.Context) (Result, error) {</span>
<span class="token comment">// 		ctx, cancel := context.WithTimeout(ctx, 100*time.Millisecond)</span>
<span class="token comment">// 		defer cancel()  // releases resources if slowOperation completes before timeout elapses</span>
<span class="token comment">// 		return slowOperation(ctx)</span>
<span class="token comment">// 	}</span>
<span class="token keyword">func</span> <span class="token function">WithTimeout</span><span class="token punctuation">(</span>parent Context<span class="token punctuation">,</span> timeout time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token punctuation">(</span>Context<span class="token punctuation">,</span> CancelFunc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">WithDeadline</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// WithDeadline returns a copy of the parent context with the deadline adjusted</span>
<span class="token comment">// to be no later than d. If the parent&#39;s deadline is already earlier than d,</span>
<span class="token comment">// WithDeadline(parent, d) is semantically equivalent to parent. The returned</span>
<span class="token comment">// context&#39;s Done channel is closed when the deadline expires, when the returned</span>
<span class="token comment">// cancel function is called, or when the parent context&#39;s Done channel is</span>
<span class="token comment">// closed, whichever happens first.</span>
<span class="token comment">//</span>
<span class="token comment">// Canceling this context releases resources associated with it, so code should</span>
<span class="token comment">// call cancel as soon as the operations running in this Context complete.</span>
<span class="token keyword">func</span> <span class="token function">WithDeadline</span><span class="token punctuation">(</span>parent Context<span class="token punctuation">,</span> d time<span class="token punctuation">.</span>Time<span class="token punctuation">)</span> <span class="token punctuation">(</span>Context<span class="token punctuation">,</span> CancelFunc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> parent <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;cannot create context from nil parent&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> cur<span class="token punctuation">,</span> ok <span class="token operator">:=</span> parent<span class="token punctuation">.</span><span class="token function">Deadline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span><span class="token function">Before</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// The current deadline is already sooner than the new one.</span>
		<span class="token keyword">return</span> <span class="token function">WithCancel</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	c <span class="token operator">:=</span> <span class="token operator">&amp;</span>timerCtx<span class="token punctuation">{</span>
		cancelCtx<span class="token punctuation">:</span> <span class="token function">newCancelCtx</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span><span class="token punctuation">,</span>
		deadline<span class="token punctuation">:</span>  d<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token function">propagateCancel</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
	dur <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Until</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
	<span class="token keyword">if</span> dur <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> DeadlineExceeded<span class="token punctuation">)</span> <span class="token comment">// deadline has already passed</span>
		<span class="token keyword">return</span> c<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> c<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> Canceled<span class="token punctuation">)</span> <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	c<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> c<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> c<span class="token punctuation">.</span>err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span>timer <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">AfterFunc</span><span class="token punctuation">(</span>dur<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			c<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> DeadlineExceeded<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> c<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> c<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> Canceled<span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="valuectx" tabindex="-1"><a class="header-anchor" href="#valuectx" aria-hidden="true">#</a> valueCtx</h2><p>存储类型的 ctx</p><h3 id="定义-4" tabindex="-1"><a class="header-anchor" href="#定义-4" aria-hidden="true">#</a> 定义</h3><p>每个 valueCtx 只是保护了一组 kv pair</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// A valueCtx carries a key-value pair. It implements Value for that key and</span>
<span class="token comment">// delegates all other calls to the embedded Context.</span>
<span class="token keyword">type</span> valueCtx <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Context
	key<span class="token punctuation">,</span> val any
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="interface-实现-2" tabindex="-1"><a class="header-anchor" href="#interface-实现-2" aria-hidden="true">#</a> interface 实现</h3><p>前面提到了每个 valueCtx 只存一组 kv，那么如果当前 k 不存在当前 valueCtx 中那么就会<code>由子向父</code>寻找</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>valueCtx<span class="token punctuation">)</span> <span class="token function">Value</span><span class="token punctuation">(</span>key any<span class="token punctuation">)</span> any <span class="token punctuation">{</span>
	<span class="token keyword">if</span> c<span class="token punctuation">.</span>key <span class="token operator">==</span> key <span class="token punctuation">{</span>
		<span class="token keyword">return</span> c<span class="token punctuation">.</span>val
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token function">value</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">value</span><span class="token punctuation">(</span>c Context<span class="token punctuation">,</span> key any<span class="token punctuation">)</span> any <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">switch</span> ctx <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token operator">*</span>valueCtx<span class="token punctuation">:</span>
			<span class="token keyword">if</span> key <span class="token operator">==</span> ctx<span class="token punctuation">.</span>key <span class="token punctuation">{</span>
				<span class="token keyword">return</span> ctx<span class="token punctuation">.</span>val
			<span class="token punctuation">}</span>
			c <span class="token operator">=</span> ctx<span class="token punctuation">.</span>Context
		<span class="token keyword">case</span> <span class="token operator">*</span>cancelCtx<span class="token punctuation">:</span>
			<span class="token keyword">if</span> key <span class="token operator">==</span> <span class="token operator">&amp;</span>cancelCtxKey <span class="token punctuation">{</span>
				<span class="token keyword">return</span> c
			<span class="token punctuation">}</span>
			c <span class="token operator">=</span> ctx<span class="token punctuation">.</span>Context
		<span class="token keyword">case</span> <span class="token operator">*</span>timerCtx<span class="token punctuation">:</span>
			<span class="token keyword">if</span> key <span class="token operator">==</span> <span class="token operator">&amp;</span>cancelCtxKey <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token operator">&amp;</span>ctx<span class="token punctuation">.</span>cancelCtx
			<span class="token punctuation">}</span>
			c <span class="token operator">=</span> ctx<span class="token punctuation">.</span>Context
		<span class="token keyword">case</span> <span class="token operator">*</span>emptyCtx<span class="token punctuation">:</span>
			<span class="token keyword">return</span> <span class="token boolean">nil</span>
		<span class="token keyword">default</span><span class="token punctuation">:</span>
			<span class="token keyword">return</span> c<span class="token punctuation">.</span><span class="token function">Value</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建-2" tabindex="-1"><a class="header-anchor" href="#创建-2" aria-hidden="true">#</a> 创建</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// WithValue returns a copy of parent in which the value associated with key is</span>
<span class="token comment">// val.</span>
<span class="token comment">//</span>
<span class="token comment">// Use context Values only for request-scoped data that transits processes and</span>
<span class="token comment">// APIs, not for passing optional parameters to functions.</span>
<span class="token comment">//</span>
<span class="token comment">// The provided key must be comparable and should not be of type</span>
<span class="token comment">// string or any other built-in type to avoid collisions between</span>
<span class="token comment">// packages using context. Users of WithValue should define their own</span>
<span class="token comment">// types for keys. To avoid allocating when assigning to an</span>
<span class="token comment">// interface{}, context keys often have concrete type</span>
<span class="token comment">// struct{}. Alternatively, exported context key variables&#39; static</span>
<span class="token comment">// type should be a pointer or interface.</span>
<span class="token keyword">func</span> <span class="token function">WithValue</span><span class="token punctuation">(</span>parent Context<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val any<span class="token punctuation">)</span> Context <span class="token punctuation">{</span>
	<span class="token keyword">if</span> parent <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;cannot create context from nil parent&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> key <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;nil key&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>reflectlite<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Comparable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;key is not comparable&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>valueCtx<span class="token punctuation">{</span>parent<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> reference</h2>`,49),d={href:"https://mp.weixin.qq.com/s/AavRL-xezwsiQLQ1OpLKmA",target:"_blank",rel:"noopener noreferrer"};function r(k,v){const s=i("ExternalLinkIcon");return e(),t("div",null,[u,n("p",null,[n("a",d,[c("https://mp.weixin.qq.com/s/AavRL-xezwsiQLQ1OpLKmA"),p(s)])])])}const b=a(l,[["render",r],["__file","ctx.html.vue"]]);export{b as default};
