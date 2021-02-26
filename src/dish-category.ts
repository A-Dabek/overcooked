export enum DishCategory {
  soup = 'soup',
  dinner = 'dinner',
  supper = 'supper',
  breakfast= 'breakfast',
}

export type DishDict<T> = {[k in DishCategory]: T};

export const LabelPerDish: DishDict<string> = {
  [DishCategory.soup]: 'zupa',
  [DishCategory.dinner]: 'obiad',
  [DishCategory.supper]: 'kolacja',
  [DishCategory.breakfast]: 'śniadanie',
};
