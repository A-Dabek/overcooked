import {Ref, useLayoutEffect, useRef, useState} from 'react';

export const useRefSize = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    setWidth(ref?.current?.clientWidth || 0);
    setHeight(ref?.current?.clientHeight || 0);
  }, [ref]);
  return [ref, width, height] as [Ref<HTMLDivElement>, number, number];
};
