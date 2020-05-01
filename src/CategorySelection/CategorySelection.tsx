import React, { MouseEventHandler, useState } from 'react';
import { DishCategory, LabelPerDish } from '../dish-category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faPlus, faList } from '@fortawesome/free-solid-svg-icons';
import './CategorySelection.css';
import { useTheme } from '../hooks/useTheme';
import { Link, Redirect } from 'react-router-dom';

export interface CategorySelectionProps {
  onNavigate: () => void;
  category: DishCategory;
}

export default function CategorySelection(props: CategorySelectionProps) {
  const [route, redirect] = useState<string>('');
  const theme = useTheme(props.category);
  const onColor: MouseEventHandler = (event) => {
    event.stopPropagation();
    props.onNavigate();
  };
  const onAdd: MouseEventHandler = (event) => {
    event.stopPropagation();
    props.onNavigate();
  };
  const onAll: MouseEventHandler = (event) => {
    event.stopPropagation();
    props.onNavigate();
  };
  if (route) {
    return <Redirect push to={route}></Redirect>;
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
        <Link to="theme" onClick={onColor}>
          <span className="category-pick-color">
            <FontAwesomeIcon icon={faPalette} /> Kolor
          </span>
        </Link>
        <Link to="new" onClick={onAdd}>
          <span className="add-dish">
            <FontAwesomeIcon icon={faPlus} /> Dodaj
          </span>
        </Link>
        <Link to="list" onClick={onAll}>
          <span className="all-dish">
            <FontAwesomeIcon icon={faList} /> Lista
          </span>
        </Link>
      </div>
    </div>
  );
}
