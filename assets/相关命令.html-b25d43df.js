import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,a as s}from"./app-6f5bc1f7.js";const l={},d=s(`<h1 id="相关命令" tabindex="-1"><a class="header-anchor" href="#相关命令" aria-hidden="true">#</a> 相关命令</h1><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">go</span> run <span class="token operator">-</span>gcfalgs <span class="token char">&#39;-m -l&#39;</span> main<span class="token punctuation">.</span><span class="token keyword">go</span>
<span class="token operator">-</span>m 会打印出逃逸分析的优化策略，实际上最多总共可以用 <span class="token number">4</span> 个 <span class="token operator">-</span>m，但是信息量较大，一般用 <span class="token number">1</span> 个就可以了。
<span class="token operator">-</span>l 会禁用函数内联，在这里禁用掉内联能更好的观察逃逸情况，减少干扰。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成汇编代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go tool compile [flags] file...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指定的文件必须是 Go 源文件和同一个包下的其他部分。所有目标操作系统和体系结构都使用相同的编译器。 GOOS 和 GOARCH 环境变量设置了所需的属性。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-D path
	设置本地导入的相对路径。
-I dir1 -I dir2
	在dir1，dir2等文件夹搜索导入的包，
	会先查询 $GOROOT/pkg/$GOOS_$GOARCH.
-L
	在错误消息中显示完整的文件路径。
-N
	禁用优化。
-S
	将汇编列表打印到标准输出（仅限代码）。
-S -S
	将汇编列表打印到标准输出（代码和数据）。
-V
	打印编译器版本并退出。
-asmhdr file
	将汇编头写入文件。
-blockprofile file
	编写用于编译到文件的块配置文件。
-complete
	假设软件包没有非Go组件。
-cpuprofile file
	编写用于编译文件的CPU配置文件。
-dynlink
	允许引用共享库中的Go符号（实验性功能）。
-e
	移除报告错误数量限制（默认限制为10）。
-h
	在检测到第一个错误时暂停堆栈跟踪。
-importmap old=new
	在编译过程中将导入“旧”解释为导入“新”。
	该选项可以重复添加。
-installsuffix suffix
	在 $GOROOT/pkg/$GOOS_$GOARCH_suffix 查找包
	而非 $GOROOT/pkg/$GOOS_$GOARCH.
-l
	禁用内联。
-largemodel
	生成假定大内存模型的代码。
-linkobj file
	将链接器特定的对象写入文件和编译器特定的对象
    对象到通常的输出文件（由-o指定）。
	没有这个标志，-o输出是两者的组合
    链接器和编译器输入。
-memprofile file
	写入内存配置文件。
-memprofilerate rate
	设置 runtime.MemProfileRate 调整编译速度。
-msan
	将调用插入到C/C++内存清理程序。
-mutexprofile file
	编写用于编译文件的互斥量配置文件。
-nolocalimports
	禁止本地（相对）导入。
-o file
	将目标写入文件（默认file.o或与-pack，file.a）。
-p path
	为正在编译的代码设置期望的包导入路径，
	并诊断会导致循环依赖的导入。
-pack
	编写一个包（归档）文件而不是一个目标文件
-race
	编译启用竞争检测器。
-trimpath prefix
	从记录的源文件路径中删除前缀。
-u
	禁止导入未标记为安全的软件包;意味着 -nolocalimports.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一些调试标志;运行该命令时没有使用消息的参数。</p>`,7),a=[d];function v(r,c){return i(),e("div",null,a)}const u=n(l,[["render",v],["__file","相关命令.html.vue"]]);export{u as default};
