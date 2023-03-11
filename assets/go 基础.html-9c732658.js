const e=JSON.parse('{"key":"v-855ccad8","path":"/go/go%20%E5%9F%BA%E7%A1%80.html","title":"go 基础","lang":"zh-CN","frontmatter":{"description":"go 基础 slice，map，channel 都是引用类型 array 是值类型，区分 slice slice 触发扩容，新的赋值的 slice 的 data 会指向新的底层数组 闭包 闭包是为了减少全局变量，所以闭包引用全局变量不是好的编程方式。 闭包这种隐秘的共享变量的方式带来的坏处是不够直接，不够清晰，除非是非常有价值的地方，一般不建议使用闭包。 go 函数的内部实现 go 函数使用的是 caller-save 的模式，即由调用者负责保存寄存器。","head":[["meta",{"property":"og:url","content":"https://www.ruizhou.cf/go/go%20%E5%9F%BA%E7%A1%80.html"}],["meta",{"property":"og:site_name","content":"rz文档"}],["meta",{"property":"og:title","content":"go 基础"}],["meta",{"property":"og:description","content":"go 基础 slice，map，channel 都是引用类型 array 是值类型，区分 slice slice 触发扩容，新的赋值的 slice 的 data 会指向新的底层数组 闭包 闭包是为了减少全局变量，所以闭包引用全局变量不是好的编程方式。 闭包这种隐秘的共享变量的方式带来的坏处是不够直接，不够清晰，除非是非常有价值的地方，一般不建议使用闭包。 go 函数的内部实现 go 函数使用的是 caller-save 的模式，即由调用者负责保存寄存器。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.ruizhou.cf/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-11T14:36:50.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"go 基础"}],["meta",{"property":"article:modified_time","content":"2023-03-11T14:36:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"go 基础\\",\\"image\\":[\\"https://www.ruizhou.cf/\\"],\\"dateModified\\":\\"2023-03-11T14:36:50.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"闭包","slug":"闭包","link":"#闭包","children":[]},{"level":2,"title":"go 函数的内部实现","slug":"go-函数的内部实现","link":"#go-函数的内部实现","children":[]},{"level":2,"title":"Go 类型系统","slug":"go-类型系统","link":"#go-类型系统","children":[{"level":3,"title":"命名类型","slug":"命名类型","link":"#命名类型","children":[]},{"level":3,"title":"未命名类型 type literals","slug":"未命名类型-type-literals","link":"#未命名类型-type-literals","children":[]},{"level":3,"title":"底层类型","slug":"底层类型","link":"#底层类型","children":[]},{"level":3,"title":"类型赋值","slug":"类型赋值","link":"#类型赋值","children":[]},{"level":3,"title":"方法调用","slug":"方法调用","link":"#方法调用","children":[]},{"level":3,"title":"值调用和方法集调用的方法集合","slug":"值调用和方法集调用的方法集合","link":"#值调用和方法集调用的方法集合","children":[]}]}],"git":{"createdTime":1678545410000,"updatedTime":1678545410000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":1}]},"readingTime":{"minutes":5.26,"words":1578},"filePathRelative":"go/go 基础.md","localizedDate":"2023年3月11日","excerpt":"<h1> go 基础</h1>\\n<p>slice，map，channel 都是引用类型</p>\\n<p>array 是值类型，区分 slice</p>\\n<p>slice 触发扩容，新的赋值的 slice 的 data 会指向新的底层数组</p>\\n<h2> 闭包</h2>\\n<p>闭包是为了减少全局变量，所以闭包引用全局变量不是好的编程方式。</p>\\n<p>闭包这种隐秘的共享变量的方式带来的坏处是不够直接，不够清晰，除非是非常有价值的地方，一般不建议使用闭包。</p>\\n<h2> go 函数的内部实现</h2>\\n<p>go 函数使用的是 caller-save 的模式，即由调用者负责保存寄存器。</p>","autoDesc":true}');export{e as data};
