import axios from "axios";
import { useState } from "react";
function CartItem({ cartitem, updateCart }) {
  const [quantity, setQuantity] = useState(cartitem.quantity);

  function updateCartQuantity(cartitem, quantity) {
    // Make a PUT request to the server to update the cart item with the new quantity
    axios
      .put(`http://localhost:8000/cart/${cartitem.id}/`, { quantity: quantity })
      .then((response) => {
        // Update the quantity of the cart item in the local state
        setQuantity(quantity);
        // Call the `updateCart` function with the new total price
        updateCart(
          response.data.product.price * response.data.quantity -
          cartitem.product.price * cartitem.quantity

        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteCartItem(cartitem) {
    // Make a DELETE request to the server to delete the cart item
    axios
      .delete(`http://localhost:8000/deletefromcart/${cartitem}`)
      .then((response) => {
        console.log(cartitem, '@@@@@@@@@@@@');
        console.log('success');
        // Call the `updateCart` function with the new total price
      })
      .catch((error) => {
        console.log(error);
        console.log(cartitem, '@@@@@@@@@@@@');
        updateCart(-cartitem.product.price * cartitem.quantity);
      })
    };
    
    return (
      <div>
      <h1>{cartitem.product.name}</h1>
      <h3>{cartitem.product.description}</h3>
      <h3>{cartitem.product.price}</h3>
      <h3>{cartitem.product.quantity}</h3>
      <img
        style={{ width: "100%" }}
        src={"http://localhost:8000/static" + cartitem.product.image}
        alt={cartitem.product.name}
      />
        <input
          type="number"
          value={quantity}
          onChange={(e) => {
            updateCartQuantity(cartitem, e.target.value);
          }}
        />
        <button onClick={() => deleteCartItem(cartitem.product.id)}>Delete</button>
      </div>

    )
  }

  export default CartItem