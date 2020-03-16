import React, {useState} from 'react';
import './App.css';
import RandomizedDish from './RandomizedDish';
import CategorySelection from './CategorySelection';
import {ColorPerDish, DishCategory} from './dish-category';
import {useDishes} from './useDishes';

function App() {
  const [ready, dishes] = useDishes();
  const [category, setCategory] = useState<DishCategory | undefined>();
  return (
      <div className="App">
        {
          ready
              ? (!category
              ? <CategorySelection onSelect={setCategory}/>
              : <RandomizedDish backgroundColor={ColorPerDish[category]}
                                options={dishes[category]}
                                onReturn={() => setCategory(undefined)}/>)
              : <span>loading...</span>
        }
      </div>
  );
}

export default App;
