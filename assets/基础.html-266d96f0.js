const e=JSON.parse('{"key":"v-5fe9137f","path":"/go/asm/%E5%9F%BA%E7%A1%80.html","title":"基础","lang":"zh-CN","frontmatter":{"description":"基础 汇编程序指令 assembler directives DATA DATA symbol + offset(SB)/width, value 在给定的 offset 和 width 处初始化该符号的内存为 value。 DATA 必须使用增加的偏移量来写入给定符号的指令。 DATA divtab&lt;&gt;+0x00(SB)/4, $0xf4f8fcff DATA divtab&lt;&gt;+0x04(SB)/4, $0xe6eaedf0 ... DATA divtab&lt;&gt;+0x3c(SB)/4, $0x81828384 GLOBL divtab&lt;&gt;(SB), RODATA, $64 GLOBL runtime·tlsoffset(SB), NOPTR, $4","head":[["meta",{"property":"og:url","content":"https://www.ruizhou.cf/go/asm/%E5%9F%BA%E7%A1%80.html"}],["meta",{"property":"og:site_name","content":"rz文档"}],["meta",{"property":"og:title","content":"基础"}],["meta",{"property":"og:description","content":"基础 汇编程序指令 assembler directives DATA DATA symbol + offset(SB)/width, value 在给定的 offset 和 width 处初始化该符号的内存为 value。 DATA 必须使用增加的偏移量来写入给定符号的指令。 DATA divtab&lt;&gt;+0x00(SB)/4, $0xf4f8fcff DATA divtab&lt;&gt;+0x04(SB)/4, $0xe6eaedf0 ... DATA divtab&lt;&gt;+0x3c(SB)/4, $0x81828384 GLOBL divtab&lt;&gt;(SB), RODATA, $64 GLOBL runtime·tlsoffset(SB), NOPTR, $4"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.ruizhou.cf/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-11T14:36:50.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"基础"}],["meta",{"property":"article:author","content":"rz"}],["meta",{"property":"article:modified_time","content":"2023-03-11T14:36:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基础\\",\\"image\\":[\\"https://www.ruizhou.cf/\\"],\\"dateModified\\":\\"2023-03-11T14:36:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"rz\\",\\"url\\":\\"https://github.com/xyz3282836/monodoc\\"}]}"]]},"headers":[{"level":2,"title":"汇编程序指令 assembler directives","slug":"汇编程序指令-assembler-directives","link":"#汇编程序指令-assembler-directives","children":[{"level":3,"title":"DATA","slug":"data","link":"#data","children":[]},{"level":3,"title":"TEXT","slug":"text","link":"#text","children":[]},{"level":3,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":3,"title":"运行时协调","slug":"运行时协调","link":"#运行时协调","children":[]},{"level":3,"title":"寄存器","slug":"寄存器","link":"#寄存器","children":[]},{"level":3,"title":"通用寄存器","slug":"通用寄存器","link":"#通用寄存器","children":[]},{"level":3,"title":"伪寄存器","slug":"伪寄存器","link":"#伪寄存器","children":[]}]}],"git":{"createdTime":1678545410000,"updatedTime":1678545410000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":1}]},"readingTime":{"minutes":6.46,"words":1937},"filePathRelative":"go/asm/基础.md","localizedDate":"2023年3月11日","excerpt":"<h1> 基础</h1>\\n<h2> 汇编程序指令 assembler directives</h2>\\n<h3> DATA</h3>\\n<p>DATA symbol + offset(SB)/width, value</p>\\n<p>在给定的 offset 和 width 处初始化该符号的内存为 value。 DATA 必须使用增加的偏移量来写入给定符号的指令。</p>\\n<div class=\\"language-asm line-numbers-mode\\" data-ext=\\"asm\\"><pre class=\\"language-asm\\"><code>DATA divtab&lt;&gt;+0x00(SB)/4, $0xf4f8fcff\\nDATA divtab&lt;&gt;+0x04(SB)/4, $0xe6eaedf0\\n...\\nDATA divtab&lt;&gt;+0x3c(SB)/4, $0x81828384\\nGLOBL divtab&lt;&gt;(SB), RODATA, $64\\n\\nGLOBL runtime·tlsoffset(SB), NOPTR, $4\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
