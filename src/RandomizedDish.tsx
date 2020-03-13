import React from 'react';
import {ColorPerDish, DishCategory} from './dish-category';

interface RandomizedDishProps {
  category: DishCategory;
  onReturn: () => void;
}

export default function RandomizedDish(props: RandomizedDishProps) {
  return (
      <div className="randomized-dish" style={{background: ColorPerDish[props.category]}}>
        <label className="randomized-dish-text">
          Randomized dish!
          <label className="return" onClick={props.onReturn}>Powrót</label>
        </label>
      </div>
  );
}
