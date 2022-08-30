const PRIFIX_CLS = 'antd-select-pagination-scroll';

export function getPrefixCls(suffix: string): string {
  return `${PRIFIX_CLS}-${suffix}`;
}
