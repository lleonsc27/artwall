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
    <div className="cart">
      <h1>Seu Carrinho</h1>
      {cart.length === 0 ? (
        <p>O carrinho está vazio</p>
      ) : (
        <div className="cart-summary">
          <div className="cart-items-list">

          {cart.map((item) => (
            <div key={item.id} className="cart-items">
              <img
                className="cart-item-img"
                src={item.imageUrl}
                alt={item.name}
              />
              <div className="cart-item">


              <div className="cart-item-info">
                <p className="cart-item-name">{item.name} </p>
                <p className="cart-item-price">
                  {item.quantity} x R${item.price.toFixed(2)}
                </p>
              </div>

              <button type="button" className="cart-item-remove-button" onClick={() => removeItem(item.id)}>Remover</button>
              </div>
            </div>
          ))}
          </div>
          <div className="cart-checkout">
            <div className="cart-checkout-info">
              <h3>Preço Total:</h3>
              <h3 className="cart-checkout-price">R$ {total.toFixed(2)}</h3>
            </div>

            <div className="cart-checkout-actions">
              <button onClick={clearCart}>Limpar Carrinho</button>
              <button onClick={handleCheckout}>Finalizar Compra</button>
            </div>
          </div>
        </div>
      )}

      {isCheckoutVisible && <CheckoutForm items={cart} />}
    </div>
  );
};

export default Cart;
