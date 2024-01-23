import React from "react";
import Logo from "../../elements/images/logo.png";
import Basket from "../../elements/images/basket=empty.png";
import style from "./Header.module.css";
import {Link} from 'react-router-dom' 

export default function Header() {
    return (
        <div className={style.headerMain}>
            <img src={Logo} alt="No image" className={style.logo} />
            <nav className={style.navBar}>
                <Link to={"/"}>
                    <a>Main page</a>
                </Link>
                <Link to={'/categories'}>
                    <a>Categories</a>
                </Link>
                <a>All products</a>
                <a>All sales</a>
            </nav>
            <img src={Basket} alt="No image" className={style.basket}/>
        </div>
    );
}
