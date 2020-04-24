import React, { useContext } from 'react';
import './AllDishes.css';
import { useTheme } from '../hooks/useTheme';
import { CategoryContext } from '../context/category.context';
import { AppStateContext } from '../context/state.context';

interface AllDishesProps {
  onReturn: () => void;
}

export default function AllDishes(props: AllDishesProps) {
  const category = useContext(CategoryContext);
  const theme = useTheme(category);
  const dishes = useContext(AppStateContext).dishes[category];
  return (
    <div className="all-dishes" style={theme.style}>
      <ol className="dish-list">
        {dishes.map(d => (
          <li className="dish-item" key={d}>
            {d}
          </li>
        ))}
      </ol>
    </div>
  );
}
