import{_ as o,W as n,X as s,Z as e,$ as a,a0 as r,Y as h,C as d}from"./framework-c08a2544.js";const p={},c=h('<h1 id="gc" tabindex="-1"><a class="header-anchor" href="#gc" aria-hidden="true">#</a> gc</h1><h2 id="go-1-3-标记清楚法" tabindex="-1"><a class="header-anchor" href="#go-1-3-标记清楚法" aria-hidden="true">#</a> go 1.3 标记清楚法</h2><p>Stw，扫描所有堆栈数据段，做出清除标记，然后清除，stw 结束</p><h2 id="go-1-5-三色标记法" tabindex="-1"><a class="header-anchor" href="#go-1-5-三色标记法" aria-hidden="true">#</a> go 1.5 三色标记法</h2><p>stack</p><p>heap</p><p>data segment</p><p>以上存在的数据 gc 之前都标记为白色</p><p>开始追踪到的 root 节点都标记为灰色，表示追踪还没完成</p><p>基于某个节点的追踪完成，则把该节点标记为黑色，是存活数据</p><p>基于黑色节点追踪到的都会标记为灰色，灰色的继续追踪，直到只存在黑白两色</p><p>垃圾就是白色，有用数据就是黑色</p><p>缺点：过程中白色被黑色引用并且原本灰色引用这个白色关系破裂也就是**<em>1<code>白色被挂在黑色下（插入写）</code></em><strong>同时</strong><em>2<code>灰色丢了该白色（删除写）</code></em>**，就会出现 gc 清除了还需要存活的数据导致问题；满足 1 和 2 就会出现问题，只需要破坏一个就能解决这个问题。</p><p>为了解决这个缺点，有了强三色不变式和弱三色不变</p><p>强三色不变式破坏 1，强制不允许黑色引用白色</p><p>弱三色不变式破坏 2，黑色可以引用白色，但是白色需要存在链路上存在灰色对它的引用</p><p>所以三色标记中满足强或者弱三色不变之一，就可以解决问题，所有引入了屏障机制</p><h2 id="屏障机制" tabindex="-1"><a class="header-anchor" href="#屏障机制" aria-hidden="true">#</a> 屏障机制</h2><h3 id="插入写屏障-dijistra-go1-7-之前使用这种屏障" tabindex="-1"><a class="header-anchor" href="#插入写屏障-dijistra-go1-7-之前使用这种屏障" aria-hidden="true">#</a> 插入写屏障 Dijistra(go1.7 之前使用这种屏障)</h3><p>对象被引用时触发，heap 中启用插入屏障，栈不开启写屏障，代价太大</p><p>特点：heap 上，A(黑色)新增引用 B(白色)，<strong>B 被标记为灰色</strong>，<code>满足强三色不变式</code>破坏 1，这步没不足</p><p>缺点：stack 上，A(黑色)新增引用 B(白色)，<strong>B 依然是白色</strong>，但是准备回收白色前，<strong>会重新扫描一次栈空间，并且此时是 stw</strong>，保障引用关系不变这轮不变，从而 B 也会被标记为黑色，此处需要 10-100ms，这也是<strong>不足</strong></p><h3 id="删除写屏障-yuasa" tabindex="-1"><a class="header-anchor" href="#删除写屏障-yuasa" aria-hidden="true">#</a> 删除写屏障 Yuasa</h3><p>对象被删除时解除引用依赖触发，栈不开启写屏障，代价太大</p><p>特点：保证堆上指针连接断开时会被置灰</p><p>缺点：stack 黑色对象引用 heap 白色对象，此时删除引用，不会触发白色置灰，此时如果 heap 上另外一个对象新增对这个白色对象的引用，那么这个白色对象就是不能 gc 的对象，实际却被 gc 了，所以此处需要和插入写互补。</p><p>A(灰色)解除对于 B(白色或者灰色)的引用，那么<strong>B 被标记为灰色</strong>，满足弱三色不变式破坏 2，<strong>这个时候如果没有其他黑色新增对于 B 的引用，实际 B 就是垃圾</strong>，只能下一轮被 GC，这是<strong>不足</strong>，回收精度低，并且回收前也会进行 stw，做个快照保存，为下一轮 gc 做对比</p><h2 id="go-1-8-三色标记法-混合写屏障机制" tabindex="-1"><a class="header-anchor" href="#go-1-8-三色标记法-混合写屏障机制" aria-hidden="true">#</a> go 1.8 三色标记法+混合写屏障机制</h2><h3 id="混合写屏障机制-hybrid" tabindex="-1"><a class="header-anchor" href="#混合写屏障机制-hybrid" aria-hidden="true">#</a> 混合写屏障机制 Hybrid</h3><p>gc 开始时直接把 stack 上所有可达数据标记为黑色，无需重新扫描一次</p><p>gc 期间，任何 stack 新增数据都标记为黑色</p><p>栈上没有屏障机制，堆上启用混合写屏障</p><p>heap 上，被删除的数据（解除引用）被标记为灰色（沿用删除写屏障）</p><p>heap 上，被添加的数据（新增引用）被标记为灰色</p><p>满足弱三色不变式破坏 2</p><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>在高层面上，GOGC 决定了 Go GC 在 CPU 和内存之间的取舍。</p>',37),i={href:"https://taoshu.in/go/gc-guide.html#fn19",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"Target heap memory = Live heap + (Live heap + GC roots) * GOGC / 100",-1),l=e("p",null,"堆内存大小的目标值决定 GC 的频率：目标值越大，GC 等待开始下下次标记阶段的时间就越长；反之亦然。",-1),_=e("p",null,[a("这里的核心逻辑是"),e("strong",null,"GOGC 翻倍会导致堆内存开销翻倍而且 GC CPU 成本大致下降一半"),a("，反之亦然。")],-1),u=e("code",null,"GOGC",-1),G=e("code",null,"runtime/debug",-1),f={href:"https://pkg.go.dev/runtime/debug#SetGCPercent",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"SetGCPercent",-1),m=e("code",null,"GOGC=off",-1),b=e("code",null,"SetGCPercent(-1)",-1),x={href:"https://taoshu.in/go/gc-guide.html#%E5%86%85%E5%AD%98%E9%99%90%E5%88%B6",target:"_blank",rel:"noopener noreferrer"};function k(B,E){const t=d("ExternalLinkIcon");return n(),s("div",null,[c,e("p",null,[a("目标堆内存数量"),e("a",i,[a("19"),r(t)]),a("的定义如下：")]),g,l,_,e("p",null,[a("GOGC 可以通过"),u,a("环境变量来配置（所以 Go 程序都会识别），也可以通过"),G,a("包的"),e("a",f,[C,r(t)]),a("函数来设置。")]),e("p",null,[a("注意，我们可以通过设置"),m,a("或者调用"),b,a(" 完全禁用 GC 功能（在没有设置"),e("a",x,[a("内存上限"),r(t)]),a("的情况下）。从概念上讲，该设置等价于将 GOGC 设置成无穷大，也就是把触发 GC 的内存上限设置为无限大。")])])}const v=o(p,[["render",k],["__file","gc.html.vue"]]);export{v as default};
