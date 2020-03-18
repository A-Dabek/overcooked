import {CSSProperties, useEffect, useState} from 'react';
import {AppState} from '../context/state.context';
import {Firebase} from '../firebase';
import {DishDict} from '../dish-category';

export type ColorTheme = { fg: string, bg: string };

export const useAppState = () => {
  const [appState, setState] = useState<Partial<AppState>>({});

  useEffect(() => {
    const mapColorToCss = (ct: ColorTheme) => ({color: ct.fg, backgroundColor: ct.bg});

    const themeSub = Firebase.getInstance().db.collection('theme')
      .onSnapshot(snapshot => {
        const themes = snapshot.docs.reduce((prev, curr) => ({
          ...prev,
          [curr.id]: mapColorToCss(curr.data() as ColorTheme)
        }), {}) as DishDict<CSSProperties>;
        setState(oldState => ({...oldState, themes}));
      });

    const dishesSub = Firebase.getInstance().db.collection('categories')
      .onSnapshot(snapshot => {
        const dishes = snapshot.docs.reduce((prev, curr) => ({
          ...prev,
          [curr.id]: curr.data().dishes as string[]
        }), {}) as DishDict<string[]>;
        setState(oldState => ({...oldState, dishes}));
      });

    return () => {
      themeSub();
      dishesSub();
    }
  }, []);

  const ready = !!appState.dishes && !!appState.themes;
  return {ready, appState: appState as AppState};
};
