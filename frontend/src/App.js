import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Categories from "./components/pages/categories/Categories";
import Home from "./components/pages/home/Home";
import NotFound from "./components/pages/notFound/NotFound";
import {Routes, Route, Link} from "react-router-dom";
import Breadcrumbs from "./elements/inputs/Breadcrumbs";
import CategoryPage from "./components/pages/category/CategoryPage";
import AllProducts from "./components/pages/allProducts/AllProducts";




function App() {
    return (
        <div className="App">   
                <Header />
                <Breadcrumbs/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/categories" element={<Categories/>}/>
                    <Route path="/categories/:id" element={<CategoryPage/>}/>
                    <Route path="/products" element={<AllProducts/>}/>
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                <Footer />
        </div>
    );
}

export default App;
