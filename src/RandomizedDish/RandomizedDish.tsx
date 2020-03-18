import React, {useContext} from 'react';
import {useRandomDish} from '../hooks/useRandomDish';
import './RandomizedDish.css';
import {useTheme} from '../hooks/useTheme';
import {CategoryContext} from '../context/category.context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDice, faUndo} from '@fortawesome/free-solid-svg-icons';

interface RandomizedDishProps {
  onReturn: () => void;
}

export default function RandomizedDish(props: RandomizedDishProps) {
  const category = useContext(CategoryContext);
  const theme = useTheme(category);
  const randomizer = useRandomDish(category);
  return (
    <div className="randomized-dish" style={theme.style}>
      <label className="randomized-dish-text">{randomizer.value}</label>
      <div className="color-picker-tabs">
        <label className="color-picker-tab next" onClick={() => randomizer.randomize()}>
          <FontAwesomeIcon icon={faDice} style={{paddingRight: '5px'}}/>
          Następny
        </label>
        <label className="color-picker-tab return" onClick={props.onReturn}>
          <FontAwesomeIcon icon={faUndo} style={{paddingRight: '10px'}}/>
          Powrót
        </label>
      </div>
    </div>
  );
}
