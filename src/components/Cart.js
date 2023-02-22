import CartItem from "./CartItem"
import { Col, Container, Row } from "react-bootstrap"


function Cart({cart}) {
  const totalPrice = cart.reduce((total, cartitem) => {
    return total + cartitem.product.price * cartitem.quantity
  }, 0)

  return ( 
    <>
      <div>Cart:</div>
      <Container fluid>
        <Row>
          {cart.map(cartitem => <Col xs={14} sm={6} lg={3} style={{ margin: "10px" }}><CartItem cartitem={cartitem} key={cartitem.id}/></Col>)}
        </Row>
        <div>Total price: {totalPrice}</div>
      </Container>
    </>
)
}

export default Cart