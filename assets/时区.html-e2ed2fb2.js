import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,a}from"./app-339f552b.js";const i={},l=a(`<h1 id="timedatectl" tabindex="-1"><a class="header-anchor" href="#timedatectl" aria-hidden="true">#</a> timedatectl</h1><p>查看时区</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>zhou@zhou:~$ timedatectl
               Local time: Sat <span class="token number">2022</span>-09-10 06:44:53 UTC
           Universal time: Sat <span class="token number">2022</span>-09-10 06:44:53 UTC
                 RTC time: Sat <span class="token number">2022</span>-09-10 06:44:53
                Time zone: Etc/UTC <span class="token punctuation">(</span>UTC, +0000<span class="token punctuation">)</span>
System clock synchronized: no
              NTP service: inactive
          RTC <span class="token keyword">in</span> <span class="token builtin class-name">local</span> TZ: no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者 /etc/timezone 文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>zhou@zhou:~$ <span class="token function">cat</span> /etc/timezone
Etc/UTC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看可以设置的时区 <code>timedatectl list-timezones</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>zhou@zhou:~$ timedatectl list-timezones
Africa/Abidjan
Africa/Accra
Africa/Addis_Ababa
Africa/Algiers
Africa/Asmara
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改成中国东八区</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo timedatectl set-timezone Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>效果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>zhou@zhou:~$ timedatectl
               Local time: Sat <span class="token number">2022</span>-09-10 <span class="token number">14</span>:47:58 CST
           Universal time: Sat <span class="token number">2022</span>-09-10 06:47:58 UTC
                 RTC time: Sat <span class="token number">2022</span>-09-10 06:47:58
                Time zone: Asia/Shanghai <span class="token punctuation">(</span>CST, +0800<span class="token punctuation">)</span>
System clock synchronized: no
              NTP service: inactive
          RTC <span class="token keyword">in</span> <span class="token builtin class-name">local</span> TZ: no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),d=[l];function c(t,r){return n(),s("div",null,d)}const m=e(i,[["render",c],["__file","时区.html.vue"]]);export{m as default};
