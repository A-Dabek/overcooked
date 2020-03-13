import React from 'react';

interface RandomizedDishProps {
  category: string;
  onReturn: () => void;
}

export default function RandomizedDish(props: RandomizedDishProps) {
  return (
      <div>
        Randomized dish!
        <div onClick={props.onReturn}>Powrót</div>
      </div>
  );
}
