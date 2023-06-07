import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c as l,b as e,d as o,e as r,a as n}from"./app-339f552b.js";const c={},d=n('<h1 id="版本升级" tabindex="-1"><a class="header-anchor" href="#版本升级" aria-hidden="true">#</a> 版本升级</h1><h2 id="_1-16" tabindex="-1"><a class="header-anchor" href="#_1-16" aria-hidden="true">#</a> 1.16</h2><p>go.1.12 - go1.15 版本的内存回收策略使用的是 MADV_FREE，1.16 后使用的是 MADV_DONTNEED 策略。</p><h3 id="runtime" tabindex="-1"><a class="header-anchor" href="#runtime" aria-hidden="true">#</a> Runtime</h3>',4),h={href:"https://go.dev/pkg/runtime/metrics/",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"runtime/metrics",-1),p={href:"https://go.dev/pkg/runtime/#ReadMemStats",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"runtime.ReadMemStats",-1),g={href:"https://go.dev/pkg/runtime/debug/#GCStats",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"debug.GCStats",-1),_=e("code",null,"GODEBUG",-1),b=e("code",null,"inittrace=1",-1),y=e("code",null,"init",-1),G={href:"https://go.dev/pkg/runtime/#hdr-Environment_Variables",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"GODEBUG",-1),v=e("p",null,[o("On Linux, the runtime now defaults to releasing memory to the operating system promptly (using "),e("code",null,"MADV_DONTNEED"),o("), rather than lazily when the operating system is under memory pressure (using "),e("code",null,"MADV_FREE"),o("). This means process-level memory statistics like RSS will more accurately reflect the amount of physical memory being used by Go processes. Systems that are currently using "),e("code",null,"GODEBUG=madvdontneed=1"),o(" to improve memory monitoring behavior no longer need to set this environment variable.")],-1),k={href:"https://go.dev/ref/mem",target:"_blank",rel:"noopener noreferrer"},C=n('<h2 id="_1-17" tabindex="-1"><a class="header-anchor" href="#_1-17" aria-hidden="true">#</a> 1.17</h2><h3 id="compiler" tabindex="-1"><a class="header-anchor" href="#compiler" aria-hidden="true">#</a> Compiler</h3><p>Go 1.17 implements a new way of passing function arguments and results using registers instead of the stack. Benchmarks for a representative set of Go packages and programs show performance improvements of about 5%, and a typical reduction in binary size of about 2%. This is currently enabled for Linux, macOS, and Windows on the 64-bit x86 architecture (the <code>linux/amd64</code>, <code>darwin/amd64</code>, and <code>windows/amd64</code> ports).</p><p>调用惯例(calling convention)带来了函数调用的优化，官方说明是**5%**的性能提升。</p><h2 id="_1-18" tabindex="-1"><a class="header-anchor" href="#_1-18" aria-hidden="true">#</a> 1.18</h2><h3 id="runtime-1" tabindex="-1"><a class="header-anchor" href="#runtime-1" aria-hidden="true">#</a> Runtime</h3><p>The garbage collector now includes non-heap sources of garbage collector work (e.g., stack scanning) when determining how frequently to run. As a result, garbage collector overhead is more predictable when these sources are significant. For most applications these changes will be negligible; however, some Go applications may now use less memory and spend more time on garbage collection, or vice versa, than before. The intended workaround is to tweak <code>GOGC</code> where necessary.</p><p>The runtime now returns memory to the operating system more efficiently and has been tuned to work more aggressively as a result.</p><p>Go 1.17 generally improved the formatting of arguments in stack traces, but could print inaccurate values for arguments passed in registers. This is improved in Go 1.18 by printing a question mark (<code>?</code>) after each value that may be inaccurate.</p><p>The built-in function <code>append</code> now uses a slightly different formula when deciding how much to grow a slice when it must allocate a new underlying array. The new formula is less prone to sudden transitions in allocation behavior.</p><p>小优化</p><h3 id="compiler-1" tabindex="-1"><a class="header-anchor" href="#compiler-1" aria-hidden="true">#</a> Compiler</h3>',12),x={href:"https://go.dev/doc/go1.17#compiler",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"GOARCH=arm64",-1),O=e("code",null,"GOARCH=ppc64",-1),S=e("code",null,"ppc64le",-1),A=e("code",null,"GOARCH=amd64",-1),E={href:"https://go.dev/doc/go1.17#compiler",target:"_blank",rel:"noopener noreferrer"},M={href:"https://go.dev/doc/go1.17#compiler",target:"_blank",rel:"noopener noreferrer"},B=n('<p>The compiler now can inline functions that contain range loops or labeled for loops.</p><p>The new <code>-asan</code> compiler option supports the new <code>go</code> command <code>-asan</code> option.</p><p>Because the compiler&#39;s type checker was replaced in its entirety to support generics, some error messages now may use different wording than before. In some cases, pre-Go 1.18 error messages provided more detail or were phrased in a more helpful way. We intend to address these cases in Go 1.19.</p><p>Because of changes in the compiler related to supporting generics, the Go 1.18 compile speed can be roughly 15% slower than the Go 1.17 compile speed. The execution time of the compiled code is not affected. We intend to improve the speed of the compiler in future releases.</p><p>1.18 由于引入 generics 泛型，编译速度慢了 15%，执行不受影响。</p><h2 id="_1-19" tabindex="-1"><a class="header-anchor" href="#_1-19" aria-hidden="true">#</a> 1.19</h2><h3 id="runtime-2" tabindex="-1"><a class="header-anchor" href="#runtime-2" aria-hidden="true">#</a> Runtime</h3>',7),R={href:"https://go.dev/pkg/runtime/debug/#SetMemoryLimit",target:"_blank",rel:"noopener noreferrer"},L=e("code",null,"runtime/debug.SetMemoryLimit",-1),I={href:"https://go.dev/pkg/runtime/#hdr-Environment_Variables",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"GOMEMLIMIT",-1),D={href:"https://go.dev/pkg/runtime/debug/#SetGCPercent",target:"_blank",rel:"noopener noreferrer"},U=e("code",null,"runtime/debug.SetGCPercent",-1),V={href:"https://go.dev/pkg/runtime/#hdr-Environment_Variables",target:"_blank",rel:"noopener noreferrer"},z=e("code",null,"GOGC",-1),N=e("code",null,"GOGC=off",-1),q={href:"https://go.dev/doc/gc-guide",target:"_blank",rel:"noopener noreferrer"},H={href:"https://go.dev/issue/52433",target:"_blank",rel:"noopener noreferrer"},j={href:"https://go.dev/pkg/runtime/metrics/#hdr-Supported_metrics",target:"_blank",rel:"noopener noreferrer"},F=e("code",null,"/gc/limiter/last-enabled:gc-cycle",-1),W=e("p",null,"The runtime now schedules many fewer GC worker goroutines on idle operating system threads when the application is idle enough to force a periodic GC cycle.",-1),K=e("p",null,"The runtime will now allocate initial goroutine stacks based on the historic average stack usage of goroutines. This avoids some of the early stack growth and copying needed in the average case in exchange for at most 2x wasted space on below-average goroutines.",-1),J={href:"https://go.dev/pkg/os/",target:"_blank",rel:"noopener noreferrer"},Q=e("code",null,"RLIMIT_NOFILE",-1),X={href:"https://en.wikipedia.org/wiki/Select_(Unix)",target:"_blank",rel:"noopener noreferrer"},Y=e("em",null,"select",-1),Z=e("code",null,"gofmt",-1),$=e("p",null,[o("Unrecoverable fatal errors (such as concurrent map writes, or unlock of unlocked mutexes) now print a simpler traceback excluding runtime metadata (equivalent to a fatal panic) unless "),e("code",null,"GOTRACEBACK=system"),o(" or "),e("code",null,"crash"),o(". Runtime-internal fatal error tracebacks always include full metadata regardless of the value of "),e("code",null,"GOTRACEBACK")],-1),ee=e("p",null,"Support for debugger-injected function calls has been added on ARM64, enabling users to call functions from their binary in an interactive debugging session when using a debugger that is updated to make use of this functionality.",-1),oe={href:"https://go.dev/doc/go1.18#go-build-asan",target:"_blank",rel:"noopener noreferrer"},te=e("h3",{id:"compiler-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#compiler-2","aria-hidden":"true"},"#"),o(" Compiler")],-1),re={href:"https://en.wikipedia.org/wiki/Branch_table",target:"_blank",rel:"noopener noreferrer"},ne=e("code",null,"GOARCH=amd64",-1),ae=e("code",null,"GOARCH=arm64",-1),se=n('<p>The Go compiler now requires the <code>-p=importpath</code> flag to build a linkable object file. This is already supplied by the <code>go</code> command and by Bazel. Any other build systems that invoke the Go compiler directly will need to make sure they pass this flag as well.</p><p>The Go compiler no longer accepts the <code>-importmap</code> flag. Build systems that invoke the Go compiler directly must use the <code>-importcfg</code> flag instead.</p><p>通过调整 GC(垃圾回收)策略可以降低垃圾回收占用的 CPU 用量。</p><p>由于 golang 对 gc 的调优能力比较有限，在 1.19 之前仅有 GOGC 参数来控制(GOGC 是上次垃圾回收后 heap size 增长率)，memory ballast 方法通过在堆上分配一个巨大的对象来欺骗 GOGC，让 go 可以尽量充分利用堆空间减少 GC 触发频率，uber 后来分享的 auto gc tuner 可以设置内存占用阈值，动态的调整 GOGC 参数，来使的系统使用内存与目标趋近，go 1.19 提供了新参数 debug.SetMemoryLimit，可以直接设置触发 GC 时的内存阈值，因此上面两种间接的方案就可以废弃了。</p><p>方法:</p><ol><li>debug.SetMemoryLimit 设置触发 GC 的内存阈值</li><li>GOGC=off 关闭 GC</li></ol><p>即可实现只有在达到 Limit 时才触发 GC，在 GC 触发频率高的场景可以大大优化 GC 的 CPU 消耗，同时也因为降低了 GC 频率，<strong>接口 999 延迟也会有提升</strong>，也相应提升了用户体验。</p><h2 id="线上升级案例" tabindex="-1"><a class="header-anchor" href="#线上升级案例" aria-hidden="true">#</a> 线上升级案例</h2><h3 id="_1-17-升级" tabindex="-1"><a class="header-anchor" href="#_1-17-升级" aria-hidden="true">#</a> 1.17 升级</h3><p>cpu：从 6.098%降低到 5.956%，约有**3%-4%**的 CPU 性能提升</p><p>内存：从 2.73GB 降低到 2.36GB 提升<strong>13%</strong></p><h3 id="_1-19-升级" tabindex="-1"><a class="header-anchor" href="#_1-19-升级" aria-hidden="true">#</a> 1.19 升级</h3><p>设置 GOMEMLIMIT=1,073,741,824 GOGC=off 为 2 倍内存用量，限制触发 GC 阈值为 1GB</p><p>cpu：从 23.104%降低到 21.317%，约有**7%-8%**的 CPU 性能提升</p><p>内存：从 500MB 占用增加到 1GB</p><p>gc 触发频率：从 271ms 到 1.9 秒</p><p>profile 中 gc 情况（runtime.gcBgMarkWorker）：从 8.78%降低到 1.88%</p><p>GC 耗时：50%分位数从 170us 升高到 231us，100%分位数从 4.16ms 升高到 5.37ms</p><p>接口平均耗时：从 13.7ms 降低到 13.1ms 降低 0.6ms 共<strong>4%</strong></p><p>接口 999 分位耗时：<strong>非常稳定</strong> ，从 322ms 降低到 249ms 降低了 73ms 占比<strong>23%</strong></p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> reference</h2>',21),ie={href:"https://go.dev/doc/go1.16",target:"_blank",rel:"noopener noreferrer"},le={href:"https://go.dev/doc/go1.17",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://go.dev/doc/go1.18",target:"_blank",rel:"noopener noreferrer"},de={href:"https://go.dev/doc/go1.19",target:"_blank",rel:"noopener noreferrer"},he={href:"https://go.dev/doc/go1.20",target:"_blank",rel:"noopener noreferrer"},me={href:"https://colobu.com/2022/07/16/A-Guide-to-the-Go-Garbage-Collector/",target:"_blank",rel:"noopener noreferrer"};function pe(ue,ge){const t=s("ExternalLinkIcon");return i(),l("div",null,[d,e("p",null,[o("The new "),e("a",h,[m,r(t)]),o(" package introduces a stable interface for reading implementation-defined metrics from the Go runtime. It supersedes existing functions like "),e("a",p,[u,r(t)]),o(" and "),e("a",g,[f,r(t)]),o(" and is significantly more general and efficient. See the package documentation for more details.")]),e("p",null,[o("Setting the "),_,o(" environment variable to "),b,o(" now causes the runtime to emit a single line to standard error for each package "),y,o(", summarizing its execution time and memory allocation. This trace can be used to find bottlenecks or regressions in Go startup performance. The "),e("a",G,[w,o(" documentation"),r(t)]),o(" describes the format.")]),v,e("p",null,[o("Go 1.16 fixes a discrepancy between the race detector and the "),e("a",k,[o("Go memory model"),r(t)]),o(". The race detector now more precisely follows the channel synchronization rules of the memory model. As a result, the detector may now report races it previously missed.")]),C,e("p",null,[o("Go 1.17 "),e("a",x,[o("implemented"),r(t)]),o(" a new way of passing function arguments and results using registers instead of the stack on 64-bit x86 architecture on selected operating systems. Go 1.18 expands the supported platforms to include 64-bit ARM ("),T,o("), big- and little-endian 64-bit PowerPC ("),O,o(", "),S,o("), as well as 64-bit x86 architecture ("),A,o(") on all operating systems. On 64-bit ARM and 64-bit PowerPC systems, benchmarking shows typical performance improvements of 10% or more.")]),e("p",null,[o("As "),e("a",E,[o("mentioned"),r(t)]),o(" in the Go 1.17 release notes, this change does not affect the functionality of any safe Go code and is designed to have no impact on most assembly code. See the "),e("a",M,[o("Go 1.17 release notes"),r(t)]),o(" for more details.")]),B,e("p",null,[o("The runtime now includes support for a soft memory limit. This memory limit includes the Go heap and all other memory managed by the runtime, and excludes external memory sources such as mappings of the binary itself, memory managed in other languages, and memory held by the operating system on behalf of the Go program. This limit may be managed via "),e("a",R,[L,r(t)]),o(" or the equivalent "),e("a",I,[P,r(t)]),o(" environment variable. The limit works in conjunction with "),e("a",D,[U,r(t)]),o(" / "),e("a",V,[z,r(t)]),o(", and will be respected even if "),N,o(", allowing Go programs to always make maximal use of their memory limit, improving resource efficiency in some cases. See "),e("a",q,[o("the GC guide"),r(t)]),o(" for a detailed guide explaining the soft memory limit in more detail, as well as a variety of common use-cases and scenarios. Please note that small memory limits, on the order of tens of megabytes or less, are less likely to be respected due to external latency factors, such as OS scheduling. See "),e("a",H,[o("issue 52433"),r(t)]),o(" for more details. Larger memory limits, on the order of hundreds of megabytes or more, are stable and production-ready.")]),e("p",null,[o("In order to limit the effects of GC thrashing when the program's live heap size approaches the soft memory limit, the Go runtime also attempts to limit total GC CPU utilization to 50%, excluding idle time, choosing to use more memory over preventing application progress. In practice, we expect this limit to only play a role in exceptional cases, and the new "),e("a",j,[o("runtime metric"),r(t)]),o(),F,o(" reports when this last occurred.")]),W,K,e("p",null,[o("On Unix operating systems, Go programs that import package "),e("a",J,[o("os"),r(t)]),o(" now automatically increase the open file limit ("),Q,o(") to the maximum allowed value; that is, they change the soft limit to match the hard limit. This corrects artificially low limits set on some systems for compatibility with very old C programs using the "),e("a",X,[Y,r(t)]),o(" system call. Go programs are not helped by that limit, and instead even simple programs like "),Z,o(" often ran out of file descriptors on such systems when processing many files in parallel. One impact of this change is that Go programs that in turn execute very old C programs in child processes may run those programs with too high a limit. This can be corrected by setting the hard limit before invoking the Go program.")]),$,ee,e("p",null,[o("The "),e("a",oe,[o("address sanitizer support added in Go 1.18"),r(t)]),o(" now handles function arguments and global variables more precisely.")]),te,e("p",null,[o("The compiler now uses a "),e("a",re,[o("jump table"),r(t)]),o(" to implement large integer and string switch statements. Performance improvements for the switch statement vary but can be on the order of 20% faster. ("),ne,o(" and "),ae,o(" only)")]),se,e("p",null,[e("a",ie,[o("https://go.dev/doc/go1.16"),r(t)])]),e("p",null,[e("a",le,[o("https://go.dev/doc/go1.17"),r(t)])]),e("p",null,[e("a",ce,[o("https://go.dev/doc/go1.18"),r(t)])]),e("p",null,[e("a",de,[o("https://go.dev/doc/go1.19"),r(t)])]),e("p",null,[e("a",he,[o("https://go.dev/doc/go1.20"),r(t)])]),e("p",null,[e("a",me,[o("https://colobu.com/2022/07/16/A-Guide-to-the-Go-Garbage-Collector/"),r(t)])])])}const be=a(c,[["render",pe],["__file","版本升级.html.vue"]]);export{be as default};
