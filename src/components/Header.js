import { Link } from 'react-router-dom';



function Header() {
  return (

    <div>

        <Link to="/">Products</Link>
        <br/>
        <Link to="/cart">Cart</Link>
        <br/>
        <Link to="/addproduct">Add Product</Link>
        <br/>
        <Link to="/login">Login</Link>
        
        </div>
  )
}

export default Header