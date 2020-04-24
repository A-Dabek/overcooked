import React, { CSSProperties, useContext, useState } from 'react';
import { ColorChangeHandler, SwatchesPicker } from 'react-color';
import './ColorPick.css';
import { CategoryContext } from '../context/category.context';
import { useTheme } from '../hooks/useTheme';
import { useRefSize } from '../hooks/useRefSize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';

export interface ColorPickProps {}

export default function ColorPick(props: ColorPickProps) {
  const [ref, width, height] = useRefSize();
  const category = useContext(CategoryContext);
  const theme = useTheme(category);
  const [isForeground, setForeground] = useState(true);
  const [fg, setFg] = useState<string | undefined>();
  const [bg, setBg] = useState<string | undefined>();
  const [route, navigate] = useState<string>('');
  const onColorChange: ColorChangeHandler = color => {
    if (isForeground) setFg(color.hex);
    else setBg(color.hex);
  };
  const save = () => {
    theme.setTheme(fg || '#000', bg || '#fff');
    navigate('/');
  };
  const style: CSSProperties = {
    color: fg || theme.style.color,
    backgroundColor: bg || theme.style.backgroundColor
  };
  if (route) {
    return <Redirect to={route}></Redirect>;
  }
  return (
    <div className="color-picker-wrapper" ref={ref} style={style}>
      <div className="color-picker-tabs">
        <label
          className={`color-picker-tab ${isForeground && 'active'}`}
          onClick={() => setForeground(true)}
        >
          Tekst
        </label>
        <label
          className={`color-picker-tab ${!isForeground && 'active'}`}
          onClick={() => setForeground(false)}
        >
          Tło
        </label>
      </div>
      <SwatchesPicker
        height={height * 0.75}
        width={width}
        onChangeComplete={onColorChange}
      />
      <div className="color-picker-tabs">
        <label className="color-picker-tab" onClick={save}>
          <FontAwesomeIcon icon={faSave} style={{ paddingRight: '10px' }} />
          Zapisz
        </label>
      </div>
    </div>
  );
}
