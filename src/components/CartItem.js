// import product from "./Product"

function CartItem({cartitem}) {
    console.log(cartitem);

    return (
        <div>
            <h1>{cartitem.product.name}</h1>
            <h3>{cartitem.product.description}</h3>
            <h3>{cartitem.product.price}</h3>
            <h3>{cartitem.product.quantity}</h3>
            <img style={{width:"100%"}} src={'http://localhost:8000/static'+cartitem.product.image} alt={cartitem.product.name}/>           
        </div>
    )
}

export default CartItem