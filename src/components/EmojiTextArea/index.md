---
group:
  title: 数据录入
  order: 2
title: EmojiTextArea
---

<h2>EmojiTextArea</h2>

<h3>简介</h3>
<div>textarea可以插入emoji，并支持外部复制粘贴转化成已有emoji</div>

<h3>代码演示</h3>
<h4>最大长度限制(阻止输入)</h4>
<div>注：这种有限制就是用户如果copy外部网站内容一次进来的时候，体验不好，直接输入的体验可以。可以考虑下一个demo的用法</div>

```tsx
import React, { useEffect, useRef, useState } from 'react';
import { EmojiTextArea } from '@dm/xman-packages';
import { Button } from 'antd';

export default () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <EmojiTextArea
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
        maxLength={10}
      />
    </div>
  );
};
```

<h4>最大长度限制(不阻止输入)</h4>
<div>注：这种情况可以在外部校验长度，比如antd form，建议使用</div>

```tsx
import React, { useEffect, useRef, useState } from 'react';
import { EmojiTextArea } from '@dm/xman-packages';
import { Button,Form } from 'antd';

export default () => {
  const [value, setValue] = useState('');
  const [form] = Form.useForm();
  const editorRef = useRef(null);

  return (
    <div>
      <Form form={form} name="control-hooks" onFinish={()=>{}} >
        <Form.Item
          name="note"
          label="Note"
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                const length = editorRef.current.getLength();
                if(length > 15){
                  return Promise.reject(new Error('字符长度需要少于10位'));    
                }
                const emojiNum = editorRef.current.getEmojiNum();
                if(emojiNum> 5){
                  return Promise.reject(new Error('表情数量需要少于等于5个'));
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <EmojiTextArea maxLength={15} ref={editorRef} preventInputByMaxLength={false} emoji />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
```

<h4>带有emoji</h4>

```tsx
import React, { useEffect, useRef, useState } from 'react';
import { EmojiTextArea } from '@dm/xman-packages';
import { Button } from 'antd';

export default () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <EmojiTextArea
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
        maxLength={200}
        emoji
      />
    </div>
  );
};
```
