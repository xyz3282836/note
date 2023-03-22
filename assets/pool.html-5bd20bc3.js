const n=JSON.parse('{"key":"v-0edd84b2","path":"/source-code/go-standard-lib/sync/pool.html","title":"pool 池","lang":"zh-CN","frontmatter":{"description":"pool 池 // A Pool must not be copied after first use. type Pool struct { \\tnoCopy noCopy \\tlocal unsafe.Pointer // local fixed-size per-P pool, actual type is [P]poolLocal 每个P一个，pid为索引 \\tlocalSize uintptr // size of the local array \\tvictim unsafe.Pointer // local from previous cycle \\tvictimSize uintptr // size of victims array \\t// New optionally specifies a function to generate \\t// a value when Get would otherwise return nil. \\t// It may not be changed concurrently with calls to Get. \\tNew func() any } type poolLocal struct { \\tpoolLocalInternal \\t// Prevents false sharing on widespread platforms with \\t// 128 mod (cache line size) = 0 . \\tpad [128 - unsafe.Sizeof(poolLocalInternal{})%128]byte } // Local per-P Pool appendix. type poolLocalInternal struct { \\tprivate any // Can be used only by the respective P.只能当前 P 获取 \\tshared poolChain // Local P can pushHead/popHead; any P can popTail. }","head":[["meta",{"property":"og:url","content":"https://www.ruizhou.cf/source-code/go-standard-lib/sync/pool.html"}],["meta",{"property":"og:site_name","content":"rz文档"}],["meta",{"property":"og:title","content":"pool 池"}],["meta",{"property":"og:description","content":"pool 池 // A Pool must not be copied after first use. type Pool struct { \\tnoCopy noCopy \\tlocal unsafe.Pointer // local fixed-size per-P pool, actual type is [P]poolLocal 每个P一个，pid为索引 \\tlocalSize uintptr // size of the local array \\tvictim unsafe.Pointer // local from previous cycle \\tvictimSize uintptr // size of victims array \\t// New optionally specifies a function to generate \\t// a value when Get would otherwise return nil. \\t// It may not be changed concurrently with calls to Get. \\tNew func() any } type poolLocal struct { \\tpoolLocalInternal \\t// Prevents false sharing on widespread platforms with \\t// 128 mod (cache line size) = 0 . \\tpad [128 - unsafe.Sizeof(poolLocalInternal{})%128]byte } // Local per-P Pool appendix. type poolLocalInternal struct { \\tprivate any // Can be used only by the respective P.只能当前 P 获取 \\tshared poolChain // Local P can pushHead/popHead; any P can popTail. }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-11T14:36:50.000Z"}],["meta",{"property":"article:author","content":"rz"}],["meta",{"property":"article:modified_time","content":"2023-03-11T14:36:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pool 池\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-11T14:36:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"rz\\",\\"url\\":\\"https://github.com/xyz3282836/monodoc\\"}]}"]]},"headers":[],"git":{"createdTime":1678545410000,"updatedTime":1678545410000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":1}]},"readingTime":{"minutes":1.22,"words":365},"filePathRelative":"source-code/go-standard-lib/sync/pool.md","localizedDate":"2023年3月11日","excerpt":"<h1> pool 池</h1>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token comment\\">// A Pool must not be copied after first use.</span>\\n<span class=\\"token keyword\\">type</span> Pool <span class=\\"token keyword\\">struct</span> <span class=\\"token punctuation\\">{</span>\\n\\tnoCopy noCopy\\n\\n\\tlocal     unsafe<span class=\\"token punctuation\\">.</span>Pointer <span class=\\"token comment\\">// local fixed-size per-P pool, actual type is [P]poolLocal 每个P一个，pid为索引</span>\\n\\tlocalSize <span class=\\"token builtin\\">uintptr</span>        <span class=\\"token comment\\">// size of the local array</span>\\n\\n\\tvictim     unsafe<span class=\\"token punctuation\\">.</span>Pointer <span class=\\"token comment\\">// local from previous cycle</span>\\n\\tvictimSize <span class=\\"token builtin\\">uintptr</span>        <span class=\\"token comment\\">// size of victims array</span>\\n\\n\\t<span class=\\"token comment\\">// New optionally specifies a function to generate</span>\\n\\t<span class=\\"token comment\\">// a value when Get would otherwise return nil.</span>\\n\\t<span class=\\"token comment\\">// It may not be changed concurrently with calls to Get.</span>\\n\\tNew <span class=\\"token keyword\\">func</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> any\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">type</span> poolLocal <span class=\\"token keyword\\">struct</span> <span class=\\"token punctuation\\">{</span>\\n\\tpoolLocalInternal\\n\\t<span class=\\"token comment\\">// Prevents false sharing on widespread platforms with</span>\\n\\t<span class=\\"token comment\\">// 128 mod (cache line size) = 0 .</span>\\n\\tpad <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">128</span> <span class=\\"token operator\\">-</span> unsafe<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Sizeof</span><span class=\\"token punctuation\\">(</span>poolLocalInternal<span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">%</span><span class=\\"token number\\">128</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">byte</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token comment\\">// Local per-P Pool appendix.</span>\\n<span class=\\"token keyword\\">type</span> poolLocalInternal <span class=\\"token keyword\\">struct</span> <span class=\\"token punctuation\\">{</span>\\n\\tprivate any       <span class=\\"token comment\\">// Can be used only by the respective P.只能当前 P 获取</span>\\n\\tshared  poolChain <span class=\\"token comment\\">// Local P can pushHead/popHead; any P can popTail.</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
