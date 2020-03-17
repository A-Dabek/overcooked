import React, {useState} from 'react';
import './App.css';
import {DishCategory} from './dish-category';
import {useDishes} from './hooks/useDishes';
import RandomizedDish from './RandomizedDish/RandomizedDish';
import CategorySelection from './CategorySelection/CategorySelection';
import ColorPick from './ColorPick/ColorPick';
import {CategoryContext} from './context/category.context';

export type Navigation = 'start' | 'color' | 'randomizer';


function App() {
  const [navigator, navigate] = useState<Navigation>('start');
  const [ready, dishes] = useDishes();
  const [category, setCategory] = useState<DishCategory | undefined>();

  let currentScreen = <span>loading...</span>;
  if (ready) {
    if (category) {
      currentScreen = <RandomizedDish options={dishes[category]}
                                      onReturn={() => setCategory(undefined)}/>
    } else {
      if (navigator === 'start') {
        currentScreen = <CategorySelection onSelect={setCategory} onColor={() => navigate('color')}/>
      } else {
        currentScreen = <ColorPick onReturn={() => navigate('start')}/>
      }
    }
  }
  return (
      <CategoryContext.Provider value={category}>
        <div className="App">
          {currentScreen}
        </div>
      </CategoryContext.Provider>
  );
}

export default App;
