const e=JSON.parse('{"key":"v-0c9a988b","path":"/source-code/go-standard-lib/io/bufio.html","title":"bufio","lang":"zh-CN","frontmatter":{"description":"bufio Package bufio implements buffered I/O. It wraps an io.Reader or io.Writer object, creating another object (Reader or Writer) that also implements the interface but provides buffering and some help for textual I/O. // Buffered input. // Reader implements buffering for an io.Reader object. type Reader struct { buf []byte rd io.Reader // reader provided by the client r, w int // buf read and write positions err error lastByte int // last byte read for UnreadByte; -1 means invalid lastRuneSize int // size of last rune read for UnreadRune; -1 means invalid }","head":[["meta",{"property":"og:url","content":"https://www.ruizhou.cf/source-code/go-standard-lib/io/bufio.html"}],["meta",{"property":"og:site_name","content":"rz文档"}],["meta",{"property":"og:title","content":"bufio"}],["meta",{"property":"og:description","content":"bufio Package bufio implements buffered I/O. It wraps an io.Reader or io.Writer object, creating another object (Reader or Writer) that also implements the interface but provides buffering and some help for textual I/O. // Buffered input. // Reader implements buffering for an io.Reader object. type Reader struct { buf []byte rd io.Reader // reader provided by the client r, w int // buf read and write positions err error lastByte int // last byte read for UnreadByte; -1 means invalid lastRuneSize int // size of last rune read for UnreadRune; -1 means invalid }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-11T14:36:50.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-11T14:36:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"bufio\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-11T14:36:50.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"scanner","slug":"scanner","link":"#scanner","children":[]}],"git":{"createdTime":1678545410000,"updatedTime":1678545410000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":1}]},"readingTime":{"minutes":1.42,"words":426},"filePathRelative":"source-code/go-standard-lib/io/bufio.md","localizedDate":"2023年3月11日","excerpt":"<h1> bufio</h1>\\n<p>Package bufio implements buffered I/O. It wraps an io.Reader or io.Writer object, creating another object (Reader or Writer) that also implements the interface but provides buffering and some help for textual I/O.</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token comment\\">// Buffered input.</span>\\n\\n<span class=\\"token comment\\">// Reader implements buffering for an io.Reader object.</span>\\n<span class=\\"token keyword\\">type</span> Reader <span class=\\"token keyword\\">struct</span> <span class=\\"token punctuation\\">{</span>\\n   buf          <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">byte</span>\\n   rd           io<span class=\\"token punctuation\\">.</span>Reader <span class=\\"token comment\\">// reader provided by the client</span>\\n   r<span class=\\"token punctuation\\">,</span> w         <span class=\\"token builtin\\">int</span>       <span class=\\"token comment\\">// buf read and write positions</span>\\n   err          <span class=\\"token builtin\\">error</span>\\n   lastByte     <span class=\\"token builtin\\">int</span> <span class=\\"token comment\\">// last byte read for UnreadByte; -1 means invalid</span>\\n   lastRuneSize <span class=\\"token builtin\\">int</span> <span class=\\"token comment\\">// size of last rune read for UnreadRune; -1 means invalid</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
