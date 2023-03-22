const e=JSON.parse('{"key":"v-1731abc5","path":"/go/mod.html","title":"mod","lang":"zh-CN","frontmatter":{"description":"mod 常用命令 //目标 repo 有哪些版本 go list -m -versions repo //实际最终使用那个版本的repo go list -m all|grep repo // 某个repo 被依赖的list go mod graph |grep repo // 某个repo 被引用的链路 go mod why repo go get [option] repo -t flag：考虑构建测试所需的module。 -d flag：下载每个module的源代码，但不要构建或安装它们。 -v flag：提供详细输出。 ./… ：在整个源代码树中执行这些操作，并且仅更新所需的依赖项。","head":[["meta",{"property":"og:url","content":"https://www.ruizhou.cf/go/mod.html"}],["meta",{"property":"og:site_name","content":"rz文档"}],["meta",{"property":"og:title","content":"mod"}],["meta",{"property":"og:description","content":"mod 常用命令 //目标 repo 有哪些版本 go list -m -versions repo //实际最终使用那个版本的repo go list -m all|grep repo // 某个repo 被依赖的list go mod graph |grep repo // 某个repo 被引用的链路 go mod why repo go get [option] repo -t flag：考虑构建测试所需的module。 -d flag：下载每个module的源代码，但不要构建或安装它们。 -v flag：提供详细输出。 ./… ：在整个源代码树中执行这些操作，并且仅更新所需的依赖项。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.ruizhou.cf/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-11T18:24:39.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"mod"}],["meta",{"property":"article:author","content":"rz"}],["meta",{"property":"article:modified_time","content":"2023-03-11T18:24:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mod\\",\\"image\\":[\\"https://www.ruizhou.cf/\\"],\\"dateModified\\":\\"2023-03-11T18:24:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"rz\\",\\"url\\":\\"https://github.com/xyz3282836/monodoc\\"}]}"]]},"headers":[{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]}],"git":{"createdTime":1678545410000,"updatedTime":1678559079000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":2}]},"readingTime":{"minutes":0.6,"words":180},"filePathRelative":"go/mod.md","localizedDate":"2023年3月11日","excerpt":"<h1> mod</h1>\\n<h2> 常用命令</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>//目标 repo 有哪些版本\\ngo list <span class=\\"token parameter variable\\">-m</span> <span class=\\"token parameter variable\\">-versions</span> repo\\n\\n//实际最终使用那个版本的repo\\ngo list <span class=\\"token parameter variable\\">-m</span> all<span class=\\"token operator\\">|</span><span class=\\"token function\\">grep</span> repo\\n\\n// 某个repo 被依赖的list\\ngo mod graph <span class=\\"token operator\\">|</span><span class=\\"token function\\">grep</span> repo\\n\\n// 某个repo 被引用的链路\\ngo mod why repo\\n\\n\\ngo get <span class=\\"token punctuation\\">[</span>option<span class=\\"token punctuation\\">]</span> repo\\n<span class=\\"token parameter variable\\">-t</span> flag：考虑构建测试所需的module。\\n<span class=\\"token parameter variable\\">-d</span> flag：下载每个module的源代码，但不要构建或安装它们。\\n<span class=\\"token parameter variable\\">-v</span> flag：提供详细输出。\\n./… ：在整个源代码树中执行这些操作，并且仅更新所需的依赖项。\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
