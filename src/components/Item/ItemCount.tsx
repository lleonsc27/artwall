import React, { useState } from "react";
import "../../assets/styles/itemCount.css";

interface ItemCountProps {
  initialStock: number;
  onAdd: (count: number) => void;
}

const ItemCount: React.FC<ItemCountProps> = ({ initialStock, onAdd }) => {
  const [itemsInCart, setItemsInCart] = useState(0);
  const [stock, setStock] = useState(initialStock);
  const [isAdded, setIsAdded] = useState(false);

  const handleCount = (operation: "add" | "subtract") => {
    if (operation === "add" && stock > 0) {
      setItemsInCart((prev) => prev + 1);
      setStock((prev) => prev - 1);
    } else if (operation === "subtract" && itemsInCart > 0) {
      setItemsInCart((prev) => prev - 1);
      setStock((prev) => prev + 1);
    }
  };

  const handleConfirm = () => {
    onAdd(itemsInCart);
    setIsAdded(true);
  };

  return (
    <div className="actions">
      <div className="add-cart">
        <button
          type="button"
          className="button buttonAdd"
          onClick={() => handleCount("add")}
          disabled={stock === 0 || isAdded === true}
        >
          +
        </button>
        <button
          type="button"
          className="button buttonSubtract"
          onClick={() => handleCount("subtract")}
          disabled={itemsInCart === 0 || isAdded === true}
        >
          −
        </button>
        <p className="itemsInCart">{itemsInCart}</p>
      </div>
      <button
        type="button"
        className="buttonConfirm"
        onClick={
          isAdded ? () => (window.location.href = "/cart") : handleConfirm
        }
        disabled={itemsInCart === 0}
      >
        {isAdded ? "Ver Carrinho" : "Adicionar ao Carrinho"}
      </button>
      <p className="stock">{`Estoque: ${stock}`}</p>
    </div>
  );
};

export default ItemCount;
