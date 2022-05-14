import React from 'react';
import './category.css';

function CategoryComponent({ category }) {
  const {name} = category;
  return (
    <li>{name}</li>
  );
}

export default CategoryComponent;
