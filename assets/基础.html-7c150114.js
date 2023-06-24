import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,a as s}from"./app-739499e9.js";const i="/assets/asm1-cde16e77.png",d={},l=s(`<h1 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h1><h2 id="汇编程序指令-assembler-directives" tabindex="-1"><a class="header-anchor" href="#汇编程序指令-assembler-directives" aria-hidden="true">#</a> 汇编程序指令 assembler directives</h2><h3 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> DATA</h3><p>DATA symbol + offset(SB)/width, value</p><p>在给定的 offset 和 width 处初始化该符号的内存为 value。 DATA 必须使用增加的偏移量来写入给定符号的指令。</p><div class="language-asm line-numbers-mode" data-ext="asm"><pre class="language-asm"><code>DATA divtab&lt;&gt;+0x00(SB)/4, $0xf4f8fcff
DATA divtab&lt;&gt;+0x04(SB)/4, $0xe6eaedf0
...
DATA divtab&lt;&gt;+0x3c(SB)/4, $0x81828384
GLOBL divtab&lt;&gt;(SB), RODATA, $64

GLOBL runtime·tlsoffset(SB), NOPTR, $4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>DATA divtab&lt;&gt;+0x00(SB)/4, $0xf4f8fcff</code> 表示的是<code>divtab&lt;&gt;</code> 在 0 偏移处有一个 4 字节大小的值<code>0xf4f8fcff</code></p><p>下边连续多条<code>DATA...</code>都一样，注意偏移发生了变化，以 4 递增。最终偏移是<code>0x3c</code></p><p>然后继续看<code>GLOBL divtab&lt;&gt;(SB), RODATA, $64</code> ，这条给变量<code>divtab&lt;&gt;</code>加了一个 flag <code>RODATA</code> ，表示里边存的是只读变量，最后的<code>$64</code>表示的是这个变量占用了 64 字节的空间（容易看出来<code>0x3c + 4 = 0x40= 10进制的64</code>）</p><p><code>GLOBL runtime·tlsoffset(SB), NOPTR, $4</code> 这条指令中，<code>NOPTR</code>这个 flag 表示这个变量中存的不是指针</p><h4 id="golang-的-flag" tabindex="-1"><a class="header-anchor" href="#golang-的-flag" aria-hidden="true">#</a> golang 的 flag</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Don&#39;t profile the marked routine. This flag is deprecated.</span>
#define NOPROF	<span class="token number">1</span>
<span class="token comment">// It is ok for the linker to get multiple of these symbols. It will</span>
<span class="token comment">// pick one of the duplicates to use.</span>
#define DUPOK	<span class="token number">2</span>
<span class="token comment">// Don&#39;t insert stack check preamble.</span>
#define NOSPLIT	<span class="token number">4</span>
<span class="token comment">// Put this data in a read-only section.</span>
#define RODATA	<span class="token number">8</span>
<span class="token comment">// This data contains no pointers.</span>
#define NOPTR	<span class="token number">16</span>
<span class="token comment">// This is a wrapper function and should not count as disabling &#39;recover&#39;.</span>
#define WRAPPER <span class="token number">32</span>
<span class="token comment">// This function uses its incoming context register.</span>
#define NEEDCTXT <span class="token number">64</span>
<span class="token comment">// Allocate a word of thread local storage and store the offset from the</span>
<span class="token comment">// thread local base to the thread local storage in this variable.</span>
#define TLSBSS	<span class="token number">256</span>
<span class="token comment">// Do not insert instructions to allocate a stack frame for this function.</span>
<span class="token comment">// Only valid on functions that declare a frame size of 0.</span>
<span class="token comment">// TODO(mwhudson): only implemented for ppc64x at present.</span>
#define NOFRAME <span class="token number">512</span>
<span class="token comment">// Function can call reflect.Type.Method or reflect.Type.MethodByName.</span>
#define REFLECTMETHOD <span class="token number">1024</span>
<span class="token comment">// Function is the top of the call stack. Call stack unwinders should stop</span>
<span class="token comment">// at this function.</span>
#define TOPFRAME <span class="token number">2048</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> TEXT</h3><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>TEXT runtime·profileloop(SB),NOSPLIT,$8
	MOVQ	$runtime·profileloop1(SB), CX
	MOVQ	CX, 0(SP)
	CALL	runtime·externalthreadhandler(SB)
	RET
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上边整段汇编代码称为一个<code>TEXT block</code> ，<code>runtime.profileloop(SB)</code>后边有一个<code>NOSPLIT</code> flag，紧随其后的<code>$8</code>表示<code>frame size</code> 通常 <code>frame size</code> 的构成都是形如<code>$24-8</code> (中间的<code>-</code>只起到分隔的作用)，表示的是这个<code>TEXT block</code> 运行的时候需要占用 24 字节空间，参数和返回值要额外占用 8 字节空间（这 8 字节占用的是调用方栈帧里的空间）</p><p>但是如果有 NOSPLIT 这个 flag，则可以忽略参数和返回值占用的空间，就像上述这个例子，只有一个<code>$8</code> 。表示 frame size 只有 8 字节大小。这从汇编中也能看出来 <code>MOVQ CX, 0(SP)</code> ,因为 MOVQ 表示这个操作的操作对象是 8 字节的</p><blockquote><p>MOV 指令有有好几种后缀 MOVB MOVW MOVL MOVQ 分别对应的是 1 字节 、2 字节 、4 字节、8 字节</p></blockquote><h3 id="指令" tabindex="-1"><a class="header-anchor" href="#指令" aria-hidden="true">#</a> 指令</h3><p>指令有几大类，<strong>一类是用于数据移动的</strong>，比如 MOV 系列，MOVQ、MOVL 等等(都是 MOV，只不过 Q 和 L 的后缀表示了指令操作数的字节大小)，还有<strong>一类是用于跳转的</strong>，无条件跳转，有条件跳转等等。还有<strong>一类是用于逻辑运算和算术运算</strong>的。</p><p>还有一些类似于指令，但是其实是指令的 prefix，比如 <code>LOCK</code></p><h3 id="运行时协调" tabindex="-1"><a class="header-anchor" href="#运行时协调" aria-hidden="true">#</a> 运行时协调</h3><p>为保证垃圾回收正确运行，在大多数栈帧中，运行时必须知道所有全局数据的指针。 Go 编译器会将这部分信息耦合到 Go 源码文件中，但汇编程序必须进行显式定义。</p><p>被标记为 <code>NOPTR</code> 标志的数据符号会视为不包含指向运行时分配数据的指针。 带有 <code>R0DATA</code> 标志的数据符号在只读存储器中分配，因此被隐式标记为 <code>NOPTR</code>。 总大小小于指针的数据符号也被视为隐式标记 <code>NOPTR</code>。 在一份汇编源文件中是无法定义包含指针的符号的，因此这种符号必须定义在 Go 源文件中。 一个良好的经验法则是 <code>R0DATA</code> 在 Go 中定义所有非符号而不是在汇编中定义。</p><p>。。。</p><h3 id="寄存器" tabindex="-1"><a class="header-anchor" href="#寄存器" aria-hidden="true">#</a> 寄存器</h3><h3 id="通用寄存器" tabindex="-1"><a class="header-anchor" href="#通用寄存器" aria-hidden="true">#</a> 通用寄存器</h3><p>Plan 9 中的通用寄存器包括：</p><p>AX BX CX DX DI SI BP SP R8 R9 R10 R11 R12 R13 R14 PC</p><h3 id="伪寄存器" tabindex="-1"><a class="header-anchor" href="#伪寄存器" aria-hidden="true">#</a> 伪寄存器</h3><p>伪寄存器不是真正的寄存器，而是由工具链维护的虚拟寄存器，例如帧指针。</p><p>FP, Frame Pointer：帧指针，参数和本地 PC, Program Counter: 程序计数器，跳转和分支 SB, Static Base: 静态基指针, 全局符号 SP, Stack Pointer: 当前栈帧开始的地方</p><p>所有用户定义的符号都作为偏移量写入伪寄存器 FP 和 SB。</p><p>汇编代码中需要表示用户定义的符号(变量)时，可以通过 SP 与偏移还有变量名的组合，比如<code>x-8(SP)</code> ，因为 SP 指向的是栈顶，所以偏移值都是负的，<code>x</code>则表示变量名</p><h4 id="栈扩大、缩小" tabindex="-1"><a class="header-anchor" href="#栈扩大、缩小" aria-hidden="true">#</a> 栈扩大、缩小</h4><p>plan9 中栈操作并没有<code>push</code> <code>pop</code>，而是采用<code>sub</code>和<code>add SP</code></p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>SUBQ $0x18, SP //对SP做减法 为函数分配函数栈帧
ADDQ $0x18, SP //对SP做加法 清除函数栈帧
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数据-copy" tabindex="-1"><a class="header-anchor" href="#数据-copy" aria-hidden="true">#</a> 数据 copy</h4><div class="language-asm line-numbers-mode" data-ext="asm"><pre class="language-asm"><code>MOVB $1, DI // 1 byte
MOVW $0x10, BX // 2bytes
MOVD $1, DX // 4 bytes
MOVQ $-10, AX // 8 bytes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="计算指令" tabindex="-1"><a class="header-anchor" href="#计算指令" aria-hidden="true">#</a> 计算指令</h4><div class="language-asm line-numbers-mode" data-ext="asm"><pre class="language-asm"><code>ADDQ AX, BX // BX += AX
SUBQ AX, BX // BX -= AX
IMULQ AX, BX // BX *= AX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="跳转" tabindex="-1"><a class="header-anchor" href="#跳转" aria-hidden="true">#</a> 跳转</h4><div class="language-asm line-numbers-mode" data-ext="asm"><pre class="language-asm"><code>//无条件跳转
JMP addr // 跳转到地址，地址可为代码中的地址 不过实际上手写不会出现这种东西
JMP label // 跳转到标签 可以跳转到同一函数内的标签位置
JMP 2(PC) // 以当前置顶为基础，向前/后跳转x行
JMP -2(PC) //同上
//有条件跳转
JNZ target // 如果zero flag被set过，则跳转
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="变量声明" tabindex="-1"><a class="header-anchor" href="#变量声明" aria-hidden="true">#</a> 变量声明</h4><div class="language-asm line-numbers-mode" data-ext="asm"><pre class="language-asm"><code>DATA symbol+offset(SB)/width,value


GLOBL runtime·tlsoffset(SB), NOPTR, $4
// 声明一个全局变量tlsoffset，4byte，没有DATA部分，因其值为0。
// NOPTR 表示这个变量数据中不存在指针，GC不需要扫描。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="寄存器-1" tabindex="-1"><a class="header-anchor" href="#寄存器-1" aria-hidden="true">#</a> 寄存器</h4><p>Go 汇编引入了 4 个伪寄存器，这 4 个寄存器是编译器用来维护上下文、特殊标识等作用的:</p><div class="language-asm line-numbers-mode" data-ext="asm"><pre class="language-asm"><code>FP(Frame pointer):arguments and locals
PC(Program counter): jumps and branches
SB(Static base pointer):global symbols
SP(Stack pointer):top of stack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有用户空间的数据都可以通过 FP/SP(局部数据、输入参数、返回值)和 SB(全局数据)访问。通常情况下，不会对 SB/FP 寄存器进行运算操作，通常情况会以 SB/FP/SP 作为基准地址，进行偏移、解引用等操作。</p><p>其中</p><p>SP 是栈指针，用来指向局部变量和函数调用的参数，SP 指向 local stack frame 的栈顶，所以使用时需要使用负偏移量，取之范围为[-framesize,0)。foo-8(SP)表示 foo 的栈第 8byte。SP 有伪 SP 和硬件 SP 的区分，如果硬件支持 SP 寄存器，那么不加 name 的时候就是访问硬件寄存器，因此 x-8(SP)和-8(SP)访问的会是不同的内存空间。对 SP 和 PC 的访问都应该带上 name，若要访问对应的硬件寄存器可以使用 RSP。</p><p>伪 SP：本地变量最高起始地址</p><p>硬件 SP：函数栈真实栈顶地址</p><p>他们的关系为：</p><p>若没有本地变量: 伪 SP=硬件 SP+8</p><p>若有本地变量:伪 SP=硬件 SP+16+本地变量空间大小</p><p>在 plan9 汇编里还可以直接使用 amd64 的通用寄存器，应用代码层面会用到的通用寄存器主要是:</p><p>rax,rbx,rcx,rdx,rdi,rsi,r8~r15 这 14 个寄存器。plan9 中使用寄存器不需要带 r 或 e 的前缀，例如 rax，只要写 AX 即可:</p><div class="language-asm line-numbers-mode" data-ext="asm"><pre class="language-asm"><code>MOVQ $101, AX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,59),c=[l];function r(t,o){return a(),n("div",null,c)}const u=e(d,[["render",r],["__file","基础.html.vue"]]);export{u as default};
