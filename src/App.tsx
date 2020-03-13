import React, {useState} from 'react';
import './App.css';
import RandomizedDish from './RandomizedDish';
import CategorySelection from './CategorySelection';
import {ColorPerDish, DishCategory} from './dish-category';
import {useRandomDish} from './useRandomDish';

function App() {
  const [category, setCategory] = useState<DishCategory | undefined>();
  const [dish, setDish] = useState<string>('');
  const randomDish = {
    [DishCategory.soup]: useRandomDish(DishCategory.soup),
    [DishCategory.dinner]: useRandomDish(DishCategory.dinner),
    [DishCategory.supper]: useRandomDish(DishCategory.supper),
  };
  const randomize = (c: DishCategory) => {
    const d = randomDish[c].randomize();
    console.log(d);
    setDish(d);
  };
  const onCategorySelect = (c: DishCategory) => {
    setCategory(c);
    randomize(c);
  };
  const onReturn = () => {
    if (category) {
      randomDish[category].reset();
      setCategory(undefined);
    }
  };
  return (
      <div className="App">
        {
          !category
              ? <CategorySelection onSelect={onCategorySelect}/>
              : <RandomizedDish backgroundColor={ColorPerDish[category]}
                                onNext={() => randomize(category)}
                                dish={dish}
                                onReturn={onReturn}/>
        }
      </div>
  );
}

export default App;
