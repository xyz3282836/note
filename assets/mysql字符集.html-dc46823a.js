import{_ as s,W as n,X as a,Y as e}from"./framework-2fbbe1ff.js";const c={},t=e(`<h1 id="mysql-字符集" tabindex="-1"><a class="header-anchor" href="#mysql-字符集" aria-hidden="true">#</a> mysql 字符集</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> SHOW VARIABLES LIKE <span class="token string">&#39;character_set_client&#39;</span><span class="token punctuation">;</span>
+----------------------+---------+
<span class="token operator">|</span> Variable_name        <span class="token operator">|</span> Value   <span class="token operator">|</span>
+----------------------+---------+
<span class="token operator">|</span> character_set_client <span class="token operator">|</span> utf8mb4 <span class="token operator">|</span>
+----------------------+---------+
<span class="token number">1</span> row <span class="token keyword">in</span> set, <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> SHOW VARIABLES LIKE <span class="token string">&#39;character_set_connection&#39;</span><span class="token punctuation">;</span>
+--------------------------+---------+
<span class="token operator">|</span> Variable_name            <span class="token operator">|</span> Value   <span class="token operator">|</span>
+--------------------------+---------+
<span class="token operator">|</span> character_set_connection <span class="token operator">|</span> utf8mb4 <span class="token operator">|</span>
+--------------------------+---------+
<span class="token number">1</span> row <span class="token keyword">in</span> set, <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> SHOW VARIABLES LIKE <span class="token string">&#39;character_set_results&#39;</span><span class="token punctuation">;</span>
+-----------------------+---------+
<span class="token operator">|</span> Variable_name         <span class="token operator">|</span> Value   <span class="token operator">|</span>
+-----------------------+---------+
<span class="token operator">|</span> character_set_results <span class="token operator">|</span> utf8mb4 <span class="token operator">|</span>
+-----------------------+---------+
<span class="token number">1</span> row <span class="token keyword">in</span> set, <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中：</p><ul><li><code>character_set_client</code>: 服务器解码请求时使用的字符集</li><li><code>character_set_connection</code>：服务器处理请求时将字符集转换成这个字符集处理。操作具体列时，在转换为具体列的编码。</li><li><code>character_set_results</code>:服务器向客户端返回数据时使用的字符集</li></ul><p>MySQL 设计这三个编码的时候，出于以下考虑：</p><ul><li>一个 MySQL，可能有多种不同语言和操作系统或者国家的客户端，所以通过设置<code>character_set_client</code>还有<code>character_set_results</code>进行兼容。</li><li>由于操作具体列数据的时候需要编码转换，如果<code>character_set_connection</code>和字段一致的话，就不用转换了，所以设置<code>character_set_connection</code>可以让 MySQL 用一种编码理解命令统一处理，同时设置<code>character_set_connection</code>为最常用的可以减少转换。</li></ul><p>一般情况下，保持这三个一致就好。我们就设置好连接使用的字符集就行了。</p>`,7),o=[t];function l(r,p){return n(),a("div",null,o)}const d=s(c,[["render",l],["__file","mysql字符集.html.vue"]]);export{d as default};
