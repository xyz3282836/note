import{_ as s,X as t,Y as h,$ as e,a0 as l}from"./framework-418c825b.js";const _={},n=e("h1",{id:"执行-shell-的三种方式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#执行-shell-的三种方式","aria-hidden":"true"},"#"),l(" 执行 shell 的三种方式")],-1),o=e("p",null,"./script-name (fork 方式) 运行的时候 terminal 会新开一个子 Shell 执行脚本，子 Shell 执行的时候, 父 Shell 还在。子 Shell 执行完毕后返回父 Shell。子 Shell 从父 Shell 继承环境变量，但是子 Shell 中的环境变量不会带回父 Shell。",-1),a=e("p",null,"bash ./script-name 当前 shell 启动一个子进程执行程序，不会对当前 shell 有影响",-1),c=e("p",null,[l("source ./script-name or . ./script-name 与 "),e("code",null,"fork"),l(" 的区别是不新开一个子 Shell 来执行被调用的脚本，而是在同一个 Shell 中执行. 所以被调用的脚本中声明的变量和环境变量, 都可以在主脚本中进行获取和使用。")],-1),r=[n,o,a,c];function i(d,m){return t(),h("div",null,r)}const u=s(_,[["render",i],["__file","执行shell的三种方式.html.vue"]]);export{u as default};
