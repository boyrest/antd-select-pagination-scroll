import React, { useState, useRef, useEffect } from 'react';
// @ts-ignore
import LinesEllipsis from 'react-lines-ellipsis';
import { Tooltip } from 'antd';
import { useSize } from 'ahooks';
import { PREFIX_CLASSNAME } from '../../utils/consts';

export interface TextEllipsisIProps {
  text: string;
  maxLine?: number;
}

const PREFIX_CLASSNAME_COMPONENT = PREFIX_CLASSNAME + '-text-ellipsis';
const TextEllipsis: React.FC<TextEllipsisIProps> = ({ text = '', maxLine = 1 }) => {
  const ref = useRef(null);
  const timeRef = useRef<number | null>(null);
  const [visible, setVisible] = useState(false);
  const size = useSize(ref);
  const clampedRef = useRef(false);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    if (size?.width !== undefined) {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
        timeRef.current = null;
      }
      timeRef.current = setTimeout(() => {
        setLoad(false);
        clampedRef.current = false;
        window.requestAnimationFrame(() => {
          setLoad(true);
        });
      }, 50);
    }
    console.log(size);
  }, [size?.width]);

  return (
    <div ref={ref} className={PREFIX_CLASSNAME_COMPONENT}>
      {load && (
        <Tooltip
          title={text}
          open={visible}
          onOpenChange={(value) => {
            if (clampedRef.current) {
              setVisible(value);
            }
          }}
        >
          <LinesEllipsis
            text={text}
            maxLine={maxLine}
            // className={styles.wrapper}
            onReflow={(rleState: any) => {
              clampedRef.current = rleState.clamped;
            }}
          />
        </Tooltip>
      )}
    </div>
  );
};
export default TextEllipsis;
