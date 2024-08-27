import React, { useState } from "react";
import "./styles.css";

interface ItemCountProps {
  initialStock: number;
}

const ItemCount: React.FC = () => {
  const [itemsInCart, setItemsInCart] = useState(0);
  const [stock, setStock] = useState(10);

  const handleCount = (operation: "add" | "subtract") => {
    if (operation === "add" && stock > 0) {
      setItemsInCart(itemsInCart + 1);
      setStock(stock - 1);
    } else if (operation === "subtract" && itemsInCart > 0) {
      setItemsInCart(itemsInCart - 1);
      setStock(stock + 1);
    }
  };

  return (
    <div className="actions">
      <div className="add-cart">
        <button
          type="button"
          className="button buttonAdd"
          onClick={() => handleCount("add")}
          disabled={stock === 0}
        >
          +
        </button>
        <button
          type="button"
          className="button buttonSubtract"
          onClick={() => handleCount("subtract")}
          disabled={itemsInCart === 0}
        >
          −
        </button>
        <p className="itemsInCart">{itemsInCart}</p>
      </div>
      <p className="stock">{`Estoque: ${stock}`}</p>
    </div>
  );
};

export default ItemCount;
