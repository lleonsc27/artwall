import React from "react";
import Item from "./Item";
import "../assets/styles/itemList.css";
import { ItemData } from "../data/items"

interface ItemListProps {
  items: ItemData[]
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="item-list-box">
      {items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
