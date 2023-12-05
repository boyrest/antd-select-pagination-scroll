---
group:
  title: 数据录入
  order: 4
title: EmojiPopover emoji选择
---

<h2>EmojiPopover</h2>

<h3>简介</h3>
<div>选择emoji</div>

<h3>代码演示</h3>

```tsx
import React, { useEffect, useRef, useState } from 'react';
import { EmojiPopover } from '@dm/xman-packages';
import { Button } from 'antd';

export default () => {
  const [emoji, setEmoji] = useState(null);
  return (
    <div>
      <EmojiPopover
        onChange={(value) => {
          setEmoji(value);
        }}
      />
      <div style={{ marginTop: 20 }} dangerouslySetInnerHTML={{ __html: emoji }} />
    </div>
  );
};
```
