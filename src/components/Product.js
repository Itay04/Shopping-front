import axios from "axios"
import { useState } from "react";


function Product({ product }) {
    const [quantity, setQuantity] = useState(1);
  
    function addToCart(productId) {
      if (quantity > 0) {
        const productToAdd = { product: productId, quantity: quantity };
        axios.post("http://localhost:8000/cart/", productToAdd);
      }
    }
    
  
    return (
      <div>
        <h1>{product.name}</h1>
        <h3>{product.description}</h3>
        <h3>{product.price}</h3>
        <img
          style={{ width: "100%" }}
          src={"http://localhost:8000/static" + product.image}
          alt={product.name}
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={() => addToCart(product.id)}>Add To Cart</button>
      </div>
    )
}

export default Product