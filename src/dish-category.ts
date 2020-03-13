export enum DishCategory {
  soup = 'soup',
  dinner = 'dinner',
  supper = 'supper'
}

export const LabelPerDish: {[k in DishCategory]: string} = {
  [DishCategory.soup]: 'zupa',
  [DishCategory.dinner]: 'obiad',
  [DishCategory.supper]: 'kolacja',
};

export const ColorPerDish: {[k in DishCategory]: string} = {
  [DishCategory.soup]: 'red',
  [DishCategory.dinner]: 'green',
  [DishCategory.supper]: 'blue',
};
