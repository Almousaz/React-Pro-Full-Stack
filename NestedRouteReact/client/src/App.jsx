import './App.css'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/products/Products";
import ProductDisplay from "./components/products/ProductDisplay";
import ListProducts from "./components/products/ListProducts";
import AddProduct from "./components/products/AddProduct";
import Search from "./components/products/Search";
import Home from "./components/Home";


function App() {

  return (

    <Router>
    <nav>
      <Link to="/"> Home </Link>
      <Link to="login"> Login </Link>
      <Link to="products/search"> Products </Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="products" element={<Products />}>
        <Route path="search" element={<Search />} />
        <Route path="list" element={<ListProducts />} />
        <Route path="add" element={<AddProduct />} />
        <Route path=":id" element={<ProductDisplay />} />
      </Route>
    </Routes>
  </Router>
  
  )
}

export default App
