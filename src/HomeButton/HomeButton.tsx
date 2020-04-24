import React, { useContext } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { CategoryContext } from '../context/category.context';
import './HomeButton.css';

function HomeButton() {
  const category = useContext(CategoryContext);
  const theme = useTheme(category);
  return (
    <div className="home-button-wrapper" style={theme.style}>
      <Link to="/home">
        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
      </Link>
    </div>
  );
}
export default HomeButton;
