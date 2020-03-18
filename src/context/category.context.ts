import React from 'react';
import {DishCategory} from '../dish-category';

export const CategoryContext = React.createContext<DishCategory>(DishCategory.soup);
