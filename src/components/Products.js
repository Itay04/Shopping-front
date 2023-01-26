import Product from "./Product"

function Products({products}) {
  return (
    <div>Products:
    {products.map(product => <Product key={product.id} product={product}/>)}

    </div>
  )
}

export default Products