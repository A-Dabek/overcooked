import React from 'react';

interface RandomizedDishProps {
  backgroundColor: string;
  dish: string;
  onReturn: () => void;
  onNext: () => void;
}

export default function RandomizedDish(props: RandomizedDishProps) {
  return (
      <div className="randomized-dish" style={{background: props.backgroundColor}}>
        <label className="randomized-dish-text">
          <label className="return" onClick={props.onReturn}>Powrót</label>
          {props.dish}
          <label className="next" onClick={props.onNext}>Jeszcze raz</label>
        </label>
      </div>
  );
}
