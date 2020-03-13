import {DishCategory} from './dish-category';
import {useEffect, useState} from 'react';

export const useRandomDish = (category: DishCategory) => {
  const [options, setOptions] = useState<string[]>([]);
  const [optionsLeft, setOptionsLeft] = useState<string[]>([]);

  const reset = () => {
    setOptionsLeft(options);
  };

  useEffect(() => {
    const _options = ['a', 'b', 'c'];
    setOptions(_options);
    setOptionsLeft(_options)
    // fetch here
  }, []);


  const randomize = () => {
    const length = optionsLeft.length;
    if (length === 0) {
      return 'Aleś wybredna :/'
    }
    const index = Math.floor(Math.random() * length);
    const selected = optionsLeft[index];
    setOptionsLeft(optionsLeft.filter(opt => opt !== selected));
    console.log(selected, optionsLeft, options);
    return selected;
  };

  return {
    randomize,
    reset
  };
};
