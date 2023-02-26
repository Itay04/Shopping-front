import { faShoppingBag, faShoppingCart, faPlus, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css"; // import your custom CSS file

function Header({ logout }) {
  return (
    <Nav className="bg-dark justify-content-between">
      <Nav.Item>
        <NavLink as={Link} to="/" exact activeClassName="active">
          <Button variant="link" className="nav-button">
            <FontAwesomeIcon icon={faShoppingBag} /> Browse Products
          </Button>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink as={Link} to="/cart" activeClassName="active">
          <Button variant="link" className="nav-button">
            <FontAwesomeIcon icon={faShoppingCart} /> Cart
          </Button>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink as={Link} to="/addproduct" activeClassName="active">
          <Button variant="link" className="nav-button">
            <FontAwesomeIcon icon={faPlus} /> Add Product
          </Button>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <Button onClick={logout} variant="link" className="nav-button">
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </Button>
      </Nav.Item>
    </Nav>
  );
}

export default Header;






   
