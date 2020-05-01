import React, { useContext } from 'react';
import './AllDishes.css';
import { useTheme } from '../hooks/useTheme';
import { CategoryContext } from '../context/category.context';
import { AppStateContext } from '../context/state.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Firebase } from '../firebase';

interface AllDishesProps {}

export default function AllDishes(props: AllDishesProps) {
  const category = useContext(CategoryContext);
  const theme = useTheme(category);
  const dishes = useContext(AppStateContext).dishes[category];
  const removeItem = (item: string) => {
    Firebase.getInstance()
      .db.collection('categories')
      .doc(category)
      .set({
        dishes: dishes.filter((d) => d !== item),
      });
  };
  return (
    <div className="all-dishes" style={theme.style}>
      <ol className="dish-list">
        {dishes.map((d) => (
          <li className="dish-item" key={d}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {d}
              </span>
              <FontAwesomeIcon
                onClick={() => removeItem(d)}
                style={{ float: 'right' }}
                icon={faTimes}
              ></FontAwesomeIcon>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
