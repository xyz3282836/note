import{_ as a,V as e,W as i,$ as r}from"./framework-7d796c00.js";const p={},t=r('<h1 id="数据库原理" tabindex="-1"><a class="header-anchor" href="#数据库原理" aria-hidden="true">#</a> 数据库原理</h1><h2 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h2><p>时间复杂度用来检验某个算法处理一定量的数据要花多长时间</p><p>大O符号是关于一个算法的最坏情况的</p><p>二分搜索法</p><p>合并排序 sort()函数内部原理</p><p>先拆分 次数log(N)</p><p>在一级一级排序 整体运算次数 N*log(N)</p><h2 id="阵列、树、哈希表" tabindex="-1"><a class="header-anchor" href="#阵列、树、哈希表" aria-hidden="true">#</a> 阵列、树、哈希表</h2><p>三者是现在数据库的支柱</p><h4 id="阵列" tabindex="-1"><a class="header-anchor" href="#阵列" aria-hidden="true">#</a> 阵列</h4><p>二维阵列是最简单的数据结构等法规规定</p><figure><img src="http://ww2.sinaimg.cn/large/7cc829d3jw1f3drdpqm1oj20cl0apdhp.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="树和数据索引" tabindex="-1"><a class="header-anchor" href="#树和数据索引" aria-hidden="true">#</a> 树和数据索引</h4><p>binary search tree</p><figure><img src="http://jbcdn2.b0.upaiyun.com/2016/05/432222c9e8cd2d665083915430ae1a2e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这个查询成本是O(log(N))</p><p>B树查找某个值 时间复杂度是O(log(N))，但是查找范围的时候将会变成O(N)</p><p>B树是每个节点都包含保存的信息(相关表的行位置)</p><p>为此B+树可以解决</p><p>B+树是B树的修订版，只有底层节点或者叶子节点才保存信息，其他节点用来指引到正确节点</p><figure><img src="http://jbcdn2.b0.upaiyun.com/2016/05/15c4b064af9ac7f357404a1b17ff1cae.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>时间复杂度O(log(N))</p><p>在B+树中，插入和删除操作是 O(log(N)) 复杂度</p><p>mysql使用了B+树索引</p><h4 id="哈希表" tabindex="-1"><a class="header-anchor" href="#哈希表" aria-hidden="true">#</a> 哈希表</h4><figure><img src="http://ww1.sinaimg.cn/large/7cc829d3jw1f3drdsruaqj20hp09075r.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>如果有了好的哈希函数，在哈希表里搜索的时间复杂度是 O(1)</strong></p><blockquote><p>数据版本控制和锁机制是两种不同的见解：<strong>乐观锁和悲观锁</strong>。两者各有利弊，完全取决于使用场景（读多还是写多）</p></blockquote>',29),n=[t];function c(d,o){return e(),i("div",null,n)}const g=a(p,[["render",c],["__file","数据库原理.html.vue"]]);export{g as default};
