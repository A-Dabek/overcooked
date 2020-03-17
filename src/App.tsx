import React, {useState} from 'react';
import './App.css';
import {ColorPerDish, DishCategory} from './dish-category';
import {useDishes} from './hooks/useDishes';
import RandomizedDish from './RandomizedDish/RandomizedDish';
import CategorySelection from './CategorySelection/CategorySelection';
import ColorPick from './ColorPick/ColorPick';

export type Navigation = 'start' | 'color' | 'randomizer';


function App() {
  const [navigator, navigate] = useState<Navigation>('start');
  const [ready, dishes] = useDishes();
  const [category, setCategory] = useState<DishCategory | undefined>();

  let currentScreen = <span>loading...</span>;
  if (ready) {
    if (category) {
      currentScreen = <RandomizedDish backgroundColor={ColorPerDish[category]}
                                      options={dishes[category]}
                                      onReturn={() => setCategory(undefined)}/>
    } else {
      if (navigator === 'start') {
        currentScreen = <CategorySelection onSelect={setCategory} onColor={() => navigate('color')}/>
      } else {
        currentScreen = <ColorPick/>
      }
    }
  }
  return (
      <div className="App">
        {currentScreen}
      </div>
  );
}

export default App;
