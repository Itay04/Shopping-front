import product from "./Product"

function CartItem(cartitem) {
  return (
    <div>
    <h1>{cartitem.name}</h1>
    <h3>{cartitem.description}</h3>
    <h3>{cartitem.price}</h3>
    <h3>{cartitem.quantity}</h3>
    <img src={'http://localhost:8000/static/images/'+cartitem.image} alt={product.name}/>
</div>
  )
}

export default CartItem