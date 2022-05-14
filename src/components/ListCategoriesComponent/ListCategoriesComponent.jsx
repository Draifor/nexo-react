import React from "react";
import "./categories.css";
import CategoryComponent from "../CategoryComponent/CategoryComponent";

function ListCategoriesComponent() {
  const categories = [
    { id: 1, name: "Joyería" },
    { id: 2, name: "Zapatillas" },
    { id: 3, name: "Ropa" }
  ];

  return (
    <ul id="list-categories">
      {categories.map((category) => {
        return <CategoryComponent key={category.id} category={category} />;
      })}
    </ul>
  );
}

export default ListCategoriesComponent;
