import {CSSProperties, useEffect, useState} from 'react';
import {DishCategory} from '../dish-category';
import {Firebase} from '../firebase';

interface CategoryTheme {
  fg: string;
  bg: string;
}

export const useTheme = (category: DishCategory) => {
  const [fg, setFg] = useState<string>('#000');
  const [bg, setBg] = useState<string>('#fff');
  const resuorce = Firebase.getInstance().db.collection('theme').doc(category);
  useEffect(() => {
    return resuorce.onSnapshot(snapshot => {
          const ct = snapshot.data() as CategoryTheme;
          setFg(ct.fg);
          setBg(ct.bg)
        });
  }, [category]);

  const setTheme = (fg: string, bg: string) => {
    resuorce.set({fg, bg});
  };

  const style: CSSProperties = {color: fg, backgroundColor: bg};
  return {style, setTheme};
};
