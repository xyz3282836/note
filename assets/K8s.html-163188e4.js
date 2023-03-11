const e=JSON.parse('{"key":"v-ffbecaec","path":"/apue/K8s.html","title":"kubernetes","lang":"zh-CN","frontmatter":{"description":"kubernetes cfs 默认情况下，kubelet 使用 CFS 配额来管理和执行 POD 的 CPU 限制。CFS 的方式在调度 CPU 时间片时是在宿主机的所有核心上面切换，实现最终的完全公平。这种方式会影响 CPU 缓存亲和性，在我们部分延迟敏感的业务场景下会带来性能延迟。 cpuset 为了解决这个问题，在这些业务场景下我们使用了 CPU 管理器的static 策略来优化性能。对 CPU 密集型业务及延时敏感业务来说，能够极大的降低容器虚拟化带来的性能损耗。","head":[["meta",{"property":"og:url","content":"https://www.ruizhou.cf/apue/K8s.html"}],["meta",{"property":"og:site_name","content":"rz文档"}],["meta",{"property":"og:title","content":"kubernetes"}],["meta",{"property":"og:description","content":"kubernetes cfs 默认情况下，kubelet 使用 CFS 配额来管理和执行 POD 的 CPU 限制。CFS 的方式在调度 CPU 时间片时是在宿主机的所有核心上面切换，实现最终的完全公平。这种方式会影响 CPU 缓存亲和性，在我们部分延迟敏感的业务场景下会带来性能延迟。 cpuset 为了解决这个问题，在这些业务场景下我们使用了 CPU 管理器的static 策略来优化性能。对 CPU 密集型业务及延时敏感业务来说，能够极大的降低容器虚拟化带来的性能损耗。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.ruizhou.cf/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-11T14:36:50.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"kubernetes"}],["meta",{"property":"article:modified_time","content":"2023-03-11T14:36:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"kubernetes\\",\\"image\\":[\\"https://www.ruizhou.cf/\\"],\\"dateModified\\":\\"2023-03-11T14:36:50.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"cfs","slug":"cfs","link":"#cfs","children":[]},{"level":2,"title":"cpuset","slug":"cpuset","link":"#cpuset","children":[]},{"level":2,"title":"cpu 资源隔离","slug":"cpu-资源隔离","link":"#cpu-资源隔离","children":[{"level":3,"title":"cpu 核心隔离","slug":"cpu-核心隔离","link":"#cpu-核心隔离","children":[]},{"level":3,"title":"cpu 时间隔离","slug":"cpu-时间隔离","link":"#cpu-时间隔离","children":[]},{"level":3,"title":"权重 cpu 隔离","slug":"权重-cpu-隔离","link":"#权重-cpu-隔离","children":[]}]}],"git":{"createdTime":1678545410000,"updatedTime":1678545410000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":1}]},"readingTime":{"minutes":1.3,"words":391},"filePathRelative":"apue/K8s.md","localizedDate":"2023年3月11日","excerpt":"<h1> kubernetes</h1>\\n<h2> cfs</h2>\\n<p>默认情况下，kubelet 使用 CFS 配额来管理和执行 POD 的 CPU 限制。CFS 的方式在调度 CPU 时间片时是在宿主机的所有核心上面切换，实现最终的完全公平。这种方式会影响 CPU 缓存亲和性，在我们部分延迟敏感的业务场景下会带来<strong>性能延迟</strong>。</p>\\n<h2> cpuset</h2>\\n<p>为了解决这个问题，在这些业务场景下我们使用了 CPU 管理器的<strong>static 策略</strong>来优化性能。对 CPU 密集型业务及延时敏感业务来说，能够极大的降低容器虚拟化带来的性能损耗。</p>","autoDesc":true}');export{e as data};
