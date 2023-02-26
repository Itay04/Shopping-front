import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./CartItem.css";

function CartItem({ cartitem, updateCart }) {
  const [quantity, setQuantity] = useState(cartitem.quantity);

  function updateCartQuantity(cartitem, quantity) {
    // ...
  }

  function deleteCartItem(cartitem) {
    // ...
  }

  return (
    <Card className="cart-item-card">
      <Card.Img
        variant="top"
        src={"http://localhost:8000/static" + cartitem.product.image}
        alt={cartitem.product.name}
        className="cart-item-img"
      />
      <Card.Body>
        <Card.Title className="cart-item-title">{cartitem.product.name}</Card.Title>
        <Card.Text className="cart-item-description">{cartitem.product.description}</Card.Text>
        <Card.Text className="cart-item-price">${cartitem.product.price}</Card.Text>   
        <div className="d-flex align-items-center">
          <input
            type="number"
            value={quantity}
            onChange={(e) => {
              updateCartQuantity(cartitem, e.target.value);
            }}
            className="form-control me-3 cart-item-input"
            style={{ maxWidth: "6rem" }}
          />
          <Button variant="danger" onClick={() => deleteCartItem(cartitem.product.id)} className="cart-item-delete-btn">
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CartItem;