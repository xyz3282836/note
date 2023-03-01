import{_ as e,W as a,X as i,a0 as r}from"./framework-52f8fb67.js";const d="/assets/ebpf-xdp-95932e2a.png",n={},t=r('<h1 id="af-xdp" tabindex="-1"><a class="header-anchor" href="#af-xdp" aria-hidden="true">#</a> af_xdp</h1><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2><p>bpf bsd packet filter，能以安全的方式在不同的钩点执行用户注入到内核的字节码。2013年Alexei Starovoitov对BPF进行了改造，有了eBPF</p><h2 id="xdp" tabindex="-1"><a class="header-anchor" href="#xdp" aria-hidden="true">#</a> XDP</h2><p>eBFP有很多钩子，而XDP就是linux 网络数据处理的一个hook点。XDP全称eXPress Data Path，快速数据路径，能够在数据到达网卡驱动时对其进行处理。</p><p>三种运行模式：generic，native，offload。</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>offload 是直接在网卡中对xdp程序进行处理，挂载点最靠前，性能最佳，但是需要硬件特别支持</p><p>native 是最传统的xdp模式，需要驱动支持，目前主流网卡驱动都实现了native xdp，挂载在驱动接受路径上</p><p>generic 是内核模拟出的一种通用模式，不需要驱动支持，但是xdp挂载最靠后，性能不如native</p><h2 id="工作流程" tabindex="-1"><a class="header-anchor" href="#工作流程" aria-hidden="true">#</a> 工作流程</h2><p>af_xdp 分为两个部分：socket 和 UMEM</p><h3 id="socket" tabindex="-1"><a class="header-anchor" href="#socket" aria-hidden="true">#</a> socket</h3><p>类似传统socket，通过socket()创建一个xsk，每个xsk包含一个RX ring和TX ring，收包在RX ring进行，发包在TX ring进行</p><h3 id="umem" tabindex="-1"><a class="header-anchor" href="#umem" aria-hidden="true">#</a> UMEM</h3><p>存放大小相等的内存块地址，包含两个FILL ring 和 COMPLETION ring。</p><p>收包前，将包地址写到FILL ring，内核消费这些数据收包，完成收包后地址放到xsk的RX ring中，用户程序消费ring得到数据帧</p><p>发包时，用户向UMEM的地址中写数据帧，写到TX ring，内核消费开始执行发包，完成后写到COMPLETION ring。</p><p>为了让xsk成功收包从网卡中，需要将xsk绑定到网卡和队列。</p>',19),p=[t];function s(h,c){return a(),i("div",null,p)}const f=e(n,[["render",s],["__file","af_xdp.html.vue"]]);export{f as default};
