const s=JSON.parse('{"key":"v-4b5c10d5","path":"/tech/windows/wsl.html","title":"wsl2","lang":"zh-CN","frontmatter":{"description":"wsl2 脚本 #!/bin/sh hostip=$(cat /etc/resolv.conf | grep nameserver | awk \'{ print $2 }\') wslip=$(hostname -I | awk \'{print $1}\') port=10808 PROXY_HTTP=\\"socks5://${hostip}:${port}\\" set_proxy(){ export http_proxy=\\"${PROXY_HTTP}\\" export HTTP_PROXY=\\"${PROXY_HTTP}\\" export https_proxy=\\"${PROXY_HTTP}\\" export HTTPS_proxy=\\"${PROXY_HTTP}\\" export ALL_PROXY=\\"${PROXY_SOCKS5}\\" export all_proxy=${PROXY_SOCKS5} git config --global http.https://github.com.proxy ${PROXY_HTTP} git config --global https.https://github.com.proxy ${PROXY_HTTP} echo \\"Proxy has been opened.\\" } unset_proxy(){ unset http_proxy unset HTTP_PROXY unset https_proxy unset HTTPS_PROXY unset ALL_PROXY unset all_proxy git config --global --unset http.https://github.com.proxy git config --global --unset https.https://github.com.proxy echo \\"Proxy has been closed.\\" } test_setting(){ echo \\"Host IP:\\" ${hostip} echo \\"WSL IP:\\" ${wslip} echo \\"Try to connect to Google...\\" resp=$(curl -I -s --connect-timeout 5 -m 5 -w \\"%{http_code}\\" -o /dev/null www.google.com) if [ ${resp} = 200 ]; then echo \\"Proxy setup succeeded!\\" else echo \\"Proxy setup failed!\\" fi } if [ \\"$1\\" = \\"set\\" ] then set_proxy elif [ \\"$1\\" = \\"unset\\" ] then unset_proxy elif [ \\"$1\\" = \\"test\\" ] then test_setting else echo \\"Unsupported arguments.\\" fi","head":[["meta",{"property":"og:url","content":"https://www.ruizhou.cf/tech/windows/wsl.html"}],["meta",{"property":"og:site_name","content":"rz文档"}],["meta",{"property":"og:title","content":"wsl2"}],["meta",{"property":"og:description","content":"wsl2 脚本 #!/bin/sh hostip=$(cat /etc/resolv.conf | grep nameserver | awk \'{ print $2 }\') wslip=$(hostname -I | awk \'{print $1}\') port=10808 PROXY_HTTP=\\"socks5://${hostip}:${port}\\" set_proxy(){ export http_proxy=\\"${PROXY_HTTP}\\" export HTTP_PROXY=\\"${PROXY_HTTP}\\" export https_proxy=\\"${PROXY_HTTP}\\" export HTTPS_proxy=\\"${PROXY_HTTP}\\" export ALL_PROXY=\\"${PROXY_SOCKS5}\\" export all_proxy=${PROXY_SOCKS5} git config --global http.https://github.com.proxy ${PROXY_HTTP} git config --global https.https://github.com.proxy ${PROXY_HTTP} echo \\"Proxy has been opened.\\" } unset_proxy(){ unset http_proxy unset HTTP_PROXY unset https_proxy unset HTTPS_PROXY unset ALL_PROXY unset all_proxy git config --global --unset http.https://github.com.proxy git config --global --unset https.https://github.com.proxy echo \\"Proxy has been closed.\\" } test_setting(){ echo \\"Host IP:\\" ${hostip} echo \\"WSL IP:\\" ${wslip} echo \\"Try to connect to Google...\\" resp=$(curl -I -s --connect-timeout 5 -m 5 -w \\"%{http_code}\\" -o /dev/null www.google.com) if [ ${resp} = 200 ]; then echo \\"Proxy setup succeeded!\\" else echo \\"Proxy setup failed!\\" fi } if [ \\"$1\\" = \\"set\\" ] then set_proxy elif [ \\"$1\\" = \\"unset\\" ] then unset_proxy elif [ \\"$1\\" = \\"test\\" ] then test_setting else echo \\"Unsupported arguments.\\" fi"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-11T16:47:37.000Z"}],["meta",{"property":"article:author","content":"rz"}],["meta",{"property":"article:modified_time","content":"2023-03-11T16:47:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"wsl2\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-11T16:47:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"rz\\",\\"url\\":\\"https://github.com/xyz3282836/monodoc\\"}]}"]]},"headers":[{"level":2,"title":"脚本","slug":"脚本","link":"#脚本","children":[]}],"git":{"createdTime":1678553257000,"updatedTime":1678553257000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":1}]},"readingTime":{"minutes":0.61,"words":184},"filePathRelative":"tech/windows/wsl.md","localizedDate":"2023年3月12日","excerpt":"<h1> wsl2</h1>\\n<h2> 脚本</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token shebang important\\">#!/bin/sh</span>\\n<span class=\\"token assign-left variable\\">hostip</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\"><span class=\\"token variable\\">$(</span><span class=\\"token function\\">cat</span> /etc/resolv.conf <span class=\\"token operator\\">|</span> <span class=\\"token function\\">grep</span> nameserver <span class=\\"token operator\\">|</span> <span class=\\"token function\\">awk</span> <span class=\\"token string\\">\'{ print $2 }\'</span><span class=\\"token variable\\">)</span></span>\\n<span class=\\"token assign-left variable\\">wslip</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\"><span class=\\"token variable\\">$(</span><span class=\\"token function\\">hostname</span> <span class=\\"token parameter variable\\">-I</span> <span class=\\"token operator\\">|</span> <span class=\\"token function\\">awk</span> <span class=\\"token string\\">\'{print $1}\'</span><span class=\\"token variable\\">)</span></span>\\n<span class=\\"token assign-left variable\\">port</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">10808</span>\\n\\n<span class=\\"token assign-left variable\\">PROXY_HTTP</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"socks5://<span class=\\"token variable\\">${hostip}</span>:<span class=\\"token variable\\">${port}</span>\\"</span>\\n\\n<span class=\\"token function-name function\\">set_proxy</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token builtin class-name\\">export</span> <span class=\\"token assign-left variable\\">http_proxy</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"<span class=\\"token variable\\">${PROXY_HTTP}</span>\\"</span>\\n  <span class=\\"token builtin class-name\\">export</span> <span class=\\"token assign-left variable\\">HTTP_PROXY</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"<span class=\\"token variable\\">${PROXY_HTTP}</span>\\"</span>\\n\\n  <span class=\\"token builtin class-name\\">export</span> <span class=\\"token assign-left variable\\">https_proxy</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"<span class=\\"token variable\\">${PROXY_HTTP}</span>\\"</span>\\n  <span class=\\"token builtin class-name\\">export</span> <span class=\\"token assign-left variable\\">HTTPS_proxy</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"<span class=\\"token variable\\">${PROXY_HTTP}</span>\\"</span>\\n\\n  <span class=\\"token builtin class-name\\">export</span> <span class=\\"token assign-left variable\\">ALL_PROXY</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"<span class=\\"token variable\\">${PROXY_SOCKS5}</span>\\"</span>\\n  <span class=\\"token builtin class-name\\">export</span> <span class=\\"token assign-left variable\\">all_proxy</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">${PROXY_SOCKS5}</span>\\n\\n  <span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> http.https://github.com.proxy <span class=\\"token variable\\">${PROXY_HTTP}</span>\\n  <span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> https.https://github.com.proxy <span class=\\"token variable\\">${PROXY_HTTP}</span>\\n\\n  <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"Proxy has been opened.\\"</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token function-name function\\">unset_proxy</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token builtin class-name\\">unset</span> http_proxy\\n  <span class=\\"token builtin class-name\\">unset</span> HTTP_PROXY\\n  <span class=\\"token builtin class-name\\">unset</span> https_proxy\\n  <span class=\\"token builtin class-name\\">unset</span> HTTPS_PROXY\\n  <span class=\\"token builtin class-name\\">unset</span> ALL_PROXY\\n  <span class=\\"token builtin class-name\\">unset</span> all_proxy\\n  <span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> <span class=\\"token parameter variable\\">--unset</span> http.https://github.com.proxy\\n  <span class=\\"token function\\">git</span> config <span class=\\"token parameter variable\\">--global</span> <span class=\\"token parameter variable\\">--unset</span> https.https://github.com.proxy\\n\\n  <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"Proxy has been closed.\\"</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token function-name function\\">test_setting</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"Host IP:\\"</span> <span class=\\"token variable\\">${hostip}</span>\\n  <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"WSL IP:\\"</span> <span class=\\"token variable\\">${wslip}</span>\\n  <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"Try to connect to Google...\\"</span>\\n  <span class=\\"token assign-left variable\\">resp</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\"><span class=\\"token variable\\">$(</span><span class=\\"token function\\">curl</span> <span class=\\"token parameter variable\\">-I</span> <span class=\\"token parameter variable\\">-s</span> --connect-timeout <span class=\\"token number\\">5</span> <span class=\\"token parameter variable\\">-m</span> <span class=\\"token number\\">5</span> <span class=\\"token parameter variable\\">-w</span> <span class=\\"token string\\">\\"%{http_code}\\"</span> <span class=\\"token parameter variable\\">-o</span> /dev/null www.google.com<span class=\\"token variable\\">)</span></span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token variable\\">${resp}</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">200</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>\\n    <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"Proxy setup succeeded!\\"</span>\\n  <span class=\\"token keyword\\">else</span>\\n    <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"Proxy setup failed!\\"</span>\\n  <span class=\\"token keyword\\">fi</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">$1</span>\\"</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"set\\"</span> <span class=\\"token punctuation\\">]</span>\\n<span class=\\"token keyword\\">then</span>\\n  set_proxy\\n\\n<span class=\\"token keyword\\">elif</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">$1</span>\\"</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"unset\\"</span> <span class=\\"token punctuation\\">]</span>\\n<span class=\\"token keyword\\">then</span>\\n  unset_proxy\\n\\n<span class=\\"token keyword\\">elif</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">$1</span>\\"</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"test\\"</span> <span class=\\"token punctuation\\">]</span>\\n<span class=\\"token keyword\\">then</span>\\n  test_setting\\n<span class=\\"token keyword\\">else</span>\\n  <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"Unsupported arguments.\\"</span>\\n<span class=\\"token keyword\\">fi</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{s as data};
