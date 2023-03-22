const e=JSON.parse(`{"key":"v-8931789c","path":"/linux/swap.html","title":"Swap","lang":"zh-CN","frontmatter":{"description":"Swap 常用命令 free -m swap --show（swap -s） grep SwapTotal /proc/meminfo // Swappiness is a property of the Linux kernel that changes the balance between swapping out runtime memory, as opposed to dropping pages from the system page cache. Swappiness can be set to values between 0 and 100 inclusive. A low value means the kernel will try to avoid swapping as much as possible where a higher value instead will make the kernel aggressively try to use swap space. The default value is 60, and for most desktop systems, setting it to 100 may affect the overall performance, whereas setting it lower (even 0) may improve interactivity (by decreasing response latency. cat /proc/sys/vm/swappiness // 临时修改 echo 60 &gt; /proc/sys/vm/swappiness // 或者 sysctl vm.swappiness=60 // 永久修改，需要重启，本质就是每次开启加载下这个新配置 echo 'vm.swappiness=60' &gt;&gt; /etc/sysctl.conf // 利用dd来划分空间 dd if=/dev/zero of=swapfile bs=1M count=980 chmod 600 swapfile // 转换成swap类型文件 mkswap swapfile swapon swapfile // 卸载 swapoff swapfile // 永久生效 vim /etc/fstab // 添加 swapfile-path none swap defaults 0 0","head":[["meta",{"property":"og:url","content":"https://www.ruizhou.cf/linux/swap.html"}],["meta",{"property":"og:site_name","content":"rz文档"}],["meta",{"property":"og:title","content":"Swap"}],["meta",{"property":"og:description","content":"Swap 常用命令 free -m swap --show（swap -s） grep SwapTotal /proc/meminfo // Swappiness is a property of the Linux kernel that changes the balance between swapping out runtime memory, as opposed to dropping pages from the system page cache. Swappiness can be set to values between 0 and 100 inclusive. A low value means the kernel will try to avoid swapping as much as possible where a higher value instead will make the kernel aggressively try to use swap space. The default value is 60, and for most desktop systems, setting it to 100 may affect the overall performance, whereas setting it lower (even 0) may improve interactivity (by decreasing response latency. cat /proc/sys/vm/swappiness // 临时修改 echo 60 &gt; /proc/sys/vm/swappiness // 或者 sysctl vm.swappiness=60 // 永久修改，需要重启，本质就是每次开启加载下这个新配置 echo 'vm.swappiness=60' &gt;&gt; /etc/sysctl.conf // 利用dd来划分空间 dd if=/dev/zero of=swapfile bs=1M count=980 chmod 600 swapfile // 转换成swap类型文件 mkswap swapfile swapon swapfile // 卸载 swapoff swapfile // 永久生效 vim /etc/fstab // 添加 swapfile-path none swap defaults 0 0"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.ruizhou.cf/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-11T14:36:50.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Swap"}],["meta",{"property":"article:author","content":"rz"}],["meta",{"property":"article:modified_time","content":"2023-03-11T14:36:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Swap\\",\\"image\\":[\\"https://www.ruizhou.cf/\\"],\\"dateModified\\":\\"2023-03-11T14:36:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"rz\\",\\"url\\":\\"https://github.com/xyz3282836/monodoc\\"}]}"]]},"headers":[{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":2,"title":"推荐 swap 大小","slug":"推荐-swap-大小","link":"#推荐-swap-大小","children":[]},{"level":2,"title":"reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1678545410000,"updatedTime":1678545410000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":1}]},"readingTime":{"minutes":0.84,"words":253},"filePathRelative":"linux/swap.md","localizedDate":"2023年3月11日","excerpt":"<h1> Swap</h1>\\n<h2> 常用命令</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">free</span> <span class=\\"token parameter variable\\">-m</span>\\n\\nswap --show（swap -s）\\n\\n<span class=\\"token function\\">grep</span> SwapTotal /proc/meminfo\\n\\n// Swappiness is a property of the Linux kernel that changes the balance between swapping out runtime memory, as opposed to dropping pages from the system page cache. Swappiness can be <span class=\\"token builtin class-name\\">set</span> to values between <span class=\\"token number\\">0</span> and <span class=\\"token number\\">100</span> inclusive. A low value means the kernel will try to avoid swapping as much as possible where a higher value instead will <span class=\\"token function\\">make</span> the kernel aggressively try to use swap space. The default value is <span class=\\"token number\\">60</span>, and <span class=\\"token keyword\\">for</span> <span class=\\"token function\\">most</span> desktop systems, setting it to <span class=\\"token number\\">100</span> may affect the overall performance, whereas setting it lower <span class=\\"token punctuation\\">(</span>even <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> may improve interactivity <span class=\\"token punctuation\\">(</span>by decreasing response latency.\\n<span class=\\"token function\\">cat</span> /proc/sys/vm/swappiness\\n// 临时修改\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token number\\">60</span> <span class=\\"token operator\\">&gt;</span> /proc/sys/vm/swappiness\\n// 或者\\n<span class=\\"token function\\">sysctl</span> <span class=\\"token assign-left variable\\">vm.swappiness</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">60</span>\\n// 永久修改，需要重启，本质就是每次开启加载下这个新配置\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">'vm.swappiness=60'</span> <span class=\\"token operator\\">&gt;&gt;</span> /etc/sysctl.conf\\n\\n// 利用dd来划分空间\\n<span class=\\"token function\\">dd</span> <span class=\\"token assign-left variable\\">if</span><span class=\\"token operator\\">=</span>/dev/zero <span class=\\"token assign-left variable\\">of</span><span class=\\"token operator\\">=</span>swapfile <span class=\\"token assign-left variable\\">bs</span><span class=\\"token operator\\">=</span>1M <span class=\\"token assign-left variable\\">count</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">980</span>\\n<span class=\\"token function\\">chmod</span> <span class=\\"token number\\">600</span> swapfile\\n// 转换成swap类型文件\\n<span class=\\"token function\\">mkswap</span> swapfile\\n\\n<span class=\\"token function\\">swapon</span> swapfile\\n// 卸载\\nswapoff swapfile\\n\\n\\n// 永久生效\\n<span class=\\"token function\\">vim</span> /etc/fstab\\n// 添加\\nswapfile-path none swap defaults <span class=\\"token number\\">0</span> <span class=\\"token number\\">0</span>\\n\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
