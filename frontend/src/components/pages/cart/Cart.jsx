import React, { useEffect } from "react";
import style from "./Cart.module.css";
import Title from "../../../elements/inputs/Title";
import Button from "../../../elements/buttonCard/CheckOutBtn";
import ShowButton from "../../../elements/buttonCard/ShowButton";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ROOT_URL} from "../../..";
import Counter from "../../../elements/containers/Counter";
import { deleteProduct, updateTotalSumAndCountItem } from "../../../store/reducers/cartSlice";

export default function Cart() {
    const products = useSelector((store) => store.cart);
    const dispatch = useDispatch();
    console.log(products);

    useEffect(() => {
        dispatch(updateTotalSumAndCountItem())
    }, [products])


    return (
        <div className={style.emptyCart}>
            
            <span className={style.spanCart}>
                <Title title={"Shopping cart"} />
                <hr className={style.hr} />
                <Link to="/allProducts">
                    <ShowButton title={"Back to the store"} />
                </Link>
            </span>

            {products.items.length > 0 ?
                <span className={style.cartWrapper}>
                    <div className={style.cartWithProducts}>
                        {products.items.map(element => (
                            <span className={style.product}>
                                <img src={ROOT_URL + `${element.image}`} className={style.imgProduct}/>
                                <span className={style.productWrapper}>
                                    <div className={style.counterInfo}>
                                        <p className={style.productName}>{element.title}</p>
                                        <div  className={style.cross} onClick={() => dispatch(deleteProduct(element.id))}>X</div>
                                    </div>
                                    <span className={style.priceContainer}>
                                        <Counter number={element.quantity} id={element.id}/>
                                        <span className={style.priceAndDiscount}>
                                            <p className={style.price}>{element.discont_price ? `$${element.discont_price}` : `$${element.price}`}</p>
                                            <p className={style.discontPrice}>{element.discont_price ? `$${element.price}` : ''}</p>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        ))}
                    </div>

                    <div className={style.orderDetails}>
                            <h1>Order Details</h1>
                            <h2>{products.countItem > 1 ? `${products.countItem} items` : `${products.countItem} item`}</h2>
                            <div>
                                <p>Total</p>
                                <p>${products.totalSum}</p>
                            </div>
                    </div>
                </span>
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
