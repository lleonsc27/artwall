import React from "react";
import "../../assets/styles/itemList.css";
import { Item as FirestoreItem } from "../../firebase/itemService";
import { Link } from "react-router-dom";

interface ItemListProps {
  items: FirestoreItem[]; 
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="item-list-box">
      {items.map((item) => (
        <Link to={`/item/${item.id}`} className="item-link" key={item.id}> 
          <div className="item">
            <div className="item-img">
              <img src={item.imageUrl} alt={item.name} /> 
            </div>
            <div className="item-name">
              <h3>{item.name}</h3> 
            </div>
            <div className="item-price-actions"> 
              <div className="item-price"> 
                <p>Preço: R$ {item.price.toFixed(2)}</p> 
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
