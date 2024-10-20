import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/styles/itemListContainer.css";
import { fetchItems, Item } from "../firebase/itemService";
import ItemList from "../components/Item/ItemList";
import Categories from "../components/NavBar/Categories";
import Loading from "../components/Loading";

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const ItemListContainer: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const formattedCategoryId = categoryId
          ? capitalizeFirstLetter(categoryId)
          : undefined;
        const items = await fetchItems(formattedCategoryId);
        console.log(formattedCategoryId);
        setFilteredItems(items);
      } catch (err) {
        setError("Erro ao carregar itens.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadItems();
  }, [categoryId]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="item-list-container-box">
      <Categories />
      <ItemList items={filteredItems} />
    </div>
  );
};

export default ItemListContainer;
