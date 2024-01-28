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

function App() {
    return (
        <div className="App">   
                <Header />
                <Breadcrumbs/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/categories" element={<Categories/>}/>
                    <Route path="/categories/:id" element={<RenderingPage type={"CategoryProducts"}/>}/>
                    <Route path="/categories/:id/:id" element={<Product/>}/>
                    <Route path="/allProducts" element={<RenderingPage type={"All products"}/>}/>
                    <Route path="/allSales" element={<RenderingPage type={"Sales"}/>}/>
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                <Footer />
        </div>
    );
}

export default App;
