import{_ as s,W as n,X as r,Y as e,Z as a,$ as t,a0 as o,E as l}from"./framework-1046fca1.js";const d="/assets/vss-2031794d.png",c="/assets/rss-ec599721.png",h="/assets/pss-ae479440.png",p="/assets/uss-5be51e0a.png",S={},g=e("h1",{id:"内存耗用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#内存耗用","aria-hidden":"true"},"#"),a(" 内存耗用")],-1),_=e("p",null,"一般来说内存占用大小有如下规律：VSS >= RSS >= PSS >= USS",-1),u=o('<li><h2 id="vss-virtual-set-size-用处不大" tabindex="-1"><a class="header-anchor" href="#vss-virtual-set-size-用处不大" aria-hidden="true">#</a> VSS - Virtual Set Size （用处不大）</h2><p>虚拟耗用内存（包含共享库占用的全部内存，以及分配但未使用内存）。其大小还包括了可能不在RAM中的内存（比如虽然malloc分配了空间，但尚未写入）。VSS 很少被用于判断一个进程的真实内存使用量。</p><figure><img src="'+d+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure></li><li><h2 id="rss-resident-set-size-用处不大" tabindex="-1"><a class="header-anchor" href="#rss-resident-set-size-用处不大" aria-hidden="true">#</a> RSS - Resident Set Size （用处不大）</h2><p>实际使用物理内存（包含共享库占用的全部内存）。但是RSS还是可能会造成误导，因为它仅仅表示该进程所使用的所有共享库的大小，它不管有多少个进程使用该共享库，该共享库仅被加载到内存一次。所以RSS并不能准确反映单进程的内存占用情况</p><figure><img src="'+c+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure></li><li><h2 id="pss-proportional-set-size-仅供参考" tabindex="-1"><a class="header-anchor" href="#pss-proportional-set-size-仅供参考" aria-hidden="true">#</a> PSS - Proportional Set Size （仅供参考）</h2><p>实际使用的物理内存（比例分配共享库占用的内存，按照进程数等比例划分）。例如：如果有三个进程都使用了一个共享库，共占用了30页内存。那么PSS将认为每个进程分别占用该共享库10页的大小。 PSS是非常有用的数据，因为系统中所有进程的PSS都相加的话，就刚好反映了系统中的 总共占用的内存。 而当一个进程被销毁之后， 其占用的共享库那部分比例的PSS，将会再次按比例分配给余下使用该库的进程。这样PSS可能会造成一点的误导，因为当一个进程被销毁后， PSS不能准确地表示返回给全局系统的内存。</p><figure><img src="'+h+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure></li><li><h2 id="uss-unique-set-size-非常有用" tabindex="-1"><a class="header-anchor" href="#uss-unique-set-size-非常有用" aria-hidden="true">#</a> USS - Unique Set Size （非常有用）</h2><p>进程独自占用的物理内存（不包含共享库占用的内存）。USS是非常非常有用的数据，因为它反映了运行一个特定进程真实的边际成本（增量成本）。当一个进程被销毁后，USS是真实返回给系统的内存。当进程中存在一个可疑的内存泄露时，USS是最佳观察数据。</p><figure><img src="'+p+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure></li>',4),f=e("h2",{id:"参考资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),a(" 参考资料：")],-1),m={href:"https://www.jianshu.com/p/3bab26d25d2e",target:"_blank",rel:"noopener noreferrer"},b={href:"http://myeyeofjava.iteye.com/blog/1837860",target:"_blank",rel:"noopener noreferrer"},x={href:"http://blog.csdn.net/panda1234lee/article/details/52291588",target:"_blank",rel:"noopener noreferrer"};function z(v,y){const i=l("ExternalLinkIcon");return n(),r("div",null,[g,_,e("ol",null,[u,e("li",null,[f,e("p",null,[e("a",m,[a("https://www.jianshu.com/p/3bab26d25d2e"),t(i)])]),e("p",null,[e("a",b,[a("http://myeyeofjava.iteye.com/blog/1837860"),t(i)])]),e("p",null,[e("a",x,[a("http://blog.csdn.net/panda1234lee/article/details/52291588"),t(i)])])])])])}const V=s(S,[["render",z],["__file","内存耗用.html.vue"]]);export{V as default};
