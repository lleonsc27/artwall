import React from "react";
import { Link } from "react-router-dom";

const Categories: React.FC = () => {
  return (
    <div className="categories">
      <Link to="/products">
        <button type="button" className="category-button">
          Todos
        </button>
      </Link>
      <Link to="/categories/abstrato">
        <button type="button" className="category-button">
          Abstrato
        </button>
      </Link>
      <Link to="/categories/paisagem">
        <button type="button" className="category-button">
          Paisagem
        </button>
      </Link>
    </div>
  );
};

export default Categories;
