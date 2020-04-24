import React, { useContext, useState, KeyboardEventHandler } from 'react';
import './AddNew.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faUndo } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../hooks/useTheme';
import { CategoryContext } from '../context/category.context';
import { AppStateContext } from '../context/state.context';
import { Firebase } from '../firebase';
import { KeyObject } from 'crypto';

export interface AddNewProps {
  onReturn: () => void;
}

export default function AddNew(props: AddNewProps) {
  const category = useContext(CategoryContext);
  const theme = useTheme(category);
  const dishes = useContext(AppStateContext).dishes[category];
  const [text, setText] = useState<string>('');
  const rows = Math.floor(text.length / 10);
  const save = () => {
    Firebase.getInstance()
      .db.collection('categories')
      .doc(category)
      .set({
        dishes: [...dishes, text]
      });
    props.onReturn();
  };
  const onEnter: KeyboardEventHandler = event => {
    console.log(event);
    if (event.key === 'Enter') {
      save();
    }
  };
  return (
    <div className="add-new-wrapper" style={theme.style}>
      <div className="input-wrapper">
        <textarea
          className="category-name"
          placeholder="Podaj nazwę dania"
          rows={rows}
          value={text}
          onKeyUp={onEnter}
          onChange={event => setText(event.target.value)}
        />
      </div>
      <div style={theme.style} className="color-picker-tabs">
        <label className="color-picker-tab" onClick={() => save()}>
          <FontAwesomeIcon icon={faSave} style={{ paddingRight: '10px' }} />
          Zapisz
        </label>
        <label className="color-picker-tab" onClick={props.onReturn}>
          <FontAwesomeIcon icon={faUndo} style={{ paddingRight: '10px' }} />
          Powrót
        </label>
      </div>
    </div>
  );
}
