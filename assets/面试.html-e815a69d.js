import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as t,a as c}from"./app-339f552b.js";const a={},o=c('<h1 id="面试" tabindex="-1"><a class="header-anchor" href="#面试" aria-hidden="true">#</a> 面试</h1><p>基础</p><p>网络编程</p><p>tcp 的 timewait 为啥要等 2msl</p><p>tcp 的半连接队列发生在哪个阶段 syncs queue</p><p>全连接队列发生在哪个阶段 accept queue</p><p>fd 就绪的通知模式，准确说 IO 系统调用是否可以非阻塞地执行</p><ul><li>水平触发：如果 fd 上可以非阻塞地执行 IO 系统调用，此时就会触发</li><li>边缘触发：如果 fd 自上次检测以来有了新的 IO 活动，比如新的输入，此时就会触发</li></ul><p>epoll 的工作过程</p><p>golang gc 优化策略</p><p>设置 gogc,设置 debug.SetGCPercent()</p><p>1.19 以前</p><p>go ballast</p><p>gogoc tuner 自动调整 gogc，非固定值</p><p>1.91 之后</p><p>SetMemoryLimit</p><p>oom 场景 设置内存上限；gc 高频率场景，设置内存上限，gogc=off</p><p>三色标记法+混合写屏障机制：混合写屏障机制 Hybrid</p><p>gc 开始时直接把 stack 上所有可达数据标记为黑色，无需重新扫描一次</p><p>gc 期间，任何 stack 新增数据都标记为黑色</p><p>栈上没有屏障机制，堆上启用混合写屏障</p><p>heap 上，被删除的数据（解除引用）被标记为灰色（沿用删除写屏障）</p><p>heap 上，被添加的数据（新增引用）被标记为灰色</p><p>满足弱三色不变式破坏 2</p><p>kafka 如何实现局部顺序消费，并且保持</p><p>热 key 并且大 key 解决思路</p><p>保证线上系统稳定，有哪些策略</p>',27),r=[o];function i(l,s){return e(),t("div",null,r)}const d=p(a,[["render",i],["__file","面试.html.vue"]]);export{d as default};
