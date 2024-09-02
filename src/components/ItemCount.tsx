import React, { useState } from "react";
import "../assets/styles/itemCount.css";

interface ItemCountProps {
  initialStock: number;
}

const ItemCount: React.FC<ItemCountProps> = ({ initialStock }) => {
  const [itemState, setItemState] = useState({
    itemsInCart: 0,
    stock: initialStock,
  });

  const handleCount = (operation: "add" | "subtract") => {
    setItemState((prevState) => {
      if (operation === "add" && prevState.stock > 0) {
        return {
          itemsInCart: prevState.itemsInCart + 1,
          stock: prevState.stock - 1,
        };
      } else if (operation === "subtract" && prevState.itemsInCart > 0) {
        return {
          itemsInCart: prevState.itemsInCart - 1,
          stock: prevState.stock + 1,
        };
      }
      return prevState;
    });
  };

  return (
    <div className="actions">
      <div className="add-cart">
        <button
          type="button"
          className="button buttonAdd"
          onClick={() => handleCount("add")}
          disabled={itemState.stock === 0}
        >
          +
        </button>
        <button
          type="button"
          className="button buttonSubtract"
          onClick={() => handleCount("subtract")}
          disabled={itemState.itemsInCart === 0}
        >
          −
        </button>
        <p className="itemsInCart">{itemState.itemsInCart}</p>
      </div>
      <p className="stock">{`Estoque: ${itemState.stock}`}</p>
    </div>
  );
};

export default ItemCount;
