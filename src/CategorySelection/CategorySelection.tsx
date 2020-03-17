import React, {MouseEventHandler} from 'react';
import {ColorPerDish, DishCategory, LabelPerDish} from '../dish-category';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPalette, faPlus} from '@fortawesome/free-solid-svg-icons'
import './CategorySelection.css';

export interface CategorySelectionProps {
  onSelect: (category: DishCategory) => void;
  onColor: () => void;
}

export default function CategorySelection(props: CategorySelectionProps) {
  const categories = Object.values(DishCategory);
  const onColor: MouseEventHandler = event => {
    event.stopPropagation();
    props.onColor();
  };
  return (
      <div className="category-selection">
        {
          categories.map(category => (
              <div className="category"
                   style={{background: ColorPerDish[category]}}
                   key={category}
                   onClick={() => props.onSelect(category)}>
                <div className="category-actions-wrapper">
                  <label className="category-text">{LabelPerDish[category]}</label>
                  <span className="category-pick-color" onClick={onColor}>
                    <FontAwesomeIcon icon={faPalette}/> Kolor
                  </span>
                  <span className="add-dish">
                    <FontAwesomeIcon icon={faPlus}/> Dodaj
                  </span>
                </div>
              </div>))
        }
      </div>
  );
}
