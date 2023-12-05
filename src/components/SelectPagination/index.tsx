import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Select, SelectProps, Spin, Empty } from 'antd';
import { DefaultOptionType } from 'rc-select/lib/Select';

export interface FetchParams {
  pageSize: number;
  current: number;
  searchValue: string;
}

export interface FetchData {
  list: DefaultOptionType[];
  total: number;
}

export enum ValueType {
  ObjectValue = 1,
  SimpleValue = 2,
  ObjectArrayValue = 3,
}

export interface SelectPaginationIProps {
  /**
   *  每页的数量
   */
  scrollPageSize?: number;
  /**
   *
   * @param params
   * 获取下拉分页数据
   */
  fetchData: (params: FetchParams) => Promise<FetchData>;
  /**
   * valueType为2的情况，该属性必须设置
   * 用来获取label，初始化根据value获取label的值，之后根据label获取options
   */
  fetchLabelByInit?: (value: string | number) => Promise<string>;
  /**
   * value的类型：1 类型为 {label,value} 2 类型为 number string 3 类型为多选，考虑这个是search select 类型只支持[{label,value}]]
   * 默认为2
   */
  valueType?: ValueType.ObjectValue | ValueType.SimpleValue | ValueType.ObjectArrayValue;
  /**
   *  触发search的debounce时间
   */
  searchDebounceTime?: number;
  /**
   * 鼠标进去select的时候下拉框自动刷新,默认true
   */
  mouseEnterRefresh?: boolean;
}

const DEFAULT_PAGESIZE = 20;

const SelectPagination: React.FC<SelectPaginationIProps & SelectProps> = (props) => {
  const {
    value,
    onChange,
    fetchLabelByInit,
    scrollPageSize,
    searchDebounceTime = 400,
    fetchData,
    mouseEnterRefresh = true,
    ...rest
  } = props;
  const { mode } = rest;
  const isMultiple = mode === 'multiple';
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<DefaultOptionType[]>([]);
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGESIZE);
  const [searchValue, setSearchValue] = useState('');
  const timeRef = useRef<number | null>(null);
  const fetchRef = useRef<number | null>(null);
  const focusRef = useRef<boolean>(false);
  const valueType = isMultiple ? ValueType.ObjectArrayValue : props.valueType || 2;

  const getLabelByInit = useCallback(
    async (value: string | number) => {
      if (fetchLabelByInit) {
        const label = await fetchLabelByInit(value);
        setSearchValue(label);
      }
    },
    [fetchLabelByInit],
  );

  const getOptions = async () => {
    setLoading(true);
    try {
      const { list, total } = await fetchData({
        pageSize,
        current,
        searchValue,
      });
      if (current === 1) {
        setOptions(list);
      } else {
        setOptions([...options, ...list]);
      }
      setTotal(total);
    } finally {
      setLoading(false);
    }
  };

  function debounceGetOptions() {
    if (fetchRef.current) {
      clearTimeout(fetchRef.current);
      fetchRef.current = null;
    }
    fetchRef.current = setTimeout(() => {
      getOptions();
    }, 100);
  }

  useEffect(() => {
    debounceGetOptions();
  }, [searchValue, current, pageSize]);

  useEffect(() => {
    if (valueType === ValueType.ObjectValue) {
      setSearchValue(value?.label || '');
    }
    if (valueType === ValueType.SimpleValue) {
      value !== null && value !== undefined && getLabelByInit(value);
    }
    if (valueType === ValueType.ObjectArrayValue) {
      setSearchValue('');
    }
  }, []);

  useEffect(() => {
    setPageSize(scrollPageSize || DEFAULT_PAGESIZE);
    setCurrent(1);
  }, [scrollPageSize]);

  const scrollEnd = (e: any) => {
    const { target } = e;
    if (target.scrollTop + target.offsetHeight === target.scrollHeight && !loading) {
      if (current * pageSize < total) {
        setCurrent(current + 1);
      }
    }
  };

  const searchHandle = useCallback((newSearchvalue) => {
    focusRef.current = false;
    if (timeRef.current) {
      clearTimeout(timeRef.current);
      timeRef.current = null;
    }
    timeRef.current = setTimeout(() => {
      setSearchValue(newSearchvalue);
      setCurrent(1);
    }, searchDebounceTime);
  }, []);

  const parseValue = useCallback((data) => {
    if (valueType === ValueType.ObjectValue) {
      return data?.value;
    } else {
      return data;
    }
  }, []);

  return (
    <Select
      showSearch
      onPopupScroll={scrollEnd}
      onSearch={searchHandle}
      options={options}
      defaultActiveFirstOption={false}
      filterOption={false}
      allowClear
      onClear={() => {
        setSearchValue('');
        setCurrent(1);
      }}
      onFocus={() => {
        focusRef.current = true;
      }}
      onMouseEnter={() => {
        if (mouseEnterRefresh) {
          if (current === 1) {
            debounceGetOptions();
          } else {
            setCurrent(1);
          }
        }
      }}
      onInputKeyDown={(e) => {
        if (e.keyCode === 8 && focusRef.current) {
          setSearchValue('');
          setCurrent(1);
        }
      }}
      notFoundContent={
        loading ? (
          <Spin size="small" />
        ) : options?.length > 0 ? null : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )
      }
      value={parseValue(value)}
      onChange={(newValue) => {
        if (newValue !== null && newValue !== undefined) {
          focusRef.current = true;
        }
        if (valueType === 1) {
          // @ts-ignore
          onChange(options.find((item) => item.value === newValue) || null);
        } else {
          // @ts-ignore
          onChange(newValue);
        }
      }}
      {...rest}
      labelInValue={isMultiple}
    />
  );
};

export default SelectPagination;
