import {useEffect, useState} from 'react';

export const useRandomDish = (dishes: string[]) => {
  const [optionsLeft, setOptionsLeft] = useState<string[]>([]);

  useEffect(() => {
    setOptionsLeft(dishes);
  }, [dishes]);

  const reset = () => {
    setOptionsLeft(dishes);
  };

  const randomize = () => {
    const length = optionsLeft.length;
    if (length === 0) {
      return 'Aleś wybredna :/'
    }
    const index = Math.floor(Math.random() * length);
    const selected = optionsLeft[index];
    setOptionsLeft(optionsLeft.filter(opt => opt !== selected));
    return selected;
  };

  return {
    randomize,
    reset
  };
};
