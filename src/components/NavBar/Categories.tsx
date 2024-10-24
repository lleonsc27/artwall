import React, { useState } from "react";
import { Link } from "react-router-dom";

const Categories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("/products");

  const handleCategoryClick = (path: string) => {
    setActiveCategory(path);
  };

  return (
    <div className="categories">
      <Link to="/products">
        <button
          type="button"
          className={`category-button ${
            activeCategory === "/products" ? "active" : ""
          }`}
          onClick={() => handleCategoryClick("/products")}
        >
          Todos
        </button>
      </Link>
      <Link to="/categories/abstrato">
        <button
          type="button"
          className={`category-button ${
            activeCategory === "/categories/abstrato" ? "active" : ""
          }`}
          onClick={() => handleCategoryClick("/categories/abstrato")}
        >
          Abstrato
        </button>
      </Link>
      <Link to="/categories/paisagem">
        <button
          type="button"
          className={`category-button ${
            activeCategory === "/categories/paisagem" ? "active" : ""
          }`}
          onClick={() => handleCategoryClick("/categories/paisagem")}
        >
          Paisagem
        </button>
      </Link>
    </div>
  );
};

export default Categories;
