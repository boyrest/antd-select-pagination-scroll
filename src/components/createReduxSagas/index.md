---
group:
  title: 工程改造
  order: 4
title: createReduxSagas dva伪装
---

<h2>createReduxSagas</h2>

<h3>简介</h3>
<div>伪装成dva实现部分功能，可以方便读取model</div>

<h3>代码演示</h3>

<div>step1: 新建store</div>
<br/>

```jsx | pure
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createReduxSagas } from '@dm/xman-packages';
const sagaMiddleware = createSagaMiddleware();
import GlobalModel from './models/global';
import TaskModel from './pages/task/models/TaskSaga';

// 导入dva的model
const { rootReducer, rootSaga } = createReduxSagas([GlobalModel, TaskModel]);

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
```

<br/>
<div>step2: 导入store</div>
<br/>

```jsx | pure
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { message } from 'antd';

import store from '../store.js';

import '../global.less';

import Layout from '../layouts/index.js';
import { IRequest } from '@/request';
interface IStoreWrapperProps {
  children: React.ReactElement;
}
message.config({
  top: 100,
  duration: 2,
  maxCount: 1,
  prefixCls: 'ant-xman-message',
});

const StoreWrapper: React.FC<IStoreWrapperProps & IRequest> = (props) => {
  const { children, baseURL } = props;

  window.reachBaseURL = baseURL || '';
  return (
    <Provider store={store}>
      <LayoutWrapper>{children}</LayoutWrapper>
    </Provider>
  );
};

function LayoutWrapper({ children }) {
  const dispatch = useDispatch();
  return <Layout dispatch={dispatch}>{children}</Layout>;
}

export default StoreWrapper;
```
