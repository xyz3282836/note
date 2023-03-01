import{_ as n,W as s,X as a,a0 as t}from"./framework-52f8fb67.js";const e={},o=t(`<h1 id="ascii-conn" tabindex="-1"><a class="header-anchor" href="#ascii-conn" aria-hidden="true">#</a> ascii_conn</h1><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// asiiConn is the low-level implementation of Conn</span>
<span class="token comment">// 实现了conn.go的protocolConn interface</span>
<span class="token keyword">type</span> asiiConn <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	err  <span class="token builtin">error</span>
	conn net<span class="token punctuation">.</span>Conn
	<span class="token comment">// Read &amp; Write</span>
	readTimeout  time<span class="token punctuation">.</span>Duration
	writeTimeout time<span class="token punctuation">.</span>Duration
	rw           <span class="token operator">*</span>bufio<span class="token punctuation">.</span>ReadWriter
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">newASCIIConn</span><span class="token punctuation">(</span>netConn net<span class="token punctuation">.</span>Conn<span class="token punctuation">,</span> readTimeout<span class="token punctuation">,</span> writeTimeout time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token punctuation">(</span>protocolConn<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> writeTimeout <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">||</span> readTimeout <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> pkgerr<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;readTimeout writeTimeout can&#39;t be zero&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	c <span class="token operator">:=</span> <span class="token operator">&amp;</span>asiiConn<span class="token punctuation">{</span>
		conn<span class="token punctuation">:</span> netConn<span class="token punctuation">,</span>
		rw<span class="token punctuation">:</span> bufio<span class="token punctuation">.</span><span class="token function">NewReadWriter</span><span class="token punctuation">(</span>bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>netConn<span class="token punctuation">)</span><span class="token punctuation">,</span>
			bufio<span class="token punctuation">.</span><span class="token function">NewWriter</span><span class="token punctuation">(</span>netConn<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		readTimeout<span class="token punctuation">:</span>  readTimeout<span class="token punctuation">,</span>
		writeTimeout<span class="token punctuation">:</span> writeTimeout<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> c<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[o];function i(c,u){return s(),a("div",null,p)}const r=n(e,[["render",i],["__file","ascii_conn.html.vue"]]);export{r as default};
