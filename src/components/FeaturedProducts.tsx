import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import "../assets/styles/featuredProducts.css";

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
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

        setProducts(productsList.slice(0, 3));
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
    <section className="featured-products">
      <h2>Destaques</h2>
      <div className="featured-products-container">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="featured-product">
              <Link to={`/item/${product.id}`}>
                <img
                  className="featured-item-img"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <h3>{product.name}</h3>
                <p>R$ {product.price.toFixed(2)}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>Nenhum produto destacado disponível.</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
