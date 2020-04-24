import React, { MouseEventHandler, useState } from 'react';
import { DishCategory, LabelPerDish } from '../dish-category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faPlus, faList } from '@fortawesome/free-solid-svg-icons';
import './CategorySelection.css';
import { useTheme } from '../hooks/useTheme';
import { Redirect } from 'react-router-dom';

export interface CategorySelectionProps {
  onNavigate: () => void;
  category: DishCategory;
}

export default function CategorySelection(props: CategorySelectionProps) {
  const [route, redirect] = useState<string>('');
  const theme = useTheme(props.category);
  const onColor: MouseEventHandler = event => {
    event.stopPropagation();
    props.onNavigate();
    redirect('theme');
  };
  const onAdd: MouseEventHandler = event => {
    event.stopPropagation();
    props.onNavigate();
    redirect('new');
  };
  const onAll: MouseEventHandler = event => {
    event.stopPropagation();
    props.onNavigate();
    redirect('list');
  };
  if (route) {
    return <Redirect to={route}></Redirect>;
  }
  return (
    <div
      className="category"
      style={theme.style}
      key={props.category}
      onClick={() => {
        props.onNavigate();
        redirect('random');
      }}
    >
      <div className="category-actions-wrapper">
        <label className="category-text">{LabelPerDish[props.category]}</label>
        <span className="category-pick-color" onClick={onColor}>
          <FontAwesomeIcon icon={faPalette} /> Kolor
        </span>
        <span className="add-dish" onClick={onAdd}>
          <FontAwesomeIcon icon={faPlus} /> Dodaj
        </span>
        <span className="all-dish" onClick={onAll}>
          <FontAwesomeIcon icon={faList} /> Lista
        </span>
      </div>
    </div>
  );
}
