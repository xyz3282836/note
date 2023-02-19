import{_ as t,W as s,X as a,Y as e,Z as o}from"./framework-1046fca1.js";const i="/assets/sstables-ee1cd7e9.png",r="/assets/lsm-tree-full-d6fb3945.png",l={},n=e("h1",{id:"log-structured-merge-tree",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#log-structured-merge-tree","aria-hidden":"true"},"#"),o(" log-structured merge-tree")],-1),c=e("p",null,"lsm-tree中核心数据结构就是sstable（sorted string table）",-1),d=e("blockquote",null,[e("p",null,"An SSTable provides a persistent, ordered immutable map from keys to values, where both keys and values are arbitrary byte strings. Operations are provided to look up the value associated with a specified key, and to iterate over all key/value pairs in a specified key range. Internally, each SSTable contains a sequence of blocks (typically each block is 64KB in size, but this is configurable). A block index (stored at the end of the SSTable) is used to locate blocks; the index is loaded into memory when the SSTable is opened. A lookup can be performed with a single disk seek: we first find the appropriate block by performing a binary search in the in-memory index, and then reading the appropriate block from disk. Optionally, an SSTable can be completely mapped into memory, which allows us to perform lookups and scans without touching disk.")],-1),p=e("figure",null,[e("img",{src:i,alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),u=e("p",null,"完整lsm-tree图",-1),m=e("figure",null,[e("img",{src:r,alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),h=[n,c,d,p,u,m];function _(b,g){return s(),a("div",null,h)}const k=t(l,[["render",_],["__file","lsm-tree.html.vue"]]);export{k as default};
