import {useContext, useEffect, useState} from 'react';
import {DishCategory} from '../dish-category';
import {AppStateContext} from '../context/state.context';

export const useRandomDish = (category: DishCategory) => {
  const [value, setValue] = useState<string>('');
  const dishes = useContext(AppStateContext).dishes[category];
  const [optionsLeft, setOptionsLeft] = useState<string[]>(dishes);

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
    randomize();
  }, []);

  return {
    value,
    randomize,
  };
};
