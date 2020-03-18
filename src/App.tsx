import React, {useState} from 'react';
import './App.css';
import {DishCategory} from './dish-category';
import {useDishes} from './hooks/useDishes';
import RandomizedDish from './RandomizedDish/RandomizedDish';
import CategorySelection from './CategorySelection/CategorySelection';
import ColorPick from './ColorPick/ColorPick';
import {CategoryContext} from './context/category.context';

export type Navigation = 'start' | 'color' | 'randomizer';

const useNavigation = () => {
  const [route, navigate] = useState<Navigation>('start');
  const [category, setCategory] = useState<DishCategory | undefined>();

  const goToStart = () => {
    navigate('start');
    setCategory(undefined);
  };

  const goToColor = (category: DishCategory) => {
    navigate('color');
    setCategory(category);
  };

  const goToRandomizer = (category: DishCategory) => {
    navigate('randomizer');
    setCategory(category);
  };

  return {route, category, goToStart, goToColor, goToRandomizer};
};


function App() {
  const navigation = useNavigation();
  const categories = Object.values(DishCategory);

  let currentScreen: JSX.Element | undefined = <span>loading...</span>;
  let startScreen = <div className="category-selection-container">
    {
      categories.map(cat =>
        <CategorySelection category={cat}
                           key={cat}
                           onSelect={() => navigation.goToRandomizer(cat)}
                           onColor={() => navigation.goToColor(cat)}/>
      )
    } </div>;

  switch (navigation.route) {
    case 'color':
      currentScreen = <ColorPick onReturn={navigation.goToStart}/>;
      break;
    case 'randomizer':
      currentScreen = navigation.category && <RandomizedDish onReturn={navigation.goToStart}/>
      break;
    case 'start':
      currentScreen = startScreen;
      break;
  }
  return (
    <CategoryContext.Provider value={navigation.category}>
      <div className="App">
        {currentScreen}
      </div>
    </CategoryContext.Provider>
  );
}

export default App;
