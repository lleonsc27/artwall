import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { items } from '../data/items';

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const getItem = (id: number): Promise<Item> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const item = items.find(item => item.id === id);
      if (item) resolve(item);
    }, 2000);
  });
};

const ItemDetailContainer: React.FC<{ itemId: number }> = ({ itemId }) => {
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    getItem(itemId).then((data) => {
      setItem(data);
    });
  }, [itemId]);

  return (
    <div>
      {item ? <ItemDetail {...item} /> : <p>Carregando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
