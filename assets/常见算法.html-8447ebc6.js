import{_ as e,W as a,X as r,a0 as t}from"./framework-52f8fb67.js";const h={},c=t('<h1 id="常见算法" tabindex="-1"><a class="header-anchor" href="#常见算法" aria-hidden="true">#</a> 常见算法</h1><h2 id="lru" tabindex="-1"><a class="header-anchor" href="#lru" aria-hidden="true">#</a> LRU</h2><p>最近没使用的会被淘汰，强调的是访问时间</p><p>最近只要使用过一次就不会被淘汰，无法正确表示一个key的热度</p><h2 id="lfu" tabindex="-1"><a class="header-anchor" href="#lfu" aria-hidden="true">#</a> LFU</h2><p>最近使用频率最少的会被淘汰，强调是使用频率</p><p>历史热门数据无法删除</p>',7),d=[c];function n(i,s){return a(),r("div",null,d)}const o=e(h,[["render",n],["__file","常见算法.html.vue"]]);export{o as default};
