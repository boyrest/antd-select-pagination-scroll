---
group:
  title: hooks
  order: 2
title: useEventCenter 事件中心
---

<h2>useEventCenter</h2>

<h3>使用场景</h3>
<div>解决页面间元素间互相依赖等待加载的数据协同问题</div>

<h3>代码演示</h3>

```tsx
import React, { useEffect, useRef, useState } from 'react';
import { useDependencies, useEventCenter } from '@dm/xman-packages';
import { Button } from 'antd';

function ComponentA({ componentId }) {
  const [isReady, setIsReady] = useState(false);
  const [sendReady, sendChange, isReadyRef]: any = useEventCenter({
    componentId,
  });
  return (
    <div>
      <div>组件A</div>
      <Button
        onClick={() => {
          if (isReadyRef.current) {
            sendChange({ dataA: '我是组件A,我发送数据了' });
          } else {
            setIsReady(true);
            sendReady({ dataA: '我是组件A,我准备好了' });
          }
        }}
      >
        {isReady ? '发送数据' : '我没准备好'}
      </Button>
    </div>
  );
}

function ComponentB({ componentId }) {
  const [isReady, setIsReady] = useState(false);
  const [sendReady, sendChange, isReadyRef]: any = useEventCenter({
    componentId,
  });
  return (
    <div>
      <div>组件B</div>
      <Button
        onClick={() => {
          if (isReadyRef.current) {
            sendChange({ dataB: '我是组件B,我发送数据了' });
          } else {
            setIsReady(true);
            sendReady({ dataB: '我是组件B,我准备好了' });
          }
        }}
      >
        {isReady ? '发送数据' : '我没准备好'}
      </Button>
    </div>
  );
}

function ComponentC({ dependenceComponentIds }) {
  const [isReady, searches] = useDependencies({
    dependenceComponentIds,
  });
  return (
    <div style={{ marginTop: 20, fontSize: 20 }}>
      {isReady ? `数据：${JSON.stringify(searches)}` : '组件A和组件B还有人没有准备好'}
    </div>
  );
}

export default () => {
  const [value, setValue] = useState(1);
  return (
    <div>
      <ComponentA componentId="component-a" />
      <ComponentB componentId="component-b" />
      <ComponentC dependenceComponentIds={['component-a', 'component-b']} />
    </div>
  );
};
```
