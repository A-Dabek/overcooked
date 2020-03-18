import {DishDict} from '../dish-category';
import React, {CSSProperties} from 'react';

export interface AppState {
  themes: DishDict<CSSProperties>;
  dishes: DishDict<string[]>;
}

export const AppStateContext = React.createContext<AppState>(undefined as any);
