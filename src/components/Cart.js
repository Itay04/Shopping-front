import CartItem from "./CartItem";
import { Col, Container, Row, Button } from "react-bootstrap";

function Cart({cart}) {
  const totalPrice = cart.reduce((total, cartitem) => {
    return total + cartitem.product.price * cartitem.quantity;
  }, 0);

  return ( 
    <>
      <div className="py-4">
        <h2 className="text-center mb-4">Your Cart:</h2>
      </div>
      <Container fluid>
        <Row>
          {cart.map(cartitem => (
            <Col xs={12} sm={6} lg={4} key={cartitem.id} className="mb-4">
              <CartItem cartitem={cartitem} key={cartitem.id} />
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} lg={4}>
            <div className="text-center mb-4">
              <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            </div>
            <div className="d-flex justify-content-between">
              <Button variant="secondary" href="/" className="w-50 me-2">
                Continue Shopping
              </Button>
              <Button variant="primary" href="/checkout" className="w-50 ms-2">
                Checkout
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;