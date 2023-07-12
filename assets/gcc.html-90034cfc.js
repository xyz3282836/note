const n=JSON.parse('{"key":"v-b7c0262e","path":"/apue/gcc.html","title":"gcc","lang":"zh-CN","frontmatter":{"description":"gcc GCC 参数详解 gcc and g++分别是 gnu 的 c &amp; c++编译器 gcc/g++在执行编译工作的时候，总共需要 4 步 预处理，生成.i 的文件 将预处理后的文件转换成汇编语言，生成文件.s 由汇编变为目标代码(机器代码)，生成.o 的文件 连接目标代码，生成可执行程序 参数详解 -c 　　只激活预处理,编译,和汇编,也就是他只把程序做成 obj 文件 　　例子用法: 　　 gcc -c hello.c 　　他将生成.o 的 obj 文件 -S 　　只激活预处理和编译，就是指把文件编译成为汇编代码。 　　例子用法 　　 gcc -S hello.c 　　他将生成.s 的汇编代码，你可以用文本编辑器察看 -E 　　只激活预处理,这个不生成文件,你需要把它重定向到一个输出文件里 　　面. 　　例子用法: 　　 gcc -E hello.c &gt; pianoapan.txt 　　 gcc -E hello.c | more 　　慢慢看吧,一个 hello word 也要与处理成 800 行的代码 -o 　　制定目标名称,缺省的时候,gcc 编译出来的文件是 a.out,很难听,如果 　　你和我有同感，改掉它,哈哈 　　例子用法 　　 gcc -o hello.exe hello.c (哦,windows 用习惯了) 　　 gcc -o hello.asm -S hello.c -ansi 　　关闭 gnu c 中与 ansi c 不兼容的特性,激活 ansi c 的专有特性(包括禁止一些 asm inline typeof 关键字,以及 UNIX,vax 等预处理宏 -wall 　　显示警告信息 -fno-asm 　　此选项实现 ansi 选项的功能的一部分，它禁止将 asm,inline 和 typeof 用作 　　关键字 -fno-strict-prototype 　　只对 g++起作用,使用这个选项,g++将对不带参数的函数,都认为是没有显式 　　的对参数的个数和类型说明,而不是没有参数. 　　而 gcc 无论是否使用这个参数,都将对没有带参数的函数,认为城没有显式说 　　明的类型 -fthis-is-varialble 　　就是向传统 c++看齐,可以使用 this 当一般变量使用 -fcond-mismatch 　　允许条件表达式的第二和第三参数类型不匹配,表达式的值将为 void 类型 -funsigned-char -fno-signed-char -fsigned-char -fno-unsigned-char 　　这四个参数是对 char 类型进行设置,决定将 char 类型设置成 unsigned char(前 　　两个参数)或者 signed char(后两个参数) -include file 　　包含某个代码,简单来说,就是便以某个文件,需要另一个文件的时候,就可以 　　用它设定,功能就相当于在代码中使用#include 　　例子用法: 　　 gcc hello.c -include /root/pianopan.h -imacros file 　　将 file 文件的宏,扩展到 gcc/g++的输入文件,宏定义本身并不出现在输入文件 　　中 -Dmacro 　　相当于 C 语言中的#define macro -Dmacro=defn 　　相当于 C 语言中的#define macro=defn -Umacro 　　相当于 C 语言中的#undef macro -undef 　　取消对任何非标准宏的定义 -Idir 　　在你是用#include\\"file\\"的时候,gcc/g++会先在当前目录查找你所制定的头 　　文件,如果没有找到,他回到缺省的头文件目录找,如果使用-I 制定了目录,他 　　回先在你所制定的目录查找,然后再按常规的顺序去找. 　　对于#include,gcc/g++会到-I 制定的目录查找,查找不到,然后将到系 　　统的缺省的头文件目录查找 -I- 　　就是取消前一个参数的功能,所以一般在-Idir 之后使用 -idirafter dir 　　在-I 的目录里面查找失败,讲到这个目录里面查找 -iprefix prefix -iwithprefix dir 　　一般一起使用,当-I 的目录查找失败,会到 prefix+dir 下查找 -nostdinc 　　使编译器不再系统缺省的头文件目录里面找头文件,一般和-I 联合使用,明确 　　限定头文件的位置 -nostdin C++ 　　规定不在 g++指定的标准路经中搜索,但仍在其他路径中搜索,.此选项在创建 　　 libg++库使用","head":[["meta",{"property":"og:url","content":"https://www.ruizhou.cf/apue/gcc.html"}],["meta",{"property":"og:site_name","content":"rz文档"}],["meta",{"property":"og:title","content":"gcc"}],["meta",{"property":"og:description","content":"gcc GCC 参数详解 gcc and g++分别是 gnu 的 c &amp; c++编译器 gcc/g++在执行编译工作的时候，总共需要 4 步 预处理，生成.i 的文件 将预处理后的文件转换成汇编语言，生成文件.s 由汇编变为目标代码(机器代码)，生成.o 的文件 连接目标代码，生成可执行程序 参数详解 -c 　　只激活预处理,编译,和汇编,也就是他只把程序做成 obj 文件 　　例子用法: 　　 gcc -c hello.c 　　他将生成.o 的 obj 文件 -S 　　只激活预处理和编译，就是指把文件编译成为汇编代码。 　　例子用法 　　 gcc -S hello.c 　　他将生成.s 的汇编代码，你可以用文本编辑器察看 -E 　　只激活预处理,这个不生成文件,你需要把它重定向到一个输出文件里 　　面. 　　例子用法: 　　 gcc -E hello.c &gt; pianoapan.txt 　　 gcc -E hello.c | more 　　慢慢看吧,一个 hello word 也要与处理成 800 行的代码 -o 　　制定目标名称,缺省的时候,gcc 编译出来的文件是 a.out,很难听,如果 　　你和我有同感，改掉它,哈哈 　　例子用法 　　 gcc -o hello.exe hello.c (哦,windows 用习惯了) 　　 gcc -o hello.asm -S hello.c -ansi 　　关闭 gnu c 中与 ansi c 不兼容的特性,激活 ansi c 的专有特性(包括禁止一些 asm inline typeof 关键字,以及 UNIX,vax 等预处理宏 -wall 　　显示警告信息 -fno-asm 　　此选项实现 ansi 选项的功能的一部分，它禁止将 asm,inline 和 typeof 用作 　　关键字 -fno-strict-prototype 　　只对 g++起作用,使用这个选项,g++将对不带参数的函数,都认为是没有显式 　　的对参数的个数和类型说明,而不是没有参数. 　　而 gcc 无论是否使用这个参数,都将对没有带参数的函数,认为城没有显式说 　　明的类型 -fthis-is-varialble 　　就是向传统 c++看齐,可以使用 this 当一般变量使用 -fcond-mismatch 　　允许条件表达式的第二和第三参数类型不匹配,表达式的值将为 void 类型 -funsigned-char -fno-signed-char -fsigned-char -fno-unsigned-char 　　这四个参数是对 char 类型进行设置,决定将 char 类型设置成 unsigned char(前 　　两个参数)或者 signed char(后两个参数) -include file 　　包含某个代码,简单来说,就是便以某个文件,需要另一个文件的时候,就可以 　　用它设定,功能就相当于在代码中使用#include 　　例子用法: 　　 gcc hello.c -include /root/pianopan.h -imacros file 　　将 file 文件的宏,扩展到 gcc/g++的输入文件,宏定义本身并不出现在输入文件 　　中 -Dmacro 　　相当于 C 语言中的#define macro -Dmacro=defn 　　相当于 C 语言中的#define macro=defn -Umacro 　　相当于 C 语言中的#undef macro -undef 　　取消对任何非标准宏的定义 -Idir 　　在你是用#include\\"file\\"的时候,gcc/g++会先在当前目录查找你所制定的头 　　文件,如果没有找到,他回到缺省的头文件目录找,如果使用-I 制定了目录,他 　　回先在你所制定的目录查找,然后再按常规的顺序去找. 　　对于#include,gcc/g++会到-I 制定的目录查找,查找不到,然后将到系 　　统的缺省的头文件目录查找 -I- 　　就是取消前一个参数的功能,所以一般在-Idir 之后使用 -idirafter dir 　　在-I 的目录里面查找失败,讲到这个目录里面查找 -iprefix prefix -iwithprefix dir 　　一般一起使用,当-I 的目录查找失败,会到 prefix+dir 下查找 -nostdinc 　　使编译器不再系统缺省的头文件目录里面找头文件,一般和-I 联合使用,明确 　　限定头文件的位置 -nostdin C++ 　　规定不在 g++指定的标准路经中搜索,但仍在其他路径中搜索,.此选项在创建 　　 libg++库使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-12T14:58:35.000Z"}],["meta",{"property":"article:author","content":"rz"}],["meta",{"property":"article:modified_time","content":"2023-07-12T14:58:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"gcc\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-12T14:58:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"rz\\",\\"url\\":\\"https://github.com/xyz3282836/monodoc\\"}]}"]]},"headers":[{"level":2,"title":"GCC 参数详解","slug":"gcc-参数详解","link":"#gcc-参数详解","children":[{"level":3,"title":"参数详解","slug":"参数详解","link":"#参数详解","children":[]}]}],"git":{"createdTime":1678545410000,"updatedTime":1689173915000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":2}]},"readingTime":{"minutes":4.75,"words":1424},"filePathRelative":"apue/gcc.md","localizedDate":"2023年3月11日","excerpt":"<h1> gcc</h1>\\n<h2> <strong>GCC 参数详解</strong></h2>\\n<p>gcc and g++分别是 gnu 的 c &amp; c++编译器<br>\\ngcc/g++在执行编译工作的时候，总共需要 4 步</p>\\n<ol>\\n<li>\\n<p>预处理，生成.i 的文件</p>\\n</li>\\n<li>\\n<p>将预处理后的文件转换成汇编语言，生成文件.s</p>\\n</li>\\n<li>\\n<p>由汇编变为目标代码(机器代码)，生成.o 的文件</p>\\n</li>\\n<li>\\n<p>连接目标代码，生成可执行程序</p>\\n</li>\\n</ol>\\n<h3> 参数详解</h3>\\n<p>-c<br>\\n　　只激活预处理,编译,和汇编,也就是他只把程序做成 obj 文件<br>\\n　　例子用法:<br>\\n　　 gcc -c hello.c<br>\\n　　他将生成.o 的 obj 文件<br>\\n-S<br>\\n　　只激活预处理和编译，就是指把文件编译成为汇编代码。<br>\\n　　例子用法<br>\\n　　 gcc -S hello.c<br>\\n　　他将生成.s 的汇编代码，你可以用文本编辑器察看<br>\\n-E<br>\\n　　只激活预处理,这个不生成文件,你需要把它重定向到一个输出文件里<br>\\n　　面.<br>\\n　　例子用法:<br>\\n　　 gcc -E hello.c &gt; pianoapan.txt<br>\\n　　 gcc -E hello.c | more<br>\\n　　慢慢看吧,一个 hello word 也要与处理成 800 行的代码<br>\\n-o<br>\\n　　制定目标名称,缺省的时候,gcc 编译出来的文件是 a.out,很难听,如果<br>\\n　　你和我有同感，改掉它,哈哈<br>\\n　　例子用法<br>\\n　　 gcc -o hello.exe hello.c (哦,windows 用习惯了)<br>\\n　　 gcc -o hello.asm -S hello.c<br>\\n-ansi<br>\\n　　关闭 gnu c 中与 ansi c 不兼容的特性,激活 ansi c 的专有特性(包括禁止一些 asm inline typeof 关键字,以及 UNIX,vax 等预处理宏<br>\\n-wall<br>\\n　　显示警告信息<br>\\n-fno-asm<br>\\n　　此选项实现 ansi 选项的功能的一部分，它禁止将 asm,inline 和 typeof 用作<br>\\n　　关键字<br>\\n-fno-strict-prototype<br>\\n　　只对 g++起作用,使用这个选项,g++将对不带参数的函数,都认为是没有显式<br>\\n　　的对参数的个数和类型说明,而不是没有参数.<br>\\n　　而 gcc 无论是否使用这个参数,都将对没有带参数的函数,认为城没有显式说<br>\\n　　明的类型<br>\\n-fthis-is-varialble<br>\\n　　就是向传统 c++看齐,可以使用 this 当一般变量使用<br>\\n-fcond-mismatch<br>\\n　　允许条件表达式的第二和第三参数类型不匹配,表达式的值将为 void 类型<br>\\n-funsigned-char<br>\\n-fno-signed-char<br>\\n-fsigned-char<br>\\n-fno-unsigned-char<br>\\n　　这四个参数是对 char 类型进行设置,决定将 char 类型设置成 unsigned char(前<br>\\n　　两个参数)或者 signed char(后两个参数)<br>\\n-include file<br>\\n　　包含某个代码,简单来说,就是便以某个文件,需要另一个文件的时候,就可以<br>\\n　　用它设定,功能就相当于在代码中使用#include<br>\\n　　例子用法:<br>\\n　　 gcc hello.c -include /root/pianopan.h<br>\\n-imacros file<br>\\n　　将 file 文件的宏,扩展到 gcc/g++的输入文件,宏定义本身并不出现在输入文件<br>\\n　　中<br>\\n-Dmacro<br>\\n　　相当于 C 语言中的#define macro<br>\\n-Dmacro=defn<br>\\n　　相当于 C 语言中的#define macro=defn<br>\\n-Umacro<br>\\n　　相当于 C 语言中的#undef macro<br>\\n-undef<br>\\n　　取消对任何非标准宏的定义<br>\\n-Idir<br>\\n　　在你是用#include\\"file\\"的时候,gcc/g++会先在当前目录查找你所制定的头<br>\\n　　文件,如果没有找到,他回到缺省的头文件目录找,如果使用-I 制定了目录,他<br>\\n　　回先在你所制定的目录查找,然后再按常规的顺序去找.<br>\\n　　对于#include,gcc/g++会到-I 制定的目录查找,查找不到,然后将到系<br>\\n　　统的缺省的头文件目录查找<br>\\n-I-<br>\\n　　就是取消前一个参数的功能,所以一般在-Idir 之后使用<br>\\n-idirafter dir<br>\\n　　在-I 的目录里面查找失败,讲到这个目录里面查找<br>\\n-iprefix prefix<br>\\n-iwithprefix dir<br>\\n　　一般一起使用,当-I 的目录查找失败,会到 prefix+dir 下查找<br>\\n-nostdinc<br>\\n　　使编译器不再系统缺省的头文件目录里面找头文件,一般和-I 联合使用,明确<br>\\n　　限定头文件的位置<br>\\n-nostdin C++<br>\\n　　规定不在 g++指定的标准路经中搜索,但仍在其他路径中搜索,.此选项在创建<br>\\n　　 libg++库使用</p>","autoDesc":true}');export{n as data};
