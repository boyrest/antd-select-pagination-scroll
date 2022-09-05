安装

```bash
npm install AntdSelectPaginationScroll
```

使用

```js
import React, { useEffect } from 'react';
import { AntdSelectPaginationScroll } from 'antd-select-pagination-scroll';

export default () => {
  const [value, setValue] = useState(1);
  return (
    <AntdSelectPaginationScroll
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      fetchData={async ({ pageSize, current, searchValue }) => {}}
      initSearchValue={async (value) => {
        return 'label1';
      }}
    />
  );
};
```

添加的属性

```typescript
import { SelectProps } from 'antd';

export interface FetchParams {
  pageSize: number;
  current: number;
  searchValue: string;
}

export interface FetchData {
  list: DefaultOptionType[];
  total: number;
}

export interface AntdSelectPaginationScrollIProps {
  /**
   *  每页的数量
   */
  scrollPageSize?: number;
  /**
   *
   * @param params
   * 获取下拉数据
   */
  fetchData: (params: FetchParams) => Promise<FetchData>;
  /**
   * 初始化根据value获取label的值，之后根据label获取options，valueType为2的情况，该属性必须设置，用来获取label
   */
  initSearchValue?: (value: string | number) => Promise<string>;
  /**
   * value的类型：1 类型为 {label,value} 2 类型为 number string
   * 默认为2
   */
  valueType?: 1 | 2;
  /**
   *  触发search的debounce时间
   */
  searchDebounceTime?: number;
}

AntdSelectPaginationScroll: React.FC<AntdSelectPaginationScrollIProps & SelectProps>;
```
