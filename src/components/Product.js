import axios from "axios"
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./Product.css";

function Product({ product }) {
  const [quantity, setQuantity] = useState(1);

  function addToCart(productId) {
    if (quantity > 0) {
      const productToAdd = { product: productId, quantity: quantity };
      axios.post("http://localhost:8000/cart/", productToAdd);
    }
  }

  return (
    <Card>
      <Card.Img
        variant="top"
        src={"http://localhost:8000/static" + product.image}
        alt={product.name}
        className="product-img"
      />
      <Card.Body>
        <Card.Title className="product-title">{product.name}</Card.Title>
        <Card.Text className="product-description">{product.description}</Card.Text>
        <Card.Text className="product-price">${product.price}</Card.Text>
        <div className="d-flex align-items-center">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="form-control me-2 product-quantity"
            style={{ maxWidth: "6rem" }}
          />
          <Button
            variant="primary"
            onClick={() => addToCart(product.id)}
            className="product-button"
          >
            Add To Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
  export default Product;