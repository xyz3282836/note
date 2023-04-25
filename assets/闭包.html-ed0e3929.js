import{_ as t,X as o,Y as n,$ as e,a0 as s}from"./framework-418c825b.js";const _={},c=e("h1",{id:"闭包",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#闭包","aria-hidden":"true"},"#"),s(" 闭包")],-1),a=e("p",null,"go 函数称为 function value，非是一个指针， 本质是个结构体，结构体包含一个指针，指向函数入口地址，原因是闭包的支持",-1),l=e("p",null,"闭包的定义，满足两个条件：1.要有自由变量，在函数外部定义但在函数内部被引用；2 脱离了捕捉时的上下文后，能照常运行。捕捉时对于值的处理可以是值拷贝，也可以是引用。",-1),d=e("p",null,"闭包中变量称为捕获变量，存放在捕获列表中，所以 go 语音中闭包就是有捕获列表的 function value",-1),i=e("p",null,"变量的 case",-1),r=e("p",null,"1.只是初始化赋值，然后被返回，没有其他地方修改，那简单，直接 copy 值到捕获列表中",-1),h=e("p",null,"2.除了初始化，其他地方被修改过，闭包导致的局部变量堆分配，也是变量逃逸的一种",-1),u=[c,a,l,d,i,r,h];function p(f,m){return o(),n("div",null,u)}const v=t(_,[["render",p],["__file","闭包.html.vue"]]);export{v as default};
