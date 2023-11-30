import { useCallback, useEffect, useRef } from 'react';
import { COMPONENT_CHANGE, COMPONENT_READY } from '../../utils/consts';
import eventBus from '../../utils/eventBus';

interface EventCenterProps {
  componentId: string;
}

export default ({ componentId }: EventCenterProps) => {
  // resolve handle
  const resolveRef = useRef<any>(null);
  // 是否已经发送过ready
  const readyIsSended = useRef<boolean>(false);
  // 存储发送值
  const valueRef = useRef<any>(null);
  // 设置唯一promise handle
  const promiseRef = useRef<any>(null);
  useEffect(() => {
    promiseRef.current = new Promise((resolve) => {
      resolveRef.current = resolve;
    });
  }, []);

  const sendReady = useCallback(
    (values: any) => {
      readyIsSended.current = true;
      valueRef.current = values;
      if (resolveRef.current) {
        resolveRef.current(values);
      }
      eventBus.emit(`${componentId}/${COMPONENT_READY}`, {
        dependenceComponentId: componentId,
        payload: values,
      });
    },
    [componentId],
  );

  const sendChange = useCallback(
    (values: any) => {
      valueRef.current = values;
      eventBus.emit(`${componentId}/${COMPONENT_CHANGE}`, {
        dependenceComponentId: componentId,
        payload: values,
      });
    },
    [componentId],
  );

  useEffect(() => {
    function onReadyCallback() {
      eventBus.emit(`${componentId}/${COMPONENT_READY}`, {
        dependenceComponentId: componentId,
        payload: readyIsSended.current ? valueRef.current : promiseRef.current,
      });
    }
    eventBus.on(`${componentId}/${COMPONENT_READY}/center`, onReadyCallback);
    return () => {
      eventBus.off(`${componentId}/${COMPONENT_READY}/center`, onReadyCallback);
    };
  }, [componentId]);

  return [sendReady, sendChange, readyIsSended];
};
