import{_ as t,W as i,X as c,Y as e,Z as s,$ as r,a0 as n,C as d}from"./framework-52f8fb67.js";const p="/assets/image-20220619231054174-75ae1409.png",o="/assets/image-20220619231243015-3003be8f.png",l="/assets/image-20220621012555335-88c7c6f7.png",u="/assets/image-20220621012843230-2becc168.png",m="/assets/image-20220620213836921-a63dc74b.png",g="/assets/image-20220620224512319-00bf7ce0.png",b="/assets/image-20220620232733164-702a4e69.png",v="/assets/image-20220620233410368-79fd098d.png",h="/assets/image-20220620233639263-613e2616.png",f={},_=n('<h1 id="协议栈" tabindex="-1"><a class="header-anchor" href="#协议栈" aria-hidden="true">#</a> 协议栈</h1><h2 id="理论模型" tabindex="-1"><a class="header-anchor" href="#理论模型" aria-hidden="true">#</a> 理论模型</h2><p>osi七层模型</p><p>tcp/ip 四层模型</p><p>四层模型比较通用，每层都有自己的协议头部</p><h2 id="以太网帧格式-数据链路层" tabindex="-1"><a class="header-anchor" href="#以太网帧格式-数据链路层" aria-hidden="true">#</a> 以太网帧格式 （数据链路层）</h2><p>我们常用 ethernet II (罗马数字)，Ethernet 2 格式的以太网帧最大1518bytes，最小64bytes。</p><p>ethernet II 帧格式：目的地址6，源地址6，协议2，数据46-1500，校验和4。MTU: 1500</p><p>最小 6+6+2+46+4=64bytes，最大 6+6+2+1500+4=1518bytes。</p><p>区分不同帧格式，从2type两个自己算出的值来确认</p><p>ethernet II type &gt; 1536</p><p>同样的两个字节在802.3，802.2 代表length， 都是 &lt;= 1500。</p><p>ethernet II 的type 指定了上层协议，如下</p><table><thead><tr><th>0x0800</th><th>ip</th></tr></thead><tbody><tr><td>0x0806</td><td>arp</td></tr><tr><td>0x8137</td><td>ipx</td></tr><tr><td>0x86dd</td><td>ipv6</td></tr><tr><td>0x8035</td><td>rarp</td></tr><tr><td>0x8864</td><td>pppoe</td></tr></tbody></table><h2 id="jumbo-frame-巨型帧" tabindex="-1"><a class="header-anchor" href="#jumbo-frame-巨型帧" aria-hidden="true">#</a> jumbo frame（巨型帧）</h2><p>最多9000个字节</p><h2 id="ip报文格式-网络层" tabindex="-1"><a class="header-anchor" href="#ip报文格式-网络层" aria-hidden="true">#</a> ip报文格式（网络层）</h2><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="tcp报文格式-传输层" tabindex="-1"><a class="header-anchor" href="#tcp报文格式-传输层" aria-hidden="true">#</a> tcp报文格式（传输层）</h2><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="tcp-syns-queue-and-accept-queue" tabindex="-1"><a class="header-anchor" href="#tcp-syns-queue-and-accept-queue" aria-hidden="true">#</a> tcp syns queue and accept queue</h2><p>client(syn_send) ---&gt;syn (syn_rcvd)server 放入syns queue</p><p>client(established) &lt;---sync+ack</p><p>​ ---&gt;ack established 从syns queue 取出放入accept queue</p><p>​ accept 从accept queue 取出</p><p><code>半连接队列</code>大小由内核参数 /proc/sys/net/ipv4/<code>tcp_max_syn_backlog</code> 决定</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@23 ~<span class="token punctuation">]</span><span class="token comment"># cat /proc/sys/net/ipv4/tcp_max_syn_backlog </span>
<span class="token number">128</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Linux实现了一种称为SYNcookie的机制，通过net.ipv4.tcp_syncookies控制，设置为1表示开启。<strong>简单说SYNcookie就是将连接信息编码在ISN(initialsequencenumber)中返回给客户端，这时server不需要将半连接保存在队列中，而是利用客户端随后发来的ACK带回的ISN还原连接信息，以完成连接的建立，避免了半连接队列被攻击SYN包填满</strong>。</p><p><strong>当这个队列满了，不开启syncookies的时候，Server会丢弃新来的SYN包，而Client端在多次重发SYN包得不到响应而返回（<code>connection time out</code>）错误。但是，当Server端开启了syncookies=1，那么SYN半连接队列就没有逻辑上的最大值了，并且/proc/sys/net/ipv4/tcp_max_syn_backlog设置的值也会被忽略。</strong></p><p><code>全连接队列</code>大小由min(<code>backlog</code>, <code>somaxconn</code>)</p><p>backlog 其实就是listen函数的参数决定，int listen(int sockfd, int <code>backlog</code>)</p><p>somaxconn 则是内核参数 /proc/sys/net/core/<code>somaxconn</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@23 ~<span class="token punctuation">]</span><span class="token comment"># cat /proc/sys/net/core/somaxconn </span>
<span class="token number">128</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@23 ~<span class="token punctuation">]</span><span class="token comment"># ss -lnt &#39;sport = :443&#39;</span>
State    Recv-Q    Send-Q    Local Address:Port    Peer Address:Port                   
LISTEN   <span class="token number">0</span>         <span class="token number">128</span>                   *:443                *:*                      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>send-q 就是accept queue</p><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果 accept queue 满了，syns queue没有满，那么有两种处理方式</p><p>取决于 /proc/sys/net/ipv4/tcp_abort_overflow</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@23 ~]# cat /proc/sys/net/ipv4/tcp_abort_on_overflow 
0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>次内核参数为0：第三次握手假定不处理，造成丢失最后一次握手ack，那么client会重新发起ack</p><p>为1: 直接发rst包给客户端来终止连接，此时客户端会收到 <strong>104 Connection reset by peer</strong> 的错误，一般不会配置这种策略</p><p>rst包就表示终止连接</p><p>也可以先设置1的处理方式，只要客户端出现 104错误，就证明是全连接队列满的原因导致问题</p><p>也可以通过统计的命令查看accept queue的情况：netstat -s |egrep &quot;listen|LISTEN&quot;</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@23 ~<span class="token punctuation">]</span><span class="token comment"># netstat -s |egrep &quot;listen|LISTEN&quot;</span>
    <span class="token number">4</span> SYNs to LISTEN sockets dropped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',49),x={href:"https://cloud.tencent.com/developer/article/1721800",target:"_blank",rel:"noopener noreferrer"},k=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> -h, –help 帮助
 -V, –version 显示版本号
 -t, –tcp 显示 TCP 协议的 sockets
 -u, –udp 显示 UDP 协议的 sockets
 -x, –unix 显示 unix domain sockets，与 <span class="token parameter variable">-f</span> 选项相同
 -n, –numeric 不解析服务的名称，如 “22” 端口不会显示成 “ssh”
 -l, –listening 只显示处于监听状态的端口
 -p, –processes 显示监听端口的进程<span class="token punctuation">(</span>Ubuntu 上需要 <span class="token function">sudo</span><span class="token punctuation">)</span>
 -a, –all 对 TCP 协议来说，既包含监听的端口，也包含建立的连接
 -r, –resolve 把 IP 解释为域名，把端口号解释为协议名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ss -ltn 查看listen 状态的tcp 服务端口，端口默认为服务名称，n就是强制显示端口号</p><p>ss -ltr r就是把地址解释成域名</p><p>ss -ltrp 显示监听端口的进程</p><figure><img src="`+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>ss -tan state xxx 可以监听状态，其实就是指定某些tcp状态，过滤作用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@23 ~]# ss -tan state listening &#39;( sport = :443 )&#39;
Recv-Q    Send-Q    Local Address:Port    Peer Address:Port                       
0         128                   *:443                *:* 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ss -tna 将显示所有tcp的状态</p><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>time-wait 等待2msl，其实last-ack 被关的一方也会等待2msl，也解释了为啥time-wait要等待2msl</p><p>msl可以配置的，/proc/sys/net/ipv4/tcp_fin_timeout</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@23 ~<span class="token punctuation">]</span><span class="token comment"># cat /proc/sys/net/ipv4/tcp_fin_timeout </span>
<span class="token number">60</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2msl=60s，所以msl是30s</p><h2 id="rfc" tabindex="-1"><a class="header-anchor" href="#rfc" aria-hidden="true">#</a> RFC</h2><p>request for comments</p><h2 id="mss-mtu" tabindex="-1"><a class="header-anchor" href="#mss-mtu" aria-hidden="true">#</a> MSS，MTU</h2><p>如果底层物理接口MTU= 1500 byte，则 MSS = 1500- 20(IP Header) -20 (TCP Header) = 1460 byte，如果application 有2000 byte发送，需要两个segment才可以完成发送，第一个TCP segment = 1460，第二个TCP segment = 540。实际场景下，TCP包头会带有12字节的时间戳，于是单个TCP包实际传输的最大量就会缩减为1448字节，1448=1500-20字节（IP头）-32字节（20字节TCP头和12字节TCP时间戳）</p>`,18);function y(S,q){const a=d("ExternalLinkIcon");return i(),c("div",null,[_,e("p",null,[s("ss 命令"),e("a",x,[s("https://cloud.tencent.com/developer/article/1721800"),r(a)])]),k])}const P=t(f,[["render",y],["__file","协议栈.html.vue"]]);export{P as default};
