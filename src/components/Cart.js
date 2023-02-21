import CartItem from "./CartItem"
import { Col, Container, Row } from "react-bootstrap"

function Cart({cart}) {
  return ( 
    <>      <div>Cart:
      <Container fluid>
    <Row>
      {cart.map(cartitem => <Col xs={14} sm={6} lg={3} style={{ margin: "10px" }}><CartItem cartitem={cartitem} key={cartitem.id}/></Col>)}
      </Row>
      </Container>
      </div>
      </>
)
}

export default Cart