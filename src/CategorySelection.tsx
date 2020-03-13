import React from 'react';

export interface CategorySelectionProps {
  onSelect: (category: string) => void;
}

export default function CategorySelection(props: CategorySelectionProps) {
  const categories = ['Zupa', 'Obiad', 'Kolacja'];
  return (
      <div>
        {
          categories.map(category => (<div key={category} onClick={() => props.onSelect(category)}>{category}</div>))
        }
      </div>
  );
}
