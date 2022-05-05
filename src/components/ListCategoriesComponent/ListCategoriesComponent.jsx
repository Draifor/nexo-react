import React from 'react';
import './categories.css';
import CategoryComponent from '../CategoryComponent/CategoryComponent';

function ListCategoriesComponent() {
  const categories = ["Joyería", "Zapatillas", "Ropa"];

  return (
    <ul id="list-categories">
      {categories.map(category => {
        return <CategoryComponent category={category}/>
      })}
    </ul>
  );
}

export default ListCategoriesComponent;
