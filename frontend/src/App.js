import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Categories from "./components/pages/categories/Categories";
import Home from "./components/pages/home/Home";
import NotFound from "./components/pages/notFound/NotFound";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Breadcrumbs from "./elements/inputs/Breadcrumbs";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Breadcrumbs/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/categories" element={<Categories/>}/>
                    <Route path="/*" element={<NotFound />} />
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
