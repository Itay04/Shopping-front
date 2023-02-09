import CartItem from "./CartItem"

function Cart(cart) {
  return (
    <div>{Cart.map(product => <Col><CartItem key={product.id} product={product}/></Col>)}</div>
  )
}

export default Cart