import axios from "axios"
import { useState } from "react";
import { Button, Card } from "react-bootstrap";


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
        <Card.Img variant="top" src={"http://localhost:8000/static" + product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>${product.price}</Card.Text>
          <div className="d-flex align-items-center">
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="form-control me-2"
              style={{ maxWidth: "6rem" }}
            />
            <Button variant="primary" onClick={() => addToCart(product.id)}>Add To Cart</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
  
  export default Product;