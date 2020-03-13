import React from 'react';
import {ColorPerDish, DishCategory, LabelPerDish} from './dish-category';

export interface CategorySelectionProps {
  onSelect: (category: DishCategory) => void;
}

export default function CategorySelection(props: CategorySelectionProps) {
  const categories = Object.values(DishCategory);
  return (
      <div className="category-selection">
        {
          categories.map(category => (
              <div className="category"
                   style={{background: ColorPerDish[category]}}
                   key={category}
                   onClick={() => props.onSelect(category)}>
                <label className="category-text">{LabelPerDish[category]}</label>
              </div>))
        }
      </div>
  );
}
