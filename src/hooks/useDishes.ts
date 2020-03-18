import {useEffect, useState} from 'react';
import {DishCategory} from '../dish-category';
import {Firebase} from '../firebase';

export const useDishes = (category: DishCategory) => {
  const [dishes, setDishes] = useState<string[]>([]);
  useEffect(() => {
    return Firebase.getInstance().db.collection('categories').doc(category)
      .onSnapshot(snapshot => {
        const data = snapshot.data() as {dishes: string[]};
        setDishes(data.dishes || []);
      });
  }, []);
  return dishes;
};
