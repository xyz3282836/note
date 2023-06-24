import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-739499e9.js";const i="/assets/go-test-0b26bf90.png",t={},l=e(`<h1 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test</h1><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">BenchmarkGetPrimes</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token function">GetPrimes</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go <span class="token builtin class-name">test</span> <span class="token parameter variable">-bench</span><span class="token operator">=</span>. <span class="token parameter variable">-run</span><span class="token operator">=</span>^$  lesson2/article10/main
goos: darwin
goarch: amd64
pkg: lesson2/article10/main
BenchmarkGetPrimes-8      <span class="token number">312973</span>              <span class="token number">3307</span> ns/op
PASS
ok      lesson2/article10/main  <span class="token number">1</span>.082s
<span class="token parameter variable">-bench</span><span class="token operator">=</span>.，只有有了这个标记，命令才会进行性能测试，.表示需要执行任意名称的性能测试函数。
<span class="token parameter variable">-run</span><span class="token operator">=</span>^$，这个标记用于表明需要执行哪些功能测试函数，值^$意味着：只执行名称为空的功能测试函数，换句话说，不执行任何功能测试函数。

BenchmarkGetPrimes-8被称为单个性能测试的名称，它表示命令执行了性能测试函数BenchmarkGetPrimes，并且当时所用的最大 P 数量为8。最大 P 数量相当于可以同时运行 goroutine 的逻辑 CPU 的最大个数。

在写测试函数的时候会调用传入参数b *testing.B的b.N。go test命令会先尝试把b.N设置为1，然后执行测试函数。

如果测试函数的执行时间没有超过上限，此上限默认为 <span class="token number">1</span> 秒，那么命令就会改大b.N的值，然后再次执行测试函数，如此往复，直到这个时间大于或等于上限为止。
所以b.N就是指的上面结果中的312973。3307 ns/op表明单次执行GetPrimes函数的平均耗时为3307纳秒。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>run test</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go test -v -run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>run benchmark</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> go <span class="token builtin class-name">test</span> <span class="token parameter variable">-bench</span><span class="token operator">=</span>BenchmarkBufferWithPool <span class="token parameter variable">-benchmem</span> <span class="token parameter variable">-count</span><span class="token operator">=</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),r=[l];function c(o,p){return s(),a("div",null,r)}const m=n(t,[["render",c],["__file","test.html.vue"]]);export{m as default};
