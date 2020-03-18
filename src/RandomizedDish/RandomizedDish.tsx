import React, {useContext} from 'react';
import {useRandomDish} from '../hooks/useRandomDish';
import './RandomizedDish.css';
import {useTheme} from '../hooks/useTheme';
import {CategoryContext} from '../context/category.context';
import {DishCategory} from '../dish-category';

interface RandomizedDishProps {
  onReturn: () => void;
}

export default function RandomizedDish(props: RandomizedDishProps) {
  const category = useContext(CategoryContext) || DishCategory.soup;
  const theme = useTheme(category || DishCategory.soup);
  const randomizer = useRandomDish(category);
  return (
      <div className="randomized-dish" style={theme.style}>
        <label className="randomized-dish-text">
          <label className="return" onClick={props.onReturn}>Powrót</label>
          {randomizer.value}
          <label className="next" onClick={() => randomizer.randomize()}>Jeszcze raz</label>
        </label>
      </div>
  );
}
