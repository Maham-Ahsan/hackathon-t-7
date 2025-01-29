import React, { useState } from "react";

const CartPage = () => {
  // Mocked cart items; replace this with your actual data from a backend or context.
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Nissan GT-R",
      price: 80.0,
      image: "/images/car (14).png",
      quantity: 1,
    },
  ]);

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

      {cartItems.length > 0 ? (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4 border-b pb-4"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-16 object-cover rounded-lg"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">x{item.quantity}</span>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6">
            <h2 className="text-xl font-bold">Total:</h2>
            <p className="text-2xl font-bold">${calculateTotal().toFixed(2)}</p>
          </div>

          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition">
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg">
          Your cart is empty. <br />
          <a href="/" className="text-blue-500 underline">
            Browse Cars
          </a>
        </p>
      )}
    </div>
  );
};

export default CartPage;
