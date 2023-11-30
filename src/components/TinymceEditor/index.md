---
group:
  title: 数据录入
  order: 1
title: TinymceEditor
---

<h2>TinymceEditor</h2>

<h3>简介</h3>
<div>富文本编辑器tinymce react版本的引入，此版本基于官网版本微调，解决微前端引入bug问题,需要未定制化的可以选择此版本</div>

<h3>代码演示</h3>

```tsx
import React, { useEffect, useRef, useState } from 'react';
import { TinymceEditor } from '@dm/xman-packages';

export default () => {
  return (
    <div>
      <TinymceEditor
        init={{
          plugins:
            'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking insertdatetime advlist lists wordcount help  quickbars',
          toolbar:
            'undo redo fontfamily fontsize blocks lineheight bold italic underline strikethrough  alignleft aligncenter alignright alignjustify outdent indent  numlist bullist forecolor backcolor removeformat  insertfile image link  codesample',
        }}
      />
    </div>
  );
};
```
