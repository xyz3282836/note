const e=JSON.parse('{"key":"v-6f1b987a","path":"/go/profiles/go%20profiling%20tracing%20observability.html","title":"go profiling tracing observability","lang":"zh-CN","frontmatter":{"description":"go profiling tracing observability Goroutine scheduler Garbage Collection The stack The heap Go profilers cpu profiler 两种方式： 1.写文件 \\tfile, _ := os.Create(\\"./cpu.pprof\\") \\tpprof.StartCPUProfile(file) \\tdefer pprof.StopCPUProfile() // go tool pprof [--http=:8080] cpu.pprof|http://127.0.0.1:xxx/debug/pprof/profile [web浏览器]本地命令 打开 [文件采集或者web采集]","head":[["meta",{"property":"og:url","content":"https://www.ruizhou.cf/go/profiles/go%20profiling%20tracing%20observability.html"}],["meta",{"property":"og:site_name","content":"rz文档"}],["meta",{"property":"og:title","content":"go profiling tracing observability"}],["meta",{"property":"og:description","content":"go profiling tracing observability Goroutine scheduler Garbage Collection The stack The heap Go profilers cpu profiler 两种方式： 1.写文件 \\tfile, _ := os.Create(\\"./cpu.pprof\\") \\tpprof.StartCPUProfile(file) \\tdefer pprof.StopCPUProfile() // go tool pprof [--http=:8080] cpu.pprof|http://127.0.0.1:xxx/debug/pprof/profile [web浏览器]本地命令 打开 [文件采集或者web采集]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-11T14:36:50.000Z"}],["meta",{"property":"article:author","content":"rz"}],["meta",{"property":"article:modified_time","content":"2023-03-11T14:36:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"go profiling tracing observability\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-11T14:36:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"rz\\",\\"url\\":\\"https://github.com/xyz3282836/monodoc\\"}]}"]]},"headers":[{"level":2,"title":"Go profilers","slug":"go-profilers","link":"#go-profilers","children":[{"level":3,"title":"cpu profiler","slug":"cpu-profiler","link":"#cpu-profiler","children":[]},{"level":3,"title":"Memory profiler","slug":"memory-profiler","link":"#memory-profiler","children":[]},{"level":3,"title":"Block profiler","slug":"block-profiler","link":"#block-profiler","children":[]},{"level":3,"title":"Mutex profiler","slug":"mutex-profiler","link":"#mutex-profiler","children":[]},{"level":3,"title":"","slug":"","link":"#","children":[]}]}],"git":{"createdTime":1678545410000,"updatedTime":1678545410000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":1}]},"readingTime":{"minutes":0.83,"words":250},"filePathRelative":"go/profiles/go profiling tracing observability.md","localizedDate":"2023年3月11日","excerpt":"<h1> go profiling tracing observability</h1>\\n<p>Goroutine scheduler</p>\\n<p>Garbage Collection</p>\\n<p>The stack</p>\\n<p>The heap</p>\\n<h2> Go profilers</h2>\\n<h3> cpu profiler</h3>\\n<p>两种方式：</p>\\n<p>1.写文件</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code>\\tfile<span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">_</span> <span class=\\"token operator\\">:=</span> os<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Create</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"./cpu.pprof\\"</span><span class=\\"token punctuation\\">)</span>\\n\\tpprof<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">StartCPUProfile</span><span class=\\"token punctuation\\">(</span>file<span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token keyword\\">defer</span> pprof<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">StopCPUProfile</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">// go tool pprof [--http=:8080] cpu.pprof|http://127.0.0.1:xxx/debug/pprof/profile [web浏览器]本地命令 打开 [文件采集或者web采集]</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
