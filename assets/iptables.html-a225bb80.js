import{_ as t,W as r,X as l,Y as a,Z as s,$ as n,a0 as i,E as p}from"./framework-1046fca1.js";const d="/assets/iptables-chain-fcfa482a.png",c="/assets/715460-20210422095832860-1720008353-e348a083.png",o="/assets/715460-20210422095843142-1162842347-7861812e.png",m="/assets/715460-20210422095852587-1289855642-b6f8a034.png",b={},v=i('<h1 id="iptables" tabindex="-1"><a class="header-anchor" href="#iptables" aria-hidden="true">#</a> iptables</h1><h2 id="chain-and-table" tabindex="-1"><a class="header-anchor" href="#chain-and-table" aria-hidden="true">#</a> chain and table</h2><h3 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> table</h3><p>• filter：这里面的链条，规则，可以决定一个数据包是否可以到达目标进程端口</p><p>• mangle: 这里面的链条，规则，可以修改数据包的内容，比如ttl</p><p>• nat：这里面的链条，规则，可以修改源和目标的ip地址，从而进行包路由。</p><p>• raw：这里面的链条，规则，能基于数据包的状态进行规则设定</p><h3 id="chain" tabindex="-1"><a class="header-anchor" href="#chain" aria-hidden="true">#</a> chain</h3><p>以搬瓦工vps为例centos8为例</p><table><thead><tr><th style="text-align:center;">prerouting</th><th style="text-align:center;">input</th><th style="text-align:center;">forward</th><th style="text-align:center;">output</th><th style="text-align:center;">postrouting</th></tr></thead><tbody><tr><td style="text-align:center;">mangle</td><td style="text-align:center;">mangle</td><td style="text-align:center;">mangle</td><td style="text-align:center;">mangle</td><td style="text-align:center;">mangle</td></tr><tr><td style="text-align:center;"><strong><code>nat</code></strong></td><td style="text-align:center;"><strong><code>nat</code></strong>（centos7+可以）</td><td style="text-align:center;"></td><td style="text-align:center;"><strong><code>nat</code></strong></td><td style="text-align:center;"><strong><code>nat</code></strong></td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"><strong><code>filter</code></strong></td><td style="text-align:center;"><strong><code>filter</code></strong></td><td style="text-align:center;"><strong><code>filter</code></strong></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">raw</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">raw</td><td style="text-align:center;"></td></tr></tbody></table><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="访问模式" tabindex="-1"><a class="header-anchor" href="#访问模式" aria-hidden="true">#</a> 访问模式</h2><h3 id="remote访问本机" tabindex="-1"><a class="header-anchor" href="#remote访问本机" aria-hidden="true">#</a> remote访问本机</h3><p><code>prerouting</code>-&gt;<code>input</code>-&gt;<code>本机</code></p><h3 id="本地访问remote" tabindex="-1"><a class="header-anchor" href="#本地访问remote" aria-hidden="true">#</a> 本地访问remote</h3><p><code>本机</code>-&gt;<code>output</code>-&gt;<code>postrouting</code></p><h3 id="转发" tabindex="-1"><a class="header-anchor" href="#转发" aria-hidden="true">#</a> 转发</h3><p>一般被<code>PREROUTING</code>进行了nat转发，或者局域网</p><p><code>prerouting</code>-&gt;<code>forward</code>-&gt;remote-&gt;<code>forward</code>-&gt;<code>postrouting</code></p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token parameter variable">-n</span> <span class="token comment"># 默认host names，network names，转化成数字地址 anywher=&gt;0.0.0.0/0</span>
<span class="token parameter variable">-v</span> <span class="token comment"># 冗余展示，会多出很多，流量统计等</span>
<span class="token parameter variable">-x</span> <span class="token comment"># -v的情况下，把K，M，G转化成</span>
<span class="token parameter variable">-p</span> <span class="token comment"># proto 协议 tcp，udp，all，icmp</span>
<span class="token parameter variable">-i</span> <span class="token comment"># 匹配入站网卡(only for packets entering the INPUT, FORWARD and PREROUTING chains) -i eth0; ! -i eth0 排除这个interface；-i eth+ match eth0 eth1 等</span>
<span class="token parameter variable">-o</span> <span class="token comment"># 匹配出站网卡(for packets entering the FORWARD, OUTPUT and POSTROUTING chains)</span>
<span class="token parameter variable">-m</span> <span class="token comment"># 拓展其他命令</span>

<span class="token parameter variable">-A</span>
<span class="token parameter variable">-D</span>
<span class="token parameter variable">-E</span> old-chain-name new-chain-name <span class="token comment"># 新替代旧的chain名</span>
<span class="token parameter variable">-F</span> <span class="token comment"># This is equivalent to deleting all the rules one by one.</span>
<span class="token parameter variable">-I</span>
<span class="token parameter variable">-L</span> <span class="token comment"># list all rules -L INPUT 列出某个chain下所有规则</span>
<span class="token parameter variable">-N</span> <span class="token comment"># new a chain</span>
<span class="token parameter variable">-P</span> <span class="token comment"># 修改默认build-in chain的规则 ipatables -t filter -P INPUT DROP</span>
<span class="token parameter variable">-R</span> <span class="token comment"># Replace a rule in the selected chain.</span>
<span class="token parameter variable">-X</span> <span class="token comment"># Delete the optional user-defined chain specified. -X MYCHAIN</span>
<span class="token parameter variable">-Z</span> <span class="token comment"># chain的每个rules流量统计清零</span>

<span class="token comment"># ACCEPT 表示让这个包通过。DROP表示将这个包丢弃。QUEUE表示把这个包传递到用户空间。RETURN表示停止这条链的匹配，到前一个链的规则重新开始。如果到达了一个内建的链(的末端)，或者遇到内建链的规则是RETURN，包的命运将由链准则指定的目标决定</span>
<span class="token comment"># ACCEPT： 直接接受该数据包，不会再走其他链条和规则。比如filter中的input表中的某个规则命中后，动作是ACCEPT，那么该数据包将被直接送达目标进程端口</span>
<span class="token comment"># DROP： 直接抛弃该数据包，并且没有任何返回。且不会再走其他链和规则</span>
<span class="token comment"># REJECT: 跟DROP类似，但好歹还是会跟请求方返回一些拒绝信息，比如我们拒绝掉ICMP协议后，ping该主机，会返回“destination host unreachable”</span>
<span class="token comment"># RETURN: 当前规则不做任何处理，返回。让给下一个规则处理</span>
<span class="token comment"># LOG ： 同RETURN类似，但只是会将请求信息记录到系统日志中，记录路径为：/var/log/syslog or /var/log/messages</span>
<span class="token parameter variable">-j</span> <span class="token comment"># This specifies the target of the rule. -j DROP;-j ACCEPT</span>

--line-numbers <span class="token comment"># 列出rules，并且附带位置数字，可快捷删除</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>target</p><table><thead><tr><th style="text-align:left;">触发动作</th><th style="text-align:left;">功 能</th></tr></thead><tbody><tr><td style="text-align:left;">ACCEPT</td><td style="text-align:left;">允许数据包通过</td></tr><tr><td style="text-align:left;">DROP</td><td style="text-align:left;">丢弃数据包</td></tr><tr><td style="text-align:left;">REJECT</td><td style="text-align:left;">拒绝数据包通过</td></tr><tr><td style="text-align:left;">LOG</td><td style="text-align:left;">将数据包信息记录 syslog 曰志</td></tr><tr><td style="text-align:left;">DNAT</td><td style="text-align:left;">目标地址转换</td></tr><tr><td style="text-align:left;">SNAT</td><td style="text-align:left;">源地址转换</td></tr><tr><td style="text-align:left;">MASQUERADE</td><td style="text-align:left;">地址欺骗(用于nat，把转发到远程的包的src改成本机，这样远程才知道往哪里回包)</td></tr><tr><td style="text-align:left;">REDIRECT</td><td style="text-align:left;">重定向</td></tr></tbody></table><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h2><h3 id="连接状态" tabindex="-1"><a class="header-anchor" href="#连接状态" aria-hidden="true">#</a> 连接状态</h3><table><thead><tr><th style="text-align:left;">连接状态</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">NEW</td><td style="text-align:left;">新创建的连接</td></tr><tr><td style="text-align:left;">ESTABLISHED</td><td style="text-align:left;">已经建立的连接</td></tr><tr><td style="text-align:left;">RELATED</td><td style="text-align:left;">跟已经创建的连接相关的连接</td></tr><tr><td style="text-align:left;">INVALID</td><td style="text-align:left;">非正常状态</td></tr><tr><td style="text-align:left;">DNAT</td><td style="text-align:left;">如果一个连接其目标地址被nat表PREROUTING链中的规则修改了，即是这个状态</td></tr><tr><td style="text-align:left;">SNAT</td><td style="text-align:left;">如果一个连接其源地址被nat表中的规则修改了，即是这个状态</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-m</span> conntrack <span class="token parameter variable">--ctstate</span> RELATED,ESTABLISHED <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有些版本的linux，对应的module不是<code>conntrack</code>，而是<code>state</code>。 对应指定状态的参数不是<code>--ctstate</code> 而是<code>--state</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-m</span> state <span class="token parameter variable">--state</span> RELATED,ESTABLISHED <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要多个规则一起配合</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-m</span> state <span class="token parameter variable">--state</span> RELATED,ESTABLISHED <span class="token parameter variable">-j</span> ACCEPT //这条规则允许已经建立的连接和相关连接
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">22</span> <span class="token parameter variable">-j</span> ACCEPT //新建链接如果是访问22号端口，则允许访问
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义链" tabindex="-1"><a class="header-anchor" href="#自定义链" aria-hidden="true">#</a> <strong>自定义链</strong></h3><p>除了在现有的链中添加规则，我们也可以自定义链，自定义链可以帮助我们将一组规则收纳在一起，方便我们管理。比如：</p><p>我们可以定义一个名为<code>ssh-rules</code>的链来管理ssh登录的一些规则</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iptables <span class="token parameter variable">-t</span> filter <span class="token parameter variable">-N</span> ssh-rules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这个链中添加具体的规则</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iptables <span class="token parameter variable">-t</span> filter <span class="token parameter variable">-A</span> ssh-rules <span class="token parameter variable">-s</span> <span class="token number">18.130</span>.0.0/16 <span class="token parameter variable">-j</span> ACCEPT
iptables <span class="token parameter variable">-t</span> filter <span class="token parameter variable">-A</span> ssh-rules <span class="token parameter variable">-s</span> <span class="token number">18.11</span>.0.0/16 <span class="token parameter variable">-j</span> ACCEPT
iptables <span class="token parameter variable">-t</span> filter <span class="token parameter variable">-A</span> ssh-rules <span class="token parameter variable">-j</span> DROP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后将该链作为一个规则出口，挂在到iptable内置的链上。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">22</span> <span class="token parameter variable">-j</span> ssh-rules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上含义就是在Input链中添加一个规则，所有22号端口的访问，都会导向ssh-rules</p><h3 id="规则的取反配置" tabindex="-1"><a class="header-anchor" href="#规则的取反配置" aria-hidden="true">#</a> <strong>规则的取反配置</strong></h3><p>上述规则配置，一般都是满足某某条件，做什么动作。除此之外，我们还可以配置，如果不满足某某条件，则做某个动作。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>iptables -A INPUT -p tcp -m multiport ! --dports 22,80,443 -j DROP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个<code>不满足则</code>的取动作，是通过感叹号来实现的。 上述命令的含义是：非22,80,443的端口，我们直接丢弃。</p><p>当然这条命令之前，应该要配置一条规则：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为通过22或80建立的连接，可能会衍生出一些RELATED的连接，他们的端口可能不是22或80，那样也就被拒掉了。会导致通信出问题。</p><h3 id="简单流量统计" tabindex="-1"><a class="header-anchor" href="#简单流量统计" aria-hidden="true">#</a> 简单流量统计</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 禁止ping</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> icmp <span class="token parameter variable">-j</span> DROP

<span class="token comment"># 查看所有包含filter的chain下所有rules，--line 并且带有位置数字，-n names转化成数字，-v 冗余展示很多属性</span>
iptables <span class="token parameter variable">-nvL</span> <span class="token parameter variable">-t</span> filter --line-number
<span class="token comment"># 指定chain</span>
iptables <span class="token parameter variable">-nvL</span> INUPUT <span class="token parameter variable">-t</span> filter --line-number
<span class="token comment"># 删除INPUT第一条规则</span>
iptables <span class="token parameter variable">-D</span> INPUT <span class="token number">1</span>
<span class="token comment"># 修改INPUT第一条规则，从DROP修改成了ACCEPT</span>
optables <span class="token parameter variable">-R</span> INPUT <span class="token number">1</span> <span class="token parameter variable">-j</span> ACCEPT

<span class="token comment"># 监控443的入站和出站流量</span>
iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-d</span> <span class="token number">174.137</span>.58.249 <span class="token parameter variable">--dport</span> <span class="token number">443</span> <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;UPLOAD&quot;</span>
iptables <span class="token parameter variable">-I</span> OUTPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-s</span> <span class="token number">174.137</span>.58.249 <span class="token parameter variable">--sport</span> <span class="token number">443</span> <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">&quot;DOWNLOAD&quot;</span>

<span class="token comment"># 查看filter的流量</span>
iptables <span class="token parameter variable">-nvL</span> <span class="token punctuation">[</span>-t filter<span class="token punctuation">]</span> --line-number
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="转发案例" tabindex="-1"><a class="header-anchor" href="#转发案例" aria-hidden="true">#</a> 转发案例</h3><h4 id="本机端口代理" tabindex="-1"><a class="header-anchor" href="#本机端口代理" aria-hidden="true">#</a> 本机端口代理</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 数据从端口80转发8080</span>
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-I</span> PREROUTING <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">80</span> <span class="token parameter variable">-j</span> REDIRECT --to-ports <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="内网访问外网服务-snat源地址转换" tabindex="-1"><a class="header-anchor" href="#内网访问外网服务-snat源地址转换" aria-hidden="true">#</a> 内网访问外网服务（SNAT源地址转换）</h4><p>内网机器-&gt;网关服务-&gt;外网服务</p><p>网关服务需要开启ip_forward</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看</span>
<span class="token function">cat</span> /proc/sys/net/ipv4/ip_forward
<span class="token function">sysctl</span> <span class="token parameter variable">-n</span> net.ipv4.ip_forward

<span class="token comment"># 修改</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;1&#39;</span> <span class="token operator">&gt;</span> /proc/sys/net/ipv4/ip_forward
<span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.ip_forward</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>网关服务recv到内网服务的外网请求后，prerouting转发给forward，forward再经过postrouting出站，只需要给postrouting加rule修改src地址为网关地址，这样外网服务才能回包（SNAT，用MASQUERADE替换）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> POSTROUTING <span class="token parameter variable">-o</span> eth1 <span class="token parameter variable">-s</span> 内网ip <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">8080</span> <span class="token parameter variable">-j</span> MASQUERADE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="外网访问内网服务-dnat目标地址转换" tabindex="-1"><a class="header-anchor" href="#外网访问内网服务-dnat目标地址转换" aria-hidden="true">#</a> 外网访问内网服务（DNAT目标地址转换）</h4><p>外网机器-&gt;网关服务-&gt;内网服务</p><p>同样需要开启ip_forward</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> PREROUTING <span class="token parameter variable">-i</span> eth1 <span class="token parameter variable">-d</span> 网关的本机地址 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--sport</span> <span class="token number">80</span> <span class="token parameter variable">-j</span> DANT --to-destination 内网服务ip:port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="同网络内本机端口转发到其他机器服务" tabindex="-1"><a class="header-anchor" href="#同网络内本机端口转发到其他机器服务" aria-hidden="true">#</a> 同网络内本机端口转发到其他机器服务</h4><p>其他机器-&gt;本机端口-&gt;其他机器服务</p><p>同样需要开启ip_forward</p><p>本地6666转发到其他机器7777端口服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> PREROUTING <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">6666</span> <span class="token parameter variable">-j</span> DNAT --to-destination <span class="token number">192.168</span>.1.8:7777
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> POSTROUTING <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-d</span> <span class="token number">192.168</span>.1.8 <span class="token parameter variable">--dport</span> <span class="token number">7777</span> <span class="token parameter variable">-j</span> SNAT --to-source <span class="token number">192.168</span>.1.168
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="将一台公网-ip-主机的端口转发到另一台公网-ip-主机" tabindex="-1"><a class="header-anchor" href="#将一台公网-ip-主机的端口转发到另一台公网-ip-主机" aria-hidden="true">#</a> 将一台公网 ip 主机的端口转发到另一台公网 ip 主机</h4><p>两台AWS主机，一台位于伦敦，一台位于俄勒冈。红色为对应主机的公网 ip. 黑色为私网ip. 将 London 主机的 8016 端口转发到 Oregon 的 8017 端口。</p><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在 London 主机上操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> PREROUTING <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">8016</span> <span class="token parameter variable">-j</span> DNAT --to-destination <span class="token number">18.222</span>.236.211:8017
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> POSTROUTING <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-d</span> <span class="token number">18.222</span>.236.211 <span class="token parameter variable">--dport</span> <span class="token number">8017</span> <span class="token parameter variable">-j</span> SNAT --to-source <span class="token number">10.53</span>.1.49
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 London 主机上抓包： <img src="`+o+'" alt="" loading="lazy"></p><p>注意：这里关键的地方在于 SNAT 之后的 source 地址只能是内网地址，不能 London 主机的公网地址。如果配成了 London 主机的公网地址，抓包结果如下，转发不会成功。</p><figure><img src="'+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>虽然通过公网 ip 连接主机，但实际上在主机上抓包显示，数据包的目的地址都是主机的私网地址。DNAT 修改了数据包的目的地址，SNAT修改了数据包的源地址，一旦源地址被修改为本机的公网地址，该数据包将会被丢弃。</p><h2 id="修改ip地址" tabindex="-1"><a class="header-anchor" href="#修改ip地址" aria-hidden="true">#</a> 修改ip地址</h2><p>eth1一般是对外的网卡</p><p>eth0一般是局域网网卡</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/sysconfig/network-scripts/ifcfg-eth1
<span class="token comment"># 修改IPADDR</span>

<span class="token comment"># 修改生效</span>
<span class="token function">ifdown</span> eth1
<span class="token function">ifup</span> eth1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h6 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> reference</h6>`,82),u={href:"https://www.zhihu.com/question/49600057/answer/2717348104",target:"_blank",rel:"noopener noreferrer"},h={href:"https://linux.die.net/man/8/iptables",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.cnblogs.com/paul8339/p/14688156.html",target:"_blank",rel:"noopener noreferrer"};function k(f,x){const e=p("ExternalLinkIcon");return r(),l("div",null,[v,a("p",null,[a("a",u,[s("https://www.zhihu.com/question/49600057/answer/2717348104"),n(e)])]),a("p",null,[a("a",h,[s("https://linux.die.net/man/8/iptables"),n(e)])]),a("p",null,[a("a",g,[s("https://www.cnblogs.com/paul8339/p/14688156.html"),n(e)])])])}const y=t(b,[["render",k],["__file","iptables.html.vue"]]);export{y as default};