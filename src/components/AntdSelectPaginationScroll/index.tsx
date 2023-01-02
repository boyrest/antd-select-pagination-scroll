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

export enum ValueType {
  ObjectValue = 1,
  SimpleValue = 2,
}

export interface AntdSelectPaginationScrollIProps {
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
   * value的类型：1 类型为 {label,value} 2 类型为 number string
   * 默认为2
   */
  valueType?: ValueType.ObjectValue | ValueType.SimpleValue;
  /**
   *  触发search的debounce时间
   */
  searchDebounceTime?: number;
}

const DEFAULT_PAGESIZE = 20;

const AntdSelectPaginationScroll: React.FC<AntdSelectPaginationScrollIProps & SelectProps> = (
  props,
) => {
  const {
    value,
    onChange,
    fetchLabelByInit,
    scrollPageSize,
    searchDebounceTime = 400,
    fetchData,
    ...rest
  } = props;
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<DefaultOptionType[]>([]);
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGESIZE);
  const [searchValue, setSearchValue] = useState('');
  const timeRef = useRef<number | null>(null);
  const fetchRef = useRef<number | null>(null);
  const focusRef = useRef<boolean>(false);
  const valueType = props.valueType || 2;

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
    if (valueType === 1) {
      setSearchValue(value?.label || '');
    } else {
      value !== null && value !== undefined && getLabelByInit(value);
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
      defaultActiveFirstOption={false}
      filterOption={false}
      allowClear
      onClear={() => {
        setSearchValue('');
        setCurrent(1);
      }}
      onFocus={() => {
        focusRef.current = true;
        if (current === 1) {
          debounceGetOptions();
        } else {
          setCurrent(1);
        }
      }}
      onMouseEnter={() => {
        if (current === 1) {
          debounceGetOptions();
        } else {
          setCurrent(1);
        }
      }}
      onInputKeyDown={(e) => {
        if (e.keyCode === 8 && focusRef.current) {
          setSearchValue('');
          setCurrent(1);
        }
      }}
      notFoundContent={loading ? <Spin size="small" /> : null}
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
    />
  );
};

export default AntdSelectPaginationScroll;
