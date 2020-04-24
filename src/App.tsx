import React, { useState } from 'react';
import './App.css';
import { DishCategory } from './dish-category';
import RandomizedDish from './RandomizedDish/RandomizedDish';
import CategorySelection from './CategorySelection/CategorySelection';
import ColorPick from './ColorPick/ColorPick';
import { CategoryContext } from './context/category.context';
import { useAppState } from './hooks/useAppState';
import { AppStateContext } from './context/state.context';
import AddNew from './AddNew/AddNew';
import AllDishes from './AllDishes/AllDishes';

export type Navigation = 'start' | 'color' | 'randomizer' | 'add' | 'list';

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

  const goToAddNew = (category: DishCategory) => {
    navigate('add');
    setCategory(category);
  };

  const goToList = (category: DishCategory) => {
    navigate('list');
    setCategory(category);
  };

  return {
    route,
    category,
    goToStart,
    goToColor,
    goToRandomizer,
    goToAddNew,
    goToList
  };
};

function App() {
  const navigation = useNavigation();
  const categories = Object.values(DishCategory);
  const state = useAppState();

  let currentScreen: JSX.Element | undefined = <span>loading...</span>;
  let startScreen = (
    <div className="category-selection-container">
      {categories.map(cat => (
        <CategorySelection
          category={cat}
          key={cat}
          onSelect={() => navigation.goToRandomizer(cat)}
          onColor={() => navigation.goToColor(cat)}
          onAdd={() => navigation.goToAddNew(cat)}
          onAll={() => navigation.goToList(cat)}
        />
      ))}{' '}
    </div>
  );

  switch (navigation.route) {
    case 'color':
      currentScreen = <ColorPick onReturn={navigation.goToStart} />;
      break;
    case 'randomizer':
      currentScreen = navigation.category && (
        <RandomizedDish onReturn={navigation.goToStart} />
      );
      break;
    case 'start':
      currentScreen = startScreen;
      break;
    case 'add':
      currentScreen = <AddNew onReturn={navigation.goToStart} />;
      break;
    case 'list':
      currentScreen = <AllDishes onReturn={navigation.goToStart} />;
      break;
  }
  return (
    <div className="App">
      {state.ready ? (
        <AppStateContext.Provider value={state.appState}>
          {navigation.category ? (
            <CategoryContext.Provider value={navigation.category}>
              {currentScreen}
            </CategoryContext.Provider>
          ) : (
            startScreen
          )}
        </AppStateContext.Provider>
      ) : (
        <span>loading...</span>
      )}
    </div>
  );
}

export default App;
