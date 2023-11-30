const PRIFIX_CLS = 'xman-packages';

export function getPrefixCls(suffix: string): string {
  return `${PRIFIX_CLS}-${suffix}`;
}
