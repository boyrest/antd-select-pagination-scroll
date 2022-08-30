import React, { EventHandler, useCallback, useEffect, useRef, useState } from 'react';
import { Select, SelectProps, Spin } from 'antd';
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
   * 初始化获取下拉框值
   */
  initSearchValue?: (value: string | number) => Promise<string>;
  /**
   * 1 类型为 {label,value} 2 类型为 number string
   */
  valueType?: 1 | 2;
}

const DEFAULT_PAGESIZE = 20;

const AntdSelectPaginationScroll: React.FC<AntdSelectPaginationScrollIProps & SelectProps> = (
  props,
) => {
  const { value, onChange, initSearchValue, scrollPageSize, fetchData, ...rest } = props;
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<DefaultOptionType[]>([]);
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGESIZE);
  const [searchValue, setSearchValue] = useState('');
  const timeRef = useRef<number | null>(null);
  const fetchRef = useRef<number | null>(null);
  const valueType = props.valueType || 2;

  const getInitSearchValue = useCallback(
    async (value: string | number) => {
      if (initSearchValue) {
        const label = await initSearchValue(value);
        setSearchValue(label);
      }
    },
    [initSearchValue],
  );

  const getOptions = useCallback(async () => {
    setLoading(true);
    try {
      const { list, total } = await fetchData({ pageSize, current, searchValue });
      if (current === 1) {
        setOptions(list);
      } else {
        setOptions([...options, ...list]);
      }
      setTotal(total);
    } finally {
      setLoading(false);
    }
  }, [fetchData]);

  useEffect(() => {
    if (fetchRef.current) {
      clearTimeout(fetchRef.current);
      fetchRef.current = null;
    }
    fetchRef.current = setTimeout(() => {
      getOptions();
    }, 100);
  }, [searchValue, current, pageSize]);

  useEffect(() => {
    if (valueType === 1) {
      setSearchValue(value?.label || '');
    } else {
      value !== null && value !== undefined && getInitSearchValue(value);
    }
  }, []);

  useEffect(() => {
    setPageSize(scrollPageSize || DEFAULT_PAGESIZE);
    setCurrent(1);
  }, [scrollPageSize]);

  const scrollEnd = useCallback((e) => {
    const { target } = e;
    if (target.scrollTop + target.offsetHeight === target.scrollHeight && !loading) {
      if (current * pageSize < total) {
        setCurrent(current + 1);
      }
    }
  }, []);

  const searchHandle = useCallback((newSearchvalue) => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
      timeRef.current = null;
    }
    timeRef.current = setTimeout(() => {
      setSearchValue(newSearchvalue);
      setCurrent(1);
      setTotal(0);
    }, 400);
  }, []);

  const parseValue = useCallback((data) => {
    if (valueType === 1) {
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
      notFoundContent={loading ? <Spin size="small" /> : null}
      value={parseValue(value)}
      onChange={(newValue) => {
        if (valueType === 1) {
          // @ts-ignore
          onChange(options.find((item) => item.value === newValue) || null);
        } else {
          // @ts-ignore
          onChange(newValue);
        }
      }}
      {...rest}
    />
  );
};

export default AntdSelectPaginationScroll;
