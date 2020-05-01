import React, { useContext, useState, KeyboardEventHandler } from 'react';
import './AddNew.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../hooks/useTheme';
import { CategoryContext } from '../context/category.context';
import { AppStateContext } from '../context/state.context';
import { Firebase } from '../firebase';
import { Redirect } from 'react-router-dom';

export interface AddNewProps {}

export default function AddNew(props: AddNewProps) {
  const category = useContext(CategoryContext);
  const theme = useTheme(category);
  const dishes = useContext(AppStateContext).dishes[category];
  const [text, setText] = useState<string>('');
  const rows = Math.floor(text.length / 10) + 2;
  const [route, navigate] = useState<string>('');
  const save = () => {
    Firebase.getInstance()
      .db.collection('categories')
      .doc(category)
      .set({
        dishes: [...dishes, text],
      });
    navigate('/');
  };
  const onEnter: KeyboardEventHandler = (event) => {
    if (event.key === 'Enter') {
      save();
    }
  };
  if (route) {
    return <Redirect to={route}></Redirect>;
  }
  return (
    <div className="add-new-wrapper" style={theme.style}>
      <div style={theme.style} className="color-picker-tabs">
        <label className="color-picker-tab" onClick={() => save()}>
          <FontAwesomeIcon icon={faSave} style={{ paddingRight: '10px' }} />
          Zapisz
        </label>
      </div>
      <div className="input-wrapper">
        <textarea
          className="category-name"
          placeholder="Podaj nazwę dania"
          rows={rows}
          value={text}
          onKeyUp={onEnter}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
    </div>
  );
}
