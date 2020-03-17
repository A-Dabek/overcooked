import React from 'react';
import {useRandomDish} from '../hooks/useRandomDish';
import './RandomizedDish.css';

interface RandomizedDishProps {
  backgroundColor: string;
  onReturn: () => void;
  options: string[];
}

export default function RandomizedDish(props: RandomizedDishProps) {
  const randomizer = useRandomDish(props.options);
  return (
      <div className="randomized-dish" style={{background: props.backgroundColor}}>
        <label className="randomized-dish-text">
          <label className="return" onClick={props.onReturn}>Powrót</label>
          {randomizer.value}
          <label className="next" onClick={() => randomizer.randomize()}>Jeszcze raz</label>
        </label>
      </div>
  );
}
