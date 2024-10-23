import ItemCount from "./ItemCount";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "../../assets/styles/itemDetail.css";

interface ItemDetailProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
  id: number;
}

const ItemDetail: React.FC<ItemDetailProps> = ({
  name,
  description,
  price,
  imageUrl,
  stock,
  id,
}) => {
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Erro ao carregar o carrinho</div>;
  }

  const { addToCart } = cartContext;

  const handleAdd = (quantity: number) => {
    setQuantityToAdd(quantity);
    addToCart({ id, name, price, quantity, imageUrl });
    console.log(`Adicionado ao carrinho: ${quantity} unidades de ${name}`);
  };

  return (
    <div className="item-detail">
      <img className="item-detail-img" src={imageUrl} alt={name} />
      <div className="item-detail-box">
        <div className="item-detail-info">
          <h2>{name}</h2>
          <p>{description}</p>
          <p className="item-detail-info-price">Preço: R$ {price}</p>
        </div>
        <div className="item-detail-count">
          <ItemCount initialStock={stock} onAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
