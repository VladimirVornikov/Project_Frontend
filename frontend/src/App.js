import RenderingPage from "./components/pages/renderingPage/RenderingPage";
import Categories from "./components/pages/categories/Categories";
import NotFound from "./components/pages/notFound/NotFound";
import Product from "./components/pages/product/Product";
import Breadcrumbs from "./elements/inputs/Breadcrumbs";
import {Routes, Route} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";
import "./App.css";
import Cart from "./components/pages/cart/Cart";

function App() {
    return (
        <div className="App">   
                <Header />
                <Breadcrumbs/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Categories" element={<Categories/>}/>
                    <Route path="/Categories/:id" element={<RenderingPage type={"CategoryProducts"}/>}/>
                    <Route path="/Categories/:id/:id" element={<Product/>}/>
                    <Route path="/AllProducts" element={<RenderingPage/>}/>
                    <Route path="/AllSales" element={<RenderingPage type={"Sales"}/>}/>
                    <Route path="/*" element={<NotFound />} />
                    <Route path="/Cart" element={<Cart/>}/>
                </Routes>
                <Footer />
        </div>
    );
}

export default App;
