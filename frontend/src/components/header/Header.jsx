import React, { useEffect } from "react";
import Logo from "../../elements/images/logo.png";
import Basket from "../../elements/images/basket=empty.png";
import style from "./Header.module.css";
import {Link} from 'react-router-dom' 
import { useSelector } from "react-redux";

export default function Header() {
    const itemsNumber = useSelector(store => store.cart)

    return (
        <div className={style.headerMain}>
            <Link to={"/"}>
                <img src={Logo} alt="No image" className={style.logo} />
            </Link>
            <nav className={style.navBar}>
                <Link to={"/"}>Main page</Link>
                <Link to={'/categories'}>Categories</Link>
                <Link to={"/allProducts"}>All product</Link>
                <Link to={"/allSales"}>All sale</Link>
            </nav>
            
            <Link to={"/cart"} className={style.basketContainer} >
                {itemsNumber.countItem > 0 
                    ? 
                    <p className={itemsNumber.discountFactor < 1 
                    ?  style.itemsInBasketDiscount : style.itemsInBasket}>
                        {itemsNumber.countItem}</p> 
                    : ''}
                <img src={Basket} alt="No image" className={style.basket}/>
            </Link>
        </div>
    );
}
