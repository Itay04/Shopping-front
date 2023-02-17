
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from "./components/Addproduct";
import Cart from "./components/CartItem";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import Products from "./components/Products";

function App() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    

    useEffect(() => {
        fetch("http://localhost:8000/products/")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setProducts(data)
            });
        
    }, [])

    useEffect(() => {
        fetch("http://localhost:8000/cart/")
            .then((response) => response.json())
            .then((data) => {
                
                setCart(data)
            });
        
    }, [])

    function loginUser(user, pass) {
        axios.post('http://localhost:8000/login/', {
            username: user,
            password: pass,
        })

    }


    
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

    // // function addToCart(name, price, description, quantity) {
    // //     let product = {
    //     fetch("http://localhost:8000/products/" + id, { method: 'DELETE' })
    // //     setCartProducts((prevList)=>[...prevList,productToAdd])

    // // }


  return (
    <div className="App">
        <BrowserRouter>
            <h1>My Cart Front end</h1>
        
                <Header  />
                
                {/* {<AddProduct addProduct={addProduct} />} */}
                <Routes>
                    <Route path="/" element={
                        <Products products={products} onDelete={onDelete}/>} />
                    <Route path="/cart" element={<Cart setCart={setCart} cart={cart}/>} />
                    <Route path="/addproduct" element={<AddProduct addProduct={addProduct}/>} />
                    <Route path="/login" element={<LoginPage loginUser={loginUser}/>} />
                    
                </Routes>
                <Footer />

        </BrowserRouter>
        

    </div>
  );
}

export default App;
