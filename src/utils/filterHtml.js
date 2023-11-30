// 过滤富文本标签（除了a标签外）
const htmlRestore = str => {
  let s = '';
  if (str.length === 0) {
    return '';
  }
  s = str.replace(/&amp;/g, '&');
  s = s.replace(/&lt;/g, '<');
  s = s.replace(/&gt;/g, '>');
  s = s.replace(/&nbsp;/g, ' ');
  s = s.replace(/&#39;/g, "'");
  s = s.replace(/&quot;/g, '"');
  return s;
};
const filterHtml = html => {
  if (!html || html.length === 0) {
    return html;
  }
  const s = html
    .replace(
      /(<\/div>|<\/blockquote>|<\/pre>|<\/dt>|<\/dd>|<\/dl>|<\/li>|<\/ol>|<\/ul>|<\/h[1-6]>|<\/p>|<br>|<br \/>)/g,
      '\n',
    )
    .replace(/<\/?\b(?!a)\w+\b([^<>])*>/g, '')
    .replace(/(.*)\n+$/, '$1');
  return htmlRestore(s);
};

export default filterHtml;
