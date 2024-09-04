import React, { useState } from "react";
import "../assets/styles/itemListContainer.css";
import { items, ItemData } from "../data/items";
import ItemList from "./ItemList";

const ItemListContainer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="item-list-container-box">
      <div className="categories">
        <button
          type="button"
          className="category-button"
          onClick={() => handleCategoryChange("Paisagem")}
        >
          Paisagem
        </button>
        <button
          type="button"
          className="category-button"
          onClick={() => handleCategoryChange("Abstrato")}
        >
          Abstrato
        </button>
        <button
          type="button"
          className="category-button"
          onClick={() => setSelectedCategory(null)}
        >
          Todos
        </button>
      </div>
      <ItemList items={filteredItems} />
    </div>
  );
};

export default ItemListContainer;
