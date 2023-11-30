import React, { useState } from 'react';
import './index.less';
import { EmojiTextArea } from '@dm/xman-packages';

export default () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <EmojiTextArea
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
        input
        maxLength={10}
      />
    </div>
  );
};
