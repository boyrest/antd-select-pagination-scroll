---
group:
  title: 数据录入
  order: 2
title: TextEllipsis 文本省略
---

<h2>TextEllipsis</h2>

<h3>简介</h3>
<div>文本省略并带有tooltip</div>

<h3>代码演示</h3>

```tsx
import React, { useEffect, useRef, useState } from 'react';
import { TextEllipsis } from '@dm/xman-packages';
import { Input } from 'antd';

export default () => {
  const [value, setValue] = useState(100);
  const styles = { width: value };
  console.log(styles);
  return (
    <div>
      <div style={{ margin: 10 }}>1行</div>
      <div>
        <TextEllipsis text="我是要测试的数据我是要测试的数据我是要测试的数据我是要测试的数据我是要测试的数据我是要测试的数据我是要测试的数据我" />
      </div>
      <div style={{ margin: 10 }}>2行</div>
      <div>
        <TextEllipsis
          text="我是要测试的数据我是要测试的数据我是要测试的数据我是要测试的数据我是要测试的数据我是要测试的数据我是要测试的数据我试的数据我是要测试的数据我是要测试的数据我试的数据我是要测试的数据我是要测试的数据我试的数据我是要测试的数据我是要测试的数据我"
          maxLine={2}
        />
      </div>
      <div style={{ margin: 10 }}>3行</div>
      <div>
        <TextEllipsis
          text="我是要测试的数据我是要测试的数据我是要测试的数据我是要测试的数据我是要测试的数据我是要测试的数据我是要测试的数据我试的数据我是要测试的数据我是要测试的数据我试的数据我是要测试的数据我是要测试的数据我试的数据我是要测试的数据我是要测试的数据我要测试的数据我是要测试的数据我是要测试的数据我试的数据我是要测试的数据我是要测试的数据我试的数据我是要测试的数据我是要测试的数据我试的数据我是要测试的数据我是要测试的数据我"
          maxLine={3}
        />
      </div>
    </div>
  );
};
```
