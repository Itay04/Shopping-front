import { Col, Container, Row } from "react-bootstrap"
import CartItem from "./CartItem"

function Cart(cart) {
  return (
    <div>Cart:
    <Container fluid>
   <Row>
    {cart.map(product => <Col><CartItem key={product.id} product={product}/></Col>)}
    </Row>
    </Container>
    </div>
  )
}

export default Cart