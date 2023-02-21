import axios from "axios"


function Product({product}) {
    function Addtocart(productId) {
        const product = {product : productId, quantity :1}
        axios.post(`http://localhost:8000/cart/`,product)
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <h3>{product.description}</h3>
            <h3>{product.price}</h3>
            <img style={{width:"100%"}} src={'http://localhost:8000/static'+product.image} alt={product.name}/>
            <button onClick={()=> {Addtocart(product.id)}}> Add To Cart</button>
            
        </div>
    )
}

export default Product