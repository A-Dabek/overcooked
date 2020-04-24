import React, { useContext } from 'react';
import { useRandomDish } from '../hooks/useRandomDish';
import './RandomizedDish.css';
import { useTheme } from '../hooks/useTheme';
import { CategoryContext } from '../context/category.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';

interface RandomizedDishProps {}

export default function RandomizedDish(props: RandomizedDishProps) {
  const category = useContext(CategoryContext);
  const theme = useTheme(category);
  const randomizer = useRandomDish(category);
  return (
    <div className="randomized-dish" style={theme.style}>
      <label
        className="randomized-dish-text"
        onClick={() => randomizer.randomize()}
      >
        <FontAwesomeIcon icon={faDice} style={{ paddingRight: '5px' }} />
        {randomizer.value}
      </label>
    </div>
  );
}
