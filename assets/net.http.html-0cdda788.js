import{_ as e,W as t,X as r,Y as p}from"./framework-7d39e0da.js";const h={},a=p('<h1 id="net-http" tabindex="-1"><a class="header-anchor" href="#net-http" aria-hidden="true">#</a> net http</h1><h2 id="http-client" tabindex="-1"><a class="header-anchor" href="#http-client" aria-hidden="true">#</a> http client</h2><p>创建连接会初始化两个 channel</p><p>go writeLoop</p><p>从 writech 读取 wr，wr 包含 *Request，请求的一些信息</p><p>往 bufio.Writer (tcp 连接) 写入请求数据，结果 err 通过 writeRequest(wr) 中的 ch 发送</p><p>go readLoop</p><p>从 reqch 读取 rc，为了获取 req 的信息和可以发送 resp 的 ch</p><p>从 bufio.Reader (tcp 连接中) 读取 resp 的数据，copy req 部分数据来封装 resp，再把 resp 通过 requestAndChan(rc) 中的 ch 发送</p><p>roundTrip</p><p>获取到连接后</p><p>请求数据 writeRequest 发送到 writech (go writeLoop 处理)，writeRequest 包含一个 ch</p><p>然后把部分请求数据 封装到用于接受响应的 requestAndChan，requestAndChan 包含一个 ch</p><h2 id="http-server" tabindex="-1"><a class="header-anchor" href="#http-server" aria-hidden="true">#</a> http server</h2>',14),c=[a];function n(i,s){return t(),r("div",null,c)}const d=e(h,[["render",n],["__file","net.http.html.vue"]]);export{d as default};