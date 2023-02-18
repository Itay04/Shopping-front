import CartItem from "./CartItem"
import { Col, Container, Row } from "react-bootstrap"

function Cart({cart}) {
  return ( 
    <>      <div>Cart:
      <Container fluid>
    <Row>
      {cart.map(cartitem => <Col><CartItem cartitem={cartitem} key={cartitem.id}/></Col>)}
      </Row>
      </Container>
      </div>
      </>
)
}

export default Cart