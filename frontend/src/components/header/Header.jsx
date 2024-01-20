import React from "react";
import Logo from "../../elements/images/logo.png";
import Basket from "../../elements/images/basket=empty.png";
import style from "./Header.module.css";

export default function Header() {
    return (
        <div className={style.headerMain}>
            <img src={Logo} alt="No image" className={style.logo} />
            <nav className={style.navBar}>
                <a>Main page</a>
                <a>Categories</a>
                <a>All products</a>
                <a>All sales</a>
            </nav>
            <img src={Basket} alt="No image" className={style.basket}/>
        </div>
    );
}
