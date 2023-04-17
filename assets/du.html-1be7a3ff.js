import{_ as e,W as n,X as s,Y as a}from"./framework-2fbbe1ff.js";const i={},d=a(`<p>参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-h, --human-readable
    以K，M，G为单位，显示文件的大小

-s, <span class="token parameter variable">--summarize</span>
    只显示总计的文件大小

-S, --separate-dirs
    显示时并不含其子文件夹的大小

-d, --max-depth<span class="token operator">=</span>N
    显示子文件夹的深度（层级）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用 demo</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root@room-service-1072483-68999665c8-tbc9f:/data/app<span class="token comment"># du -hs</span>
355M    <span class="token builtin class-name">.</span>
root@room-service-1072483-68999665c8-tbc9f:/data/app<span class="token comment"># du -hd 1</span>
<span class="token number">4</span>.0K    ./env
16K     ./runtime
948K    ./zk_conf
36K     ./titans
354M    ./room-service
355M    <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[d];function c(r,v){return n(),s("div",null,l)}const m=e(i,[["render",c],["__file","du.html.vue"]]);export{m as default};
