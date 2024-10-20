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
    <div className="item-detail-box">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Preço: R$ {price}</p>

      <ItemCount initialStock={stock} onAdd={handleAdd} />
    </div>
  );
};

export default ItemDetail;
