import React, {useState} from 'react';
import './App.css';
import RandomizedDish from './RandomizedDish';
import CategorySelection from './CategorySelection';
import {DishCategory} from './dish-category';

function App() {
  const [category, setCategory] = useState<DishCategory | undefined>();
  return (
      <div className="App">
        {
          !category
              ? <CategorySelection onSelect={setCategory}/>
              : <RandomizedDish category={category} onReturn={() => setCategory(undefined)}/>
        }
      </div>
  );
}

export default App;
