import { combineReducers } from 'redux';
import { takeEvery, put, call } from 'redux-saga/effects';

// 生成Redux reducers对象
function generateReduxReducers(...models) {
  const reduxReducers = {};
  models.forEach((model) => {
    const { namespace, state, reducers } = model;
    const initialState = state;
    const reducer = function (state = initialState, action) {
      const { type, payload } = action;

      const actionType = type.split('/')[1];

      if (reducers.hasOwnProperty(actionType)) {
        const updateStateFn = reducers[actionType];
        const updatedState = updateStateFn(state, action);

        return { ...state, ...updatedState };
      }

      return state;
    };

    reduxReducers[namespace] = reducer;
  });

  return combineReducers(reduxReducers);
}

// 生成Redux-saga effects数组
function generateSagaEffects(...models) {
  const sagaEffects = [];

  models.forEach((model) => {
    const { namespace, effects } = model;

    Object.entries(effects).forEach(([effectName, effectFn]) => {
      const sagaEffect = function* (action) {
        try {
          function _put({
            type,
            payload,
            // payload: { data: data.value.list },
          }) {
            return put({
              type: `${namespace}/${type}`,
              payload,
            });
          }
          // 调用effect函数
          return yield call(effectFn, { payload: action.payload }, { put: _put, call });
        } catch (error) {
          console.error(error);
        }
      };

      sagaEffects.push({
        name: `${namespace}/${effectName}`,
        action: sagaEffect,
      });
    });
  });

  return sagaEffects;
}

export default function createReduxSagas(models) {
  const rootReducer = generateReduxReducers(...models);
  const sagaEffects = generateSagaEffects(...models);
  function* rootSaga() {
    for (let i = 0; i < sagaEffects.length; i++) {
      const { name, action } = sagaEffects[i];
      yield takeEvery(name, action);
    }
  }
  return { rootReducer, rootSaga };
}
