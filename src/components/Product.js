import { Link } from "react-router-dom"

function Product({product}) {

    return (
        <div>
            <h1>{product.name}</h1>
            <h3>{product.description}</h3>
            <h3>{product.price}</h3>
            <img src={'http://localhost:8000/static'+product.image} alt={product.name}/>
            <Link to="/cart">add to cart</Link>
        </div>
    )
}

export default Product