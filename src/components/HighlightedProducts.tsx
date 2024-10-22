import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import "../assets/styles/highlightedProducts.css";

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const HighlightedProducts: React.FC = () => {
  const [highlightedProducts, setHighlightedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "items");
        const productsSnapshot = await getDocs(productsCollection);

        if (productsSnapshot.empty) {
          console.log("Nenhum produto encontrado.");
          return;
        }

        const productsList = productsSnapshot.docs.map(
          (doc: QueryDocumentSnapshot) => ({
            id: doc.id,
            ...doc.data(),
          })
        ) as Product[];

        setHighlightedProducts(productsList.slice(0, 3));
      } catch (error) {
        console.error("Erro ao buscar produtos: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Loading />;

  return (
    <section className="highlighted-products">
      <h2>Produtos em Destaque</h2>
      <div className="highlighted-products-container">
        {highlightedProducts.length > 0 ? (
          highlightedProducts.map((product) => (
            <div key={product.id} className="highlighted-products-item">
              <Link to={`/item/${product.id}`}>
                <img
                  className="highlighted-products-img"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <h3 className="highlighted-products-name">{product.name}</h3>
                <p>R$ {product.price.toFixed(2)}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>Nenhum produto em destaque disponível.</p>
        )}
      </div>
    </section>
  );
};

export default HighlightedProducts;