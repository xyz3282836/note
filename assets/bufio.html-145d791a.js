import{_ as n,W as e,X as s,a0 as a}from"./framework-52f8fb67.js";const i={},t=a(`<h1 id="bufio" tabindex="-1"><a class="header-anchor" href="#bufio" aria-hidden="true">#</a> bufio</h1><p>Package bufio implements buffered I/O. It wraps an io.Reader or io.Writer object, creating another object (Reader or Writer) that also implements the interface but provides buffering and some help for textual I/O.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// Buffered input.</span>

<span class="token comment">// Reader implements buffering for an io.Reader object.</span>
<span class="token keyword">type</span> Reader <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   buf          <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
   rd           io<span class="token punctuation">.</span>Reader <span class="token comment">// reader provided by the client</span>
   r<span class="token punctuation">,</span> w         <span class="token builtin">int</span>       <span class="token comment">// buf read and write positions</span>
   err          <span class="token builtin">error</span>
   lastByte     <span class="token builtin">int</span> <span class="token comment">// last byte read for UnreadByte; -1 means invalid</span>
   lastRuneSize <span class="token builtin">int</span> <span class="token comment">// size of last rune read for UnreadRune; -1 means invalid</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// buffered output</span>

<span class="token comment">// Writer implements buffering for an io.Writer object.</span>
<span class="token comment">// If an error occurs writing to a Writer, no more data will be</span>
<span class="token comment">// accepted and all subsequent writes, and Flush, will return the error.</span>
<span class="token comment">// After all data has been written, the client should call the</span>
<span class="token comment">// Flush method to guarantee all data has been forwarded to</span>
<span class="token comment">// the underlying io.Writer.</span>
<span class="token keyword">type</span> Writer <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   err <span class="token builtin">error</span>
   buf <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
   n   <span class="token builtin">int</span>
   wr  io<span class="token punctuation">.</span>Writer
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// buffered input and output</span>

<span class="token comment">// ReadWriter stores pointers to a Reader and a Writer.</span>
<span class="token comment">// It implements io.ReadWriter.</span>
<span class="token keyword">type</span> ReadWriter <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   <span class="token operator">*</span>Reader
   <span class="token operator">*</span>Writer
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="scanner" tabindex="-1"><a class="header-anchor" href="#scanner" aria-hidden="true">#</a> scanner</h2><p>本身也是个reader</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Scanner provides a convenient interface for reading data such as
// a file of newline-delimited lines of text. Successive calls to
// the Scan method will step through the &#39;tokens&#39; of a file, skipping
// the bytes between the tokens. The specification of a token is
// defined by a split function of type SplitFunc; the default split
// function breaks the input into lines with line termination stripped. Split
// functions are defined in this package for scanning a file into
// lines, bytes, UTF-8-encoded runes, and space-delimited words. The
// client may instead provide a custom split function.
//
// Scanning stops unrecoverably at EOF, the first I/O error, or a token too
// large to fit in the buffer. When a scan stops, the reader may have
// advanced arbitrarily far past the last token. Programs that need more
// control over error handling or large tokens, or must run sequential scans
// on a reader, should use bufio.Reader instead.
//
type Scanner struct {
   r            io.Reader // The reader provided by the client.
   split        SplitFunc // The function to split the tokens.
   maxTokenSize int       // Maximum size of a token; modified by tests.
   token        []byte    // Last token returned by split.
   buf          []byte    // Buffer used as argument to split.
   start        int       // First non-processed byte in buf.
   end          int       // End of data in buf.
   err          error     // Sticky error.
   empties      int       // Count of successive empty tokens.
   scanCalled   bool      // Scan has been called; buffer is in use.
   done         bool      // Scan has finished.
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[t];function r(d,o){return e(),s("div",null,l)}const u=n(i,[["render",r],["__file","bufio.html.vue"]]);export{u as default};
