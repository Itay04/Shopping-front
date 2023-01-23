
import { product } from "prelude-ls";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from "./components/Addproduct";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
    const [products, setProducts] = useState([])
    // const [cart, setCart] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/products/")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data)
            });
        fetch('http://localhost:8000/cart/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
            });
        console.log('use effect called!')
    }, [])

    function onDelete(id) {
        fetch("http://localhost:8000/products/" + id, { method: 'DELETE' })

        setProducts(products.filter(product => product.id !== id))
    }



    function addProduct(name, price, description) {
        let product = {
            id: products.length + 10,
            name: name,
            price: price,
            description: description,

        }
        setProducts([...products, product])

    }



  return (
    <div className="App">
        <BrowserRouter>
            <h1>My Cart Front end</h1>
        
                <Header  />
                
                {/* {<AddProduct addProduct={addProduct} />} */}
                <Routes>
                    <Route path="/" element={
                        <Products products={products} onDelete={onDelete}  />} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="/addproduct" element={<AddProduct addProduct={addProduct}/>} />
                    
                </Routes>
                <Footer />

        </BrowserRouter>
        

    </div>
  );
}

export default App;
