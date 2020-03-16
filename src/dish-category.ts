export enum DishCategory {
  soup = 'soup',
  dinner = 'dinner',
  supper = 'supper'
}

export type DishDict<T> = {[k in DishCategory]: T};

export const LabelPerDish: DishDict<string> = {
  [DishCategory.soup]: 'zupa',
  [DishCategory.dinner]: 'obiad',
  [DishCategory.supper]: 'kolacja',
};

export const ColorPerDish: DishDict<string> = {
  [DishCategory.soup]: 'red',
  [DishCategory.dinner]: 'green',
  [DishCategory.supper]: 'blue',
};
