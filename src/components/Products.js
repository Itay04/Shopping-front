import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Product from "./Product";

function Products({ products }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h2 className="my-5 text-center">Products in Shop:</h2>
      <div className="d-flex justify-content-center mb-5">
        <Form.Group controlId="formBasicSearch">
          <Form.Control
            type="text"
            placeholder="Search products"
            value={searchTerm}
            onChange={handleSearch}
          />
        </Form.Group>
      </div>
      <Container fluid>
        <Row>
          {filteredProducts.map((product) => (
            <Col xs={12} sm={6} lg={3} className="mb-4">
              <Product key={product.id} product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Products;