import Basket from "../../elements/images/basket=empty.png";
import React, { useEffect, useState } from "react";
import Logo from "../../elements/images/logo.png";
import { useSelector } from "react-redux";
import style from "./Header.module.css";
import {Link} from 'react-router-dom' 

export default function Header() {
    const itemsNumber = useSelector(store => store.cart)
    const [burgerActive, setBurgerActive] = useState(false)

    function openBurgerMenu() {
        setBurgerActive(!burgerActive);
    }

    return (
        <div className={style.header_main}>
            <Link to={"/"}>
                <img src={Logo} alt="No image" className={style.logo} />
            </Link>
            <nav className={`${style.nav_bar} ${burgerActive ? style.active_menu : ""}`}>
                <Link to={"/"} onClick={() => setBurgerActive(false)}>Main page</Link>
                <Link to={'/Categories'} onClick={() => setBurgerActive(false)}>Categories</Link>
                <Link to={"/AllProducts"} onClick={() => setBurgerActive(false)}>All product</Link>
                <Link to={"/AllSales"} onClick={() => setBurgerActive(false)}>All sale</Link>
            </nav>
            
            <div className={style.burger_wrapper}>
                <Link to={"/Cart"} className={style.basket_container} onClick={() => setBurgerActive(false)}>
                    {itemsNumber.countItem > 0 
                        ? 
                        <p className={itemsNumber.discountFactor < 1 
                        ?  style.items_in_basket_discount : style.items_in_basket}>
                            {itemsNumber.countItem}</p> 
                        : ''}
                    <img src={Basket} alt="No image" className={style.basket}/>
                </Link>
                <div className={`${style.burger_menu} ${burgerActive ? style.active : ""}`} onClick={openBurgerMenu}>
                    <span className={style.line}></span>
                    <span className={style.line}></span>
                    <span className={style.line}></span>
                </div>
            </div>
        </div>
    );
}
