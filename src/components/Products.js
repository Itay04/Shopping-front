import Product from "./Product"
import { Col, Container, Row } from "react-bootstrap"

function Products({products}) {
  return (
    <div>Products:
    <Container fluid>
    <Row>
    {products.map(product => <Col xs={14} sm={6} lg={3} style={{ margin: "10px" }}><Product key={product.id} product={product}/></Col>)}
    </Row>
    </Container>
    </div>
  )
}

export default Products