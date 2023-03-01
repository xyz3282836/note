import{_ as n,W as s,X as a,a0 as t}from"./framework-52f8fb67.js";const e={},p=t(`<h1 id="io" tabindex="-1"><a class="header-anchor" href="#io" aria-hidden="true">#</a> IO</h1><p>主要四个核心interface</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Reader <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Read</span><span class="token punctuation">(</span>p <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> Writer <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Write</span><span class="token punctuation">(</span>p <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> Closer <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> Seeker <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Seek</span><span class="token punctuation">(</span>offset <span class="token builtin">int64</span><span class="token punctuation">,</span> whence <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int64</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>包含以上四个的组合</p><ul><li>os.File 同时实现了 io.Reader 和 io.Writer</li><li>strings.Reader 实现了 io.Reader</li><li>bufio.Reader/Writer 分别实现了 io.Reader 和 io.Writer</li><li>bytes.Buffer 同时实现了 io.Reader 和 io.Writer</li><li>bytes.Reader 实现了 io.Reader</li><li>compress/gzip.Reader/Writer 分别实现了 io.Reader 和 io.Writer</li><li>crypto/cipher.StreamReader/StreamWriter 分别实现了 io.Reader 和 io.Writer</li><li>crypto/tls.Conn 同时实现了 io.Reader 和 io.Writer</li><li>encoding/csv.Reader/Writer 分别实现了 io.Reader 和 io.Writer</li><li>mime/multipart.Part 实现了 io.Reader</li><li>net/conn 分别实现了 io.Reader 和 io.Writer(Conn接口定义了Read/Write)</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> ReaderFrom <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">ReadFrom</span><span class="token punctuation">(</span>r Reader<span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int64</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> WriterTo <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">WriteTo</span><span class="token punctuation">(</span>w Writer<span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int64</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> ReaderAt <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">ReadAt</span><span class="token punctuation">(</span>p <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> off <span class="token builtin">int64</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> WriterAt <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">WriteAt</span><span class="token punctuation">(</span>p <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> off <span class="token builtin">int64</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type ByteReader interface {
   ReadByte() (byte, error)
}
type ByteWriter interface {
	WriteByte(c byte) error
}

type RuneReader interface {
	ReadRune() (r rune, size int, err error)
}
type StringWriter interface {
	WriteString(s string) (n int, err error)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提供了一些方法</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">WriteString</span><span class="token punctuation">(</span>w Writer<span class="token punctuation">,</span> s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">ReadAtLeast</span><span class="token punctuation">(</span>r Reader<span class="token punctuation">,</span> buf <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> min <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">ReadFull</span><span class="token punctuation">(</span>r Reader<span class="token punctuation">,</span> buf <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">ReadAtLeast</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token function">CopyN</span><span class="token punctuation">(</span>dst Writer<span class="token punctuation">,</span> src Reader<span class="token punctuation">,</span> n <span class="token builtin">int64</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>written <span class="token builtin">int64</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">Copy</span><span class="token punctuation">(</span>dst Writer<span class="token punctuation">,</span> src Reader<span class="token punctuation">)</span> <span class="token punctuation">(</span>written <span class="token builtin">int64</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">CopyBuffer</span><span class="token punctuation">(</span>dst Writer<span class="token punctuation">,</span> src Reader<span class="token punctuation">,</span> buf <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),i=[p];function c(o,l){return s(),a("div",null,i)}const r=n(e,[["render",c],["__file","io.html.vue"]]);export{r as default};