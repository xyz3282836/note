import{_ as b}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as p,c as n,b as r,d as t,e as s,a}from"./app-6f5bc1f7.js";const l={},o=a('<h1 id="linux-命令杂项" tabindex="-1"><a class="header-anchor" href="#linux-命令杂项" aria-hidden="true">#</a> linux 命令杂项</h1><h2 id="linux-个人笔记" tabindex="-1"><a class="header-anchor" href="#linux-个人笔记" aria-hidden="true">#</a> linux 个人笔记</h2><h3 id="_1-终端控制台-最多同时开六个终端控制台" tabindex="-1"><a class="header-anchor" href="#_1-终端控制台-最多同时开六个终端控制台" aria-hidden="true">#</a> 1.终端控制台：最多同时开六个终端控制台</h3><p>Alt+F1~Alt+F6 切换控制台</p><p>运行级别：init 0123456<br> 0：关机<br> 1：单用户<br> 2：多用户无网络<br> 3：多用户有网络（常用）<br> 4：系统未使用保留给用户<br> 5：图形界面<br> 6：系统重启</p><p>3 和 5 比较常用</p><p>启动文件放置路径 /etc/inittab</p><p>runlevel 查看运行级别<br> init num 切换运行级别</p><p>logout exit 注销<br> startx 注销重启进入 5 图形界面</p><p>关机：之前最好将数据同步写入硬盘 sync<br> init 0<br> shutdown -h now 关机后停止系统<br> shutdown -h 1 一分钟后关机<br> halt</p><p>重启：<br> init 6<br> shutdown -r now<br> reboot</p><h3 id="_2-文件系统" tabindex="-1"><a class="header-anchor" href="#_2-文件系统" aria-hidden="true">#</a> 2.文件系统</h3><p>目录 root boot home bin sbin mnt etc var</p><p>/：根目录<br> /bin：常用命令<br> /sbin：超级命令，需要权限</p><p>/home：普通用户相关文件 /home/root/.bash_profile 用户变量<br> /root：root 用户相关文件</p><p>/boot：引导相关的文件</p><p>/dev：设备文件存储目录</p><p>/mnt：临时文件系统挂载点，挂载光驱、软驱 /mnt/cdrom/<br> /media：即插即用型存储设备的挂载点，比如 U 盘、CDROM/DVD</p><p>/lib：库文件和内核模块所存放的目录</p><p>/etc：配置相关文件<br> /etc/profile 环境变量文件<br> /etc/passwd 用户的属性记录<br> /etc/inittab 系统初始化脚本 修改运行默认级别<br> /etc/rc.d/init.d/ 所有的服务启动文件被储存在此目录下<br> /etc/rc.d/rc.sysinit 系统默认配置</p><p>/etc/sysconfig/i18n 修改 linux 语言环境<br> /etc/sysconfig/network 修改网卡信息</p><p>/usr：非常大，所有系统软件都安装在此，系统软件默认安装目录类似 windows 的 program file<br> /opt：第三方软件目录</p><p>/tmp：系统的临时目录</p><p>/var：变化的文件如日志文件和用户邮件</p><p>/srv：存放一些服务启动后需要提取的数据</p><p>/swap：用来创建虚拟内存</p><h3 id="_3-shell-命令" tabindex="-1"><a class="header-anchor" href="#_3-shell-命令" aria-hidden="true">#</a> 3.shell 命令</h3><p>-h<br> --help -字母 参数是空格加参数<br> --单词（长命令），用=接参数</p><p>pwd 显示当前所在的目录<br> dir 查看所有目录</p><p>cd 切换目录<br> cd.<br> cd..<br> cd~ 用户 home 目录<br> cd- 上一个目录</p><p>mkdir 目录创建<br> mkdir a 建立目录<br> mkdir -p a/b/c</p><p>touch 创建空文件和更改时间戳<br> touch a.txt<br> touch -d 20140122</p><p>rmdir 删除空目录</p><p>mv 移动文件和改文件名<br> mv oldname newname<br> mv 文件名（可以多个） 新目录</p><p>rm 删除文件和目录<br> rm -rf abc 删除所有内容 r 递归 f 强制</p><p>cp 复制命令<br> cp -r dir1 dir2 递归复制，复制子目录信息<br> cp mysql-* /home/</p><p>tree 显示文件和目彔树<br> -a 不隐藏任何以.字符开始的条目<br> -d 只显示目录不显示文件<br> -f 每个文件都显示路径<br> -t 根据最后修改时间排序<br> -L n 只显示 n 层目录</p><p>ll 列出来的结果详细，有时间，是否可读写等信息，像 windows 里的 详细信息</p><p>ls 只列出文件名或目录名，就象 windows 里的列表<br> ls -a 显示隐藏目录<br> ls -t 按修改时间先后显示<br> ls -l 排列所有目录<br> ls -R<br> ls -S 以文件大小排序<br> ls -m 横向输出文件名，并以，作分格符<br> ls -la 混合<br> ls -lah</p><p>查询的结果输入到 a.txt 中<br> 写入操作很灵活<br> ls -l &gt; a.txt 覆盖写<br> ls -la &gt;&gt; a.txt 追加写<br> grep -n &#39;a&#39; a.txt &gt; b.txt<br> 输出 a.txt &lt; b.txt</p><p>蓝色：目录<br> 绿色：可执行文件<br> 红色：压缩文件<br> 浅蓝色：链接文件<br> 灰色：其他文件</p>',41),d={id:"_4-vi-编辑器",tabindex:"-1"},c=r("a",{class:"header-anchor",href:"#_4-vi-编辑器","aria-hidden":"true"},"#",-1),m={href:"http://4.vi",target:"_blank",rel:"noopener noreferrer"},Q=a(`<p>查看文件<br> vi hello.java<br> cat hello.java</p><p>一、首先进入命令模式<br> 二、a i o 进入输入模式</p><p>x 删除光标后面的字符<br> x 删除光标后的＃个字符</p><p>X (大写 X)，删除光标前面的字符<br> X 删除光标前面的#个字符</p><p>dd 删除光标所在的行<br> dd 删除从光标所在行数的#行</p><p>yw 复制光标所在位置的一个字<br> yw 复制光标所在位置的#个字</p><p>yy 复制光标所在位置的一行<br> yy 复制从光标所在行数的#行</p><p>p 粘贴<br> u 取消操作<br> cw 更改光标所在位置的一个字</p><p>cw 更改光标所在位置的#个字</p><p>「r」：替换光标所在处的字符。<br> 「R」：替换光标所到之处的字符，直到按下「ESC」键为止。<br> 「u」：如果您误执行一个命令，可以马上按下「u」，回到上一个操作。<br> 按多次“u”可以执行多次回复。</p><p>三、esc(按键) 进入末行模式 Last line mode<br> :<br> wq 退出保存<br> q！退出不保存 强退<br> w filename 将文章以指定的文件名 filename 保存</p><h3 id="_5-linux-账号" tabindex="-1"><a class="header-anchor" href="#_5-linux-账号" aria-hidden="true">#</a> 5.linux 账号</h3><p>u g o a<br> useradd ruizhou 添加用户<br> -u UID 用来指定 UID<br> -g GROUP 定义用户的主要群组，GROUP 必须已经存在<br> -G GROUP 指定用户的次要群组，可以指定多个次要群组，每个用,相连<br> -d HOME 指定用户的主目彔<br> -s SHELL 指定用户登入执行的程序<br> -r 建立一个系统用户的账号</p><p>passwd ruizhou 给添加用户设置密码</p><p>userdel ruizhou 删除用户<br> userdel -r ruizhou 删除用户及其用户主目录</p><p>高权限者 root 才能改变用户所在组<br> usermod<br> -u UID rz<br> -g GROUP rz<br> -G GROUP rz<br> -d HOME rz 改变用户登入的初始目录<br> -s SHELL rz<br> -l newname rz<br> -L rz<br> -U rz</p><p>groupadd<br> -g GID groupname 指定群组账号的标识符<br> -r groupname 指定添加的群组成为系统群组<br> -f groupname 强制执行</p><p>groupmod<br> -g GID groupname<br> -n newname groupname</p><p>groupdel groupname</p><h3 id="_6-文件管理" tabindex="-1"><a class="header-anchor" href="#_6-文件管理" aria-hidden="true">#</a> 6.文件管理</h3><p>Linux 下的文件可以分为 5 种不同的类型：普通文件、目录文件、链接文<br> 件、设备文件和管道文件。</p><p>白色：普通文件<br> 红色：压缩文件<br> 蓝色：目录文件<br> 浅蓝色：链接文件<br> 黄色：设备文件（/dev）<br> 绿色：可执行文件（/bin、/sbin）<br> 粉红色：图片文件</p><p>cat 显示文件内容<br> file 显示文件类型</p><p>查找文件<br> find / -name hello.java</p><p>查找文件内容<br> more a.tex | grep -n &#39;abc&#39; abc 出现以及行数<br> less 同上</p><p>实例：<br> javac hello.java 编译（会生成 hello.class 文件） | gcc hello.cpp 编译（C++，生成 a.out）--- 可以改进：gcc -o nwename hello.cpp (没有.out)</p><p>java hello 运行（运行的是.class 文件也就是编译后的文件）| ./a.out (a.out 自动生成，文件名&#39;a&#39;也是)</p><p>head -n file<br> tail -n file<br> tail -f file 监视文件</p><p>drwxrwxrwx<br> d l - | c b p s<br> r 读（查看文件）<br> w 写（删建文件、重命名）<br> x 执行（进入目录）</p><p>文件的权限变更 操作用户：root 用户和文件的所有者<br> chmod {u,g,o,a} {+,-,=} {r,w,x} filename<br> chmod {777-111} filename</p><p>chmod 755 abc 0:--- 1:--x 2:-w- 3:-wx 4:r-- 5:r-x 6:rw- 7:rwx<br> chmod u=rwx,g=rx,o=rx abc<br> chmod u-x,g+w abc</p><p>改变文件拥有者和拥有组 操作用户：root<br> chown ruizhou abc<br> chown rz:admin abc.txt 或者 chown rz.admin abc.txt<br> chown ruizhou ./abc<br> chown -R ruizhou ./abc 包含子文件（夹）</p><p>改变文件用户组 操作用户：root 用户和文件的所有者（必须是组成员）<br> chgrp admin abc</p><p>文件相关知识<br> i-节点的信息，一个文件的 i-节点信息集合叫做该文件的状态（startus）<br> stat a.txt</p><p>硬链接 同一个文件保存在两个地方或不同的文件名 两个文件是同一个文件，不是快捷方式<br> ln /etc/inittab（目标文件） inittab（链接文件）<br> 软链接 类似快捷方式 通过一个文件来访问目标文件<br> ln -s /etc/inittab inittab</p><p>find {搜索目录} {搜索条件} [动作]<br> -size n 文件的大小<br> -type 文件的类型（f 普通、d 目录、i 软连接）<br> -name：按照文件名查找文件。支持统配符*和？<br> -user： 按照文件属主来查找文件<br> -group：按照文件所属的组来查找文件<br> -mtime n：按照文件的更改时间来查找文件<br> -atime n：搜索在过去 n 天读取过的文件<br> -ctime n：搜索在过去 n 天修改过的文件</p><p>-mtime +n ：列出在 n 天前(不含 n 天本身)被更改过内容的文件名<br> -mtime -n ：列出在 n 天内(含 n 天本身)被更改过内容的文件名<br> -print：输出搜索结果，并且打印</p><p>find /home -size +10k<br> find /etc -name &#39;*ab&#39;<br> find /etc -size +500000c(字节) -and -mtime +1</p><p>-exec command {} \\ ;<br> -ok command {} \\ ; 与-exec 相同，但是提示确认没个文件的操作</p><p>find /root -name 1.txt -exec ls -l {} ;<br> find /root -name 1.txt -ok -exec rm {} ;</p><p>压缩文件<br> gzip .gz<br> gzip -c file 将输出重定向到标准输出<br> gzip -d file 解压缩文件<br> gzip -r file<br> gzip -1...9 file</p><p>bzip .bz<br> bzip -c file 将输出重定向到标准输出<br> bzip -d file 解压缩文件</p><p>文件归档 tar<br> 文件归档可以把整个目录树保存在同一个文件中<br> tar 命令用于创建、列出、抽取归档文件<br> 归档文件通常也会一并压缩</p><p>tar [op] file<br> -c 创建归档文件<br> -x 释放文档<br> -v 显示详细信息<br> -f 文件名（可带路径）<br> -z 使用 gzip 压缩<br> -j 使用 bzip2 压缩</p><p>tar zcvf 1.tar.gz 1/ 目录<br> tar jcvf 2.tar.bz2 2/<br> tar jcvf a.tar.bz2 a.txt 文件</p><h3 id="_7-启动流程" tabindex="-1"><a class="header-anchor" href="#_7-启动流程" aria-hidden="true">#</a> 7.启动流程</h3><h3 id="_8-linux-服务" tabindex="-1"><a class="header-anchor" href="#_8-linux-服务" aria-hidden="true">#</a> 8.linux 服务</h3><p>系统服务<br> 网络服务</p><p>/etc/rc.d/init.d/里面每一个文件就是某一个服务的启劢程序文件</p><p>-start： 启动这个服务<br> -stop： 停止这个服务<br> -restart： 先停止，再启动，也就是重新启动的意思。<br> -reload： 重载配置文件，这个参数只有在服务已经启动的状况下才能使用<br> -condrestart：有条件的重新启动，这个服务必须是已经启动的，才会被<br> 重新启动；如果这个服务尚未启动，则无须启动之<br> -status： 查看目前服务的启动状态<br> ./sshd status</p><p>服务操作快捷命令<br> service filename action(start stop status)</p><p>守护进程<br> /etc/xinetd.d<br> service xinetd start/stop/status</p><p>服务自启动<br> chkconfig<br> chkconfig --list<br> chkconfig --add httpd<br> chkconfig --del httpd<br> chkconfig --list mysqld 查看 mysqld 在 7 种模式下的自启动结果<br> chkconfig --level 35 mysqld on 设定<br> chkconfig mysqld on 2345 自启动</p><p>进程管理<br> ps<br> ps aux/lax<br> auxf 加个 f，可以查看父子进程关系<br> ps aux 静态</p><p>top 可动态</p><p>top -d 10 10s 刷新一次<br> top root 只看 root 用户的</p><p>退出 top<br> ctrl+c</p><p>pgrep 是通过程序的名字来查询进程的工具<br> pgrep -l httpd<br> pgrep -ln httpd<br> pgrep -lo httpd<br> pgrep httpd</p><p>终止进程的工具 kill 、killall、pkill<br> kill pid 单独进程杀死<br> kill 135 或者 kill -s 135<br> kill -9 135<br> pkill/killall 正在运行的程序名</p><p>软件包管理<br> 软件安装<br> rpm 参数 软件包<br> -i：安装。<br> -U：升级安装，如果不存在也安装。<br> -F：更新安装，如果不存在也安装。<br> -v：查看信息。<br> -h：有进度条。<br> --replacepkgs：强制覆盖安装。<br> --nodeps：不考虑相依属性。<br> -q &lt;软件名&gt;：查询。<br> -qa：查询所有。<br> -ql &lt;软件名&gt;：列出软件的文件清单。<br> -qi &lt;软件名&gt;：列出软件信息。<br> -qf &lt;文件名&gt;：查询文件所属软件。<br> -e &lt;软件名&gt;：删除软件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> bind-9.3.6-4.P1.el5_4.2.i386.rpm<span class="token comment">#安装</span>
<span class="token function">rpm</span> -Uvh/Fvh bind-9.3.6-4.P1.el5_4.2.i386.rpm <span class="token comment">#升级安装</span>
<span class="token function">rpm</span> <span class="token parameter variable">-e</span> bind-9.3.6-4.P1.el5_4.2.i386 <span class="token comment">#删除软件包</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qpi</span> _.rpm <span class="token comment">#查看软件包里的内容</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qpl</span> _.rpm <span class="token comment">#查看软件包将会在系统里安装哪些部分</span>
<span class="token function">rpm</span> –qa <span class="token comment">#列出所有被安装的 rpm 软件包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>挂载<br> mount /mnt/cdrom/<br> 卸载<br> umount /mnt/cdrom/</p><p>yum 源制作本地源和 163 网络源<br> 配置/etc/yum.repos.d/server.repo</p>`,63),h=r("br",null,null,-1),T={href:"http://mirrors.163.com/.help/CentOS6-Base-163.repo",target:"_blank",rel:"noopener noreferrer"},u=a("<p>文件系统<br> 查看系统分区情况<br> fdisk -l</p><p>查看磁盘使用情况<br> df -l<br> df -h<br> df -b<br> 查看目录在哪个分区<br> df 目录</p><p>du -sh 统计目录（戒文件）所占磁盘空间的大小</p><p>date<br> date //显示当前日期</p><p>date -s //设置当前时间，只有 root 权限才能设置，其他只能查看。</p><p>date -s 20061010 //设置成 20061010，这样会把具体时间设置成空 00:00:00</p><p>date -s 12:23:23 //设置具体时间，丌会对日期做更改</p><p>date -s “12:12:23 2006-10-10″ //这样可以设置全部时间</p><p>hwclock –w 把当前系统时间写入到 cmos 芯片</p><p>网络时间协议 ntp<br> ntpdate 服务器地址<br> vi /etc/ntp/ntpservers 直接写入服务器即可</p><p>设置语言<br> locale 查看目前语言系统环境<br> $HOME/.i18n 更改用户自己的语言环境</p><p>查看目前使用的环境变量：shell<br> env</p><p>切换 shell<br> chsh -s /bin/csh</p><p>man 指令<br> 找帮助 /p 查找帮助中的关键字，然后键盘 n 就是向下翻</p><p>lamp 环境搭建<br> 环境开发包</p><p>.bin<br> ./*.bin</p><p>.tar.gz<br> .tar.bz<br> tar -zxvf *<strong>*.tar.gz<br> tar -jxvf **</strong>.tar.bz<br> ./configure --prefix=/opt<br> make<br> make install<br> 查询安装软件的信息<br> rpm -qa | more<br> rpm -qa | grep xxx</p><p>rpm -q mysql<br> rpm -q xinetd<br> rpm -q foo<br> rpm -q xinetd file bash</p><p>rpm -qi file</p><p>rpm -ql file<br> rpm -ql jdk</p><p>rpm -qf 文件全路径名<br> rpm -qp 包文件名</p><p>rpm -ivh 包全路径名<br> install 安装 verbose 提示 hash 进度条</p><p>rpm -e rpm 包名称<br> 强制卸载<br> rpm -e --nodeps prm 包名称</p><p>安装 samba</p><p>设置 samba<br> smbpasswd -a 已存在的 linux 用户名</p>",25),g=r("br",null,null,-1),x={href:"http://mksmbpasswd.sh",target:"_blank",rel:"noopener noreferrer"},f=r("br",null,null,-1),_=a("<p>启动<br> service smb start/stop/restart</p><p>软件装好后启动<br> 到该软件安装目录下，找到可执行文件 如 .ini<br> ./eclipse &amp; 以后台方式启动，释放控制台给用户</p><p>最近执行的 5 个命令<br> history 5</p><p>历史执行命令列表的快捷执行<br> !480 执行编号为 480 的历史执行命令<br> !ls 执行最近一次以 ls 开头的命令</p><p>设置网络三种方法<br> 1 图形操作<br> setup</p><p>需要 /etc/rc.d/init.d/network restart</p><p>2 立即生效，注销后会恢复之前的设置<br> ifconfig eth0 address x.x.x.x netmask x.x.x.x<br> 或者 ifconfig eth0 x.x.x.x 只配 ip</p><p>3 根源文件修改<br> /etc/sysconfig/network-scripts/ifcfg-eth0</p><p>需要 /etc/rc.d/init.d/network restart</p><p>任务调度<br> crontab -e<br> M h D m d program *为每一<br> 终止任务调度<br> crontab -r<br> 列出当前有哪些任务调度<br> crontab -l<br> ////////////////////////////////////</p><p>!/bin/bash</p><p>extdir=&#39;/home/mysql/backup/&#39;;<br> extbase=&#39;auto<em>databasename</em>&#39;<code>date &#39;+%F&#39;</code>;echo $extbase;<br> extfile=&#39;auto<em>databasename</em>&#39;<code>date &#39;+%F&#39;</code>&#39;.sql&#39;;echo $extfile;</p>",12),w=r("br",null,null,-1),v=r("br",null,null,-1),k={class:"MathJax",jax:"SVG",style:{position:"relative"}},z={style:{"vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.143ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 2715 705","aria-hidden":"true"},y=a('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"></path></g><g data-mml-node="mi" transform="translate(466,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path></g><g data-mml-node="mi" transform="translate(1038,0)"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"></path></g><g data-mml-node="mi" transform="translate(1399,0)"><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"></path></g><g data-mml-node="mi" transform="translate(1919,0)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(2264,0)"><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g></g></g>',1),H=[y],q=r("mjx-assistive-mml",{unselectable:"on",display:"inline"},[r("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[r("mi",null,"e"),r("mi",null,"x"),r("mi",null,"t"),r("mi",null,"d"),r("mi",null,"i"),r("mi",null,"r")])],-1),L=r("br",null,null,-1),M=r("br",null,null,-1),j=r("em",null,"file='auto_databasename",-1),D=r("code",null,"date '+%F' --date='7 days ago'",-1),Z=r("br",null,null,-1),E=r("br",null,null,-1),G={class:"MathJax",jax:"SVG",style:{position:"relative"}},S={style:{"vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.143ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 2715 705","aria-hidden":"true"},U=a('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"></path></g><g data-mml-node="mi" transform="translate(466,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path></g><g data-mml-node="mi" transform="translate(1038,0)"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"></path></g><g data-mml-node="mi" transform="translate(1399,0)"><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"></path></g><g data-mml-node="mi" transform="translate(1919,0)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(2264,0)"><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g></g></g>',1),I=[U],O=r("mjx-assistive-mml",{unselectable:"on",display:"inline"},[r("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[r("mi",null,"e"),r("mi",null,"x"),r("mi",null,"t"),r("mi",null,"d"),r("mi",null,"i"),r("mi",null,"r")])],-1),C=a("<ul><li>3 * * * /usr/share/jetty6/cron/mysql_databasename_backup.sh &gt; /usr/share/jetty6/cron/mysql_autoback_cron_log.txt</li></ul><p>crontab mysql_autoback_cron.sh</p><p>netstat -an<br> -a (all)显示所有选项，默认不显示 LISTEN 相关<br> -t (tcp)仅显示 tcp 相关选项<br> -u (udp)仅显示 udp 相关选项<br> -n 拒绝显示别名，能显示数字的全部转化成数字。<br> -l 仅列出有在 Listen (监听) 的服務状态</p><p>-p 显示建立相关链接的程序名<br> -r 显示路由信息，路由表<br> -e 显示扩展信息，例如 uid 等<br> -s 按各个协议进行统计<br> -c 每隔一个固定时间，执行该 netstat 命令。<br> 提示：LISTEN 和 LISTENING 的状态只有用-a 或者-l 才能看到</p><p>进入 mysql<br> cd bin<br> ./mysql -u root -p<br> 退出 mysql<br> quit 或者 exit</p><p>备份恢复都不要在 mysql&gt; 下进行<br> 备份 多库 d1,d2,d3<br> 多表 d1.tab,d1.user<br> 退出，在 bin 目录下执行，如有环境变量设置过，则任意目录</p><p>ssh</p><p>netstat -anp 多一个 p 可以显示 pid 进程 id</p><p>.bashrc 配置</p><p>临时加入一个路径<br> export PATH=$PATH:/root/</p><p>显示系统当前所有定义的 alias<br> alias</p><p>定义 alias<br> alias cl=&#39;ls -l /home&#39;</p><p>压缩</p><p>zip a.zip 文件名<br> zip a.zip 文件 1 文件 2<br> zip -r a.zip 文件夹名路径</p><p>参数 -m 删除原文件（夹）<br> -r<br> 下面用的很少<br> -j 忽略子目录内容<br> -n 将已压缩或者没有必要压缩的文件去掉<br> zip -n .mpg: .jpg: .gif</p><p>解压<br> unzip 文件名</p><p>查看压缩包<br> unzip -Z 压缩文件名</p><p>chkconfig</p><p>chkconfig networkmange off</p>",19);function P(F,R){const e=i("ExternalLinkIcon");return p(),n("div",null,[o,r("h3",d,[c,t(),r("a",m,[t("4.vi"),s(e)]),t(" 编辑器")]),Q,r("p",null,[t("下载方式："),h,t(" wget "),r("a",T,[t("http://mirrors.163.com/.help/CentOS6-Base-163.repo"),s(e)])]),u,r("p",null,[t("加所有用户加入 samba 服务器中"),g,t(" cat /etc/passwd | "),r("a",x,[t("mksmbpasswd.sh"),s(e)]),t(" > /etc/smb/smbpasswd （.sh 为脚本可执行）"),f,t(" smbpasswd -s 已存在的 linux 用户名 (或者去掉'-s')")]),_,r("p",null,[t('echo "开始备份数据..."'),w,t(" cd $extdir"),v,t(" mysqldump --opt databasename -u username -ppassword | gzip > "),r("mjx-container",k,[(p(),n("svg",z,H)),q]),t("extfile.gz"),L,t(' echo "删除本地 7 天前的备份数据..."'),M,t(" old"),j,t("'"),D,t("'.*'"),Z,t(" echo $old_file"),E,t(" rm -rf "),r("mjx-container",G,[(p(),n("svg",S,I)),O]),t("old_file")]),C])}const B=b(l,[["render",P],["__file","linux命令杂项.html.vue"]]);export{B as default};
