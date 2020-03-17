import {useEffect, useState} from 'react';
import {DishCategory, DishDict} from '../dish-category';
import {Firebase} from '../firebase';

export const useDishes = () => {
  const [ready, setReady] = useState(false);
  const [dishes, setDishes] = useState<DishDict<string[]>>({
    [DishCategory.soup]: [],
    [DishCategory.dinner]: [],
    [DishCategory.supper]: [],
  });
  useEffect(() => {
    Firebase.getInstance().db.collection('dishes')
        .get()
        .then(snapshot => snapshot.docs[0].data())
        .then(dishes => setDishes(dishes as any))
        .catch()
        .finally(() => setReady(true));
  }, []);
  return [ready, dishes] as [boolean, DishDict<string[]>];
};
