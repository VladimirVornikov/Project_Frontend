import React from "react";
import style from "./Cart.module.css";
import Title from "../../../elements/inputs/Title";
import Button from "../../../elements/buttonCard/CheckOutBtn";
import ShowButton from "../../../elements/buttonCard/ShowButton";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {ROOT_URL} from "../../..";
import Counter from "../../../elements/containers/Counter";

export default function Cart() {
    const products = useSelector((store) => store.cart);
    console.log(products);

    return (
        <div className={style.emptyCart}>
            
            <span className={style.spanCart}>
                <Title title={"Shopping cart"} />
                <hr className={style.hr} />
                <Link to="/allProducts">
                    <ShowButton title={"Back to the store"} />
                </Link>
            </span>

            {products.length > 0 ?
                <div className={style.cartWithProducts}>
                    {products.map((element) => (
                        <span className={style.product}>
                            <img src={ROOT_URL + `${element.image}`} className={style.imgProduct}/>
                            <div className={style.counterInfo}>
                                <p>{element.title}</p>
                                <Counter number={element.quantity} />
                            </div>
                            <span className={style.priceContainer}>
                                <p className={style.price}>{element.discont_price ? `$${element.discont_price}` : `$${element.price}`}</p>
                                <p className={style.discontPrice}>{element.discont_price ? `$${element.price}` : ''}</p>
                            </span>
                        </span>
                    ))}
                </div>
            :
                <>
                <h1 className={style.cartInfo}>
                    Looks like you have no items in your basket currently.
                </h1>
                <Link to="/allProducts">
                    <Button info={"Continue Shopping"} width={"313px"} />
                </Link>
                </>
            }
        </div>
    );
}

function discountPercentage(price, discount) {
    return "-" + Math.round(Number(100 * (price - discount) /price))+"%"
}
