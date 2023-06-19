const t=JSON.parse('{"key":"v-69f10f0f","path":"/go/gc.html","title":"gc","lang":"zh-CN","frontmatter":{"description":"gc go 1.3 标记清楚法 Stw，扫描所有堆栈数据段，做出清除标记，然后清除，stw 结束 go 1.5 三色标记法 stack heap data segment 以上存在的数据 gc 之前都标记为白色 开始追踪到的 root 节点都标记为灰色，表示追踪还没完成 基于某个节点的追踪完成，则把该节点标记为黑色，是存活数据 基于黑色节点追踪到的都会标记为灰色，灰色的继续追踪，直到只存在黑白两色 垃圾就是白色，有用数据就是黑色","head":[["meta",{"property":"og:url","content":"https://www.ruizhou.cf/go/gc.html"}],["meta",{"property":"og:site_name","content":"rz文档"}],["meta",{"property":"og:title","content":"gc"}],["meta",{"property":"og:description","content":"gc go 1.3 标记清楚法 Stw，扫描所有堆栈数据段，做出清除标记，然后清除，stw 结束 go 1.5 三色标记法 stack heap data segment 以上存在的数据 gc 之前都标记为白色 开始追踪到的 root 节点都标记为灰色，表示追踪还没完成 基于某个节点的追踪完成，则把该节点标记为黑色，是存活数据 基于黑色节点追踪到的都会标记为灰色，灰色的继续追踪，直到只存在黑白两色 垃圾就是白色，有用数据就是黑色"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-11T14:36:50.000Z"}],["meta",{"property":"article:author","content":"rz"}],["meta",{"property":"article:modified_time","content":"2023-03-11T14:36:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"gc\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-11T14:36:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"rz\\",\\"url\\":\\"https://github.com/xyz3282836/monodoc\\"}]}"]]},"headers":[{"level":2,"title":"go 1.3 标记清楚法","slug":"go-1-3-标记清楚法","link":"#go-1-3-标记清楚法","children":[]},{"level":2,"title":"go 1.5 三色标记法","slug":"go-1-5-三色标记法","link":"#go-1-5-三色标记法","children":[]},{"level":2,"title":"屏障机制","slug":"屏障机制","link":"#屏障机制","children":[{"level":3,"title":"插入写屏障 Dijistra(go1.7 之前使用这种屏障)","slug":"插入写屏障-dijistra-go1-7-之前使用这种屏障","link":"#插入写屏障-dijistra-go1-7-之前使用这种屏障","children":[]},{"level":3,"title":"删除写屏障 Yuasa","slug":"删除写屏障-yuasa","link":"#删除写屏障-yuasa","children":[]}]},{"level":2,"title":"go 1.8 三色标记法+混合写屏障机制","slug":"go-1-8-三色标记法-混合写屏障机制","link":"#go-1-8-三色标记法-混合写屏障机制","children":[{"level":3,"title":"混合写屏障机制 Hybrid","slug":"混合写屏障机制-hybrid","link":"#混合写屏障机制-hybrid","children":[]}]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}],"git":{"createdTime":1678545410000,"updatedTime":1678545410000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":1}]},"readingTime":{"minutes":3.87,"words":1161},"filePathRelative":"go/gc.md","localizedDate":"2023年3月11日","excerpt":"<h1> gc</h1>\\n<h2> go 1.3 标记清楚法</h2>\\n<p>Stw，扫描所有堆栈数据段，做出清除标记，然后清除，stw 结束</p>\\n<h2> go 1.5 三色标记法</h2>\\n<p>stack</p>\\n<p>heap</p>\\n<p>data segment</p>\\n<p>以上存在的数据 gc 之前都标记为白色</p>\\n<p>开始追踪到的 root 节点都标记为灰色，表示追踪还没完成</p>\\n<p>基于某个节点的追踪完成，则把该节点标记为黑色，是存活数据</p>\\n<p>基于黑色节点追踪到的都会标记为灰色，灰色的继续追踪，直到只存在黑白两色</p>\\n<p>垃圾就是白色，有用数据就是黑色</p>","autoDesc":true}');export{t as data};