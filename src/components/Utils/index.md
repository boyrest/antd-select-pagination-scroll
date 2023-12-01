---
group:
  title: 工具方法
  order: 3
title: 富文本处理
---

<h2>transformEmojiCodeToImg</h2>

<h3>简介</h3>
<div>将文本中emoji code的处理成图片</div>

<h3>代码演示</h3>

```tsx
import React, { useEffect, useRef, useState } from 'react';
import { utils } from '@dm/xman-packages';

export default () => {
  const { transformEmojiCodeToImg } = utils;
  const str = '11112222';
  return (
    <div>
      <div>文本：${str}</div>
      <div>处理后：{transformEmojiCodeToImg(str)}</div>
    </div>
  );
};
```

<h2>transformTextToRichText</h2>

<h3>简介</h3>
<div>将文本处理成富文本</div>

<h3>代码演示</h3>

```tsx
import React, { useEffect, useRef, useState } from 'react';
import { utils } from '@dm/xman-packages';

export default () => {
  const { transformTextToRichText } = utils;
  const str = '11112222';
  return (
    <div>
      <div>文本：${str}</div>
      <div>处理后：{transformTextToRichText(str)}</div>
    </div>
  );
};
```

<h2>countSymbols</h2>

<h3>简介</h3>
<div>获取emoji的数量，字符长度</div>

<h3>代码演示</h3>

```tsx
import React, { useEffect, useRef, useState } from 'react';
import { utils } from '@dm/xman-packages';

export default () => {
  const { countSymbols } = utils;
  const str = '11112222';
  return (
    <div>
      <div>文本：${str}</div>
      <div>处理后：{JSON.stringify(countSymbols(str))}</div>
    </div>
  );
};
```

<h2>transformRichTextToText</h2>

<h3>简介</h3>
<div>将富文本处理成文本</div>

<h3>代码演示</h3>

```tsx
import React, { useEffect, useRef, useState } from 'react';
import { utils } from '@dm/xman-packages';

export default () => {
  const { transformRichTextToText } = utils;
  const str = '11112222';
  return (
    <div>
      <div>文本：${str}</div>
      <div>处理后：{transformRichTextToText(str)}</div>
    </div>
  );
};
```
