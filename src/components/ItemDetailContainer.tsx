import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { items } from '../data/items';
import "../assets/styles/itemDetailContainer.css"
import Loading from './Loading';

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const getItem = (id: number): Promise<Item | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const item = items.find(item => item.id === id);
      resolve(item);
    }, 2000);
  });
};

const ItemDetailContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    if (id) {
      getItem(Number(id)).then((data) => {
        setItem(data || null);
      });
    }
  }, [id]);

  return (
    <div>
      {item ? <ItemDetail {...item} /> : <Loading/>}
    </div>
  );
};

export default ItemDetailContainer;
