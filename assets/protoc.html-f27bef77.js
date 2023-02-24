import{_ as o,V as e,W as s,$ as i}from"./framework-7d796c00.js";const t={},r=i(`<h1 id="protoc" tabindex="-1"><a class="header-anchor" href="#protoc" aria-hidden="true">#</a> protoc</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>protoc-gen-gofast (在gofast一基础上， 可以导入gogoprotobuf)
protoc-gen-gogofast (在gofast一基础上， 可以导入gogoprotobuf)
protoc-gen-gogofaster (在gogofast基础上, 去掉XXX_unrecognized方法, 更少的指针字段)
protoc-gen-gogoslick (在gogofaster基础上, 辅助方法string, gostring 和 equal)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先需要cd gopath/src，在去执行下面的命令，因为不cd到这个目录下，他会在当前目录新建目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>protoc -I/Users/zhou/go/src -I/Users/zhou/go/src/git.bilibili.co/bapis -I/Users/zhou/go/src/go-live/third -I/usr/local/include --gogofast_out=plugins=grpc:. /Users/zhou/go/src/go-live/app/service/xroom/api/api.proto

protoc --bswagger_out=explicit_http=0:. --bm_out=explicit_http=0,pb_over_http=1:. --markdown_out=explict_http=0:. -I/Users/zhou/go/src -I/Users/zhou/go/src/go-live -I/Users/zhou/go/src/go-live/third -I/Users/zhou/go/src/git.bilibili.co/bapis go-live/app/service/xroom/api/api.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),a=[r];function c(n,l){return e(),s("div",null,a)}const d=o(t,[["render",c],["__file","protoc.html.vue"]]);export{d as default};
