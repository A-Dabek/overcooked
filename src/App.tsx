import React, {useState} from 'react';
import './App.css';
import RandomizedDish from './RandomizedDish';
import CategorySelection from './CategorySelection';
import {ColorPerDish, DishCategory} from './dish-category';
import {useRandomDish} from './useRandomDish';
import {useDishes} from './useDishes';

function App() {
  const [ready, dishes] = useDishes();
  const [category, setCategory] = useState<DishCategory | undefined>();
  const [dish, setDish] = useState<string>('');
  const randomDish = {
    [DishCategory.soup]: useRandomDish(dishes[DishCategory.soup]),
    [DishCategory.dinner]: useRandomDish(dishes[DishCategory.dinner]),
    [DishCategory.supper]: useRandomDish(dishes[DishCategory.supper]),
  };
  const randomize = (c: DishCategory) => {
    const d = randomDish[c].randomize();
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
          ready
              ? (!category
              ? <CategorySelection onSelect={onCategorySelect}/>
              : <RandomizedDish backgroundColor={ColorPerDish[category]}
                                onNext={() => randomize(category)}
                                dish={dish}
                                onReturn={onReturn}/>)
              : <span>loading...</span>
        }
      </div>
  );
}

export default App;
