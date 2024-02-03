import React from "react";
import Logo from "../../elements/images/logo.png";
import Basket from "../../elements/images/basket=empty.png";
import style from "./Header.module.css";
import {Link} from 'react-router-dom' 

export default function Header() {
    return (
        <div className={style.headerMain}>
            <Link to={"/"}>
                <img src={Logo} alt="No image" className={style.logo} />
            </Link>
            <nav className={style.navBar}>
                <Link to={"/"}>
                    <a>Main page</a>
                </Link>
                <Link to={'/categories'}>
                    <a>Categories</a>
                </Link>
                <Link to={"/allProducts"}>
                    <a>All products</a>
                </Link>
                <Link to={"/allSales"}>
                    <a>All sales</a>
                </Link>
            </nav>
            <Link to={"/cart"}>
                <img src={Basket} alt="No image" className={style.basket}/>
            </Link>
        </div>
    );
}
