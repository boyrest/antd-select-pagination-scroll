import { useEffect, useRef, useState } from 'react';
import { COMPONENT_CHANGE, COMPONENT_READY } from '../../utils/consts';
import eventBus from '../../utils/eventBus';
// @ts-ignore
import isEqual from 'lodash/isEqual';

interface Event {
  // 发送事件名
  type: string;
}

interface EventDependenciesProps {
  //依赖组件Ids
  dependenceComponentIds?: string[];
}

interface EventData {
  dependenceComponentId: string;
  payload: any;
}
export default ({ dependenceComponentIds = [] }: EventDependenciesProps) => {
  const [isReady, setIsReady] = useState(!(dependenceComponentIds?.length > 0));
  const [searches, setSearches] = useState<any>(null);
  const dependenciesRef = useRef<any>({});

  useEffect(() => {
    function parseDependenciesValue() {
      let temp = {};
      const keys = Object.keys(dependenciesRef.current);
      keys.forEach((key) => {
        // @ts-ignore
        temp = { ...temp, ...dependenciesRef.current[key] };
      });
      temp = { ...temp };
      if (!isEqual(temp, searches)) {
        setSearches(temp);
      }
    }

    function checkDependenciesReadyStatus() {
      const hasNoReadyComponent = dependenceComponentIds?.find((_id) => {
        return !dependenciesRef.current[_id] || dependenciesRef.current[_id].then;
      });
      if (!hasNoReadyComponent) {
        setIsReady(true);
        parseDependenciesValue();
      }
    }

    function dependenceReadyCallback(event: Event, { dependenceComponentId, payload }: EventData) {
      //禁止重复触发ready逻辑
      if (dependenciesRef.current[dependenceComponentId]) {
        return;
      }
      dependenciesRef.current[dependenceComponentId] = payload || {};
      if (payload?.then) {
        // promise情况下，返回值必须为对象
        payload.then((values: any) => {
          dependenciesRef.current[dependenceComponentId] = values;
          checkDependenciesReadyStatus();
        });
      } else {
        checkDependenciesReadyStatus();
      }
    }

    function dependenceChangeCallback(event: Event, { dependenceComponentId, payload }: EventData) {
      dependenciesRef.current[dependenceComponentId] = payload;
      parseDependenciesValue();
    }

    dependenciesRef.current = {};
    dependenceComponentIds?.forEach((id) => {
      eventBus.on(`${id}/${COMPONENT_READY}`, dependenceReadyCallback);
      eventBus.on(`${id}/${COMPONENT_CHANGE}`, dependenceChangeCallback);
      eventBus.emit(`${id}/${COMPONENT_READY}/center`, null);
    });

    return () => {
      dependenceComponentIds?.forEach((id) => {
        eventBus.off(`${id}/${COMPONENT_READY}`, dependenceReadyCallback);
        eventBus.off(`${id}/${COMPONENT_CHANGE}`, dependenceChangeCallback);
      });
    };
  }, [dependenceComponentIds]);

  return [isReady, searches, setSearches];
};
