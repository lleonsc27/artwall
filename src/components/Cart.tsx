import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CheckoutForm from "./CheckoutForm";
import "../assets/styles/cart.css";

const Cart: React.FC = () => {
  const cartContext = useContext(CartContext);
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

  if (!cartContext) {
    return <div>Erro ao carregar o carrinho</div>;
  }

  const { cart, removeItem, clearCart } = cartContext;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const qtyTotal = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleCheckout = () => {
    setIsCheckoutVisible(true);
  };

  return (
    <div>
      <h2>Seu Carrinho</h2>
      {cart.length === 0 ? (
        <p>O carrinho está vazio</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img className="cart-item-img" src={item.imageUrl} alt="" />
              <p>
                {item.name} - {item.quantity} x R$ {item.price.toFixed(2)}
              </p>
              <button onClick={() => removeItem(item.id)}>Remover</button>
            </div>
          ))}
          <h3>Total: R$ {total.toFixed(2)}</h3>
          <h3>Qty total: {qtyTotal}</h3>
          <button onClick={clearCart}>Limpar Carrinho</button>
          <button onClick={handleCheckout}>Finalizar Compra</button>
        </div>
      )}

      {isCheckoutVisible && <CheckoutForm items={cart} />}
    </div>
  );
};

export default Cart;
