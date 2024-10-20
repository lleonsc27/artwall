import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const CheckoutForm: React.FC<{
  items: { id: number; name: string; price: number; quantity: number }[];
}> = ({ items }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateForm(firstName, lastName, phone, e.target.value, confirmEmail);
  };

  const handleConfirmEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmEmail(e.target.value);
    validateForm(firstName, lastName, phone, email, e.target.value);
  };

  const validateForm = (
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    confirmEmail: string
  ) => {
    const isValid =
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      phone.trim() !== "" &&
      email.trim() !== "" &&
      email === confirmEmail;
    setIsFormValid(isValid);
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    const orderData = {
      items,
      firstName,
      lastName,
      phone,
      email,
      date: formatDate(new Date()),
      status: "gerado",
    };

    try {
      const docRef = await addDoc(collection(db, "pedidos"), orderData);
      setOrderId(docRef.id);
    } catch (error) {
      console.error("Erro ao salvar o pedido: ", error);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Sobrenome"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="email"
          placeholder="Repita o E-mail"
          value={confirmEmail}
          onChange={handleConfirmEmailChange}
          required
        />
        <p>Total do Pedido: R$ {totalAmount.toFixed(2)}</p>
        <button type="submit" disabled={!isFormValid}>
          Fazer Compra
        </button>
      </form>
      {orderId && <p>Seu pedido foi gerado! ID do pedido: {orderId}</p>}
    </div>
  );
};

export default CheckoutForm;
