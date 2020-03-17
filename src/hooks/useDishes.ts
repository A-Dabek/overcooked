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
    return Firebase.getInstance().db.collection('categories')
        .onSnapshot(snapshot => {
          const dishes = snapshot.docs[0].data() as DishDict<string[]>;
          setDishes(dishes);
          setReady(true);
        });
  }, []);
  return [ready, dishes] as [boolean, DishDict<string[]>];
};
