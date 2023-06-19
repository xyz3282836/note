const e=JSON.parse(`{"key":"v-36a869d0","path":"/source-code/go-standard-lib/context/ctx.html","title":"context","lang":"zh-CN","frontmatter":{"description":"context 概念 子继承父 context，并且传递信号从父单项传播子，位于 src/context 目录下 定义 4 个主要方法 // A Context carries a deadline, a cancellation signal, and other values across // API boundaries. // // Context's methods may be called by multiple goroutines simultaneously. type Context interface { \\t// Deadline returns the time when work done on behalf of this context \\t// should be canceled. Deadline returns ok==false when no deadline is \\t// set. Successive calls to Deadline return the same results. \\tDeadline() (deadline time.Time, ok bool) \\t// Done returns a channel that's closed when work done on behalf of this \\t// context should be canceled. Done may return nil if this context can \\t// never be canceled. Successive calls to Done return the same value. \\t// The close of the Done channel may happen asynchronously, \\t// after the cancel function returns. \\t// \\t// WithCancel arranges for Done to be closed when cancel is called; \\t// WithDeadline arranges for Done to be closed when the deadline \\t// expires; WithTimeout arranges for Done to be closed when the timeout \\t// elapses. \\t// \\t// Done is provided for use in select statements: \\t// \\t// // Stream generates values with DoSomething and sends them to out \\t// // until DoSomething returns an error or ctx.Done is closed. \\t// func Stream(ctx context.Context, out chan&lt;- Value) error { \\t// \\tfor { \\t// \\t\\tv, err := DoSomething(ctx) \\t// \\t\\tif err != nil { \\t// \\t\\t\\treturn err \\t// \\t\\t} \\t// \\t\\tselect { \\t// \\t\\tcase &lt;-ctx.Done(): \\t// \\t\\t\\treturn ctx.Err() \\t// \\t\\tcase out &lt;- v: \\t// \\t\\t} \\t// \\t} \\t// } \\t// \\t// See https://blog.golang.org/pipelines for more examples of how to use \\t// a Done channel for cancellation. \\tDone() &lt;-chan struct{} \\t// If Done is not yet closed, Err returns nil. \\t// If Done is closed, Err returns a non-nil error explaining why: \\t// Canceled if the context was canceled \\t// or DeadlineExceeded if the context's deadline passed. \\t// After Err returns a non-nil error, successive calls to Err return the same error. \\tErr() error \\t// Value returns the value associated with this context for key, or nil \\t// if no value is associated with key. Successive calls to Value with \\t// the same key returns the same result. \\t// \\t// Use context values only for request-scoped data that transits \\t// processes and API boundaries, not for passing optional parameters to \\t// functions. \\t// \\t// A key identifies a specific value in a Context. Functions that wish \\t// to store values in Context typically allocate a key in a global \\t// variable then use that key as the argument to context.WithValue and \\t// Context.Value. A key can be any type that supports equality; \\t// packages should define keys as an unexported type to avoid \\t// collisions. \\t// \\t// Packages that define a Context key should provide type-safe accessors \\t// for the values stored using that key: \\t// \\t// \\t// Package user defines a User type that's stored in Contexts. \\t// \\tpackage user \\t// \\t// \\timport \\"context\\" \\t// \\t// \\t// User is the type of value stored in the Contexts. \\t// \\ttype User struct {...} \\t// \\t// \\t// key is an unexported type for keys defined in this package. \\t// \\t// This prevents collisions with keys defined in other packages. \\t// \\ttype key int \\t// \\t// \\t// userKey is the key for user.User values in Contexts. It is \\t// \\t// unexported; clients use user.NewContext and user.FromContext \\t// \\t// instead of using this key directly. \\t// \\tvar userKey key \\t// \\t// \\t// NewContext returns a new Context that carries value u. \\t// \\tfunc NewContext(ctx context.Context, u *User) context.Context { \\t// \\t\\treturn context.WithValue(ctx, userKey, u) \\t// \\t} \\t// \\t// \\t// FromContext returns the User value stored in ctx, if any. \\t// \\tfunc FromContext(ctx context.Context) (*User, bool) { \\t// \\t\\tu, ok := ctx.Value(userKey).(*User) \\t// \\t\\treturn u, ok \\t// \\t} \\tValue(key any) any }","head":[["meta",{"property":"og:url","content":"https://www.ruizhou.cf/source-code/go-standard-lib/context/ctx.html"}],["meta",{"property":"og:site_name","content":"rz文档"}],["meta",{"property":"og:title","content":"context"}],["meta",{"property":"og:description","content":"context 概念 子继承父 context，并且传递信号从父单项传播子，位于 src/context 目录下 定义 4 个主要方法 // A Context carries a deadline, a cancellation signal, and other values across // API boundaries. // // Context's methods may be called by multiple goroutines simultaneously. type Context interface { \\t// Deadline returns the time when work done on behalf of this context \\t// should be canceled. Deadline returns ok==false when no deadline is \\t// set. Successive calls to Deadline return the same results. \\tDeadline() (deadline time.Time, ok bool) \\t// Done returns a channel that's closed when work done on behalf of this \\t// context should be canceled. Done may return nil if this context can \\t// never be canceled. Successive calls to Done return the same value. \\t// The close of the Done channel may happen asynchronously, \\t// after the cancel function returns. \\t// \\t// WithCancel arranges for Done to be closed when cancel is called; \\t// WithDeadline arranges for Done to be closed when the deadline \\t// expires; WithTimeout arranges for Done to be closed when the timeout \\t// elapses. \\t// \\t// Done is provided for use in select statements: \\t// \\t// // Stream generates values with DoSomething and sends them to out \\t// // until DoSomething returns an error or ctx.Done is closed. \\t// func Stream(ctx context.Context, out chan&lt;- Value) error { \\t// \\tfor { \\t// \\t\\tv, err := DoSomething(ctx) \\t// \\t\\tif err != nil { \\t// \\t\\t\\treturn err \\t// \\t\\t} \\t// \\t\\tselect { \\t// \\t\\tcase &lt;-ctx.Done(): \\t// \\t\\t\\treturn ctx.Err() \\t// \\t\\tcase out &lt;- v: \\t// \\t\\t} \\t// \\t} \\t// } \\t// \\t// See https://blog.golang.org/pipelines for more examples of how to use \\t// a Done channel for cancellation. \\tDone() &lt;-chan struct{} \\t// If Done is not yet closed, Err returns nil. \\t// If Done is closed, Err returns a non-nil error explaining why: \\t// Canceled if the context was canceled \\t// or DeadlineExceeded if the context's deadline passed. \\t// After Err returns a non-nil error, successive calls to Err return the same error. \\tErr() error \\t// Value returns the value associated with this context for key, or nil \\t// if no value is associated with key. Successive calls to Value with \\t// the same key returns the same result. \\t// \\t// Use context values only for request-scoped data that transits \\t// processes and API boundaries, not for passing optional parameters to \\t// functions. \\t// \\t// A key identifies a specific value in a Context. Functions that wish \\t// to store values in Context typically allocate a key in a global \\t// variable then use that key as the argument to context.WithValue and \\t// Context.Value. A key can be any type that supports equality; \\t// packages should define keys as an unexported type to avoid \\t// collisions. \\t// \\t// Packages that define a Context key should provide type-safe accessors \\t// for the values stored using that key: \\t// \\t// \\t// Package user defines a User type that's stored in Contexts. \\t// \\tpackage user \\t// \\t// \\timport \\"context\\" \\t// \\t// \\t// User is the type of value stored in the Contexts. \\t// \\ttype User struct {...} \\t// \\t// \\t// key is an unexported type for keys defined in this package. \\t// \\t// This prevents collisions with keys defined in other packages. \\t// \\ttype key int \\t// \\t// \\t// userKey is the key for user.User values in Contexts. It is \\t// \\t// unexported; clients use user.NewContext and user.FromContext \\t// \\t// instead of using this key directly. \\t// \\tvar userKey key \\t// \\t// \\t// NewContext returns a new Context that carries value u. \\t// \\tfunc NewContext(ctx context.Context, u *User) context.Context { \\t// \\t\\treturn context.WithValue(ctx, userKey, u) \\t// \\t} \\t// \\t// \\t// FromContext returns the User value stored in ctx, if any. \\t// \\tfunc FromContext(ctx context.Context) (*User, bool) { \\t// \\t\\tu, ok := ctx.Value(userKey).(*User) \\t// \\t\\treturn u, ok \\t// \\t} \\tValue(key any) any }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-11T14:36:50.000Z"}],["meta",{"property":"article:author","content":"rz"}],["meta",{"property":"article:modified_time","content":"2023-03-11T14:36:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"context\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-11T14:36:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"rz\\",\\"url\\":\\"https://github.com/xyz3282836/monodoc\\"}]}"]]},"headers":[{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[{"level":3,"title":"定义","slug":"定义","link":"#定义","children":[]}]},{"level":2,"title":"emptyCtx","slug":"emptyctx","link":"#emptyctx","children":[{"level":3,"title":"定义","slug":"定义-1","link":"#定义-1","children":[]}]},{"level":2,"title":"cancelCtx","slug":"cancelctx","link":"#cancelctx","children":[{"level":3,"title":"定义","slug":"定义-2","link":"#定义-2","children":[]},{"level":3,"title":"interface 实现","slug":"interface-实现","link":"#interface-实现","children":[]},{"level":3,"title":"创建","slug":"创建","link":"#创建","children":[]}]},{"level":2,"title":"timeCtx","slug":"timectx","link":"#timectx","children":[{"level":3,"title":"定义","slug":"定义-3","link":"#定义-3","children":[]},{"level":3,"title":"interface 实现","slug":"interface-实现-1","link":"#interface-实现-1","children":[]},{"level":3,"title":"创建","slug":"创建-1","link":"#创建-1","children":[]}]},{"level":2,"title":"valueCtx","slug":"valuectx","link":"#valuectx","children":[{"level":3,"title":"定义","slug":"定义-4","link":"#定义-4","children":[]},{"level":3,"title":"interface 实现","slug":"interface-实现-2","link":"#interface-实现-2","children":[]},{"level":3,"title":"创建","slug":"创建-2","link":"#创建-2","children":[]}]},{"level":2,"title":"reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1678545410000,"updatedTime":1678545410000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":1}]},"readingTime":{"minutes":7.02,"words":2106},"filePathRelative":"source-code/go-standard-lib/context/ctx.md","localizedDate":"2023年3月11日","excerpt":"<h1> context</h1>\\n<h2> 概念</h2>\\n<p>子继承父 context，并且传递信号从父<code>单项传播</code>子，位于 src/context 目录下</p>\\n<h3> 定义</h3>\\n<p>4 个主要方法</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token comment\\">// A Context carries a deadline, a cancellation signal, and other values across</span>\\n<span class=\\"token comment\\">// API boundaries.</span>\\n<span class=\\"token comment\\">//</span>\\n<span class=\\"token comment\\">// Context's methods may be called by multiple goroutines simultaneously.</span>\\n<span class=\\"token keyword\\">type</span> Context <span class=\\"token keyword\\">interface</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token comment\\">// Deadline returns the time when work done on behalf of this context</span>\\n\\t<span class=\\"token comment\\">// should be canceled. Deadline returns ok==false when no deadline is</span>\\n\\t<span class=\\"token comment\\">// set. Successive calls to Deadline return the same results.</span>\\n\\t<span class=\\"token function\\">Deadline</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">(</span>deadline time<span class=\\"token punctuation\\">.</span>Time<span class=\\"token punctuation\\">,</span> ok <span class=\\"token builtin\\">bool</span><span class=\\"token punctuation\\">)</span>\\n\\n\\t<span class=\\"token comment\\">// Done returns a channel that's closed when work done on behalf of this</span>\\n\\t<span class=\\"token comment\\">// context should be canceled. Done may return nil if this context can</span>\\n\\t<span class=\\"token comment\\">// never be canceled. Successive calls to Done return the same value.</span>\\n\\t<span class=\\"token comment\\">// The close of the Done channel may happen asynchronously,</span>\\n\\t<span class=\\"token comment\\">// after the cancel function returns.</span>\\n\\t<span class=\\"token comment\\">//</span>\\n\\t<span class=\\"token comment\\">// WithCancel arranges for Done to be closed when cancel is called;</span>\\n\\t<span class=\\"token comment\\">// WithDeadline arranges for Done to be closed when the deadline</span>\\n\\t<span class=\\"token comment\\">// expires; WithTimeout arranges for Done to be closed when the timeout</span>\\n\\t<span class=\\"token comment\\">// elapses.</span>\\n\\t<span class=\\"token comment\\">//</span>\\n\\t<span class=\\"token comment\\">// Done is provided for use in select statements:</span>\\n\\t<span class=\\"token comment\\">//</span>\\n\\t<span class=\\"token comment\\">//  // Stream generates values with DoSomething and sends them to out</span>\\n\\t<span class=\\"token comment\\">//  // until DoSomething returns an error or ctx.Done is closed.</span>\\n\\t<span class=\\"token comment\\">//  func Stream(ctx context.Context, out chan&lt;- Value) error {</span>\\n\\t<span class=\\"token comment\\">//  \\tfor {</span>\\n\\t<span class=\\"token comment\\">//  \\t\\tv, err := DoSomething(ctx)</span>\\n\\t<span class=\\"token comment\\">//  \\t\\tif err != nil {</span>\\n\\t<span class=\\"token comment\\">//  \\t\\t\\treturn err</span>\\n\\t<span class=\\"token comment\\">//  \\t\\t}</span>\\n\\t<span class=\\"token comment\\">//  \\t\\tselect {</span>\\n\\t<span class=\\"token comment\\">//  \\t\\tcase &lt;-ctx.Done():</span>\\n\\t<span class=\\"token comment\\">//  \\t\\t\\treturn ctx.Err()</span>\\n\\t<span class=\\"token comment\\">//  \\t\\tcase out &lt;- v:</span>\\n\\t<span class=\\"token comment\\">//  \\t\\t}</span>\\n\\t<span class=\\"token comment\\">//  \\t}</span>\\n\\t<span class=\\"token comment\\">//  }</span>\\n\\t<span class=\\"token comment\\">//</span>\\n\\t<span class=\\"token comment\\">// See https://blog.golang.org/pipelines for more examples of how to use</span>\\n\\t<span class=\\"token comment\\">// a Done channel for cancellation.</span>\\n\\t<span class=\\"token function\\">Done</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&lt;-</span><span class=\\"token keyword\\">chan</span> <span class=\\"token keyword\\">struct</span><span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n\\n\\t<span class=\\"token comment\\">// If Done is not yet closed, Err returns nil.</span>\\n\\t<span class=\\"token comment\\">// If Done is closed, Err returns a non-nil error explaining why:</span>\\n\\t<span class=\\"token comment\\">// Canceled if the context was canceled</span>\\n\\t<span class=\\"token comment\\">// or DeadlineExceeded if the context's deadline passed.</span>\\n\\t<span class=\\"token comment\\">// After Err returns a non-nil error, successive calls to Err return the same error.</span>\\n\\t<span class=\\"token function\\">Err</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token builtin\\">error</span>\\n\\n\\t<span class=\\"token comment\\">// Value returns the value associated with this context for key, or nil</span>\\n\\t<span class=\\"token comment\\">// if no value is associated with key. Successive calls to Value with</span>\\n\\t<span class=\\"token comment\\">// the same key returns the same result.</span>\\n\\t<span class=\\"token comment\\">//</span>\\n\\t<span class=\\"token comment\\">// Use context values only for request-scoped data that transits</span>\\n\\t<span class=\\"token comment\\">// processes and API boundaries, not for passing optional parameters to</span>\\n\\t<span class=\\"token comment\\">// functions.</span>\\n\\t<span class=\\"token comment\\">//</span>\\n\\t<span class=\\"token comment\\">// A key identifies a specific value in a Context. Functions that wish</span>\\n\\t<span class=\\"token comment\\">// to store values in Context typically allocate a key in a global</span>\\n\\t<span class=\\"token comment\\">// variable then use that key as the argument to context.WithValue and</span>\\n\\t<span class=\\"token comment\\">// Context.Value. A key can be any type that supports equality;</span>\\n\\t<span class=\\"token comment\\">// packages should define keys as an unexported type to avoid</span>\\n\\t<span class=\\"token comment\\">// collisions.</span>\\n\\t<span class=\\"token comment\\">//</span>\\n\\t<span class=\\"token comment\\">// Packages that define a Context key should provide type-safe accessors</span>\\n\\t<span class=\\"token comment\\">// for the values stored using that key:</span>\\n\\t<span class=\\"token comment\\">//</span>\\n\\t<span class=\\"token comment\\">// \\t// Package user defines a User type that's stored in Contexts.</span>\\n\\t<span class=\\"token comment\\">// \\tpackage user</span>\\n\\t<span class=\\"token comment\\">//</span>\\n\\t<span class=\\"token comment\\">// \\timport \\"context\\"</span>\\n\\t<span class=\\"token comment\\">//</span>\\n\\t<span class=\\"token comment\\">// \\t// User is the type of value stored in the Contexts.</span>\\n\\t<span class=\\"token comment\\">// \\ttype User struct {...}</span>\\n\\t<span class=\\"token comment\\">//</span>\\n\\t<span class=\\"token comment\\">// \\t// key is an unexported type for keys defined in this package.</span>\\n\\t<span class=\\"token comment\\">// \\t// This prevents collisions with keys defined in other packages.</span>\\n\\t<span class=\\"token comment\\">// \\ttype key int</span>\\n\\t<span class=\\"token comment\\">//</span>\\n\\t<span class=\\"token comment\\">// \\t// userKey is the key for user.User values in Contexts. It is</span>\\n\\t<span class=\\"token comment\\">// \\t// unexported; clients use user.NewContext and user.FromContext</span>\\n\\t<span class=\\"token comment\\">// \\t// instead of using this key directly.</span>\\n\\t<span class=\\"token comment\\">// \\tvar userKey key</span>\\n\\t<span class=\\"token comment\\">//</span>\\n\\t<span class=\\"token comment\\">// \\t// NewContext returns a new Context that carries value u.</span>\\n\\t<span class=\\"token comment\\">// \\tfunc NewContext(ctx context.Context, u *User) context.Context {</span>\\n\\t<span class=\\"token comment\\">// \\t\\treturn context.WithValue(ctx, userKey, u)</span>\\n\\t<span class=\\"token comment\\">// \\t}</span>\\n\\t<span class=\\"token comment\\">//</span>\\n\\t<span class=\\"token comment\\">// \\t// FromContext returns the User value stored in ctx, if any.</span>\\n\\t<span class=\\"token comment\\">// \\tfunc FromContext(ctx context.Context) (*User, bool) {</span>\\n\\t<span class=\\"token comment\\">// \\t\\tu, ok := ctx.Value(userKey).(*User)</span>\\n\\t<span class=\\"token comment\\">// \\t\\treturn u, ok</span>\\n\\t<span class=\\"token comment\\">// \\t}</span>\\n\\t<span class=\\"token function\\">Value</span><span class=\\"token punctuation\\">(</span>key any<span class=\\"token punctuation\\">)</span> any\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};