const n=JSON.parse('{"key":"v-52dc23b1","path":"/source-code/bilibili-kratos/context/ctx-time.html","title":"context timeout","lang":"zh-CN","frontmatter":{"description":"context timeout client // d 为本地配置某个下游的超时时间，c为上游传递的ctx，比较后选小的 func (d Duration) Shrink(c context.Context) (Duration, context.Context, context.CancelFunc) { \\tif deadline, ok := c.Deadline(); ok { \\t\\tif ctimeout := xtime.Until(deadline); ctimeout &lt; xtime.Duration(d) { \\t\\t\\t// 选小的 \\t\\t\\treturn Duration(ctimeout), c, func() {} \\t\\t} \\t} \\tctx, cancel := context.WithTimeout(c, xtime.Duration(d)) \\treturn d, ctx, cancel }","head":[["meta",{"property":"og:url","content":"https://www.ruizhou.cf/source-code/bilibili-kratos/context/ctx-time.html"}],["meta",{"property":"og:site_name","content":"rz文档"}],["meta",{"property":"og:title","content":"context timeout"}],["meta",{"property":"og:description","content":"context timeout client // d 为本地配置某个下游的超时时间，c为上游传递的ctx，比较后选小的 func (d Duration) Shrink(c context.Context) (Duration, context.Context, context.CancelFunc) { \\tif deadline, ok := c.Deadline(); ok { \\t\\tif ctimeout := xtime.Until(deadline); ctimeout &lt; xtime.Duration(d) { \\t\\t\\t// 选小的 \\t\\t\\treturn Duration(ctimeout), c, func() {} \\t\\t} \\t} \\tctx, cancel := context.WithTimeout(c, xtime.Duration(d)) \\treturn d, ctx, cancel }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-11T14:36:50.000Z"}],["meta",{"property":"article:author","content":"rz"}],["meta",{"property":"article:modified_time","content":"2023-03-11T14:36:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"context timeout\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-11T14:36:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"rz\\",\\"url\\":\\"https://github.com/xyz3282836/monodoc\\"}]}"]]},"headers":[{"level":3,"title":"client","slug":"client","link":"#client","children":[]},{"level":3,"title":"server","slug":"server","link":"#server","children":[]}],"git":{"createdTime":1678545410000,"updatedTime":1678545410000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":1}]},"readingTime":{"minutes":0.79,"words":237},"filePathRelative":"source-code/bilibili-kratos/context/ctx-time.md","localizedDate":"2023年3月11日","excerpt":"<h1> context timeout</h1>\\n<h3> client</h3>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token comment\\">// d 为本地配置某个下游的超时时间，c为上游传递的ctx，比较后选小的</span>\\n<span class=\\"token keyword\\">func</span> <span class=\\"token punctuation\\">(</span>d Duration<span class=\\"token punctuation\\">)</span> <span class=\\"token function\\">Shrink</span><span class=\\"token punctuation\\">(</span>c context<span class=\\"token punctuation\\">.</span>Context<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">(</span>Duration<span class=\\"token punctuation\\">,</span> context<span class=\\"token punctuation\\">.</span>Context<span class=\\"token punctuation\\">,</span> context<span class=\\"token punctuation\\">.</span>CancelFunc<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">if</span> deadline<span class=\\"token punctuation\\">,</span> ok <span class=\\"token operator\\">:=</span> c<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Deadline</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> ok <span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token keyword\\">if</span> ctimeout <span class=\\"token operator\\">:=</span> xtime<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Until</span><span class=\\"token punctuation\\">(</span>deadline<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> ctimeout <span class=\\"token operator\\">&lt;</span> xtime<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Duration</span><span class=\\"token punctuation\\">(</span>d<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t<span class=\\"token comment\\">// 选小的</span>\\n\\t\\t\\t<span class=\\"token keyword\\">return</span> <span class=\\"token function\\">Duration</span><span class=\\"token punctuation\\">(</span>ctimeout<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> c<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">func</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\tctx<span class=\\"token punctuation\\">,</span> cancel <span class=\\"token operator\\">:=</span> context<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">WithTimeout</span><span class=\\"token punctuation\\">(</span>c<span class=\\"token punctuation\\">,</span> xtime<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Duration</span><span class=\\"token punctuation\\">(</span>d<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token keyword\\">return</span> d<span class=\\"token punctuation\\">,</span> ctx<span class=\\"token punctuation\\">,</span> cancel\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
