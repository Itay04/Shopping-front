import product from "./Product"

function CartItem(cartitem) {

    return (
        <div>
            <h1>{cartitem.product.name}</h1>
            <h3>{cartitem.product.description}</h3>
            <h3>{cartitem.product.price}</h3>
            <h3>{cartitem.product.quantity}</h3>
            <img src={'http://localhost:8000/static'+product.image} alt={product.name}/>
            
        </div>
    )
}

export default CartItem