import React, {Ref, useLayoutEffect, useRef, useState} from 'react';
import {SwatchesPicker} from 'react-color';
import './ColorPick.css';

const useRefSize = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    setWidth(ref?.current?.clientWidth || 0);
    setHeight(ref?.current?.clientHeight || 0);
  }, [ref]);
  return [ref, width, height] as [Ref<HTMLDivElement>, number, number];
};

export default function ColorPick() {
  const [ref, width, height] = useRefSize();
  return (
      <div className="color-picker-wrapper" ref={ref}>
        <div className="color-picker-tabs">
          <label className="color-picker-tab">Tekst</label>
          <label className="color-picker-tab">Tło</label>
        </div>
        <SwatchesPicker height={height} width={width}/>
      </div>
  );
}
