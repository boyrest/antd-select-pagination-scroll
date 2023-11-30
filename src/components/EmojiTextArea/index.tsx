import React, { forwardRef, useEffect, useRef, useState, useImperativeHandle } from 'react';
import { TinymceEditor } from '@dm/xman-packages';
import { IAllProps } from '../TinymceEditor/components/Editor';
import { Editor as TinyMCEEditor, EditorEvent } from 'tinymce';
import styles from './index.module.less';
import EmojiPopover from '../EmojiPopover';
// @ts-ignore
import { getEmojiName, handlePasteContent, countSymbols } from '../../utils/emoji';
// @ts-ignore
import filterHtml from '../../utils/filterHtml';
import './index.less';
import { PREFIX_CLASSNAME } from '../../utils/consts';

const PREFIX_CLASSNAME_COMPONENT = PREFIX_CLASSNAME + '-emoji-textarea';
const PREFIX_CLASSNAME_COMPONENT_INPUT = PREFIX_CLASSNAME + '-emoji-input';

export type IEditorProps = IAllProps & {
  maxLength?: number;
  preventInputByMaxLength?: boolean;
  emoji?: boolean;
  value: string;
  onChange: (value: string) => void;
  // 是否模拟输入框
  input?: boolean;
};
const EmojiTextArea: React.FC<IEditorProps> = forwardRef((props, ref) => {
  const {
    value,
    onChange,
    maxLength,
    preventInputByMaxLength = true,
    emoji = false,
    input,
    ...rest
  } = props;
  const [length, setLength] = useState(0);
  const editorRef = useRef<HTMLDivElement | null>(null);

  const handleBeforeAddUndo = (e: EditorEvent<'BeforeAddUndo'>, editor: TinyMCEEditor) => {
    if (maxLength && preventInputByMaxLength) {
      const textLen = editor.getContent({ format: 'text' }).replace(/(^\s*)|(\s*$)/g, '').length;
      // 计算表情个数, 单个表情按照两个字符计算
      const emojiNum = countSymbols(filterHtml(getEmojiName(editor.getContent() || ''))).emojiNum;
      const length = textLen + emojiNum * 2;
      if (length > maxLength) {
        e.preventDefault();
      }
    }
  };

  const getTextLength = (editor: TinyMCEEditor) => {
    return editor.getContent({ format: 'text' }).replace(/(^\s*)|(\s*$)/g, '').length;
  };
  const getEmojiNum = (editor: TinyMCEEditor) => {
    return countSymbols(filterHtml(getEmojiName(editor.getContent() || ''))).emojiNum;
  };
  const handleUpdate = (value: string, editor: TinyMCEEditor) => {
    if (maxLength) {
      const textLen = getTextLength(editor);
      // 计算表情个数, 单个表情按照两个字符计算
      const emojiNum = getEmojiNum(editor);
      const length = textLen + emojiNum * 2;
      if (length <= maxLength || !preventInputByMaxLength) {
        onChange(value);
        setLength(length);
      }
    } else {
      onChange(value);
    }
  };

  const addEmoji = (emoji: string) => {
    editorRef.current?.editor?.insertContent(emoji);
  };

  useEffect(() => {
    const keyHandler = (e) => {
      if (e.code === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    };
    if (input) {
      editorRef.current?.editor?.on('keydown', keyHandler);
    }
    return () => {
      if (input) {
        editorRef.current?.editor?.off('keydown', keyHandler);
      }
    };
  }, []);

  useImperativeHandle(ref, () => ({
    getTextLength: () => {
      return getTextLength(editorRef.current?.editor);
    },
    getEmojiNum: () => {
      return getEmojiNum(editorRef.current?.editor);
    },
    getEmojiLength: () => {
      return getEmojiNum(editorRef.current?.editor) * 2;
    },
    getLength: () => {
      return getTextLength(editorRef.current?.editor) + getEmojiNum(editorRef.current?.editor) * 2;
    },
  }));

  return (
    <div className={input ? PREFIX_CLASSNAME_COMPONENT_INPUT : PREFIX_CLASSNAME_COMPONENT}>
      <div className={`${PREFIX_CLASSNAME_COMPONENT}-editor`}>
        <TinymceEditor
          ref={editorRef}
          value={value || ''}
          onEditorChange={handleUpdate}
          onBeforeAddUndo={handleBeforeAddUndo}
          {...rest}
          init={{
            toolbar: false,
            plugins: '',
            forced_root_block: 'div',
            paste_preprocess: (editor, args) => {
              args.content = handlePasteContent(editor, args);
            },
            content_style: `body {font-size: 14px;margin: 4px 10px;} img::selection {background-color: rgb(187,215,251);} .braft-emoticon-wrap{width: 16px;
          height: 16px;
          user-select: all;
          position: relative;
          top: 3px;}`,
            statusbar: false,
            ...(rest?.init || {}),
          }}
        />
        {maxLength ? (
          <div className={`${PREFIX_CLASSNAME_COMPONENT}-limit`}>{`${length}/${maxLength}`}</div>
        ) : null}
      </div>
      {emoji ? <EmojiPopover onChange={(val) => addEmoji(val)} /> : null}
    </div>
  );
});

export default EmojiTextArea;
