import React, {MouseEventHandler} from 'react';
import {DishCategory, LabelPerDish} from '../dish-category';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPalette, faPlus} from '@fortawesome/free-solid-svg-icons'
import './CategorySelection.css';
import {useTheme} from '../hooks/useTheme';

export interface CategorySelectionProps {
  onSelect: () => void;
  onColor: () => void;
  onAdd: () => void;
  category: DishCategory;
}

export default function CategorySelection(props: CategorySelectionProps) {
  const theme = useTheme(props.category);
  const onColor: MouseEventHandler = event => {
    event.stopPropagation();
    props.onColor();
  };
  const onAdd: MouseEventHandler = event => {
    event.stopPropagation();
    props.onAdd();
  };
  return (
    <div className="category"
         style={theme.style}
         key={props.category}
         onClick={props.onSelect}>
      <div className="category-actions-wrapper">
        <label className="category-text">{LabelPerDish[props.category]}</label>
        <span className="category-pick-color" onClick={onColor}>
          <FontAwesomeIcon icon={faPalette}/> Kolor
        </span>
        <span className="add-dish" onClick={onAdd}>
          <FontAwesomeIcon icon={faPlus}/> Dodaj
        </span>
      </div>
    </div>
  );
}
