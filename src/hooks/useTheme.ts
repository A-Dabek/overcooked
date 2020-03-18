import {CSSProperties, useContext} from 'react';
import {DishCategory} from '../dish-category';
import {Firebase} from '../firebase';
import {AppStateContext} from '../context/state.context';

export const useTheme = (category: DishCategory) => {
  const appState = useContext(AppStateContext);
  const fg = appState.themes[category].color;
  const bg = appState.themes[category].backgroundColor;

  const resource = Firebase.getInstance().db.collection('theme').doc(category);
  const setTheme = (fg: string, bg: string) => {
    resource.set({fg, bg});
  };

  const style: CSSProperties = {color: fg, backgroundColor: bg};
  return {style, setTheme};
};
