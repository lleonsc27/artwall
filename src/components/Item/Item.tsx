import React from "react";
import "../../assets/styles/item.css";
import { Link } from "react-router-dom";

interface ItemProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const Item: React.FC<ItemProps> = ({ id, name, price, imageUrl }) => {
  return (
    <div className="item-box">
      <Link to={`/item/${id}`} className="item-link">
        <div className="item">
          <div className="item-img">
            <img src={imageUrl} alt={name} />
          </div>
          <div className="item-name">{name}</div>
          <div className="item-price-actions">
            <div className="item-price">R${price}</div>
            <div className="item-actions"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
