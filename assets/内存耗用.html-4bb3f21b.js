import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as n,c as o,b as e,d as t,e as s,a as d}from"./app-339f552b.js";const c="/assets/vss-2031794d.png",p="/assets/rss-ec599721.png",l="/assets/pss-ae479440.png",h="/assets/uss-5be51e0a.png",S={},f=d('<h1 id="内存耗用" tabindex="-1"><a class="header-anchor" href="#内存耗用" aria-hidden="true">#</a> 内存耗用</h1><h2 id="vss-virtual-set-size-用处不大" tabindex="-1"><a class="header-anchor" href="#vss-virtual-set-size-用处不大" aria-hidden="true">#</a> VSS - Virtual Set Size （用处不大）</h2><p>虚拟耗用内存（包含共享库占用的全部内存，以及分配但未使用内存）。其大小还包括了可能不在 RAM 中的内存（比如虽然 malloc 分配了空间，但尚未写入）。VSS 很少被用于判断一个进程的真实内存使用量。</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="rss-resident-set-size-用处不大" tabindex="-1"><a class="header-anchor" href="#rss-resident-set-size-用处不大" aria-hidden="true">#</a> RSS - Resident Set Size （用处不大）</h2><p>实际使用物理内存（包含共享库占用的全部内存）。但是 RSS 还是可能会造成误导，因为它仅仅表示该进程所使用的所有共享库的大小，它不管有多少个进程使用该共享库，该共享库仅被加载到内存一次。所以 RSS 并不能准确反映单进程的内存占用情况</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="pss-proportional-set-size-仅供参考" tabindex="-1"><a class="header-anchor" href="#pss-proportional-set-size-仅供参考" aria-hidden="true">#</a> PSS - Proportional Set Size （仅供参考）</h2><p>实际使用的物理内存（比例分配共享库占用的内存，按照进程数等比例划分）。例如：如果有三个进程都使用了一个共享库，共占用了 30 页内存。那么 PSS 将认为每个进程分别占用该共享库 10 页的大小。 PSS 是非常有用的数据，因为系统中所有进程的 PSS 都相加的话，就刚好反映了系统中的 总共占用的内存。 而当一个进程被销毁之后， 其占用的共享库那部分比例的 PSS，将会再次按比例分配给余下使用该库的进程。这样 PSS 可能会造成一点的误导，因为当一个进程被销毁后， PSS 不能准确地表示返回给全局系统的内存。</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="uss-unique-set-size-非常有用" tabindex="-1"><a class="header-anchor" href="#uss-unique-set-size-非常有用" aria-hidden="true">#</a> USS - Unique Set Size （非常有用）</h2><p>进程独自占用的物理内存（不包含共享库占用的内存）。USS 是非常非常有用的数据，因为它反映了运行一个特定进程真实的边际成本（增量成本）。当一个进程被销毁后，USS 是真实返回给系统的内存。当进程中存在一个可疑的内存泄露时，USS 是最佳观察数据。</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>一般来说内存占用大小有如下规律：VSS &gt;= RSS &gt;= PSS &gt;= USS</p><p>pmap -XX pid 命令分析进程内存，可以看内存地址是否被标记为 LazyFree 等</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料：</h2>',16),g={href:"https://www.jianshu.com/p/3bab26d25d2e",target:"_blank",rel:"noopener noreferrer"},_={href:"http://myeyeofjava.iteye.com/blog/1837860",target:"_blank",rel:"noopener noreferrer"},u={href:"http://blog.csdn.net/panda1234lee/article/details/52291588",target:"_blank",rel:"noopener noreferrer"};function m(b,z){const a=r("ExternalLinkIcon");return n(),o("div",null,[f,e("p",null,[e("a",g,[t("https://www.jianshu.com/p/3bab26d25d2e"),s(a)])]),e("p",null,[e("a",_,[t("http://myeyeofjava.iteye.com/blog/1837860"),s(a)])]),e("p",null,[e("a",u,[t("http://blog.csdn.net/panda1234lee/article/details/52291588"),s(a)])])])}const v=i(S,[["render",m],["__file","内存耗用.html.vue"]]);export{v as default};
