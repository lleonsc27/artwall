import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchItems, Item } from "../firebase/itemService";
import Loading from "../components/Loading";
import ItemDetail from "../components/Item/ItemDetail";

const ItemDetailContainer: React.FC = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadItem = async () => {
      try {
        const items = await fetchItems();
        const foundItem = items.find((item) => item.id.toString() === itemId);

        if (foundItem) {
          setItem(foundItem);
        } else {
          setError("Item não encontrado.");
        }
      } catch (err) {
        setError("Erro ao carregar o item.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadItem();
  }, [itemId]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {item && (
        <ItemDetail
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          imageUrl={item.imageUrl}
          stock={item.stock}
        />
      )}
    </div>
  );
};

export default ItemDetailContainer;
