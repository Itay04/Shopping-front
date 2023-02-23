
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header({ logout }) {
  return (
    <Nav className="bg-dark justify-content-between">
      <Nav.Item>
        <Button as={Link} to="/" variant="link">
          Products
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button as={Link} to="/cart" variant="link">
          Cart
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button as={Link} to="/addproduct" variant="link">
          Add Product
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button onClick={logout} variant="link">
          Logout
        </Button>
      </Nav.Item>
    </Nav>
  );
}

export default Header;






   
