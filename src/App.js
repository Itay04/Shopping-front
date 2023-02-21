
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from "./components/Addproduct";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import Products from "./components/Products";

function App() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    

    useEffect(() => {
        axios.get("http://localhost:8000/cart/")
        .then((response) => {
            // console.log(response.data);
            setCart(response.data);
        })
        .catch((error) => {
            console.log(error);
            });
        
    }, [])

    useEffect(() => {
        axios.get("http://localhost:8000/products/")
            .then((response) => {
                // console.log(response.data);
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    
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


  return (
    <div className="App">
        <BrowserRouter>
            <h1>My Cart</h1>
        
                <Header  />
                
                {/* {<AddProduct addProduct={addProduct} />} */}
                <Routes>
                    <Route path="/" element={
                        <Products products={products} onDelete={onDelete}/>} />
                    <Route path="/cart" element={<Cart cart={cart}/>} />
                    <Route path="/addproduct" element={<AddProduct addProduct={addProduct}/>} />
                    <Route path="/login" element={<LoginPage loginUser={loginUser}/>} />
                    
                </Routes>
                <Footer />

        </BrowserRouter>
        

    </div>
  );
}

export default App;
