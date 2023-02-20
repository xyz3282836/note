import{_ as e,W as i,X as n,a0 as s}from"./framework-1046fca1.js";const a="/assets/image2020-2-27_17-25-19-0731396b.png",d={},c=s('<h1 id="kubernetes" tabindex="-1"><a class="header-anchor" href="#kubernetes" aria-hidden="true">#</a> kubernetes</h1><h2 id="cfs" tabindex="-1"><a class="header-anchor" href="#cfs" aria-hidden="true">#</a> cfs</h2><p>默认情况下，kubelet使用CFS配额来管理和执行POD的CPU限制。CFS的方式在调度CPU时间片时是在宿主机的所有核心上面切换，实现最终的完全公平。这种方式会影响CPU缓存亲和性，在我们部分延迟敏感的业务场景下会带来<strong>性能延迟</strong>。</p><h2 id="cpuset" tabindex="-1"><a class="header-anchor" href="#cpuset" aria-hidden="true">#</a> cpuset</h2><p>为了解决这个问题，在这些业务场景下我们使用了CPU管理器的<strong>static策略</strong>来优化性能。对CPU密集型业务及延时敏感业务来说，能够极大的降低容器虚拟化带来的性能损耗。</p><p>static策略就是我们常说的CPU绑核，对应到docker运行时就是CPUSet这个参数。</p><p>docker对于配置cpuset的容器，会使用cgroup的cpuset的子系统，将容器namespace和CPU序号绑定到一起。</p><figure><img src="'+a+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="cpu资源隔离" tabindex="-1"><a class="header-anchor" href="#cpu资源隔离" aria-hidden="true">#</a> cpu资源隔离</h2><h3 id="cpu核心隔离" tabindex="-1"><a class="header-anchor" href="#cpu核心隔离" aria-hidden="true">#</a> cpu核心隔离</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>group zorro {
    cpuset {
        cpuset.cpus = &quot;0-23&quot;;
        cpuset.mems = &quot;0-1&quot;;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cpu时间隔离" tabindex="-1"><a class="header-anchor" href="#cpu时间隔离" aria-hidden="true">#</a> cpu时间隔离</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat /cgroup/cpu/xxx/cpu.cfs_period_us
100000
这个数字的单位是微秒，就是说，我们的cpu时间周期是100ms

cat /cgroup/cpu/xxx/cpu.cfs_quota_us
-1 无限制
调度器会根据这个值的大小决定进程组在一个时间周期内（即100ms）使用cpu时间的比率。比如这个值我们设置成50000，那么就是时间周期的50%，于是这个进程组只能在一个cpu上占用50%的cpu时间
50% * 100000 * cpu核心数

group zorro {
    cpu {
            cpu.cfs_quota_us = &quot;1200000&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="权重cpu隔离" tabindex="-1"><a class="header-anchor" href="#权重cpu隔离" aria-hidden="true">#</a> 权重cpu隔离</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>group zorro {
    cpu {
            cpu.shares = 1000;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),r=[c];function u(t,l){return i(),n("div",null,r)}const p=e(d,[["render",u],["__file","K8s.html.vue"]]);export{p as default};
