const t=JSON.parse('{"key":"v-daf1ed44","path":"/tech/docker/iptables.html","title":"iptables","lang":"zh-CN","frontmatter":{"description":"iptables chain and table table • filter：这里面的链条，规则，可以决定一个数据包是否可以到达目标进程端口 • mangle: 这里面的链条，规则，可以修改数据包的内容，比如 ttl • nat：这里面的链条，规则，可以修改源和目标的 ip 地址，从而进行包路由。 • raw：这里面的链条，规则，能基于数据包的状态进行规则设定 chain 以搬瓦工 vps 为例 centos8 为例 prerouting input forward output postrouting mangle mangle mangle mangle mangle nat nat（centos7+可以） nat nat filter filter filter raw raw","head":[["meta",{"property":"og:url","content":"https://www.ruizhou.cf/tech/docker/iptables.html"}],["meta",{"property":"og:site_name","content":"rz文档"}],["meta",{"property":"og:title","content":"iptables"}],["meta",{"property":"og:description","content":"iptables chain and table table • filter：这里面的链条，规则，可以决定一个数据包是否可以到达目标进程端口 • mangle: 这里面的链条，规则，可以修改数据包的内容，比如 ttl • nat：这里面的链条，规则，可以修改源和目标的 ip 地址，从而进行包路由。 • raw：这里面的链条，规则，能基于数据包的状态进行规则设定 chain 以搬瓦工 vps 为例 centos8 为例 prerouting input forward output postrouting mangle mangle mangle mangle mangle nat nat（centos7+可以） nat nat filter filter filter raw raw"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-11T16:47:37.000Z"}],["meta",{"property":"article:author","content":"rz"}],["meta",{"property":"article:modified_time","content":"2023-03-11T16:47:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"iptables\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-11T16:47:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"rz\\",\\"url\\":\\"https://github.com/xyz3282836/monodoc\\"}]}"]]},"headers":[{"level":2,"title":"chain and table","slug":"chain-and-table","link":"#chain-and-table","children":[{"level":3,"title":"table","slug":"table","link":"#table","children":[]},{"level":3,"title":"chain","slug":"chain","link":"#chain","children":[]}]},{"level":2,"title":"访问模式","slug":"访问模式","link":"#访问模式","children":[{"level":3,"title":"remote 访问本机","slug":"remote-访问本机","link":"#remote-访问本机","children":[]},{"level":3,"title":"本地访问 remote","slug":"本地访问-remote","link":"#本地访问-remote","children":[]},{"level":3,"title":"转发","slug":"转发","link":"#转发","children":[]}]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"实践","slug":"实践","link":"#实践","children":[{"level":3,"title":"连接状态","slug":"连接状态","link":"#连接状态","children":[]},{"level":3,"title":"自定义链","slug":"自定义链","link":"#自定义链","children":[]},{"level":3,"title":"规则的取反配置","slug":"规则的取反配置","link":"#规则的取反配置","children":[]},{"level":3,"title":"简单流量统计","slug":"简单流量统计","link":"#简单流量统计","children":[]},{"level":3,"title":"转发案例","slug":"转发案例","link":"#转发案例","children":[]}]},{"level":2,"title":"修改 ip 地址","slug":"修改-ip-地址","link":"#修改-ip-地址","children":[]},{"level":2,"title":"reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1678553257000,"updatedTime":1678553257000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":1}]},"readingTime":{"minutes":7.3,"words":2191},"filePathRelative":"tech/docker/iptables.md","localizedDate":"2023年3月12日","excerpt":"<h1> iptables</h1>\\n<h2> chain and table</h2>\\n<h3> table</h3>\\n<p>• filter：这里面的链条，规则，可以决定一个数据包是否可以到达目标进程端口</p>\\n<p>• mangle: 这里面的链条，规则，可以修改数据包的内容，比如 ttl</p>\\n<p>• nat：这里面的链条，规则，可以修改源和目标的 ip 地址，从而进行包路由。</p>\\n<p>• raw：这里面的链条，规则，能基于数据包的状态进行规则设定</p>\\n<h3> chain</h3>\\n<p>以搬瓦工 vps 为例 centos8 为例</p>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:center\\">prerouting</th>\\n<th style=\\"text-align:center\\">input</th>\\n<th style=\\"text-align:center\\">forward</th>\\n<th style=\\"text-align:center\\">output</th>\\n<th style=\\"text-align:center\\">postrouting</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:center\\">mangle</td>\\n<td style=\\"text-align:center\\">mangle</td>\\n<td style=\\"text-align:center\\">mangle</td>\\n<td style=\\"text-align:center\\">mangle</td>\\n<td style=\\"text-align:center\\">mangle</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\"><strong><code>nat</code></strong></td>\\n<td style=\\"text-align:center\\"><strong><code>nat</code></strong>（centos7+可以）</td>\\n<td style=\\"text-align:center\\"></td>\\n<td style=\\"text-align:center\\"><strong><code>nat</code></strong></td>\\n<td style=\\"text-align:center\\"><strong><code>nat</code></strong></td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\"></td>\\n<td style=\\"text-align:center\\"><strong><code>filter</code></strong></td>\\n<td style=\\"text-align:center\\"><strong><code>filter</code></strong></td>\\n<td style=\\"text-align:center\\"><strong><code>filter</code></strong></td>\\n<td style=\\"text-align:center\\"></td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">raw</td>\\n<td style=\\"text-align:center\\"></td>\\n<td style=\\"text-align:center\\"></td>\\n<td style=\\"text-align:center\\">raw</td>\\n<td style=\\"text-align:center\\"></td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};
