import Product from "./Product"
import { Col, Container, Row } from "react-bootstrap"

function Products({products}) {
  return (
    <div>Products:
    <Container fluid>
   <Row>
    {products.map(product => <Col><Product key={product.id} product={product}/></Col>)}
    </Row>
    </Container>
    </div>
  )
}

export default Products