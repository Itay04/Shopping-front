import CartItem from "./CartItem"
import { Col, Container, Row } from "react-bootstrap"

function Cart(cart, setCart) {
  console.log(cart);
  return (
    <div>Cart:
    <Container fluid>
   <Row>
    {cart.map(cartitem => <Col><CartItem key={cartitem.id} product={product} setCart={setCart}/></Col>)}
    </Row>
    </Container>
    </div>
    // <div>{cart.map(cart => <Col><CartItem key={cart.id} product={product}/></Col>)}</div>
  )
}

export default Cart