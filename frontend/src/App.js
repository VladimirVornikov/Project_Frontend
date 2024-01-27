import AllProducts from "./components/pages/allProducts/AllProducts";
import CategoryPage from "./components/pages/category/CategoryPage";
import AllSalesPage from "./components/pages/allSales/AllSalesPage";
import Categories from "./components/pages/categories/Categories";
import NotFound from "./components/pages/notFound/NotFound";
import Breadcrumbs from "./elements/inputs/Breadcrumbs";
import {Routes, Route, Link} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";
import "./App.css";
import Product from "./components/pages/product/Product";

function App() {
    return (
        <div className="App">   
                <Header />
                <Breadcrumbs/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/categories" element={<Categories/>}/>
                    <Route path="/categories/:id" element={<CategoryPage/>}/>
                    <Route path="/categories/:id/:name" element={<Product/>}/>
                    <Route path="/products" element={<AllProducts/>}/>
                    <Route path="/allSales" element={<AllSalesPage/>}/>
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                <Footer />
        </div>
    );
}

export default App;
