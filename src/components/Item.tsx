import React from "react";
import "../assets/styles/item.css";
import ItemCount from "./ItemCount";

interface ItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
}

const Item: React.FC<ItemProps> = ({ name, price, stock, imageUrl }) => {
  return (
    <div className="item-box">
      <div className="item">
        <div className="item-img">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="item-name">{name}</div>
        <div className="item-price-actions">
          <div className="item-price">R${price}</div>
          <div className="item-actions">
            <ItemCount initialStock={stock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;