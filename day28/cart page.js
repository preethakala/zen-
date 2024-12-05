import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateItemQuantity } from './actions/cartActions';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.items);

  const handleQuantityChange = (itemId, quantity) => {
    dispatch(updateItemQuantity(itemId, quantity));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const calculateTotals = () => {
    let totalQuantity = 0;
    let totalAmount = 0;

    cart.forEach(item => {
      totalQuantity += item.quantity;
      totalAmount += item.price * item.quantity;
    });

    return { totalQuantity, totalAmount };
  };

  const { totalQuantity, totalAmount } = calculateTotals();

  return (
    <div>
      <h1>Your Cart</h1>
      
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  />
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div>
        <h3>Total Quantity: {totalQuantity}</h3>
        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>

      <button onClick={() => dispatch(addToCart({ id: 4, name: 'Grapes', price: 2.5, quantity: 1 }))}>
        Add Grapes to Cart
      </button>
    </div>
  );
};

export default CartPage;
