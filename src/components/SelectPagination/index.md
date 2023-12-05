---
group:
  title: 数据录入
  order: 6
title: SelectPagination 下拉框分页
---

<h2>SelectPagination 下拉框分页</h2>

<p>
 基于antd4的select的下拉分页
</p>

<h3>代码演示</h3>

<h3>带有初始值的查询</h3>

```tsx
import React, { useEffect, useRef, useState } from 'react';
import { SelectPagination } from '@dm/xman-packages';
import { Form, Button, Input, Row, Popconfirm, message } from 'antd';
import queryString from 'query-string';

export default () => {
  const [value, setValue] = useState(1);
  return (
    <SelectPagination
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      fetchData={async ({ pageSize, current, searchValue }) => {
        return {
          list: [
            {
              label: 'test1',
              value: 1,
            },
            {
              label: 'test2',
              value: 2,
            },
          ],
          total: 10,
        };
      }}
      fetchLabelByInit={async (value) => {
        return 'test1';
      }}
    />
  );
};
```

<API></API>
