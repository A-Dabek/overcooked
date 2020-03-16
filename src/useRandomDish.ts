import {useEffect, useState} from 'react';

export const useRandomDish = (dishes: string[]) => {
  const [value, setValue] = useState<string>('');
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
