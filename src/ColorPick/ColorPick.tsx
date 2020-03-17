import React, {Ref, useContext, useLayoutEffect, useRef, useState} from 'react';
import {ColorChangeHandler, SwatchesPicker} from 'react-color';
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

export interface ColorPickProps {

}

export default function ColorPick(props: ColorPickProps) {
  const [ref, width, height] = useRefSize();
  const [isForeground, setForeground] = useState(true);
  const [fg, setFg] = useState('#000');
  const [bg, setBg] = useState('#fff');
  const onColorChange: ColorChangeHandler = color => {
    if (isForeground) setFg(color.hex);
    else setBg(color.hex);
  };
  return (
      <div className="color-picker-wrapper" ref={ref}>
        <div className="color-picker-tabs" style={{background: bg, color: fg}}>
          <label className={`color-picker-tab ${isForeground && 'active'}`}
                 onClick={() => setForeground(true)}>
            Tekst
          </label>
          <label className={`color-picker-tab ${!isForeground && 'active'}`}
                 onClick={() => setForeground(false)}>
            Tło
          </label>
        </div>
        <SwatchesPicker height={height} width={width} onChangeComplete={onColorChange}/>
      </div>
  );
}
