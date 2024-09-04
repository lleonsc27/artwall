import React from 'react';

interface ItemDetailProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ name, description, price, imageUrl }) => {
  return (
    <div className="item-detail">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Preço: R$ {price}</p>
    </div>
  );
};

export default ItemDetail;
