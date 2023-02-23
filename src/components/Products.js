import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
      <h2>
        <br></br>
        Products in cart:</h2>
      <div>
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <Container fluid>
        <Row>
          {filteredProducts.map((product) => (
            <Col xs={14} sm={6} lg={3} style={{ margin: "10px" }}>
              <Product key={product.id} product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Products;