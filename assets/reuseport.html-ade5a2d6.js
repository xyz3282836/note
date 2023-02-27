import{_ as s,V as n,W as c,X as e,Y as o,Z as r,$ as a,C as i}from"./framework-7d796c00.js";const l="/assets/worker1-1d249b46.png",p="/assets/worker2-79841e46.png",d="/assets/worker3-0c0a1523.png",h={},g=a('<h1 id="三种提升tcp服务能力方式" tabindex="-1"><a class="header-anchor" href="#三种提升tcp服务能力方式" aria-hidden="true">#</a> 三种提升tcp服务能力方式</h1><p>three ways of designing a TCP server with regard to performance</p><h3 id="single-listen-socket-single-worker-process" tabindex="-1"><a class="header-anchor" href="#single-listen-socket-single-worker-process" aria-hidden="true">#</a> Single listen socket, single worker process</h3><p>This is the simplest model, where processing is limited to a single CPU. A single worker process is doing both accept() calls to receive the new connections and processing of the requests themselves. This model is the preferred <code>Lighttpd</code> setup.</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="single-listen-socket-multiple-worker-process" tabindex="-1"><a class="header-anchor" href="#single-listen-socket-multiple-worker-process" aria-hidden="true">#</a> Single listen socket, multiple worker process</h3><p>The new connections sit in a single kernel data structure (the listen socket). Multiple worker processes are doing both the accept() calls and processing of the requests. This model enables some spreading of the inbound connections across multiple CPUs. This is the standard model for <code>NGINX</code>.</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>新的连接到单个唯一socket中，各个worker去accept</p><h3 id="separate-listen-socket-for-each-worker-process" tabindex="-1"><a class="header-anchor" href="#separate-listen-socket-for-each-worker-process" aria-hidden="true">#</a> Separate listen socket for each worker process</h3>',10),u={href:"https://lwn.net/Articles/542629/",target:"_blank",rel:"noopener noreferrer"},f=a('<figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用 reuseport 为每个worker进程创建一个socket</p><h3 id="spreading-the-accept-load" tabindex="-1"><a class="header-anchor" href="#spreading-the-accept-load" aria-hidden="true">#</a> Spreading the accept() load</h3><h4 id="first-model" tabindex="-1"><a class="header-anchor" href="#first-model" aria-hidden="true">#</a> first model</h4><p>blocking-accep</p>',5),b={href:"https://github.com/cloudflare/cloudflare-blog/blob/master/2017-10-accept-balancing/blocking-accept.py",target:"_blank",rel:"noopener noreferrer"},k=a('<p>The idea is to share an accept queue across processes, by calling blocking accept() from multiple workers concurrently.</p><p>负载比较均衡，轮询算法，性能有瓶颈</p><h5 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题：</h5><p>由于各个worker都会accept，当有事件来时，会有惊群问题，使用<code>EPOLLEXCLUSIVE(4.5内核引入)</code> flag可以解决。</p><p>epoll引起的accept惊群，在4.5内核中再次引入<code>EPOLLEXCLUSIVE</code>来解决，且需要应用层的配合，Ngnix 在 1.11.3 之后添加了<code>NGX_EXCLUSIVE_EVENT</code>来支持。</p><p>EPOLLEXCLUSIVE可以在单个Listen Queue对多个Worker Process的时候均衡压力，不会惊群。</p><p>原理：连接从一个队列里由内核分发，不需要惊群，对worker是否忙也能感知（忙的worker就不分发连接过去）。</p><h4 id="second-model" tabindex="-1"><a class="header-anchor" href="#second-model" aria-hidden="true">#</a> second model</h4><p>epoll-and-accept</p>',9),_={href:"https://idea.popcount.org/2017-02-20-epoll-is-fundamentally-broken-12/",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"EPOLLEXCLUSIVE",-1),E={href:"https://github.com/cloudflare/cloudflare-blog/blob/master/2017-10-accept-balancing/epoll-and-accept.py",target:"_blank",rel:"noopener noreferrer"},w=a('<h5 id="问题-1" tabindex="-1"><a class="header-anchor" href="#问题-1" aria-hidden="true">#</a> 问题:</h5><p>epoll的accept模型为LIFO，倾向于唤醒最活跃的进程，导致负载不均衡，有性能问题</p><p>Linux supports a feature to work around this balancing problem - the SO_REUSEPORT socket option.</p><p>需要使用<code>SO_REUSEPORT</code>来rescue，也就是第三种模型(本身就分开了，内核hash分配一个worker，也就不存在惊群问题)</p><p>总结：负载有问题，但是延迟控制的不错</p><h4 id="third-model" tabindex="-1"><a class="header-anchor" href="#third-model" aria-hidden="true">#</a> third model</h4><p>第二种model基础上使用<code>SO_REUSEPORT</code></p><p>原理：</p><blockquote><p>The new socket option allows multiple sockets on the same host to bind to the same port, and is intended to improve the performance of multithreaded network server applications running on top of multicore systems.</p></blockquote><p>总结：延迟平均值控制和第二种一样，但是方差很大，长尾延迟大</p>',10),S={href:"https://plantegg.github.io/2020/06/05/MySQL%E7%BA%BF%E7%A8%8B%E6%B1%A0%E5%AF%BC%E8%87%B4%E7%9A%84%E5%BB%B6%E6%97%B6%E5%8D%A1%E9%A1%BF%E6%8E%92%E6%9F%A5/",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"3.10的内核中通过引入SO_REUSEPORT解决了这个epoll accept惊群的问题，nginx 1.9.1使用这个特性。",-1),L=e("p",null,"在4.5内核中再次引入EPOLLEXCLUSIVE来解决，且需要应用层的配合，Ngnix 在 1.11.3 之后添加了NGX_EXCLUSIVE_EVENT来支持。",-1),T=e("h6",{id:"reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),o(" reference")],-1),O={href:"https://blog.cloudflare.com/the-sad-state-of-linux-socket-balancing/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://plantegg.github.io/2019/10/31/epoll%E5%92%8C%E6%83%8A%E7%BE%A4/",target:"_blank",rel:"noopener noreferrer"};function P(U,B){const t=i("ExternalLinkIcon");return n(),c("div",null,[g,e("p",null,[o("By using "),e("a",u,[o("the SO_REUSEPORT socket option"),r(t)]),o(" it's possible to create a dedicated kernel data structure (the listen socket) for each worker process. This can avoid listen socket contention, which isn't really an issue unless you run at Google scale. It can also help in better balancing the load. More on that later.")]),f,e("p",null,[e("a",b,[o("https://github.com/cloudflare/cloudflare-blog/blob/master/2017-10-accept-balancing/blocking-accept.py"),r(t)])]),k,e("p",null,[o("The intention is to have a dedicated epoll in each worker process. The worker will call non-blocking accept() only when epoll reports new connections. We can avoid "),e("a",_,[o("the usual thundering-herd issue"),r(t)]),o(" by using the "),m,o(" flag.")]),e("p",null,[e("a",E,[o("https://github.com/cloudflare/cloudflare-blog/blob/master/2017-10-accept-balancing/epoll-and-accept.py"),r(t)])]),w,e("p",null,[o("开启了SO_REUSEPORT后，内核没法感知你的worker是不是特别忙，只是按Hash逻辑派发accept连接。也就是SO_REUSEPORT会导致rt偏差更大（抖动明显一些）。"),e("a",S,[o("这跟MySQL Thread Pool导致的卡顿原理类似，多个Pool类似这里的SO_REUSEPORT"),r(t)]),o("。")]),x,L,T,e("p",null,[e("a",O,[o("https://blog.cloudflare.com/the-sad-state-of-linux-socket-balancing/"),r(t)])]),e("p",null,[e("a",y,[o("https://plantegg.github.io/2019/10/31/epoll和惊群/"),r(t)])])])}const C=s(h,[["render",P],["__file","reuseport.html.vue"]]);export{C as default};
