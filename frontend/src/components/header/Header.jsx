import React, { useEffect, useState } from "react";
import Logo from "../../elements/images/logo.png";
import Basket from "../../elements/images/basket=empty.png";
import style from "./Header.module.css";
import {Link} from 'react-router-dom' 
import { useSelector } from "react-redux";

export default function Header() {
    const itemsNumber = useSelector(store => store.cart)
    const [burgerActive, setBurgerActive] = useState(false)

    function openBurgerMenu() {
        setBurgerActive(!burgerActive);
    }

    return (
        <div className={style.headerMain}>
            <Link to={"/"}>
                <img src={Logo} alt="No image" className={style.logo} />
            </Link>
            <nav className={`${style.navBar} ${burgerActive ? style.activeMenu : ""}`}>
                <Link to={"/"} onClick={() => setBurgerActive(false)}>Main page</Link>
                <Link to={'/Categories'} onClick={() => setBurgerActive(false)}>Categories</Link>
                <Link to={"/AllProducts"} onClick={() => setBurgerActive(false)}>All product</Link>
                <Link to={"/AllSales"} onClick={() => setBurgerActive(false)}>All sale</Link>
            </nav>
            
            <div className={style.burgerWrapper}>
                <Link to={"/Cart"} className={style.basketContainer} onClick={() => setBurgerActive(false)}>
                    {itemsNumber.countItem > 0 
                        ? 
                        <p className={itemsNumber.discountFactor < 1 
                        ?  style.itemsInBasketDiscount : style.itemsInBasket}>
                            {itemsNumber.countItem}</p> 
                        : ''}
                    <img src={Basket} alt="No image" className={style.basket}/>
                </Link>
                <div className={`${style.burgerMenu} ${burgerActive ? style.active : ""}`} onClick={openBurgerMenu}>
                    <span className={style.line}></span>
                    <span className={style.line}></span>
                    <span className={style.line}></span>
                </div>
            </div>
        </div>
    );
}
