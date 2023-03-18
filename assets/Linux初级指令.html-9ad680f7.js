import{_ as d,W as s,X as r,Z as i,$ as e,a0 as t,Y as n,C as l}from"./framework-2fbbe1ff.js";const c={},p=n(`<h1 id="linux-初级指令" tabindex="-1"><a class="header-anchor" href="#linux-初级指令" aria-hidden="true">#</a> Linux 初级指令</h1><h3 id="ls-——list" tabindex="-1"><a class="header-anchor" href="#ls-——list" aria-hidden="true">#</a> <strong>ls</strong> ——List</h3><h4 id="ls-介绍" tabindex="-1"><a class="header-anchor" href="#ls-介绍" aria-hidden="true">#</a> ls 介绍</h4><p>这是我学 Linux 的第一个命令，相信也是很多人学习 Linux 的第一个命令。ls 全称 list.</p><blockquote><p>List information about the FILEs (the current directory by default). Sort entries alphabetically if none of -cftuvSUX nor --sort is specified.</p><p>列出有关文件的信息(默认为当前目录)。如果没有指定-cftuvSUX 或——Sort，则按字母顺序排序。</p></blockquote><p>官方的说的很清楚，默认列出当前目录，所以可以列出其他目录或者路径下的文件信息或者目录信息。</p><p>eg：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ls /etc/hosts
/etc/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>ls 还可以列出指定目录下的文件列表。</p><p><img src="https://mmbiz.qpic.cn/mmbiz_jpg/2M8qPJibxTd4eI4ChNmP9OtgTa67xXQVzupJOQK7ibdoMts27AsEHw9AYFPpBN2PTf9TribPRqTyPoGxIhib0lqICA/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" loading="lazy">image-20191221161638964</p><h4 id="ls-参数格式" tabindex="-1"><a class="header-anchor" href="#ls-参数格式" aria-hidden="true">#</a> ls 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ls [OPTION]... [FILE]...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="ls-命令参数" tabindex="-1"><a class="header-anchor" href="#ls-命令参数" aria-hidden="true">#</a> ls 命令参数</h4><p>-a 列出指定目录下的所有文件，包括隐藏文件</p><p>-c 使用最后一次更改文件状态以进行排序(-t)或长时间打印(-l)的时间</p><p>-h 与-l 选项一起使用时，请使用单位后缀:Byte、Kilobyte、mete、gb、tb 和 Petabyte，以便使用以 2 为基数的大小将数字减少到 3 或更少</p><p>-l 长格式列表。(见下文)。如果输出到终端，则所有文件大小的总和将输出到长清单前面的一行中</p><p>-n 以数字形式显示用户和组 id，而不是在长(-l)输出中转换为用户或组名。这个选项默认打开-l 选项</p><p>-o 以长格式列出，但省略组 id</p><p>-s 显示每个文件实际使用的文件系统块的数量，以 512 字节为单位，其中部分单元四舍五入为下一个整数值</p><p>-t 在按照字典顺序对操作数排序之前，先按修改的时间排序(最近修改的是 first)</p><p>-u 使用最后一次访问的时间，而不是最后一次修改文件进行排序</p><h4 id="ls-用法示例" tabindex="-1"><a class="header-anchor" href="#ls-用法示例" aria-hidden="true">#</a> ls 用法示例：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ ls
test  tmp
$ ls -a
.  ..  .bash_history  .bash_logout  .bash_profile  .bashrc  test  tmp
#可以看到通过ls -a 可以查看当前目录影藏的文件，Linux下(.)开头的文件是隐藏文件。
$ ls -l
total 4
-rw-r--r-- 1 test hero    0 Dec 21 19:54 test
drwxr-xr-x 2 test hero 4096 Dec 21 19:54 tmp
$ ls -lh
total 4.0K
-rw-r--r-- 1 test hero    0 Dec 21 19:54 test
drwxr-xr-x 2 test hero 4.0K Dec 21 19:54 tmp
$ ls -ll
total 4
-rw-r--r-- 1 test hero    0 Dec 21 19:54 test
drwxr-xr-x 2 test hero 4096 Dec 21 19:54 tmp
$ ls -alh
total 28K
drwx------   3 test hero 4.0K Dec 21 19:54 .
drwxr-xr-x. 19 root  root 4.0K Aug  1 10:41 ..
-rw-------   1 test hero  226 Dec 21 19:54 .bash_history
-rw-r--r--   1 test hero   18 Aug  3  2016 .bash_logout
-rw-r--r--   1 test hero  193 Aug  3  2016 .bash_profile
-rw-r--r--   1 test hero  231 Aug  3  2016 .bashrc
-rw-r--r--   1 test hero    0 Dec 21 19:54 test
drwxr-xr-x   2 test hero 4.0K Dec 21 19:54 tmp
$ ls -o
total 4
-rw-r--r-- 1 test    0 Dec 21 19:54 test
drwxr-xr-x 2 test 4096 Dec 21 19:54 tmp
$ ls -oh
total 4.0K
-rw-r--r-- 1 test    0 Dec 21 19:54 test
drwxr-xr-x 2 test 4.0K Dec 21 19:54 tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pwd-——-print-working-directory" tabindex="-1"><a class="header-anchor" href="#pwd-——-print-working-directory" aria-hidden="true">#</a> <strong>pwd</strong> —— Print Working Directory</h3><h4 id="pwd-介绍" tabindex="-1"><a class="header-anchor" href="#pwd-介绍" aria-hidden="true">#</a> pwd 介绍</h4><p>打印当前工作目录的完整路径名。(print name of current/working directory)</p><h4 id="参数格式" tabindex="-1"><a class="header-anchor" href="#参数格式" aria-hidden="true">#</a> 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pwd [OPTION]...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="pwd-用法展示" tabindex="-1"><a class="header-anchor" href="#pwd-用法展示" aria-hidden="true">#</a> pwd 用法展示</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[test@Mfate171193 /home/test] 20:06
$ pwd
/home/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="touch-change-file-timestamps" tabindex="-1"><a class="header-anchor" href="#touch-change-file-timestamps" aria-hidden="true">#</a> <strong>touch</strong> (change file timestamps)</h3><h4 id="touch-介绍" tabindex="-1"><a class="header-anchor" href="#touch-介绍" aria-hidden="true">#</a> touch 介绍</h4><blockquote><p>Update the access and modification times of each FILE to the current time.</p><p>A FILE argument that does not exist is created empty, unless -c or -h is supplied.</p></blockquote><p>将每个文件的访问和修改时间更新为当前时间。除非提供-c 或-h，否则将不存在的 FILE 参数创建为空。</p><h4 id="touch-参数格式" tabindex="-1"><a class="header-anchor" href="#touch-参数格式" aria-hidden="true">#</a> touch 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>touch [OPTION]... FILE...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="touch-命令参数" tabindex="-1"><a class="header-anchor" href="#touch-命令参数" aria-hidden="true">#</a> touch 命令参数</h4><p>-a 或--time=atime 或--time=access 或--time=use 只更改存取时间。</p><p>-c 或--no-create 不建立任何文档。</p><p>-d 使用指定的日期时间，而非现在的时间。</p><p>-f 此参数将忽略不予处理，仅负责解决 BSD 版本 touch 指令的兼容性问题。</p><p>-m 或--time=mtime 或--time=modify 只更改变动时间。</p><p>-r 把指定文档或目录的日期时间，统统设成和参考文档或目录的日期时间相同。</p><p>-t 使用指定的日期时间，而非现在的时间。</p><h4 id="用法示例" tabindex="-1"><a class="header-anchor" href="#用法示例" aria-hidden="true">#</a> 用法示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#创建三个文件
$ touch test1 test2 test3
#不创建文档
$ touch -c test5
$ ls
test1  test2  test3
#可以看到只创建了test1、test2、test3 ， -c不建立任何文件
$ touch -t 201911110000 test1
$ stat test*
#stat命令可以查看文件的详细变更时间，可以test1文件的最后修改时间为201911110000，说明touch -t可以修改文件最后访问时间。这个参数还是很有用的，你可以把你最近访问的时间修改为一个很早的时间。可以做一些有趣的事情，哈哈。
  File: ‘test1’
  Size: 0             Blocks: 0          IO Block: 4096   regular empty file
Device: fd01h/64769d    Inode: 360736      Links: 1
Access: (0644/-rw-r--r--)  Uid: (14060/   localhost)   Gid: ( 1001/    hero)
Access: 2019-11-11 00:00:00.000000000 +0800
Modify: 2019-11-11 00:00:00.000000000 +0800
Change: 2019-12-21 20:58:11.290761038 +0800
 Birth: -
  File: ‘test2’
  Size: 0             Blocks: 0          IO Block: 4096   regular empty file
Device: fd01h/64769d    Inode: 360738      Links: 1
Access: (0644/-rw-r--r--)  Uid: (14060/   localhost)   Gid: ( 1001/    hero)
Access: 2019-12-21 20:56:34.523761038 +0800
Modify: 2019-12-21 20:56:34.523761038 +0800
Change: 2019-12-21 20:56:34.523761038 +0800
 Birth: -
  File: ‘test3’
  Size: 0             Blocks: 0          IO Block: 4096   regular empty file
Device: fd01h/64769d    Inode: 360740      Links: 1
Access: (0644/-rw-r--r--)  Uid: (14060/   localhost)   Gid: ( 1001/    hero)
Access: 2019-12-21 20:56:34.523761038 +0800
Modify: 2019-12-21 20:56:34.523761038 +0800
Change: 2019-12-21 20:56:34.523761038 +0800
 Birth: -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cat-tac-concatenate-file-s-or-standard-input-to-standard-output" tabindex="-1"><a class="header-anchor" href="#cat-tac-concatenate-file-s-or-standard-input-to-standard-output" aria-hidden="true">#</a> <strong>cat&amp;tac</strong> (Concatenate FILE(s), or standard input, to standard output.)</h3><h4 id="cat-介绍" tabindex="-1"><a class="header-anchor" href="#cat-介绍" aria-hidden="true">#</a> cat 介绍</h4><blockquote><p>Concatenate FILE(s), or standard input, to standard output.</p><p>将 FILE 或标准输入连接到标准输出。</p></blockquote><h4 id="cat-参数格式" tabindex="-1"><a class="header-anchor" href="#cat-参数格式" aria-hidden="true">#</a> cat 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat [OPTION]... [FILE]...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="cat-命令参数" tabindex="-1"><a class="header-anchor" href="#cat-命令参数" aria-hidden="true">#</a> cat 命令参数</h4><p>-A, --show-all 等价于 -vET</p><p>-b, --number-nonblank 对非空输出行编号</p><p>-e 等价于 -vE</p><p>-E, --show-ends 在每行结束处显示</p><p>-n, --number 对输出的所有行编号,由 1 开始对所有输出的行数编号</p><p>-s, --squeeze-blank 有连续两行以上的空白行，就代换为一行的空白行</p><p>-t 与 -vT 等价</p><p>-T, --show-tabs 将跳格字符显示为 ^I</p><p>-u (被忽略)</p><p>-v, --show-nonprinting 使用 ^ 和 M- 引用，除了 LFD 和 TAB 之外</p><h4 id="cat-常用参数示例" tabindex="-1"><a class="header-anchor" href="#cat-常用参数示例" aria-hidden="true">#</a> cat 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ cat test  #展示文件内容
-A, --show-all      等价于 -vET
-b, --number-nonblank  对非空输出行编号
-e            等价于 -vE

$ cat -n test  #展示文件内容并且展示行号
     1    -A, --show-all      等价于 -vET
     2    -b, --number-nonblank  对非空输出行编号
     3    -e            等价于 -vE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tac-命令与-cat-命令展示内容相反-不能带行号输出。" tabindex="-1"><a class="header-anchor" href="#tac-命令与-cat-命令展示内容相反-不能带行号输出。" aria-hidden="true">#</a> tac 命令与 cat 命令展示内容相反，不能带行号输出。</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ tac test
-e            等价于 -vE
-b, --number-nonblank  对非空输出行编号
-A, --show-all      等价于 -vET
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mkdir-——-make-directory" tabindex="-1"><a class="header-anchor" href="#mkdir-——-make-directory" aria-hidden="true">#</a> <strong>mkdir —— Make Directory</strong></h3><h4 id="mkdir-介绍" tabindex="-1"><a class="header-anchor" href="#mkdir-介绍" aria-hidden="true">#</a> mkdir 介绍</h4><blockquote><p>Create the DIRECTORY(ies), if they do not already exist.</p><p>如果目录不存在，则创建目录。</p></blockquote><h4 id="mkdir-参数格式" tabindex="-1"><a class="header-anchor" href="#mkdir-参数格式" aria-hidden="true">#</a> mkdir 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir [OPTION]... DIRECTORY...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="mkdir-命令参数" tabindex="-1"><a class="header-anchor" href="#mkdir-命令参数" aria-hidden="true">#</a> mkdir 命令参数</h4><p>-m, --mode=模式，设定权限&lt;模式&gt; (类似 chmod)，而不是 rwxrwxrwx 减 umask</p><p>-p, --parents 可以是一个路径名称。此时若路径中的某些目录尚不存在,加上此选项后,系统将自动建立好那些尚不存在的目录,即一次可以建立多个目录;</p><p>-v, --verbose 每次创建新目录都显示信息</p><p>--help 显示此帮助信息并退出</p><p>--version 输出版本信息并退出</p><h4 id="mkdir-常用参数示例" tabindex="-1"><a class="header-anchor" href="#mkdir-常用参数示例" aria-hidden="true">#</a> mkdir 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#创建目录文件test
$ mkdir test
#连续创建
$ mkdir -p test1/tmp
$ ls
test  test1
#创建时置顶目录权限
#tmp目录拥有可执行权限，Linux文件权限问题后期文章会详细讲到，记得关注我
$ mkdir -pm 777 test2/tmp
$ ls -lh
total 12K
drwxr-xr-x 2 localhost hero 4.0K Dec 21 21:39 test
drwxr-xr-x 3 localhost hero 4.0K Dec 21 21:40 test1
drwxr-xr-x 3 localhost hero 4.0K Dec 21 21:40 test2
$ ls
test  test1  test2
#-v 参数可确定文件是否已经存在，如果不存在则会创建，并显示如下信息
$ mkdir -v test
mkdir: cannot create directory ‘test’: File exists

$ mkdir -v test7
mkdir: created directory ‘test7’
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cd-——-change-directory" tabindex="-1"><a class="header-anchor" href="#cd-——-change-directory" aria-hidden="true">#</a> <strong>cd</strong> —— Change Directory</h3><h4 id="cd-介绍" tabindex="-1"><a class="header-anchor" href="#cd-介绍" aria-hidden="true">#</a> cd 介绍</h4><p>切换当前目录至指定目录</p><h4 id="常用参数示例" tabindex="-1"><a class="header-anchor" href="#常用参数示例" aria-hidden="true">#</a> 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#打印当前目录到标准输出
$ pwd
/Users/localhost
#切换到目录/
$cd /
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cd 命令没什么参数就是切换目录到指定路径下，较为简单，但是使用评率极高。</p><h3 id="rm-rmdir-——-remove-directory" tabindex="-1"><a class="header-anchor" href="#rm-rmdir-——-remove-directory" aria-hidden="true">#</a> rm&amp;rmdir —— Remove Directory</h3><h4 id="rm-介绍" tabindex="-1"><a class="header-anchor" href="#rm-介绍" aria-hidden="true">#</a> rm 介绍</h4><blockquote><p>The rm utility attempts to remove the non-directory type files specified on the command line. If the permissions of the file do not permit writing, and the standard input device is a terminal, the user is prompted (on the standard error output) for confirmation.</p><p>rm 实用程序尝试删除命令行上指定的非目录类型文件。如果文件的权限不允许写入，并且标准输入设备是终端，则会提示用户（在标准错误输出上）进行确认。</p></blockquote><p>rm 命令使用时还是需要注意的，他的删除恢复比较麻烦，有些系统会自带-i 参数，输入命令之后还有一个确认步骤，有些是直接删掉了，是真删掉，从内存抹掉那种（其实底层是让该文件指针不指向该文件的内存块，内存上的内容原则上是存在的，但是恢复会比较复杂，需要扫描整块内存块才能拿到内容）。不要轻易删掉你写的重要代码，hh。</p><h4 id="rm-参数格式" tabindex="-1"><a class="header-anchor" href="#rm-参数格式" aria-hidden="true">#</a> rm 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rm [-dfiPRrvW] file ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="rm-命令参数" tabindex="-1"><a class="header-anchor" href="#rm-命令参数" aria-hidden="true">#</a> rm 命令参数</h4><p>-f, --force 忽略不存在的文件，从不给出提示。</p><p>-i, --interactive 进行交互式删除</p><p>-r, -R, --recursive 指示 rm 将参数中列出的全部目录和子目录均递归地删除。</p><p>-d, --dir 删除空目录</p><h4 id="rm-常用参数示例" tabindex="-1"><a class="header-anchor" href="#rm-常用参数示例" aria-hidden="true">#</a> rm 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 创建三个文件
$ touch tmp.cc tmp.java tmp.py tmp.go
#创建目录文件
$ mkdir -p linux/test
#查看文件是否创建成功
$ ls
linux    tmp.cc   tmp.go   tmp.java tmp.py
#删除文件，并进行提示
$ rm -i tmp.cc
remove tmp.cc? y
#强制删除
$ rm  -f tmp.go
#删除目录
$ rm -f linux  #删除目录失败
rm: linux: is a directory
#循环删除目录下所有文件
$ rm -rf linux  #删除目录成功，
$ ls
tmp.java tmp.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rmdir==rm -d 删除空目录</p><h3 id="mv-——-move" tabindex="-1"><a class="header-anchor" href="#mv-——-move" aria-hidden="true">#</a> mv —— Move</h3><h4 id="mv-介绍" tabindex="-1"><a class="header-anchor" href="#mv-介绍" aria-hidden="true">#</a> mv 介绍</h4><blockquote><p>In its first form, the mv utility renames the file named by the source operand to the destination path named by the target operand. This form is assumed when the last operand does not name an already existing directory.</p><p>In its second form, mv moves each file named by a source operand to a destination file in the existing directory named by the directory operand. The destination path for each operand is the pathname produced by the concatenation of the last operand, a slash, and the final pathname component of the named file.</p><p>总结下，就是移动目录或者文件到置顶目录下，同时具有重命名的功能。</p></blockquote><h4 id="mv-参数格式" tabindex="-1"><a class="header-anchor" href="#mv-参数格式" aria-hidden="true">#</a> mv 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mv [-f | -i | -n] [-v] source target mv [-f | -i | -n] [-v] source ... directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="mv-命令参数" tabindex="-1"><a class="header-anchor" href="#mv-命令参数" aria-hidden="true">#</a> mv 命令参数</h4><p>-b ：若需覆盖文件，则覆盖前先行备份。</p><p>-f ：force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；</p><p>-i ：若目标文件 (destination) 已经存在时，就会询问是否覆盖</p><p>-n：不要覆盖现有文件。（-n 选项将覆盖以前的任何-f 或-i 选项。）</p><p>-u ：若目标文件已经存在，且 source 比较新，才会更新(update)</p><h4 id="mv-常用参数示例" tabindex="-1"><a class="header-anchor" href="#mv-常用参数示例" aria-hidden="true">#</a> mv 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>##修改文件名
$ touch tmp.cc

$ ls
tmp.cc

$ mv tmp.cc tmp.java

$ ls
tmp.java
#移动文件或者目录
$ pwd
/Users/localhost/test
#移动文件并重命名
$ mv /Users/localhost/logs/tmp.txt ./tmp.log

$ ls /Users/localhost/logs/
discover-client metabase        tesla

$ ls ./
tmp.java tmp.log
#移动目录并重命名
$ mv /Users/localhost/logs/tesla  ./tesla.ba

$ ls
tesla.ba tmp.java tmp.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个命令在写 makefile 文件的时候用起来很舒服，可以把编译的结果移到指定目录并重命名。</p><h3 id="cp-——-copy" tabindex="-1"><a class="header-anchor" href="#cp-——-copy" aria-hidden="true">#</a> cp —— Copy</h3><h4 id="cp-介绍" tabindex="-1"><a class="header-anchor" href="#cp-介绍" aria-hidden="true">#</a> cp 介绍</h4><blockquote><p>In the first synopsis form, the cp utility copies the contents of the source_file to the target_file. In the second synopsis form, the contents of each named source_file is copied to the destination target_directory. The names of the files themselves are not changed. If cp detects an attempt to copy a file to itself, the copy will fail.</p><p>cp 实用程序将 source_file 的内容复制到 target_file。在第二个大纲格式中，每个命名的 source_file 的内容都复制到目标 target_directory。文件本身的名称不会更改。如果 cp 检测到尝试将文件复制到自身的尝试，则复制将失败。</p></blockquote><h4 id="cp-参数格式" tabindex="-1"><a class="header-anchor" href="#cp-参数格式" aria-hidden="true">#</a> cp 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cp [-R [-H | -L | -P]] [-fi | -n] [-apvX] source_file target_file cp [-R [-H | -L | -P]] [-fi | -n] [-apvX] source_file ... target_directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="命令参数" tabindex="-1"><a class="header-anchor" href="#命令参数" aria-hidden="true">#</a> 命令参数</h4><p>-a, --archive 等于-dR --preserve=all</p><p>--backup[=CONTROL 为每个已存在的目标文件创建备份</p><p>-b 类似--backup 但不接受参数</p><p>--copy-contents 在递归处理是复制特殊文件内容</p><p>-d 等于--no-dereference --preserve=links</p><p>-f, --force 如果目标文件无法打开则将其移除并重试(当 -n 选项</p><p>存在时则不需再选此项)</p><p>-i, --interactive 覆盖前询问(使前面的 -n 选项失效)</p><p>-H 跟随源文件中的命令行符号链接</p><p>-l, --link 链接文件而不复制</p><p>-L, --dereference 总是跟随符号链接</p><p>-n, --no-clobber 不要覆盖已存在的文件(使前面的 -i 选项失效)</p><p>-P, --no-dereference 不跟随源文件中的符号链接</p><p>-p 等于--preserve=模式,所有权,时间戳</p><p>--preserve[=属性列表 保持指定的属性(默认：模式,所有权,时间戳)，如果</p><p>可能保持附加属性：环境、链接、xattr 等</p><p>-R, -r, --recursive 复制目录及目录内的所有项目</p><h4 id="常用参数示例-1" tabindex="-1"><a class="header-anchor" href="#常用参数示例-1" aria-hidden="true">#</a> 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ cat tmp.cc
change world

#拷贝文件内容
$ cp tmp.cc tmp.java

$ cat tmp.java
change world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="echo" tabindex="-1"><a class="header-anchor" href="#echo" aria-hidden="true">#</a> echo</h3><h4 id="echo-介绍" tabindex="-1"><a class="header-anchor" href="#echo-介绍" aria-hidden="true">#</a> echo 介绍</h4><blockquote><p>The echo utility writes any specified operands, separated by single blank (<code>&#39;) characters and followed by a newline (</code>\\n&#39;) character, to the standard output.</p><p>echo 实用程序将任何指定的操作数写入标准输出，这些操作数由单个空格（<code>）字符分隔，后跟换行符（</code>\\ n&#39;）字符。</p></blockquote><p>这条命令较为简单，常用来打印变量、文本内容到，例如:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ echo &quot;change world&quot;
change world

#s输出PWD环境变量的值
$ echo $PWD
/Users/localhost/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>$</code>PWD 是取当前路径，然后 echo 到标准输出，一般 echo $name 用来查看某个环境变量的值</p><h3 id="head-tail" tabindex="-1"><a class="header-anchor" href="#head-tail" aria-hidden="true">#</a> head&amp;tail</h3><h4 id="head-介绍" tabindex="-1"><a class="header-anchor" href="#head-介绍" aria-hidden="true">#</a> head 介绍</h4><blockquote><p>This filter displays the first count lines or bytes of each of the specified files, or of the standard input if no files are specified. If count is omitted it defaults to 10.</p><p>此过滤器显示每个指定文件或标准输入（如果未指定文件）的前几行或字节。</p><p>If more than a single file is specified, each file is preceded by a header consisting of the string <code>==&gt; XXX &lt;==&#39;&#39; where</code>XXX&#39;&#39; is the name of the file.</p><p>如果省略 count，则默认为 10.如果指定了多个文件，则每个文件的头均由字符串<code>==&gt; XXX &lt;==&#39;&#39;组成，其中</code>XXX&#39;&#39;为文件名 文件。</p></blockquote><h4 id="head-参数格式" tabindex="-1"><a class="header-anchor" href="#head-参数格式" aria-hidden="true">#</a> head 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>head [-n count | -c bytes] [file ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="head-常用参数示例" tabindex="-1"><a class="header-anchor" href="#head-常用参数示例" aria-hidden="true">#</a> head 常用参数示例</h4><p>-n 展示前 n 行</p><p>-c 展示前 n 个字符</p><h4 id="head-常用参数示例-1" tabindex="-1"><a class="header-anchor" href="#head-常用参数示例-1" aria-hidden="true">#</a> head 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ cat -n test.txt #这就用上前面的cat命令的-n参数，要学会学以致用哦。
     1    用
     2    心
     3    分
     4    享，
     5    共
     6    同
     7    成
     8    长.
     9
    10    没
    11    有
    12    什
    13    么
    14    比
    15    你
    16    每
    17    天
    18    进
    19    步
    20    一
    21    点
    22    更
    23    实
    24    在
    25    了
    26    .

$ head test.txt  #默认展示10行
用
心
分
享，
共
同
成
长.

没

$ head -n15 test.txt #展示15行
用
心
分
享，
共
同
成
长.

没
有
什
么
比
你

$ head -c23 test.txt #展示前23个字符，中文一个汉字并非一个字符的(utf-8编码中文字符长度是可变的)
用
心
分
享，
共
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tail 命令完全和他相反，是从尾部开始展示文本，但是他的参数用法更多。</p><p>-f 循环读取</p><p>-q 不显示处理信息</p><p>-v 显示详细的处理信息</p><p>-c&lt;数目&gt; 显示的字节数</p><p>-n&lt;行数&gt; 显示行数</p><p>--pid=PID 与-f 合用,表示在进程 ID,PID 死掉之后结束.</p><p>-q, --quiet, --silent 从不输出给出文件名的首部</p><p>-s, --sleep-interval=S 与-f 合用,表示在每次反复的间隔休眠 S 秒</p><p>tail 和 head 命令经常用来查看日志，像我现在基本每天都会用，我的日志文件没办法用 vim 或者 cat 这样去看（因为我负责的业务日志量每天都是几十个 G），要么用 tail，要么用 more&amp;less(下面会讲)。</p><h3 id="more-less" tabindex="-1"><a class="header-anchor" href="#more-less" aria-hidden="true">#</a> more&amp;less</h3><h4 id="more-介绍" tabindex="-1"><a class="header-anchor" href="#more-介绍" aria-hidden="true">#</a> more 介绍</h4><blockquote><p>Less is a program similar to more (1), but which allows backward movement in the file as well as forward movement. Also, less does not have to read the entire input file before starting, so with large input files it starts up faster than text editors like vi (1). Less uses termcap (or terminfo on some systems), so it can run on a variety of terminals. There is even limited support for hardcopy terminals. (On a hardcopy terminal, lines which should be printed at the top of the screen are prefixed with a caret.)</p><p>more 每次打开文件不是全部把文件读入内存而是流式读取，不会因为 vi|vim 某个大文件而造成系统 oom。</p></blockquote><p>more&amp;less 最重要的一点就是流式读取，支持翻页，像 cat 命令是全部读取输出到标准输出，如果文件太大会把屏幕刷满的，根本没办法看。</p><h4 id="more-参数格式" tabindex="-1"><a class="header-anchor" href="#more-参数格式" aria-hidden="true">#</a> more 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>more [-dlfpcsu ] [-num ] [+/ pattern] [+ linenum] [file ... ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="more-命令参数" tabindex="-1"><a class="header-anchor" href="#more-命令参数" aria-hidden="true">#</a> more 命令参数</h4><p>+n 从笫 n 行开始显示</p><p>-n 定义屏幕大小为 n 行</p><p>+/pattern 在每个档案显示前搜寻该字串（pattern），然后从该字串前两行之后开始显示</p><p>-c 从顶部清屏，然后显示</p><p>-d 提示“Press space to continue，’q’ to quit（按空格键继续，按 q 键退出）”，禁用响铃功能</p><p>-l 忽略 Ctrl+l（换页）字符</p><p>-p 通过清除窗口而不是滚屏来对文件进行换页，与-c 选项相似</p><p>-s 把连续的多个空行显示为一行</p><p>-u 把文件内容中的下画线去掉</p><p><strong>less 与 more 类似，但使用 less 可以随意浏览文件，而 more 仅能向前移动，却不能向后移动，而且 less 在查看之前不会加载整个文件</strong></p><h3 id="wc" tabindex="-1"><a class="header-anchor" href="#wc" aria-hidden="true">#</a> wc</h3><h4 id="wc-介绍" tabindex="-1"><a class="header-anchor" href="#wc-介绍" aria-hidden="true">#</a> wc 介绍</h4><blockquote><p>The wc utility displays the number of lines, words, and bytes contained in each input file, or standard input (if no file is specified) to the standard output. A line is defined as a string of characters delimited by acharac-ter. Characters beyond the finalcharacter will not be included in the line count.</p><p>wc 实用程序显示每个输入文件或标准输入（如果未指定文件）中每个输入文件中包含的行数，字数和字节数。一行定义为由字符分隔的字符串。最后一个字符之后的字符将不包括在行数中。</p></blockquote><p>这条命令对我来说还是比较深刻的，我刚学习编程不久的时候，我感觉我写的代码很多了，那个时候我就很想知道我写了多少行代码了，一时兴起，说干就干，直接写了个程序去统计了一把，写完之后还感觉自己蛮厉害的，谁知道之后学习到这个 wc，然后就觉得自己还是嫩了点，还是要多学习。</p><h4 id="wc-参数格式" tabindex="-1"><a class="header-anchor" href="#wc-参数格式" aria-hidden="true">#</a> wc 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wc [-clmw] [file ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="wc-命令参数" tabindex="-1"><a class="header-anchor" href="#wc-命令参数" aria-hidden="true">#</a> wc 命令参数</h4><p>-c 统计字节数。</p><p>-l 统计行数。</p><p>-m 统计字符数。这个标志不能与 -c 标志一起使用。</p><p>-w 统计字数。一个字被定义为由空白、跳格或换行字符分隔的字符串。</p><p>-L 打印最长行的长度。</p><h4 id="常用参数示例-2" tabindex="-1"><a class="header-anchor" href="#常用参数示例-2" aria-hidden="true">#</a> 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ ls
test.txt

$ wc test.txt
      26      26     103 test.txt

$ wc -l test.txt  #直接一把统计行数
      26 test.txt

$ wc -c test.txt
     103 test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="date-cal" tabindex="-1"><a class="header-anchor" href="#date-cal" aria-hidden="true">#</a> date &amp; cal</h3><h4 id="date-介绍" tabindex="-1"><a class="header-anchor" href="#date-介绍" aria-hidden="true">#</a> date 介绍</h4><blockquote><p>When invoked without arguments, the date utility displays the current date and time. Otherwise, depending on the options specified, date will set the date and time or print it in a user-defined way.</p><p>The date utility displays the date and time read from the kernel clock. When used to set the date and time, both the kernel clock and the hardware clock are updated.</p><p>Only the superuser may set the date, and if the system securelevel (see securelevel(7)) is greater than 1, the time may not be changed by more than 1 second.</p><p>当不带参数调用时，date 实用程序将显示当前日期和时间。否则，根据指定的选项，日期将设置日期和时间或以用户定义的方式打印日期和时间。</p><p>date 实用程序显示从内核时钟读取的日期和时间。当用于设置日期和时间时，内核时钟和硬件时钟都将更新。</p><p>只有超级用户可以设置日期，并且如果系统安全级别（请参阅 securelevel（7））大于 1，则时间更改不得超过 1 秒。</p></blockquote><h4 id="date-参数格式" tabindex="-1"><a class="header-anchor" href="#date-参数格式" aria-hidden="true">#</a> date 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>date [-jRu] [-r seconds | filename] [-v [+|-]val[ymwdHMS]] ... [+output_fmt] date [-jnu] [[[mm]dd]HH]MM[[cc]yy][.ss] date [-jnRu] -f input_fmt new_date [+output_fmt] date [-d dst] [-t minutes_west]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="date-命令参数" tabindex="-1"><a class="header-anchor" href="#date-命令参数" aria-hidden="true">#</a> date 命令参数</h4><p>%H 小时(以 00-23 来表示)。</p><p>%I 小时(以 01-12 来表示)。</p><p>%K 小时(以 0-23 来表示)。</p><p>%l 小时(以 0-12 来表示)。</p><p>%M 分钟(以 00-59 来表示)。</p><p>%P AM 或 PM。</p><p>%r 时间(含时分秒，小时以 12 小时 AM/PM 来表示)。</p><p>%s 总秒数。起算时间为 1970-01-01 00:00:00 UTC。</p><p>%S 秒(以本地的惯用法来表示)。</p><p>%T 时间(含时分秒，小时以 24 小时制来表示)。</p><p>%X 时间(以本地的惯用法来表示)。</p><p>%Z 市区。</p><p>%a 星期的缩写。</p><p>%A 星期的完整名称。</p><p>%b 月份英文名的缩写。</p><p>%B 月份的完整英文名称。</p><p>%c 日期与时间。只输入 date 指令也会显示同样的结果。</p><p>%d 日期(以 01-31 来表示)。</p><p>%D 日期(含年月日)。</p><p>%j 该年中的第几天。</p><p>%m 月份(以 01-12 来表示)。</p><p>%U 该年中的周数。</p><p>%w 该周的天数，0 代表周日，1 代表周一，异词类推。</p><p>%x 日期(以本地的惯用法来表示)。</p><p>%y 年份(以 00-99 来表示)。</p><p>%Y 年份(以四位数来表示)。</p><p>%n 在显示时，插入新的一行。</p><p>%t 在显示时，插入 tab。</p><p>MM 月份(必要)</p><p>DD 日期(必要)</p><p>hh 小时(必要)</p><p>mm 分钟(必要)</p><p>ss 秒(选择性)</p><p>-d&lt;字符串&gt; 显示字符串所指的日期与时间。字符串前后必须加上双引号。</p><p>-s&lt;字符串&gt; 根据字符串来设置日期与时间。字符串前后必须加上双引号。</p><p>-u 显示 GMT。</p><h4 id="常用参数示例-3" tabindex="-1"><a class="header-anchor" href="#常用参数示例-3" aria-hidden="true">#</a> 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ date
2019年12月22日 星期日 21时28分29秒 CST

$ date &#39;+%c&#39;
日 12/22 21:28:33 2019

$  date &#39;+%D&#39;
12/22/19

$  date &#39;+%T&#39;
21:28:50

$ date &#39;+%X&#39;
21时29分00秒
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cal-介绍" tabindex="-1"><a class="header-anchor" href="#cal-介绍" aria-hidden="true">#</a> cal 介绍</h4><p>cal 命令可以用来显示公历（阳历）日历。</p><h4 id="cal-参数格式" tabindex="-1"><a class="header-anchor" href="#cal-参数格式" aria-hidden="true">#</a> cal 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cal [-3hjy] [-A number] [-B number] [[month] year] cal [-3hj] [-A number] [-B number] -m month [year] ncal [-3hjJpwy] [-A number] [-B number] [-s country_code] [[month] year] ncal [-3hJeo] [-A number] [-B number] [year] ncal [-CN] [-H yyyy-mm-dd] [-d yyyy-mm]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="cal-命令参数" tabindex="-1"><a class="header-anchor" href="#cal-命令参数" aria-hidden="true">#</a> cal 命令参数</h4><p>-1 显示一个月的月历</p><p>-3 显示系统前一个月，当前月，下一个月的月历</p><p>-s 显示星期天为一个星期的第一天，默认的格式</p><p>-m 显示星期一为一个星期的第一天 -j 显示在当年中的第几天（一年日期按天算，从 1 月 1 号算起，默认显示当前月在一年中的天数） -y 显示当前年份的日历</p><h4 id="cal-常用参数示例" tabindex="-1"><a class="header-anchor" href="#cal-常用参数示例" aria-hidden="true">#</a> cal 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ cal
      十二月 2019
日 一 二 三 四 五 六
 1  2  3  4  5  6  7
 8  9 10 11 12 13 14
15 16 17 18 19 20 21
22 23 24 25 26 27 28
29 30 31


$ ncal
    十二月 2019
一      2  9 16 23 30
二      3 10 17 24 31
三      4 11 18 25
四      5 12 19 26
五      6 13 20 27
六      7 14 21 28
日   1  8 15 22 29
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="which" tabindex="-1"><a class="header-anchor" href="#which" aria-hidden="true">#</a> which</h3><h4 id="which-介绍" tabindex="-1"><a class="header-anchor" href="#which-介绍" aria-hidden="true">#</a> which 介绍</h4><blockquote><p>The which utility takes a list of command names and searches the path for each executable file that would be run had these commands actually been invoked.</p><p>which 命令的作用是，在 PATH 变量指定的路径中，搜索某个系统命令的位置，并且返回第一个搜索结果。也就是说，使用 which 命令，就可以看到某个系统命令是否存在，以及执行的到底是哪一个位置的命令。</p></blockquote><h4 id="which-参数格式" tabindex="-1"><a class="header-anchor" href="#which-参数格式" aria-hidden="true">#</a> which 参数格式</h4><p>-n 指定文件名长度，指定的长度必须大于或等于所有文件中最长的文件名。</p><p>-p 与-n 参数相同，但此处的包括了文件的路径。</p><p>-w 指定输出时栏位的宽度。</p><h4 id="which-常用参数示例" tabindex="-1"><a class="header-anchor" href="#which-常用参数示例" aria-hidden="true">#</a> which 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ which ls
alias ls=&#39;ls --color=auto&#39;
    /bin/ls

$ which which
alias which=&#39;alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde&#39;
    /bin/alias
    /usr/bin/which
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="whereis" tabindex="-1"><a class="header-anchor" href="#whereis" aria-hidden="true">#</a> whereis</h3><h4 id="whereis-介绍" tabindex="-1"><a class="header-anchor" href="#whereis-介绍" aria-hidden="true">#</a> whereis 介绍</h4><p>whereis 命令只能用于程序名的搜索，而且只搜索二进制文件（参数-b）、man 说明文件（参数-m）和源代码文件（参数-s）。如果省略参数，则返回所有信息。</p><h4 id="whereis-参数格式" tabindex="-1"><a class="header-anchor" href="#whereis-参数格式" aria-hidden="true">#</a> whereis 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>whereis [program ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="whereis-命令参数" tabindex="-1"><a class="header-anchor" href="#whereis-命令参数" aria-hidden="true">#</a> whereis 命令参数</h4><p>-b 定位可执行文件。</p><p>-m 定位帮助文件。</p><p>-s 定位源代码文件。</p><p>-u 搜索默认路径下除可执行文件、源代码文件、帮助文件以外的其它文件。</p><p>-B 指定搜索可执行文件的路径。</p><p>-M 指定搜索帮助文件的路径。</p><p>-S 指定搜索源代码文件的路径。</p><h4 id="whereis-常用参数示例" tabindex="-1"><a class="header-anchor" href="#whereis-常用参数示例" aria-hidden="true">#</a> whereis 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ whereis ls
/bin/ls

$ whereis whereis
/usr/bin/whereis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nl" tabindex="-1"><a class="header-anchor" href="#nl" aria-hidden="true">#</a> nl</h3><h4 id="nl-介绍" tabindex="-1"><a class="header-anchor" href="#nl-介绍" aria-hidden="true">#</a> nl 介绍</h4><p>nl 命令在 linux 系统中用来计算文件中行号。nl 可以将输出的文件内容自动的加上行号！其默认的结果与 cat -n 有点不太一样， nl 可以将行号做比较多的显示设计，包括位数与是否自动补齐 0 等等的功能。</p><h4 id="nl-参数格式" tabindex="-1"><a class="header-anchor" href="#nl-参数格式" aria-hidden="true">#</a> nl 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nl [-p] [-b type] [-d delim] [-f type] [-h type] [-i incr] [-l num] [-n format] [-s sep] [-v startnum] [-w width] [file]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="nl-命令参数" tabindex="-1"><a class="header-anchor" href="#nl-命令参数" aria-hidden="true">#</a> nl 命令参数</h4><p>-b ：指定行号指定的方式，主要有两种：</p><p>-b a ：表示不论是否为空行，也同样列出行号(类似 cat -n)；</p><p>-b t ：如果有空行，空的那一行不要列出行号(默认值)；</p><p>-n ：列出行号表示的方法，主要有三种：</p><p>-n ln ：行号在萤幕的最左方显示；</p><p>-n rn ：行号在自己栏位的最右方显示，且不加 0 ；</p><p>-n rz ：行号在自己栏位的最右方显示，且加 0 ；</p><p>-w ：行号栏位的占用的位数。</p><p>-p 在逻辑定界符处不重新开始计算。</p><h4 id="nl-常用参数示例" tabindex="-1"><a class="header-anchor" href="#nl-常用参数示例" aria-hidden="true">#</a> nl 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ nl test.txt
     1    用
     2    心
     3    分
     4    享，
     5    共
     6    同
     7    成
     8    长.

     9    没
    10    有
    11    什
    12    么
    13    比
    14    你
    15    每
    16    天
    17    进
    18    步
    19    一
    20    点
    21    更
    22    实
    23    在
    24    了
    25    .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ps" tabindex="-1"><a class="header-anchor" href="#ps" aria-hidden="true">#</a> ps</h3><h4 id="ps-介绍" tabindex="-1"><a class="header-anchor" href="#ps-介绍" aria-hidden="true">#</a> ps 介绍</h4><blockquote><p>The ps utility displays a header line, followed by lines containing information about all of your processes that have controlling terminals.</p><p>ps 实用程序显示标题行，其后是包含有关具有控制终端的所有进程的信息的行。</p></blockquote><h4 id="ps-参数格式" tabindex="-1"><a class="header-anchor" href="#ps-参数格式" aria-hidden="true">#</a> ps 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ps [-AaCcEefhjlMmrSTvwXx] [-O fmt | -o fmt] [-G gid[,gid...]] [-g grp[,grp...]] [-u uid[,uid...]] [-p pid[,pid...]] [-t tty[,tty...]] [-U user[,user...]] ps [-L]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="ps-命令参数" tabindex="-1"><a class="header-anchor" href="#ps-命令参数" aria-hidden="true">#</a> ps 命令参数</h4><p>a 显示所有进程</p><p>-a 显示同一终端下的所有程序</p><p>-A 显示所有进程</p><p>c 显示进程的真实名称</p><p>-N 反向选择</p><p>-e 等于“-A”</p><p>e 显示环境变量</p><p>f 显示程序间的关系</p><p>-H 显示树状结构</p><p>r 显示当前终端的进程</p><p>T 显示当前终端的所有程序</p><p>u 指定用户的所有进程</p><p>-au 显示较详细的资讯</p><p>-aux 显示所有包含其他使用者的行程</p><p>-C&lt;命令&gt; 列出指定命令的状况</p><p>--lines&lt;行数&gt; 每页显示的行数</p><p>--width&lt;字符数&gt; 每页显示的字符数</p><h4 id="ps-常用参数示例" tabindex="-1"><a class="header-anchor" href="#ps-常用参数示例" aria-hidden="true">#</a> ps 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#查看所有进程
$ps -a
#查看进程的环境变量和程序间的关系
$ps -ef
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kill-killall" tabindex="-1"><a class="header-anchor" href="#kill-killall" aria-hidden="true">#</a> kill&amp;killall</h3><h4 id="kill-介绍" tabindex="-1"><a class="header-anchor" href="#kill-介绍" aria-hidden="true">#</a> kill 介绍</h4><blockquote><p>The command kill sends the specified signal to the specified process or process group. If no signal is specified, the TERM signal is sent. The TERM signal will kill processes which do not catch this signal. For other processes, it may be necessary to use the KILL (9) signal, since this signal cannot be caught.</p><p>命令 kill 将指定的信号发送到指定的进程或进程组。如果未指定信号，则发送 TERM 信号。TERM 信号将杀死不捕获该信号的进程。对于其他过程，可能需要使用 KILL（9）信号，因为无法捕获该信号。</p></blockquote><h4 id="kill-参数格式" tabindex="-1"><a class="header-anchor" href="#kill-参数格式" aria-hidden="true">#</a> kill 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kill [-s signal|-p] [-q sigval] [-a] [--] pid...
kill -l [signal]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="kill-命令参数" tabindex="-1"><a class="header-anchor" href="#kill-命令参数" aria-hidden="true">#</a> kill 命令参数</h4><p>-l 信号，若果不加信号的编号参数，则使用“-l”参数会列出全部的信号名称</p><p>-a 当处理当前进程时，不限制命令名和进程号的对应关系</p><p>-p 指定 kill 命令只打印相关进程的进程号，而不发送任何信号</p><p>-s 指定发送信号</p><p>-u 指定用户</p><h4 id="kill-常用参数示例" tabindex="-1"><a class="header-anchor" href="#kill-常用参数示例" aria-hidden="true">#</a> kill 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#查看当前系统信号
$ kill -l
 1) SIGHUP     2) SIGINT   3) SIGQUIT  4) SIGILL   5) SIGTRAP
 6) SIGABRT     7) SIGBUS   8) SIGFPE   9) SIGKILL 10) SIGUSR1
11) SIGSEGV    12) SIGUSR2 13) SIGPIPE 14) SIGALRM 15) SIGTERM
16) SIGSTKFLT    17) SIGCHLD 18) SIGCONT 19) SIGSTOP 20) SIGTSTP
21) SIGTTIN    22) SIGTTOU 23) SIGURG  24) SIGXCPU 25) SIGXFSZ
26) SIGVTALRM    27) SIGPROF 28) SIGWINCH    29) SIGIO   30) SIGPWR
31) SIGSYS    34) SIGRTMIN    35) SIGRTMIN+1  36) SIGRTMIN+2  37) SIGRTMIN+3
38) SIGRTMIN+4    39) SIGRTMIN+5  40) SIGRTMIN+6  41) SIGRTMIN+7  42) SIGRTMIN+8
43) SIGRTMIN+9    44) SIGRTMIN+10 45) SIGRTMIN+11 46) SIGRTMIN+12 47) SIGRTMIN+13
48) SIGRTMIN+14    49) SIGRTMIN+15 50) SIGRTMAX-14 51) SIGRTMAX-13 52) SIGRTMAX-12
53) SIGRTMAX-11    54) SIGRTMAX-10 55) SIGRTMAX-9  56) SIGRTMAX-8  57) SIGRTMAX-7
58) SIGRTMAX-6    59) SIGRTMAX-5  60) SIGRTMAX-4  61) SIGRTMAX-3  62) SIGRTMAX-2
63) SIGRTMAX-1    64) SIGRTMAX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="解释" tabindex="-1"><a class="header-anchor" href="#解释" aria-hidden="true">#</a> 解释</h5><p>HUP 1 终端断线 INT 2 中断（同 Ctrl + C） QUIT 3 退出（同 Ctrl + \\） TERM 15 终止 KILL 9 强制终止 CONT 18 继续（与 STOP 相反， fg/bg 命令） STOP 19 暂停（同 Ctrl + Z）</p><p>kill -9 是我们使用的最多的信号，其实这种方式一点也不优雅，应该使用 kill -15 信号，大部分程序接收到 SIGTERM 信号后，会先释放自己的资源，然后再停止。但是也有程序可能接收信号后，做一些其他的事情（如果程序正在等待 IO，可能就不会立马做出响应，等到 io 完成后在结束），也就是说，SIGTERM 多半是会被阻塞的。</p><p><strong>讲到这里，linux 基本指令差不多了够用了，差不多可以上你的服务器上随便搞搞了。但是也只是简单看看，更多的操作指令请看进阶部分。</strong></p><hr><h2 id="linux-进阶指令" tabindex="-1"><a class="header-anchor" href="#linux-进阶指令" aria-hidden="true">#</a> Linux 进阶指令</h2><h3 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find</h3><h4 id="find-介绍" tabindex="-1"><a class="header-anchor" href="#find-介绍" aria-hidden="true">#</a> find 介绍</h4><blockquote><p>The find utility recursively descends the directory tree for each path listed, evaluating an expression (composed of the <code>primaries&#39;&#39; and</code>operands&#39;&#39; listed below) in terms of each file in the tree.</p><p>find 实用程序对列出的每个路径递归地遍历目录树，根据树中的每个文件计算表达式(由下面列出的“初选”和“操作数”组成)。</p></blockquote><p><strong>这个命令使用频率极高，如果对这个命令了解很透彻，在日常工作中可以事半功倍。这个命令的参数较多，常用的参数我会在下面常用参数示例讲清楚</strong></p><h4 id="find-参数格式" tabindex="-1"><a class="header-anchor" href="#find-参数格式" aria-hidden="true">#</a> find 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>find [-H | -L | -P] [-EXdsx] [-f path] path ... [expression] find [-H | -L | -P] [-EXdsx] -f path [path ...] [expression]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="find-命令参数" tabindex="-1"><a class="header-anchor" href="#find-命令参数" aria-hidden="true">#</a> find 命令参数</h4><p>-print：find 命令将匹配的文件输出到标准输出。</p><p>-exec：find 命令对匹配的文件执行该参数所给出的 shell 命令。相应命令的形式为&#39;command&#39; { } ;，注意{ }和\\；之间的空格。</p><p>-name 按照文件名查找文件。</p><p>-perm 按照文件权限来查找文件。</p><p>-prune 使用这一选项可以使 find 命令不在当前指定的目录中查找，如果同时使用-depth 选项，那么-prune 将被 find 命令忽略。</p><p>-user 按照文件属主来查找文件。</p><p>-group 按照文件所属的组来查找文件。</p><p>-mtime -n +n 按照文件的更改时间来查找文件， - n 表示文件更改时间距现在 n 天以内，+ n 表示文件更改时间距现在 n 天以前。find 命令还有-atime 和-ctime 选项，但它们都和-m time 选项。</p><p>-nogroup 查找无有效所属组的文件，即该文件所属的组在/etc/groups 中不存在。</p><p>-nouser 查找无有效属主的文件，即该文件的属主在/etc/passwd 中不存在。</p><p>-newer file1 ! file2 查找更改时间比文件 file1 新但比文件 file2 旧的文件。</p><p>-type 查找某一类型的文件，诸如：</p><ul><li>b - 块设备文件。</li><li>d - 目录。</li><li>c - 字符设备文件。</li><li>p - 管道文件。</li><li>l - 符号链接文件。</li><li>f - 普通文件。</li></ul><p>-size n：[c] 查找文件长度为 n 块的文件，带有 c 时表示文件长度以字节计。-depth：在查找文件时，首先查找当前目录中的文件，然后再在其子目录中查找。</p><p>-fstype：查找位于某一类型文件系统中的文件，这些文件系统类型通常可以在配置文件/etc/fstab 中找到，该配置文件中包含了本系统中有关文件系统的信息。</p><p>-mount：在查找文件时不跨越文件系统 mount 点。</p><p>-follow：如果 find 命令遇到符号链接文件，就跟踪至链接所指向的文件。</p><p>-cpio：对匹配的文件使用 cpio 命令，将这些文件备份到磁带设备中。</p><p>另外,下面三个的区别:</p><p>-amin n 查找系统中最后 N 分钟访问的文件</p><p>-atime n 查找系统中最后 n*24 小时访问的文件</p><p>-cmin n 查找系统中最后 N 分钟被改变文件状态的文件</p><p>-ctime n 查找系统中最后 n*24 小时被改变文件状态的文件</p><p>-mmin n 查找系统中最后 N 分钟被改变文件数据的文件</p><p>-mtime n 查找系统中最后 n*24 小时被改变文件数据的文件</p><h4 id="find-常用参数示例" tabindex="-1"><a class="header-anchor" href="#find-常用参数示例" aria-hidden="true">#</a> find 常用参数示例</h4><p><strong>-name 参数常用参数示例</strong> 查找/user 目录下所有以.log 结尾的文件</p><p><img src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==" alt="" loading="lazy">image-20191225235202419</p><p><strong>-exec 参数后面跟的是 command，它的终止是以<code>;</code>为结束标志的，所以这句命令后面的分号是不可缺少的，考虑到各个系统中分号会有不同的意义，所以前面加反斜杠。</strong></p><p>举一个我在工作中经常用到的例子，我有个日志目录，我系统的所有日志都会打到这个目录，目录的日志文件命名很随意，我没办法说根据名字删除，于是我想到用日期的方式删除，保存一个月的日志即可。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$find /home/midou/logs// -mtime +30 -name &quot;*.log.gz&quot; -exec rm -rf {} \\;
# {} 这个是语法不能丢了 ，还有结尾的 ； 也不能丢了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其实我把这个命令放在我的一个系统 crontab 文件里面，每天执行一次，这样我的日志目录就不用了手动清理。corntab 使用详解在后面的命令中会讲到。</p><p>-exec 后面可以接任何命令，你可以灵活运用，再结合到前面的-name 参数，可以玩出花来。</p><h3 id="grep" tabindex="-1"><a class="header-anchor" href="#grep" aria-hidden="true">#</a> grep</h3><h4 id="grep-介绍" tabindex="-1"><a class="header-anchor" href="#grep-介绍" aria-hidden="true">#</a> grep 介绍</h4><blockquote><p>The grep utility searches any given input files, selecting lines that match one or more patterns. By default, a pattern matches an input line if the regular expression (RE) in the pattern matches the input line without its trailing newline. An empty expression matches every line. Each input line that matches at least one of the patterns is written to the standard output</p><p>grep 实用程序搜索任何给定的输入文件，选择与一个或多个模式匹配的行。默认情况下，如果模式中的正则表达式（RE）匹配输入行而没有尾随换行符，则该模式会匹配输入行。空表达式匹配每行。与至少一种模式匹配的每条输入线均写入标准输出</p></blockquote><p>这是个我每天都会用到的命令，我是做基础服务的，用我服务的人不免会遇到问题，这时候我就去要去看日志了，日志都是 G 级别的，当然不能用 vim 打开去搜索，会把系统挂掉，vim 是全部文档加载到内存。这时候就需要使用 grep 命令去根据一些关键信息匹配查找了。（当然有些同学可能会说，既然经常查日志的话，就不能把日志接入到 ElasticSearch 这种可搜索的组建中，很好，用技术去解决实际问题。我们也是这样做的，但总免不了还是会去服务器上查一下日志，学会这个命令没错的）</p><h4 id="grep-参数格式" tabindex="-1"><a class="header-anchor" href="#grep-参数格式" aria-hidden="true">#</a> grep 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep [-abcdDEFGHhIiJLlmnOopqRSsUVvwxZ] [-A num] [-B num] [-C[num]] [-e pattern] [-f file] [--binary-files=value] [--color[=when]] [--colour[=when]][--context[=num]] [--label] [--line-buffered] [--null] [pattern] [file ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="grep-命令参数" tabindex="-1"><a class="header-anchor" href="#grep-命令参数" aria-hidden="true">#</a> grep 命令参数</h4><p>-a --text 不要忽略二进制的数据。</p><p>-A&lt;显示行数&gt; --after-context=&lt;显示行数&gt; #除了显示符合范本样式的那一列之外，并显示该行之后的内容。</p><p>-b --byte-offset #在显示符合样式的那一行之前，标示出该行第一个字符的编号。</p><p>-B&lt;显示行数&gt; --before-context=&lt;显示行数&gt; #除了显示符合样式的那一行之外，并显示该行之前的内容。</p><p>-c --count #计算符合样式的列数。</p><p>-C&lt;显示行数&gt; --context=&lt;显示行数&gt;或-&lt;显示行数&gt; #除了显示符合样式的那一行之外，并显示该行之前后的内容。</p><p>-d &lt;动作&gt; --directories=&lt;动作&gt; #当指定要查找的是目录而非文件时，必须使用这项参数，否则 grep 指令将回报信息并停止动作。</p><p>-e&lt;范本样式&gt; --regexp=&lt;范本样式&gt; #指定字符串做为查找文件内容的样式。</p><p>-E --extended-regexp #将样式为延伸的普通表示法来使用。</p><p>-f&lt;规则文件&gt; --file=&lt;规则文件&gt; #指定规则文件，其内容含有一个或多个规则样式，让 grep 查找符合规则条件的文件内容，格式为每行一个规则样式。</p><p>-F --fixed-regexp #将样式视为固定字符串的列表。</p><p>-G --basic-regexp #将样式视为普通的表示法来使用。</p><p>-h --no-filename #在显示符合样式的那一行之前，不标示该行所属的文件名称。</p><p>-H --with-filename #在显示符合样式的那一行之前，表示该行所属的文件名称。</p><p>-i --ignore-case #忽略字符大小写的差别。</p><p>-l --file-with-matches #列出文件内容符合指定的样式的文件名称。</p><p>-L --files-without-match #列出文件内容不符合指定的样式的文件名称。</p><p>-n --line-number #在显示符合样式的那一行之前，标示出该行的列数编号。</p><p>-q --quiet 或--silent #不显示任何信息。</p><p>-r --recursive #此参数的效果和指定“-d recurse”参数相同。</p><p>-s --no-messages #不显示错误信息。</p><p>-v --revert-match #显示不包含匹配文本的所有行。</p><p>-V --version #显示版本信息。</p><p>-w --word-regexp #只显示全字符合的列。</p><p>-x --line-regexp #只显示全列符合的列。</p><p>-y 此参数的效果和指定“-i”参数相同。</p><h4 id="grep-常用参数示例" tabindex="-1"><a class="header-anchor" href="#grep-常用参数示例" aria-hidden="true">#</a> grep 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$grep &#39;20:[1-5][0-9]:&#39; *.log  #匹配当前目录下搜索log日志中，20点的日志
$grep &#39;20:[1-5][0-9]&#39; 1.log 2.log 3.log  #指定在这三个文件中查找
#grep规则是支持正则表达式的
$ps -ef|grep java    #查找所有java进程
$ps -ef|grep java    #-c可以统计查找的个数
$grep &#39;20:[1-5][0-9]:&#39; *.log | grep -v &#39;20:[3-4][0-9]:&#39;   # -v反向选择，相当于过滤
$grep &#39;ab|bc&#39; *.log  #支持|语法，匹配含有ab或者bc的文本行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>掌握 grep 的常用参数，会让你查找日志或者内容非常轻松。特别是当你数据量很大的时候，没办法使用 vi 或者 vim 打开的情况下。</p><h3 id="cut" tabindex="-1"><a class="header-anchor" href="#cut" aria-hidden="true">#</a> cut</h3><h4 id="cut-介绍" tabindex="-1"><a class="header-anchor" href="#cut-介绍" aria-hidden="true">#</a> cut 介绍</h4><p>这个命令对我来说很有故事，当时我在学完 C 语言，简单了解了些 linux 上的基本命令，有次实习面试，面试官问我 linux 系统用过么，我斩钉截铁的说用过，面试官简单的用 vim 写了一行 hello world。对我说，你怎样通过 linux 命令吧这个文本里面的 hello world 搞成十行，并且取出每一列的第七个字符。</p><p><strong>当时的我真的是心里一群草泥马跑过，这可难道我了，我沉思了片刻，说只要十行么？多点行么？。当然不行，只要十行，取每行的第七个字符续</strong>沉思了片刻，拿起面试官的电脑就是一顿操作，于是有了我记忆深刻的下面这一行命令。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ cat tmp.cc| &gt;&gt;tmp.cc|&gt;&gt;tmp.cc|&gt;&gt;tmp.cc|head -n10|&gt;tmp.cc|cut -c7-7
w
w
w
w
w
w
w
w
w
w
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>面试官一看，微微点了下头(肯定在心里默念，小伙子，不错啊)。所以这个命令我印象蛮深刻的。当然还要其他方式实现面试官的要求，比如 cut 第七个地府，写个循环重定向到管道，再到原文件。</p><blockquote><p>The cut utility cuts out selected portions of each line (as specified by list) from each file and writes them to the standard output. If no file arguments are specified, or a file argument is a single dash (\`-&#39;), cut reads from the standard input. The items specified by list can be in terms of column position or in terms of fields delimited by a special character. Column numbering starts from 1.</p><p>cut 实用程序从每个文件中剪切出每行的选定部分（由列表指定），并将它们写入标准输出。如果未指定文件参数，或者文件参数为单破折号（-），则从标准输入中读取内容。列表指定的项目可以是列位置，也可以是由特殊字符分隔的字段。列编号从 1 开始。</p></blockquote><h4 id="cut-参数格式" tabindex="-1"><a class="header-anchor" href="#cut-参数格式" aria-hidden="true">#</a> cut 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cut -b list [-n] [file ...] cut -c list [file ...] cut -f list [-d delim] [-s] [file ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="cut-命令参数" tabindex="-1"><a class="header-anchor" href="#cut-命令参数" aria-hidden="true">#</a> cut 命令参数</h4><p>-b：仅显示行中指定直接范围的内容；</p><p>-c：仅显示行中指定范围的字符；</p><p>-d：指定字段的分隔符，默认的字段分隔符为“TAB”；</p><p>-f：显示指定字段的内容；</p><p>-n：与“-b”选项连用，不分割多字节字符；</p><p>--complement：补足被选择的字节、字符或字段；</p><p>--out-delimiter=&lt;字段分隔符&gt;：指定输出内容是的字段分割符；</p><h4 id="cut-常用参数示例" tabindex="-1"><a class="header-anchor" href="#cut-常用参数示例" aria-hidden="true">#</a> cut 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$cut -c-10 tmp.txt  #cut tmp.txt文件的前10列
$cut -c3-5 tmp.txt  #cut tmp.txt文件的第3到5列
$cut -c3- tmp.txt  #cut tmp.txt文件的第3到结尾列
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="diff" tabindex="-1"><a class="header-anchor" href="#diff" aria-hidden="true">#</a> diff</h3><h4 id="diff-介绍" tabindex="-1"><a class="header-anchor" href="#diff-介绍" aria-hidden="true">#</a> diff 介绍</h4><blockquote><p>Compare files line by line.</p><p>比较两个文件的不同</p></blockquote><h4 id="diff-参数格式" tabindex="-1"><a class="header-anchor" href="#diff-参数格式" aria-hidden="true">#</a> diff 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>diff [OPTION]... FILES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="diff-命令参数" tabindex="-1"><a class="header-anchor" href="#diff-命令参数" aria-hidden="true">#</a> diff 命令参数</h4><p>-b 或--ignore-space-change 不检查空格字符的不同。</p><p>-B 或--ignore-blank-lines 不检查空白行。</p><p>-c 显示全部内文，并标出不同之处。</p><p>-C 或--context 与执行&quot;-c-&quot;指令相同。</p><p>-d 或--minimal 使用不同的演算法，以较小的单位来做比较。</p><p>-D 或 ifdef 此参数的输出格式可用于前置处理器巨集。</p><p>-e 或--ed 此参数的输出格式可用于 ed 的 script 文件。</p><p>-f 或-forward-ed 输出的格式类似 ed 的 script 文件，但按照原来文件的顺序来显示不同处。</p><p>-H 或--speed-large-files 比较大文件时，可加快速度。</p><p>-l 或--ignore-matching-lines 若两个文件在某几行有所不同，而这几行同时都包含了选项中指定的字符或字符串，则不显示这两个文件的差异。</p><p>-i 或--ignore-case 不检查大小写的不同。</p><p>-l 或--paginate 将结果交由 pr 程序来分页。</p><p>-n 或--rcs 将比较结果以 RCS 的格式来显示。</p><p>-N 或--new-file 在比较目录时，若文件 A 仅出现在某个目录中，预设会显示：Only in 目录：文件 A 若使用-N 参数，则 diff 会将文件 A 与一个空白的文件比较。</p><p>-p 若比较的文件为 C 语言的程序码文件时，显示差异所在的函数名称。</p><p>-P 或--unidirectional-new-file 与-N 类似，但只有当第二个目录包含了一个第一个目录所没有的文件时，才会将这个文件与空白的文件做比较。</p><p>-q 或--brief 仅显示有无差异，不显示详细的信息。</p><p>-r 或--recursive 比较子目录中的文件。</p><p>-s 或--report-identical-files 若没有发现任何差异，仍然显示信息。</p><p>-S 或--starting-file 在比较目录时，从指定的文件开始比较。</p><p>-t 或--expand-tabs 在输出时，将 tab 字符展开。</p><p>-T 或--initial-tab 在每行前面加上 tab 字符以便对齐。</p><p>-u,-U 或--unified= 以合并的方式来显示文件内容的不同。</p><p>-v 或--version 显示版本信息。</p><p>-w 或--ignore-all-space 忽略全部的空格字符。</p><p>-W 或--width 在使用-y 参数时，指定栏宽。</p><p>-x 或--exclude 不比较选项中所指定的文件或目录。</p><p>-X 或--exclude-from 您可以将文件或目录类型存成文本文件，然后在=中指定此文本文件。</p><p>-y 或--side-by-side 以并列的方式显示文件的异同之处。</p><h4 id="diff-常用参数示例" tabindex="-1"><a class="header-anchor" href="#diff-常用参数示例" aria-hidden="true">#</a> diff 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ diff testA.txt testB.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="tar-gzip" tabindex="-1"><a class="header-anchor" href="#tar-gzip" aria-hidden="true">#</a> tar&amp;gzip</h3><h4 id="tar-介绍" tabindex="-1"><a class="header-anchor" href="#tar-介绍" aria-hidden="true">#</a> tar 介绍</h4><p>用来压缩和解压文件。tar 本身不具有压缩功能。他是调用压缩功能实现的</p><h4 id="tar-参数格式" tabindex="-1"><a class="header-anchor" href="#tar-参数格式" aria-hidden="true">#</a> tar 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>     tar [bundled-flags &lt;args&gt;] [&lt;file&gt; | &lt;pattern&gt; ...]
     tar {-c} [options] [files | directories]
     tar {-r | -u} -f archive-file [options] [files | directories]
     tar {-t | -x} [options] [patterns]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tar-命令参数" tabindex="-1"><a class="header-anchor" href="#tar-命令参数" aria-hidden="true">#</a> tar 命令参数</h4><p>-A 新增压缩文件到已存在的压缩</p><p>-B 设置区块大小</p><p>-c 建立新的压缩文件</p><p>-d 记录文件的差别</p><p>-r 添加文件到已经压缩的文件</p><p>-u 添加改变了和现有的文件到已经存在的压缩文件</p><p>-x 从压缩的文件中提取文件</p><p>-t 显示压缩文件的内容</p><p>-z 支持 gzip 解压文件</p><p>-j 支持 bzip2 解压文件</p><p>-Z 支持 compress 解压文件</p><p>-v 显示操作过程</p><p>-l 文件系统边界设置</p><p>-k 保留原有文件不覆盖</p><p>-m 保留文件不被覆盖</p><p>-W 确认压缩文件的正确性</p><p>-b 设置区块数目</p><p>-C 切换到指定目录</p><p>-f 指定压缩文件</p><h4 id="tar-常用参数示例" tabindex="-1"><a class="header-anchor" href="#tar-常用参数示例" aria-hidden="true">#</a> tar 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#打包  tar -cvf 包名  文件名
$tar -cvf test.tar test.txt
#解包  tar -xvf 包名
$tar -xvf test.tar
#压缩  tar -czvf 包名 文件名
$tar -czvf test.tgz test.txt
#解压  tar -xzvf 包名
$tar -xzvf test.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="du" tabindex="-1"><a class="header-anchor" href="#du" aria-hidden="true">#</a> du</h3><h4 id="du-介绍" tabindex="-1"><a class="header-anchor" href="#du-介绍" aria-hidden="true">#</a> du 介绍</h4><blockquote><p>The du utility displays the file system block usage for each file argument and for each directory in the file hierarchy rooted in each directory argument.If no file is specified, the block usage of the hierarchy rooted in the current directory is displayed.</p><p>du 实用程序显示每个文件自变量以及以每个目录自变量为根的文件层次结构中每个目录的文件系统块使用情况。如果未指定文件，则显示以当前目录为根的层次结构的块使用情况。</p></blockquote><h4 id="du-参数格式" tabindex="-1"><a class="header-anchor" href="#du-参数格式" aria-hidden="true">#</a> du 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>du [-H | -L | -P] [-a | -s | -d depth] [-c] [-h | -k | -m | -g] [-x] [-I mask] [file ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="du-命令参数" tabindex="-1"><a class="header-anchor" href="#du-命令参数" aria-hidden="true">#</a> du 命令参数</h4><p>-a 或-all 显示目录中个别文件的大小。</p><p>-b 或-bytes 显示目录或文件大小时，以 byte 为单位。</p><p>-c 或--total 除了显示个别目录或文件的大小外，同时也显示所有目录或文件的总和。</p><p>-k 或--kilobytes 以 KB(1024bytes)为单位输出。</p><p>-m 或--megabytes 以 MB 为单位输出。</p><p>-s 或--summarize 仅显示总计，只列出最后加总的值。</p><p>-h 或--human-readable 以 K，M，G 为单位，提高信息的可读性。</p><p>-x 或--one-file-xystem 以一开始处理时的文件系统为准，若遇上其它不同的文件系统目录则略过。</p><p>-L&lt;符号链接&gt;或--dereference&lt;符号链接&gt; 显示选项中所指定符号链接的源文件大小。</p><p>-S 或--separate-dirs 显示个别目录的大小时，并不含其子目录的大小。</p><p>-X&lt;文件&gt;或--exclude-from=&lt;文件&gt; 在&lt;文件&gt;指定目录或文件。</p><p>--exclude=&lt;目录或文件&gt; 略过指定的目录或文件。</p><p>-D 或--dereference-args 显示指定符号链接的源文件大小。</p><p>-H 或--si 与-h 参数相同，但是 K，M，G 是以 1000 为换算单位。</p><p>-l 或--count-links 重复计算硬件链接的文件。</p><h4 id="du-常用参数示例" tabindex="-1"><a class="header-anchor" href="#du-常用参数示例" aria-hidden="true">#</a> du 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#查看指定文件大小
$du -h filename
#展示该目录下所有文件大小，大小以可读方式展示
$du  -h /
#展示当前目录大小
$du -sh
#展示当前目录下每个目录大小
$du -sh ./
#显示所有文件的大小，以可读方式展示
$du -ah /
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="df" tabindex="-1"><a class="header-anchor" href="#df" aria-hidden="true">#</a> df</h3><h4 id="df-介绍" tabindex="-1"><a class="header-anchor" href="#df-介绍" aria-hidden="true">#</a> df 介绍</h4><blockquote><p>The df utility displays statistics about the amount of free disk space on the specified filesystem or on the filesystem of which file is a part. Values are displayed in 512-byte per block counts. If neither a file or a filesystem operand is specified, statistics for all mounted filesystems are displayed (sub-ject to the -t option below).</p><p>df 实用程序显示有关指定文件系统或其中一部分文件的文件系统上的可用磁盘空间量的统计信息。值以每块计数 512 字节的形式显示。如果未指定文件或文件系统操作数，则将显示所有已挂载文件系统的统计信息（受下面的-t 选项约束）。</p></blockquote><h4 id="df-参数格式" tabindex="-1"><a class="header-anchor" href="#df-参数格式" aria-hidden="true">#</a> df 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>df [-b | -h | -H | -k | -m | -g | -P] [-ailn] [-t] [-T type] [file | filesystem ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="df-命令参数" tabindex="-1"><a class="header-anchor" href="#df-命令参数" aria-hidden="true">#</a> df 命令参数</h4><p>-a 全部文件系统列表</p><p>-h 方便阅读方式显示</p><p>-H 等于“-h”，但是计算式，1K=1000，而不是 1K=1024</p><p>-i 显示 inode 信息</p><p>-k 区块为 1024 字节</p><p>-l 只显示本地文件系统</p><p>-m 区块为 1048576 字节</p><p>--no-sync 忽略 sync 命令</p><p>-P 输出格式为 POSIX</p><p>--sync 在取得磁盘信息前，先执行 sync 命令</p><p>-T 文件系统类型</p><p>--block-size=&lt;区块大小&gt; 指定区块大小</p><p>-t&lt;文件系统类型&gt; 只显示选定文件系统的磁盘信息</p><p>-x&lt;文件系统类型&gt; 不显示选定文件系统的磁盘信息</p><h4 id="df-常用参数示例" tabindex="-1"><a class="header-anchor" href="#df-常用参数示例" aria-hidden="true">#</a> df 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#展示当前系统磁盘使用情况，以可读的方式展示
$ df -h
Filesystem      Size   Used  Avail Capacity iused               ifree %iused  Mounted on
/dev/disk1s1   234Gi   78Gi  151Gi    35% 1376436 9223372036853399371    0%   /
devfs          208Ki  208Ki    0Bi   100%     720                   0  100%   /dev
/dev/disk1s4   234Gi  4.0Gi  151Gi     3%       4 9223372036854775803    0%   /private/var/vm
map -hosts       0Bi    0Bi    0Bi   100%       0                   0  100%   /net
map auto_home    0Bi    0Bi    0Bi   100%       0                   0  100%   /home
/dev/disk3s1   290Mi  271Mi   17Mi    94%    2156 9223372036854773651    0%   /Volumes/Sourcetrail_2019_4_102
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lsof" tabindex="-1"><a class="header-anchor" href="#lsof" aria-hidden="true">#</a> lsof</h3><h4 id="lsof-介绍" tabindex="-1"><a class="header-anchor" href="#lsof-介绍" aria-hidden="true">#</a> lsof 介绍</h4><p>lsof（list open files）是一个列出当前系统打开文件的工具。(在 linux 环境下，任何事物都以文件的形式存在)</p><p>lsof 可以打开的文件包括：</p><p>1.普通文件</p><p>2.目录</p><p>3.网络文件系统的文件</p><p>4.字符或设备文件</p><p>5.(函数)共享库</p><p>6.管道，命名管道</p><p>7.符号链接</p><p>8.网络文件（例如：NFS file、网络 socket，unix 域名 socket）</p><p>9.还有其它类型的文件，等等</p><p><strong>这个命令在我日常工作中使用场景很多，使用范围很广。</strong></p><h4 id="lsof-参数格式" tabindex="-1"><a class="header-anchor" href="#lsof-参数格式" aria-hidden="true">#</a> lsof 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lsof [ -?abChKlnNOPRtUvVX ] [ -A A ] [ -c c ] [ +c c ] [ +|-d d ] [ +|-D D ] [ +|-e s ] [ +|-E ] [ +|-f [cfgGn] ] [ -F [f] ] [ -g [s] ] [ -i [i] ] [ -k k ] [ +|-L [l] ] [ +|-m m ] [ +|-M ] [ -o [o] ] [ -p s ] [ +|-r [t[m]] ] [ -s [p:s] ] [ -S [t] ] [ -T [t] ] [ -u s ] [ +|-w ] [ -x [fl] ] [ -z [z] ] [ -Z [Z] ] [ -- ] [names]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="lsof-命令参数" tabindex="-1"><a class="header-anchor" href="#lsof-命令参数" aria-hidden="true">#</a> lsof 命令参数</h4><p>-a 列出打开文件存在的进程</p><p>-c&lt;进程名&gt; 列出指定进程所打开的文件</p><p>-g 列出 GID 号进程详情</p><p>-d&lt;文件号&gt; 列出占用该文件号的进程</p><p>+d&lt;目录&gt; 列出目录下被打开的文件</p><p>+D&lt;目录&gt; 递归列出目录下被打开的文件</p><p>-n&lt;目录&gt; 列出使用 NFS 的文件</p><p>-i&lt;条件&gt; 列出符合条件的进程。（4、6、协议、:端口、 @ip ）</p><p>-p&lt;进程号&gt; 列出指定进程号所打开的文件</p><p>-u 列出 UID 号进程详情</p><h4 id="lsof-常用参数示例" tabindex="-1"><a class="header-anchor" href="#lsof-常用参数示例" aria-hidden="true">#</a> lsof 常用参数示例</h4><p><strong>lsof 输出各列信息的意义如下：</strong></p><p>COMMAND：进程的名称</p><p>PID：进程标识符</p><p>PPID：父进程标识符（需要指定-R 参数）</p><p>USER：进程所有者</p><p>PGID：进程所属组</p><p>FD：文件描述符，应用程序通过文件描述符识别该文件。如 cwd、txt 等</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#显示当前系统打开的文件
$lsof
#查看某个文件的相关进程  lsof 文件名
$ lsof /bin/bash
COMMAND  PID  USER  FD   TYPE DEVICE SIZE/OFF   NODE NAME
bash    9430 midou txt    REG  253,1   960392 140072 /usr/bin/bash
#查看某个用户打开的文件信息
$lsof -u username
#列出某个程序进程所打开的文件信息
$lsof -c java
#列出除了某个用户外的被打开的文件信息
$lsof -u ^midou
#通过某个进程号显示该进行打开的文件
$lsof -p pid
#列出除了某个进程号，其他进程号所打开的文件信息
$lsof -p ^pid
#列出所有的网络连接
$lsof -i
#列出所有tcp 网络连接信息
$lsof -i tcp
#列出所有udp网络连接信息
$lsof -i udp
#列出谁在某个端口使用情况
$lsof -i :port
#特定的tcp端口
$lsof -i tcp:port
#特定的udp端口
$lsof -i udp:port
#列出某个用户的所有活跃的网络端口
$lsof -a -u username -i
#根据文件描述符范围列出文件信息
$lsof -d 0-2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ping" tabindex="-1"><a class="header-anchor" href="#ping" aria-hidden="true">#</a> ping</h4><h4 id="ping-介绍" tabindex="-1"><a class="header-anchor" href="#ping-介绍" aria-hidden="true">#</a> ping 介绍</h4><blockquote><p>send ICMP ECHO_REQUEST packets to network hosts</p><p>将 ICMP ECHO_REQUEST 数据包发送到网络主机</p></blockquote><h4 id="ping-参数格式" tabindex="-1"><a class="header-anchor" href="#ping-参数格式" aria-hidden="true">#</a> ping 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> ping [-AaCDdfnoQqRrv] [-b boundif] [-c count] [-G sweepmaxsize] [-g sweepminsize] [-h sweepincrsize] [-i wait] [-k trafficclass] [-K netservicetype][-l preload] [-M mask | time] [-m ttl] [-P policy] [-p pattern] [-S src_addr] [-s packetsize] [-t timeout] [-W waittime] [-z tos] [--apple-connect][--apple-time] host
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="ping-命令参数" tabindex="-1"><a class="header-anchor" href="#ping-命令参数" aria-hidden="true">#</a> ping 命令参数</h4><p>-d 使用 Socket 的 SO_DEBUG 功能。</p><p>-f 极限检测。大量且快速地送网络封包给一台机器，看它的回应。</p><p>-n 只输出数值。</p><p>-q 不显示任何传送封包的信息，只显示最后的结果。</p><p>-r 忽略普通的 Routing Table，直接将数据包送到远端主机上。通常是查看本机的网络接口是否有问题。</p><p>-R 记录路由过程。</p><p>-v 详细显示指令的执行过程。</p><p>-c 数目：在发送指定数目的包后停止。</p><p>-i 秒数：设定间隔几秒送一个网络封包给一台机器，预设值是一秒送一次。</p><p>-I 网络界面：使用指定的网络界面送出数据包。</p><p>-l 前置载入：设置在送出要求信息之前，先行发出的数据包。</p><p>-p 范本样式：设置填满数据包的范本样式。</p><p>-s 字节数：指定发送的数据字节数，预设值是 56，加上 8 字节的 ICMP 头，一共是 64ICMP 数据字节。</p><p>-t 存活数值：设置存活数值 TTL 的大小。</p><p><strong>ping，在日常工作中都是简单的用来测试本机与其他机器之间的网络通信，当然如果了解这些参数的话，会有更多的用法。</strong></p><h4 id="ping-命令参数-1" tabindex="-1"><a class="header-anchor" href="#ping-命令参数-1" aria-hidden="true">#</a> ping 命令参数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#检测网络情况
$ping host
#ping网关
$ping -b host
#ping指定次数
$ping -c 10 host
#ping指定时间间隔和次数限制
$ping -c 10 -i 0.5 host
#通过域名ping公网上的站点
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="netstat" tabindex="-1"><a class="header-anchor" href="#netstat" aria-hidden="true">#</a> netstat</h3><h4 id="netstat-介绍" tabindex="-1"><a class="header-anchor" href="#netstat-介绍" aria-hidden="true">#</a> netstat 介绍</h4><blockquote><p>The netstat command symbolically displays the contents of various network-related data structures. There are a number of output formats, depending on the options for the information presented. The first form of the command displays a list of active sockets for each protocol. The second form presents the contents of one of the other network data structures according to the option selected. Using the third form, with a wait interval specified, netstat will continuously display the information regarding packet traffic on the configured network interfaces. The fourth form displays statistics for the specified protocol or address family. If a wait interval is specified, the protocol information over the last interval seconds will be displayed. The fifth form displays per-interface statistics for the specified protocol or address family. The sixth form displays mbuf(9) statistics. The seventh form displays routing table for the speci-fied address family. The eighth form displays routing statistics.</p><p>netstat 命令以符号形式显示各种与网络相关的数据结构的内容。有多种输出格式，具体取决于显示信息的选项。该命令的第一种形式显示每个协议的活动套接字列表。第二种形式根据选择的选项显示其他网络数据结构之一的内容。使用第三种形式，并指定等待间隔，netstat 将在配置的网络接口上连续显示有关数据包流量的信息。第四种形式显示指定协议或地址族的统计信息。如果指定了等待间隔，将显示最近间隔秒的协议信息。第五种形式显示指定协议或地址族的每个接口的统计信息。第六种形式显示 mbuf（9）统计信息。第七种形式显示指定地址系列的路由表。第八种形式显示路由统计信息。</p></blockquote><h4 id="netstat-参数格式" tabindex="-1"><a class="header-anchor" href="#netstat-参数格式" aria-hidden="true">#</a> netstat 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>     netstat [-AaLlnW] [-f address_family | -p protocol]
     netstat [-gilns] [-v] [-f address_family] [-I interface]
     netstat -i | -I interface [-w wait] [-c queue] [-abdgqRtS]
     netstat -s [-s] [-f address_family | -p protocol] [-w wait]
     netstat -i | -I interface -s [-f address_family | -p protocol]
     netstat -m [-m]
     netstat -r [-Aaln] [-f address_family]
     netstat -rs [-s]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="netstat-命令参数" tabindex="-1"><a class="header-anchor" href="#netstat-命令参数" aria-hidden="true">#</a> netstat 命令参数</h4><p>-a 或–all 显示所有连线中的 Socket。</p><p>-A&lt;网络类型&gt;或–&lt;网络类型&gt; 列出该网络类型连线中的相关地址。</p><p>-c 或–continuous 持续列出网络状态。</p><p>-C 或–cache 显示路由器配置的快取信息。</p><p>-e 或–extend 显示网络其他相关信息。</p><p>-F 或–fib 显示 FIB。</p><p>-g 或–groups 显示多重广播功能群组组员名单。</p><p>-h 或–help 在线帮助。</p><p>-i 或–interfaces 显示网络界面信息表单。</p><p>-l 或–listening 显示监控中的服务器的 Socket。</p><p>-M 或–masquerade 显示伪装的网络连线。</p><p>-n 或–numeric 直接使用 IP 地址，而不通过域名服务器。</p><p>-N 或–netlink 或–symbolic 显示网络硬件外围设备的符号连接名称。</p><p>-o 或–timers 显示计时器。</p><p>-p 或–programs 显示正在使用 Socket 的程序识别码和程序名称。</p><p>-r 或–route 显示 Routing Table。</p><p>-s 或–statistice 显示网络工作信息统计表。</p><p>-t 或–tcp 显示 TCP 传输协议的连线状况。</p><p>-u 或–udp 显示 UDP 传输协议的连线状况。</p><p>-v 或–verbose 显示指令执行过程。</p><p>-V 或–version 显示版本信息。</p><p>-w 或–raw 显示 RAW 传输协议的连线状况。</p><p>-x 或–unix 此参数的效果和指定”-A unix”参数相同。</p><p>–ip 或–inet 此参数的效果和指定”-A inet”参数相同。</p><h4 id="netstat-常用参数示例" tabindex="-1"><a class="header-anchor" href="#netstat-常用参数示例" aria-hidden="true">#</a> netstat 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#列出所有端口使用情况
$netstat -a
#显示当前UDP连接状况
$netstat -nu
#显示UDP端口号的使用情况
$netstat -apu
#显示网卡列表
$netstat -i
#显示网络统计信息
$netstat -s
#显示监听的套接口
$netstat -l
#显示所有已建立的有效连接
$netstat -n
#显示关于路由表的信息
$netstat -r
#列出所有 tcp 端口
$netstat -at
#找出程序运行的端口
$netstat -ap | grep ssh
#在 netstat 输出中显示 PID 和进程名称
$netstat -pt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ifconfig" tabindex="-1"><a class="header-anchor" href="#ifconfig" aria-hidden="true">#</a> ifconfig</h3><h4 id="ifconfig-介绍" tabindex="-1"><a class="header-anchor" href="#ifconfig-介绍" aria-hidden="true">#</a> ifconfig 介绍</h4><blockquote><p>Ifconfig is used to configure the kernel-resident network interfaces. It is used at boot time to set up interfaces as necessary. After that, it is usually only needed when debugging or when system tuning is needed.</p><p>Ifconfig 用于配置内核驻留的网络接口。它在引导时用于根据需要设置接口。之后，通常仅在调试或需要系统调整时才需要它。</p></blockquote><h4 id="ifconfig-参数格式" tabindex="-1"><a class="header-anchor" href="#ifconfig-参数格式" aria-hidden="true">#</a> ifconfig 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> ifconfig [-v] [-a] [-s] [interface]
 ifconfig [-v] interface [aftype] options | address ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ifconfig-命令参数" tabindex="-1"><a class="header-anchor" href="#ifconfig-命令参数" aria-hidden="true">#</a> ifconfig 命令参数</h4><p>up 启动指定网络设备/网卡。</p><p>down 关闭指定网络设备/网卡。该参数可以有效地阻止通过指定接口的 IP 信息流，如果想永久地关闭一个接口，我们还需要从核心路由表中将该接口的路由信息全部删除。</p><p>arp 设置指定网卡是否支持 ARP 协议。</p><p>-promisc 设置是否支持网卡的 promiscuous 模式，如果选择此参数，网卡将接收网络中发给它所有的数据包</p><p>-allmulti 设置是否支持多播模式，如果选择此参数，网卡将接收网络中所有的多播数据包</p><p>-a 显示全部接口信息</p><p>-s 显示摘要信息（类似于 netstat -i）</p><p>add 给指定网卡配置 IPv6 地址</p><p>del 删除指定网卡的 IPv6 地址</p><p>&lt;硬件地址&gt; 配置网卡最大的传输单元</p><p>mtu&lt;字节数&gt; 设置网卡的最大传输单元 (bytes)</p><p>netmask&lt;子网掩码&gt; 设置网卡的子网掩码。掩码可以是有前缀 0x 的 32 位十六进制数，也可以是用点分开的 4 个十进制数。如果不打算将网络分成子网，可以不管这一选项；如果要使用子网，那么请记住，网络中每一个系统必须有相同子网掩码。</p><p>tunel 建立隧道</p><p>dstaddr 设定一个远端地址，建立点对点通信</p><p>-broadcast&lt;地址&gt; 为指定网卡设置广播协议</p><p>-pointtopoint&lt;地址&gt; 为网卡设置点对点通讯协议</p><p>multicast 为网卡设置组播标志</p><p>address 为网卡设置 IPv4 地址</p><p>txqueuelen&lt;长度&gt; 为网卡设置传输列队的长度</p><h4 id="ifconfig-常用参数示例" tabindex="-1"><a class="header-anchor" href="#ifconfig-常用参数示例" aria-hidden="true">#</a> ifconfig 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#显示网络设备信息
$ifconfig
#启动关闭指定网卡
$ifconfig eth0 up
$ifconfig eth0 down
#配置IP地址
$ifconfig eth0 ip
#启用和关闭ARP协议
$ifconfig eth0 arp
$ifconfig eth0 -arp
#设置最大传输单元
$ifconfig eth0 mtu 1500
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="解释-1" tabindex="-1"><a class="header-anchor" href="#解释-1" aria-hidden="true">#</a> 解释</h5><ul><li>eth0 表示第一块网卡， 其中 HWaddr 表示网卡的物理地址</li><li>inet addr 用来表示网卡的 IP 地址</li><li>lo 是表示主机的回坏地址，这个一般是用来测试一个网络程序，但又不想让局域网或外网的用户能够查看，只能在此台主机上运行和查看所用的网络接口。</li></ul><blockquote><p>第一行：连接类型：Ethernet（以太网）HWaddr（硬件 mac 地址）</p><p>第二行：网卡的 IP 地址、子网、掩码</p><p>第三行：UP（代表网卡开启状态）RUNNING（代表网卡的网线被接上）MULTICAST（支持组播）MTU:1500（最大传输单元）：1500 字节</p><p>第四、五行：接收、发送数据包情况统计</p><p>第七行：接收、发送数据字节数统计信息。</p></blockquote><h3 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname" aria-hidden="true">#</a> hostname</h3><h4 id="hostname-介绍" tabindex="-1"><a class="header-anchor" href="#hostname-介绍" aria-hidden="true">#</a> hostname 介绍</h4><blockquote><p>Hostname is used to display the system&#39;s DNS name, and to display or set its hostname or NIS domain name.</p><p>主机名用于显示系统的 DNS 名称，并显示或设置其主机名或 NIS 域名。</p></blockquote><h4 id="hostname-参数格式" tabindex="-1"><a class="header-anchor" href="#hostname-参数格式" aria-hidden="true">#</a> hostname 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hostname [-a|--alias] [-d|--domain] [-f|--fqdn|--long] [-A|--all-fqdns] [-i|--ip-address] [-I|--all-ip-addresses] [-s|--short] [-y|--yp|--nis]
hostname [-b|--boot] [-F|--file filename] [hostname]
hostname [-h|--help] [-V|--version]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hostname-命令参数" tabindex="-1"><a class="header-anchor" href="#hostname-命令参数" aria-hidden="true">#</a> hostname 命令参数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-v：详细信息模式；
-a：显示主机别名；
-d：显示DNS域名；
-f：显示FQDN名称；
-i：显示主机的ip地址；
-s：显示短主机名称，在第一个点处截断；
-y：显示NIS域名。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hostname-常用参数示例" tabindex="-1"><a class="header-anchor" href="#hostname-常用参数示例" aria-hidden="true">#</a> hostname 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#查看主机ip,这个命令我最推荐的一个用法就是查看主机ip，之前我一直用ifconfig
$hostname -i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="traceroute" tabindex="-1"><a class="header-anchor" href="#traceroute" aria-hidden="true">#</a> traceroute</h3><h4 id="traceroute-介绍" tabindex="-1"><a class="header-anchor" href="#traceroute-介绍" aria-hidden="true">#</a> traceroute 介绍</h4><blockquote><p>traceroute tracks the route packets taken from an IP network on their way to a given host. It utilizes the IP protocol&#39;s time to live (TTL) field and attempts to elicit an ICMP TIME_EXCEEDED response from each gateway along the path to the host.</p><p>traceroute 跟踪从 IP 网络获取到给定主机的路由信息包。它利用 IP 协议的生存时间（TTL）字段并尝试从每个网关到主机的路径引发 ICMP TIME_EXCEEDED 响应。</p></blockquote><h4 id="traceroute-参数格式" tabindex="-1"><a class="header-anchor" href="#traceroute-参数格式" aria-hidden="true">#</a> traceroute 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> traceroute [-46dFITUnreAV] [-f first_ttl] [-g gate,...]
               [-i device] [-m max_ttl] [-p port] [-s src_addr]
               [-q nqueries] [-N squeries] [-t tos]
               [-l flow_label] [-w waittime] [-z sendwait] [-UL] [-D]
               [-P proto] [--sport=port] [-M method] [-O mod_options]
               [--mtu] [--back]
               host [packet_len]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="traceroute-命令参数" tabindex="-1"><a class="header-anchor" href="#traceroute-命令参数" aria-hidden="true">#</a> traceroute 命令参数</h4><p>-d 使用 Socket 层级的排错功能。</p><p>-f 设置第一个检测数据包的存活数值 TTL 的大小。</p><p>-F 设置勿离断位。</p><p>-g 设置来源路由网关，最多可设置 8 个。</p><p>-i 使用指定的网络界面送出数据包。</p><p>-I 使用 ICMP 回应取代 UDP 资料信息。</p><p>-m 设置检测数据包的最大存活数值 TTL 的大小。</p><p>-n 直接使用 IP 地址而非主机名称。</p><p>-p 设置 UDP 传输协议的通信端口。</p><p>-r 忽略普通的 Routing Table，直接将数据包送到远端主机上。</p><p>-s 设置本地主机送出数据包的 IP 地址。</p><p>-t 设置检测数据包的 TOS 数值。</p><p>-v 详细显示指令的执行过程。</p><p>-w 设置等待远端主机回报的时间。</p><p>-x 开启或关闭数据包的正确性检验。</p><h4 id="traceroute-常用参数示例" tabindex="-1"><a class="header-anchor" href="#traceroute-常用参数示例" aria-hidden="true">#</a> traceroute 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#traceroute 一下百度，看下数据包的路由途径
$ traceroute www.baidu.com
traceroute: Warning: www.baidu.com has multiple addresses; using 183.232.231.172
traceroute to www.baidu.com (183.232.231.172), 64 hops max, 52 byte packets
 1  192.168.0.1 (192.168.0.1)  6.059 ms  0.879 ms  0.843 ms
 2  192.168.1.1 (192.168.1.1)  1.305 ms  2.232 ms  2.167 ms
 3  10.104.0.1 (10.104.0.1)  5.085 ms  5.534 ms  4.466 ms
 4  221.131.253.13 (221.131.253.13)  4.633 ms  11.736 ms  4.199 ms
 5  117.148.181.1 (117.148.181.1)  4.544 ms *
    112.11.233.49 (112.11.233.49)  13.384 ms
 6  221.183.47.165 (221.183.47.165)  6.591 ms  6.643 ms
    221.183.47.161 (221.183.47.161)  5.591 ms
 7  * 221.183.40.225 (221.183.40.225)  27.242 ms  25.222 ms
 8  221.183.59.154 (221.183.59.154)  27.937 ms  27.501 ms  26.869 ms
 9  120.241.49.198 (120.241.49.198)  60.772 ms
    120.241.49.30 (120.241.49.30)  33.451 ms
    120.241.48.190 (120.241.48.190)  45.563 ms
10  * * *
11  * * *
12  * * *
13  * * *
14  * * *
15  * * *
16  * * *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="解释-2" tabindex="-1"><a class="header-anchor" href="#解释-2" aria-hidden="true">#</a> 解释</h5>`,694),v={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},u=n(`<p>有时我们 traceroute 一台主机时，会看到有一些行是以星号表示的。出现这样的情况，可能是防火墙封掉了 ICMP 的返回信息，所以我们得不到什么相关的数据包返回数据。</p><h3 id="route" tabindex="-1"><a class="header-anchor" href="#route" aria-hidden="true">#</a> route</h3><h4 id="route-介绍" tabindex="-1"><a class="header-anchor" href="#route-介绍" aria-hidden="true">#</a> route 介绍</h4><blockquote><p>Route manipulates the kernel&#39;s IP routing tables. Its primary use is to set up static routes to specific hosts or networks via an interface after it has been config‐ured with the ifconfig(8) program.</p><p>Route 操纵内核的 IP 路由表。它的主要用途是在使用 ifconfig（8）程序对其进行配置后，通过接口设置到特定主机或网络的静态路由。</p></blockquote><h4 id="route-参数格式" tabindex="-1"><a class="header-anchor" href="#route-参数格式" aria-hidden="true">#</a> route 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>route [-CFvnNee] [-A family |-4|-6]

route  [-v] [-A family |-4|-6] add [-net|-host] target [netmask Nm] [gw Gw] [metric N] [mss M] [window W] [irtt I] [reject] [mod] [dyn] [reinstate] [[dev] If]

route  [-v] [-A family |-4|-6] del [-net|-host] target [gw Gw] [netmask Nm] [metric N] [[dev] If]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="route-命令参数" tabindex="-1"><a class="header-anchor" href="#route-命令参数" aria-hidden="true">#</a> route 命令参数</h4><p>-c 显示更多信息</p><p>-n 不解析名字</p><p>-v 显示详细的处理信息</p><p>-F 显示发送信息</p><p>-C 显示路由缓存</p><p>-f 清除所有网关入口的路由表。</p><p>-p 与 add 命令一起使用时使路由具有永久性。</p><p>add:添加一条新路由。</p><p>del:删除一条路由。</p><p>-net:目标地址是一个网络。</p><p>-host:目标地址是一个主机。</p><h4 id="route-常用参数示例" tabindex="-1"><a class="header-anchor" href="#route-常用参数示例" aria-hidden="true">#</a> route 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#显示当前路由
$route
#屏蔽一条路由
$route add -net 224.0.0.0 netmask 240.0.0.0 reject
#删除路由记录
$route del -net 224.0.0.0 netmask 240.0.0.0
#删除和添加设置默认网关
$route del default gw 192.168.0.100
$route add default gw 192.168.0.100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wget" tabindex="-1"><a class="header-anchor" href="#wget" aria-hidden="true">#</a> wget</h3><h4 id="wget-介绍" tabindex="-1"><a class="header-anchor" href="#wget-介绍" aria-hidden="true">#</a> wget 介绍</h4><blockquote><p>GNU Wget is a free utility for non-interactive download of files from the Web. It supports HTTP, HTTPS, and FTP protocols, as well as retrieval through HTTP proxies.</p><p>GNU Wget 是一个免费实用程序，用于从 Web 非交互式下载文件。它支持 HTTP，HTTPS 和 FTP 协议，以及通过 HTTP 代理进行检索。</p></blockquote><h4 id="wget-参数格式" tabindex="-1"><a class="header-anchor" href="#wget-参数格式" aria-hidden="true">#</a> wget 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget [option]... [URL]...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="wget-命令参数" tabindex="-1"><a class="header-anchor" href="#wget-命令参数" aria-hidden="true">#</a> wget 命令参数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>启动：
  -V,  --version           显示 Wget 的版本信息并退出。
  -h,  --help              打印此帮助。
  -b,  --background        启动后转入后台。
  -e,  --execute=COMMAND   运行一个“.wgetrc”风格的命令。

日志和输入文件：
  -o,  --output-file=FILE    将日志信息写入 FILE。
  -a,  --append-output=FILE  将信息添加至 FILE。
  -d,  --debug               打印大量调试信息。
  -q,  --quiet               安静模式 (无信息输出)。
  -v,  --verbose             详尽的输出 (此为默认值)。
  -nv, --no-verbose          关闭详尽输出，但不进入安静模式。
  -i,  --input-file=FILE     下载本地或外部 FILE 中的 URLs。
  -F,  --force-html          把输入文件当成 HTML 文件。
  -B,  --base=URL            解析与 URL 相关的
                             HTML 输入文件 (由 -i -F 选项指定)。
       --config=FILE         Specify config file to use.

下载：
  -t,  --tries=NUMBER            设置重试次数为 NUMBER (0 代表无限制)。
       --retry-connrefused       即使拒绝连接也是重试。
  -O,  --output-document=FILE    将文档写入 FILE。
  -nc, --no-clobber              skip downloads that would download to
                                 existing files (overwriting them).
  -c,  --continue                断点续传下载文件。
       --progress=TYPE           选择进度条类型。
  -N,  --timestamping            只获取比本地文件新的文件。
  --no-use-server-timestamps     不用服务器上的时间戳来设置本地文件。
  -S,  --server-response         打印服务器响应。
       --spider                  不下载任何文件。
  -T,  --timeout=SECONDS         将所有超时设为 SECONDS 秒。
       --dns-timeout=SECS        设置 DNS 查寻超时为 SECS 秒。
       --connect-timeout=SECS    设置连接超时为 SECS 秒。
       --read-timeout=SECS       设置读取超时为 SECS 秒。
  -w,  --wait=SECONDS            等待间隔为 SECONDS 秒。
       --waitretry=SECONDS       在获取文件的重试期间等待 1..SECONDS 秒。
       --random-wait             获取多个文件时，每次随机等待间隔
                                 0.5*WAIT...1.5*WAIT 秒。
       --no-proxy                禁止使用代理。
  -Q,  --quota=NUMBER            设置获取配额为 NUMBER 字节。
       --bind-address=ADDRESS    绑定至本地主机上的 ADDRESS (主机名或是 IP)。
       --limit-rate=RATE         限制下载速率为 RATE。
       --no-dns-cache            关闭 DNS 查寻缓存。
       --restrict-file-names=OS  限定文件名中的字符为 OS 允许的字符。
       --ignore-case             匹配文件/目录时忽略大小写。
  -4,  --inet4-only              仅连接至 IPv4 地址。
  -6,  --inet6-only              仅连接至 IPv6 地址。
       --prefer-family=FAMILY    首先连接至指定协议的地址
                                 FAMILY 为 IPv6，IPv4 或是 none。
       --user=USER               将 ftp 和 http 的用户名均设置为 USER。
       --password=PASS           将 ftp 和 http 的密码均设置为 PASS。
       --ask-password            提示输入密码。
       --no-iri                  关闭 IRI 支持。
       --local-encoding=ENC      IRI (国际化资源标识符) 使用 ENC 作为本地编码。
       --remote-encoding=ENC     使用 ENC 作为默认远程编码。
       --unlink                  remove file before clobber.

目录：
  -nd, --no-directories           不创建目录。
  -x,  --force-directories        强制创建目录。
  -nH, --no-host-directories      不要创建主目录。
       --protocol-directories     在目录中使用协议名称。
  -P,  --directory-prefix=PREFIX  以 PREFIX/... 保存文件
       --cut-dirs=NUMBER          忽略远程目录中 NUMBER 个目录层。

HTTP 选项：
       --http-user=USER        设置 http 用户名为 USER。
       --http-password=PASS    设置 http 密码为 PASS。
       --no-cache              不在服务器上缓存数据。
       --default-page=NAME     改变默认页
                               (默认页通常是“index.html”)。
  -E,  --adjust-extension      以合适的扩展名保存 HTML/CSS 文档。
       --ignore-length         忽略头部的‘Content-Length’区域。
       --header=STRING         在头部插入 STRING。
       --max-redirect          每页所允许的最大重定向。
       --proxy-user=USER       使用 USER 作为代理用户名。
       --proxy-password=PASS   使用 PASS 作为代理密码。
       --referer=URL           在 HTTP 请求头包含‘Referer: URL’。
       --save-headers          将 HTTP 头保存至文件。
  -U,  --user-agent=AGENT      标识为 AGENT 而不是 Wget/VERSION。
       --no-http-keep-alive    禁用 HTTP keep-alive (永久连接)。
       --no-cookies            不使用 cookies。
       --load-cookies=FILE     会话开始前从 FILE 中载入 cookies。
       --save-cookies=FILE     会话结束后保存 cookies 至 FILE。
       --keep-session-cookies  载入并保存会话 (非永久) cookies。
       --post-data=STRING      使用 POST 方式；把 STRING 作为数据发送。
       --post-file=FILE        使用 POST 方式；发送 FILE 内容。
       --content-disposition   当选中本地文件名时
                               允许 Content-Disposition 头部 (尚在实验)。
       --auth-no-challenge     发送不含服务器询问的首次等待
                               的基本 HTTP 验证信息。

HTTPS (SSL/TLS) 选项：
       --secure-protocol=PR     选择安全协议，可以是 auto、SSLv2、
                                SSLv3 或是 TLSv1 中的一个。
       --no-check-certificate   不要验证服务器的证书。
       --certificate=FILE       客户端证书文件。
       --certificate-type=TYPE  客户端证书类型，PEM 或 DER。
       --private-key=FILE       私钥文件。
       --private-key-type=TYPE  私钥文件类型，PEM 或 DER。
       --ca-certificate=FILE    带有一组 CA 认证的文件。
       --ca-directory=DIR       保存 CA 认证的哈希列表的目录。
       --random-file=FILE       带有生成 SSL PRNG 的随机数据的文件。
       --egd-file=FILE          用于命名带有随机数据的 EGD 套接字的文件。

FTP 选项：
       --ftp-user=USER         设置 ftp 用户名为 USER。
       --ftp-password=PASS     设置 ftp 密码为 PASS。
       --no-remove-listing     不要删除‘.listing’文件。
       --no-glob               不在 FTP 文件名中使用通配符展开。
       --no-passive-ftp        禁用“passive”传输模式。
       --retr-symlinks         递归目录时，获取链接的文件 (而非目录)。

递归下载：
  -r,  --recursive          指定递归下载。
  -l,  --level=NUMBER       最大递归深度 (inf 或 0 代表无限制，即全部下载)。
       --delete-after       下载完成后删除本地文件。
  -k,  --convert-links      让下载得到的 HTML 或 CSS 中的链接指向本地文件。
  -K,  --backup-converted   在转换文件 X 前先将它备份为 X.orig。
  -m,  --mirror             -N -r -l inf --no-remove-listing 的缩写形式。
  -p,  --page-requisites    下载所有用于显示 HTML 页面的图片之类的元素。
       --strict-comments    用严格方式 (SGML) 处理 HTML 注释。

递归接受/拒绝：
  -A,  --accept=LIST               逗号分隔的可接受的扩展名列表。
  -R,  --reject=LIST               逗号分隔的要拒绝的扩展名列表。
  -D,  --domains=LIST              逗号分隔的可接受的域列表。
       --exclude-domains=LIST      逗号分隔的要拒绝的域列表。
       --follow-ftp                跟踪 HTML 文档中的 FTP 链接。
       --follow-tags=LIST          逗号分隔的跟踪的 HTML 标识列表。
       --ignore-tags=LIST          逗号分隔的忽略的 HTML 标识列表。
  -H,  --span-hosts                递归时转向外部主机。
  -L,  --relative                  只跟踪有关系的链接。
  -I,  --include-directories=LIST  允许目录的列表。
  --trust-server-names             use the name specified by the redirection
                                   url last component.
  -X,  --exclude-directories=LIST  排除目录的列表。
  -np, --no-parent                 不追溯至父目录。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数有点多，没关系，常用的掌握，其他的用的时候再查</strong></p><h4 id="wget-常用参数示例" tabindex="-1"><a class="header-anchor" href="#wget-常用参数示例" aria-hidden="true">#</a> wget 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#下载某个文件，wget 文件的地址
$wget https://blog.csdn.net/qq_38646470
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vmstat" tabindex="-1"><a class="header-anchor" href="#vmstat" aria-hidden="true">#</a> vmstat</h3><h4 id="vmstat-介绍" tabindex="-1"><a class="header-anchor" href="#vmstat-介绍" aria-hidden="true">#</a> vmstat 介绍</h4><blockquote><p>vmstat reports information about processes, memory, paging, block IO, traps, disks and cpu activity.</p><p>vmstat 报告有关进程，内存，页面调度，块 IO，陷阱，磁盘和 cpu 活动的信息。</p></blockquote><h4 id="vmstat-参数格式" tabindex="-1"><a class="header-anchor" href="#vmstat-参数格式" aria-hidden="true">#</a> vmstat 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vmstat [options] [delay [count]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="vmstat-命令参数" tabindex="-1"><a class="header-anchor" href="#vmstat-命令参数" aria-hidden="true">#</a> vmstat 命令参数</h4><p>-a：显示活跃和非活跃内存</p><p>-f：显示从系统启动至今的 fork 数量 。</p><p>-m：显示 slabinfo</p><p>-n：只在开始时显示一次各字段名称。</p><p>-s：显示内存相关统计信息及多种系统活动数量。</p><p>delay：刷新时间间隔。如果不指定，只显示一条结果。</p><p>count：刷新次数。如果不指定刷新次数，但指定了刷新时间间隔，这时刷新次数为无穷。</p><p>-d：显示磁盘相关统计信息。</p><p>-p：显示指定磁盘分区统计信息</p><p>-S：使用指定单位显示。参数有 k 、K 、m 、M ，分别代表 1000、1024、1000000、1048576 字节（byte）。默认单位为 K（1024 bytes）</p><h4 id="vmstat-常用参数示例" tabindex="-1"><a class="header-anchor" href="#vmstat-常用参数示例" aria-hidden="true">#</a> vmstat 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#显示虚拟内存情况
$ vmstat
procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 1  0      0 23764228 507816 36953948    0    0     3     5    0    0  1  0 98  0  0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="解释-3" tabindex="-1"><a class="header-anchor" href="#解释-3" aria-hidden="true">#</a> 解释</h5><p>Procs（进程）：</p><p>r: 运行队列中进程数量</p><p>b: 等待 IO 的进程数量</p><p>Memory（内存）：</p><p>swpd: 使用虚拟内存大小</p><p>free: 可用内存大小</p><p>buff: 用作缓冲的内存大小</p><p>cache: 用作缓存的内存大小</p><p>Swap：</p><p>si: 每秒从交换区写到内存的大小</p><p>so: 每秒写入交换区的内存大小</p><p>IO：（现在的 Linux 版本块的大小为 1024bytes）</p><p>bi: 每秒读取的块数</p><p>bo: 每秒写入的块数</p><p>系统：</p><p>in: 每秒中断数，包括时钟中断。</p><p>cs: 每秒上下文切换数。</p><p>CPU（以百分比表示）：</p><p>us: 用户进程执行时间(user time)</p><p>sy: 系统进程执行时间(system time)</p><p>id: 空闲时间(包括 IO 等待时间),中央处理器的空闲时间 。以百分比表示。</p><p>wa: 等待 IO 时间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#表示在3秒时间内进行3次采样。将得到一个数据汇总他能够反映真正的系统情况。
$vmstat 3 3
#查看系统fork多少次
$ vmstat -f
    166484246 forks
#查看内存使用的详细信息
$vmstat -s
#查看磁盘的读/写
$vmstat -d
#查看系统的slab信息
$vmstat -m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="free" tabindex="-1"><a class="header-anchor" href="#free" aria-hidden="true">#</a> free</h3><h4 id="free-介绍" tabindex="-1"><a class="header-anchor" href="#free-介绍" aria-hidden="true">#</a> free 介绍</h4><blockquote><p>free displays the total amount of free and used physical and swap memory in the system, as well as the buffers and caches used by the kernel.</p><p>free 显示系统中可用和可用的物理内存和交换内存的总量，以及内核使用的缓冲区和高速缓存。</p></blockquote><h4 id="free-参数格式" tabindex="-1"><a class="header-anchor" href="#free-参数格式" aria-hidden="true">#</a> free 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>free [options]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="free-命令参数" tabindex="-1"><a class="header-anchor" href="#free-命令参数" aria-hidden="true">#</a> free 命令参数</h4><p>-b 以 Byte 为单位显示内存使用情况。</p><p>-k 以 KB 为单位显示内存使用情况。</p><p>-m 以 MB 为单位显示内存使用情况。</p><p>-g 以 GB 为单位显示内存使用情况。</p><p>-o 不显示缓冲区调节列。</p><p>-s&lt;间隔秒数&gt; 持续观察内存使用状况。</p><p>-t 显示内存总和列。</p><h4 id="free-常用参数示例" tabindex="-1"><a class="header-anchor" href="#free-常用参数示例" aria-hidden="true">#</a> free 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#显示内存使用情况
$ free
              total        used        free      shared  buff/cache   available
Mem:       65808884     4582700    23754736         684    37471448    60913052
$ free -h
              total        used        free      shared  buff/cache   available
Mem:            62G        4.4G         22G        684K         35G         58G
Swap:            0B          0B          0B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="解释-4" tabindex="-1"><a class="header-anchor" href="#解释-4" aria-hidden="true">#</a> 解释</h5><p>total:总计物理内存的大小。</p><p>used:已使用多大。</p><p>free:可用有多少。</p><p>Shared:多个进程共享的内存总额。</p><p>Buffers/cached:磁盘缓存的大小。</p><p>第三行(-/+ buffers/cached):</p><p>used:已使用多大。</p><p>free:可用有多少。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#周期性的查询内存使用信息，5s执行一次
$ free -s 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="top" tabindex="-1"><a class="header-anchor" href="#top" aria-hidden="true">#</a> top</h3><h4 id="top-介绍" tabindex="-1"><a class="header-anchor" href="#top-介绍" aria-hidden="true">#</a> top 介绍</h4><blockquote><p>The top program provides a dynamic real-time view of a running system. It can display system summary information as well as a list of processes or threads currently being managed by the Linux kernel. The types of system summary information shown and the types, order and size of information displayed for processes are all user configurable and that configuration can be made persistent across restarts. The program provides a limited interactive interface for process manipulation as well as a much more extensive interface for personal configuration -- encompassing every aspect of its operation. And while top is referred to throughout this document, you are free to name the program anything you wish. That new name, possibly an alias, will then be reflected on top&#39;s display and used when reading and writing a configuration file.</p><p>top 程序提供正在运行的系统的动态实时视图。它可以显示系统摘要信息以及 Linux 内核当前正在管理的进程或线程的列表。所显示的系统摘要信息的类型以及为进程显示的信息的类型，顺序和大小都是用户可配置的，并且可以使配置在重新启动后保持不变。 该程序为流程操作提供了一个有限的交互式界面，并为个人配置提供了更为广泛的界面-涵盖了其操作的各个方面。尽管在本文档中始终引用 top，但是您可以随意为程序命名。然后，该新名称（可能是别名）将反映在顶部的显示屏上，并在读写配置文件时使用。</p></blockquote><h4 id="top-参数格式" tabindex="-1"><a class="header-anchor" href="#top-参数格式" aria-hidden="true">#</a> top 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>top -hv|-bcHiOSs -d secs -n max -u|U user -p pid -o fld -w [cols]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="top-命令参数" tabindex="-1"><a class="header-anchor" href="#top-命令参数" aria-hidden="true">#</a> top 命令参数</h4><p>-b 批处理</p><p>-c 显示完整的治命令</p><p>-I 忽略失效过程</p><p>-s 保密模式</p><p>-S 累积模式</p><p>-i&lt;时间&gt; 设置间隔时间</p><p>-u&lt;用户名&gt; 指定用户名</p><p>-p&lt;进程号&gt; 指定进程</p><p>-n&lt;次数&gt; 循环显示的次数</p><h4 id="top-常用参数示例" tabindex="-1"><a class="header-anchor" href="#top-常用参数示例" aria-hidden="true">#</a> top 常用参数示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#top
$ top
top - 00:56:07 up 149 days, 14:40,  1 user,  load average: 0.00, 0.02, 0.05
Tasks: 254 total,   1 running, 253 sleeping,   0 stopped,   0 zombie
%Cpu(s):  1.4 us,  0.3 sy,  0.0 ni, 98.3 id,  0.1 wa,  0.0 hi,  0.0 si,  0.0 st
KiB Mem : 65808884 total, 23749772 free,  4586160 used, 37472952 buff/cache
KiB Swap:        0 total,        0 free,        0 used. 60909608 avail Mem

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
24397 dongshan  20   0 17.972g 688312  13728 S   6.2  1.0   7:09.11 java
    1 root      20   0   42140   3684   1476 S   0.0  0.0  23:58.88 systemd
    2 root      20   0       0      0      0 S   0.0  0.0   0:05.47 kthreadd
    3 root      20   0       0      0      0 S   0.0  0.0   0:16.06 ksoftirqd/0
    5 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 kworker/0:0H
    7 root      rt   0       0      0      0 S   0.0  0.0   1:27.00 migration/0
    8 root      20   0       0      0      0 S   0.0  0.0   0:00.00 rcu_bh
    9 root      20   0       0      0      0 S   0.0  0.0   0:00.00 rcuob/0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="解释-5" tabindex="-1"><a class="header-anchor" href="#解释-5" aria-hidden="true">#</a> 解释</h5><p><strong>第一行，任务队列信息，同 uptime 命令的执行结果，具体参数说明情况如下：</strong></p><p>00:56:07 — 当前系统时间</p><p>up 149 days, 14:40 — 系统已经运行了 149 天 14 小时 40 分钟（在这期间系统没有重启过的）</p><p>1users — 当前有 1 个用户登录系统</p><p>load average: 0.00, 0.02, 0.05 — load average 后面的三个数分别是 1 分钟、5 分钟、15 分钟的负载情况。</p><p>load average 数据是每隔 5 秒钟检查一次活跃的进程数，然后按特定算法计算出的数值。如果这个数除以逻辑 CPU 的数量，结果高于 5 的时候就表明系统在超负荷运转了。</p><p><strong>第二行，Tasks — 任务（进程）</strong></p><p>系统现在共有 254 个进程，其中处于运行中的有 1 个，253 个在休眠（sleep），stoped 状态的有 0 个，zombie 状态（僵尸）的有 0 个。</p><p><strong>第三行，cpu 状态信息</strong></p><p>%Cpu(s): 1.4 us, 0.3 sy, 0.0 ni, 98.3 id, 0.1 wa, 0.0 hi, 0.0 si, 0.0 st</p><p>1.4 us — 用户空间占用 CPU 的百分比。</p><p>0.3 sy — 内核空间占用 CPU 的百分比。</p><p>0.0 ni — 改变过优先级的进程占用 CPU 的百分比</p><p>98.3 id — 空闲 CPU 百分比</p><p>0.1 wa — IO 等待占用 CPU 的百分比</p><p>0.0 hi — 硬中断（Hardware IRQ）占用 CPU 的百分比</p><p>0.0 si — 软中断（Software Interrupts）占用 CPU 的百分比</p><p><strong>第四行,内存状态</strong></p><p>65808884 total 物理内存总量</p><p>23749772 free 使用中的内存总量</p><p>4586160 used 空闲内存总量</p><p>37472952 buff/cache 缓存的内存量</p><p><strong>第五行，swap 交换分区信息</strong></p><p>0 total 交换区总量</p><p>0 use 使用的交换区总量</p><p>0 free 空闲交换区总量</p><p>60909608 avail Mem 可用交换区总量</p><p><strong>第七行以下：各进程（任务）的状态监控</strong></p><p>PID — 进程 id</p><p>USER — 进程所有者</p><p>PR — 进程优先级</p><p>NI — nice 值。负值表示高优先级，正值表示低优先级</p><p>VIRT — 进程使用的虚拟内存总量，单位 kb。VIRT=SWAP+RES</p><p>RES — 进程使用的、未被换出的物理内存大小，单位 kb。RES=CODE+DATA</p><p>SHR — 共享内存大小，单位 kb</p><p>S — 进程状态。D=不可中断的睡眠状态 R=运行 S=睡眠 T=跟踪/停止 Z=僵尸进程</p><p>%CPU — 上次更新到现在的 CPU 时间占用百分比</p><p>%MEM — 进程使用的物理内存百分比</p><p>TIME+ — 进程使用的 CPU 时间总计，单位 1/100 秒</p><p>COMMAND — 进程名称（命令名/命令行）</p><h3 id="sar" tabindex="-1"><a class="header-anchor" href="#sar" aria-hidden="true">#</a> sar</h3><h4 id="sar-介绍" tabindex="-1"><a class="header-anchor" href="#sar-介绍" aria-hidden="true">#</a> sar 介绍</h4><blockquote><p>sar（System Activity Reporter 系统活动情况报告）是目前 Linux 上最为全面的系统性能分析工具之一，可以从多方面对系统的活动进行报告，包括：文件的读写情况、 系统调用的使用情况、磁盘 I/O、CPU 效率、内存使用状况、进程活动及 IPC 有关的活动等。</p></blockquote><h4 id="sar-参数格式" tabindex="-1"><a class="header-anchor" href="#sar-参数格式" aria-hidden="true">#</a> sar 参数格式</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sar [options] [-A] [-o file] t [n]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="sar-命令参数" tabindex="-1"><a class="header-anchor" href="#sar-命令参数" aria-hidden="true">#</a> sar 命令参数</h4><p>-A：所有报告的总和</p><p>-u：输出 CPU 使用情况的统计信息</p><p>-v：输出 inode、文件和其他内核表的统计信息</p><p>-d：输出每一个块设备的活动信息</p><p>-r：输出内存和交换空间的统计信息</p><p>-b：显示 I/O 和传送速率的统计信息</p><p>-a：文件读写情况</p><p>-c：输出进程统计信息，每秒创建的进程数</p><p>-R：输出内存页面的统计信息</p><p>-y：终端设备活动情况</p><p>-w：输出系统交换活动信息</p>`,172);function o(h,m){const a=l("ExternalLinkIcon");return s(),r("div",null,[p,i("p",null,[e("记录按序列号从 1 开始，每行纪录就是一跳 ，每跳表示一个网关，我们看到每行有三个时间，单位是 ms，其实就是-q 的默认参数。探测数据包向每个网关发送三个数据包后，网关响应后返回的时间；如果您用 traceroute -q 10 "),i("a",v,[e("www.baidu.com"),t(a)]),e("，表示向每个网关发送10个数据包。")]),u])}const f=d(c,[["render",o],["__file","Linux初级指令.html.vue"]]);export{f as default};
