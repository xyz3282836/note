import{_ as l,W as i,X as p,Z as n,$ as s,a0 as e,Y as t,C as o}from"./framework-2fbbe1ff.js";const u={},c=n("h2",{id:"bufcli",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#bufcli","aria-hidden":"true"},"#"),s(" BufCli")],-1),d={href:"https://buf.build/docs/tutorials/getting-started-with-buf-cli",target:"_blank",rel:"noopener noreferrer"},r=t(`<p>在 proto 目录下，创建<code>buf.yaml</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>buf mod init // proto目录执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> v1
<span class="token key atrule">breaking</span><span class="token punctuation">:</span>
  <span class="token key atrule">use</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> FILE
<span class="token key atrule">lint</span><span class="token punctuation">:</span>
  <span class="token key atrule">use</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> DEFAULT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>check <code>buf</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>buf build // proto目录执行
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 proto 的上级目录，创建生成<code>buf.gen.yaml</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">touch</span> buf.gen.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> v1
<span class="token key atrule">managed</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">go_package_prefix</span><span class="token punctuation">:</span>
    <span class="token key atrule">default</span><span class="token punctuation">:</span> github.com/bufbuild/buf<span class="token punctuation">-</span>tour/gen
<span class="token key atrule">plugins</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">plugin</span><span class="token punctuation">:</span> buf.build/protocolbuffers/go
    <span class="token key atrule">out</span><span class="token punctuation">:</span> gen
    <span class="token key atrule">opt</span><span class="token punctuation">:</span> paths=source_relative
  <span class="token punctuation">-</span> <span class="token key atrule">plugin</span><span class="token punctuation">:</span> buf.build/bufbuild/connect<span class="token punctuation">-</span>go
    <span class="token key atrule">out</span><span class="token punctuation">:</span> gen
    <span class="token key atrule">opt</span><span class="token punctuation">:</span> paths=source_relative
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成 pb 文件，<code>buf</code>会读取 👆<code>buf.gen.yaml</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>buf generate protodir // proto上层目录执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>lint proto</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>buf lint protodir <span class="token punctuation">[</span>--error-format<span class="token operator">=</span>config-ignore-yaml<span class="token punctuation">]</span> // proto目录执行
// or
<span class="token builtin class-name">cd</span> protodir <span class="token operator">&amp;&amp;</span> but lint <span class="token punctuation">[</span>--error-format<span class="token operator">=</span>config-ignore-yaml<span class="token punctuation">]</span> // proto上层目录执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>lint 规则修改</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code> <span class="token key atrule">version</span><span class="token punctuation">:</span> v1
 <span class="token key atrule">breaking</span><span class="token punctuation">:</span>
   <span class="token key atrule">use</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> FILE
 <span class="token key atrule">lint</span><span class="token punctuation">:</span>
   <span class="token key atrule">use</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> DEFAULT

<span class="token key atrule">+  ignore</span><span class="token punctuation">:</span>
+    <span class="token punctuation">-</span> google/type/datetime.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>grpc 请求工具</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>buf <span class="token function">curl</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--schema</span> proto/pet/v1/pet.proto <span class="token punctuation">\\</span>
<span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;pet_type&quot;: &quot;PET_TYPE_SNAKE&quot;, &quot;name&quot;: &quot;Ekans&quot;}&#39;</span> <span class="token punctuation">\\</span>
http://localhost:8080/pet.v1.PetStoreService/PutPet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bsr" tabindex="-1"><a class="header-anchor" href="#bsr" aria-hidden="true">#</a> BSR</h2>`,17),v={href:"https://buf.build/docs/tutorials/getting-started-with-bsr",target:"_blank",rel:"noopener noreferrer"},b=t(`<p>去除本地 copy，改成远程依赖引用</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> v1
<span class="token key atrule">breaking</span><span class="token punctuation">:</span>
  <span class="token key atrule">use</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> FILE
<span class="token key atrule">lint</span><span class="token punctuation">:</span>
  <span class="token key atrule">use</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> DEFAULT
<span class="token key atrule">+deps</span><span class="token punctuation">:</span>
+<span class="token punctuation">-</span> buf.build/googleapis/googleapis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>buf build</code>会报错，需要 buf 更新依赖</p><p>原理是<code>buf</code> 可以解析 <code>buf.yaml</code>中的依赖，并从 BSR 中获取相关依赖来构建你的 module</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>buf mod update // proto目录执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5);function k(m,g){const a=o("ExternalLinkIcon");return i(),p("div",null,[c,n("p",null,[n("a",d,[s("https://buf.build/docs/tutorials/getting-started-with-buf-cli"),e(a)])]),r,n("p",null,[n("a",v,[s("https://buf.build/docs/tutorials/getting-started-with-bsr"),e(a)])]),b])}const f=l(u,[["render",k],["__file","buf.html.vue"]]);export{f as default};
