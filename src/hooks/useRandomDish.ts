import {useEffect, useState} from 'react';
import {useDishes} from './useDishes';
import {DishCategory} from '../dish-category';

export const useRandomDish = (category: DishCategory) => {
  const [value, setValue] = useState<string>('');
  const [optionsLeft, setOptionsLeft] = useState<string[]>();
  const dishes = useDishes(category);

  const randomize = (options?: string[]) => {
    const _options = (options || optionsLeft || []);
    const length = _options.length;
    if (length === 0) {
      setValue('Aleś wybredna :/');
      return;
    }
    const index = Math.floor(Math.random() * length);
    const selected = _options[index];
    setOptionsLeft(_options.filter(opt => opt !== selected));
    setValue(selected);
  };

  useEffect(() => {
    console.log(dishes);
    setOptionsLeft(dishes);
    randomize();
  }, [dishes]);

  return {
    value,
    randomize,
  };
};
