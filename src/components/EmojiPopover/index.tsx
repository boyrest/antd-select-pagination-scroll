import React from 'react';
import { Popover } from 'antd';
// @ts-ignore
import { getEmojiList } from '../../utils/emoji';
// @ts-ignore
import smileImg from './smile.png';
import { PREFIX_CLASSNAME } from '../../utils/consts';
import './index.less';

export type EmojiPopoverProps = {
  onChange: (value: string) => void;
};

const PREFIX_CLASSNAME_COMPONENT = PREFIX_CLASSNAME + '-emoji-popover';
const EmojiPopover: React.FC<EmojiPopoverProps> = (props) => {
  const { onChange, ...rest } = props;

  const emojiToHtml = (url: string) => {
    return `<img src='${url}' class='braft-emoticon-wrap' />`;
  };

  return (
    <Popover
      content={
        <div className={`${PREFIX_CLASSNAME_COMPONENT}-content`}>
          {getEmojiList().map((url: string) => (
            <img onClick={() => onChange(emojiToHtml(url))} src={url} />
          ))}
        </div>
      }
      trigger="hover"
    >
      <img alt="" src={smileImg} className={`${PREFIX_CLASSNAME_COMPONENT}-icon`} />
    </Popover>
  );
};

export default EmojiPopover;
