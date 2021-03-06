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
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import HomeButton from './HomeButton/HomeButton';

function App() {
  const categories = Object.values(DishCategory);
  const state = useAppState();
  const [category, setCategory] = useState<DishCategory>(DishCategory.soup);
  return (
    <BrowserRouter>
      <div className="App">
        {state.ready ? (
          <AppStateContext.Provider value={state.appState}>
            <CategoryContext.Provider value={category}>
              <Switch>
                <Redirect exact from="/" to="/home"></Redirect>
                <Route path="/home">
                  <div className="category-selection-container">
                    {categories.map((cat) => (
                      <CategorySelection
                        category={cat}
                        key={cat}
                        onNavigate={() => setCategory(cat)}
                      />
                    ))}{' '}
                  </div>
                </Route>
                <Route path="/random">
                  <HomeButton />
                  <RandomizedDish />
                </Route>
                <Route path="/new">
                  <HomeButton />
                  <AddNew />
                </Route>
                <Route path="/list">
                  <HomeButton />
                  <AllDishes />
                </Route>
                <Route path="/theme">
                  <HomeButton />
                  <ColorPick />
                </Route>
              </Switch>
            </CategoryContext.Provider>
          </AppStateContext.Provider>
        ) : (
          <span>loading...</span>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
