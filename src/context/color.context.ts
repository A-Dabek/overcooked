import React from 'react';
import {DishCategory, DishDict} from '../dish-category';


export type ColorTheme = {fg: string, bg: string};
export type AppTheme = DishDict<ColorTheme>;
export const AppThemeContext = React.createContext<AppTheme>({
  [DishCategory.soup]: {fg: '#000', bg: '#f00'},
  [DishCategory.dinner]: {fg: '#000', bg: '#0f0'},
  [DishCategory.supper]: {fg: '#000', bg: '#00f'},
});
