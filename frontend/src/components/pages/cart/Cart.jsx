import { deleteProduct, updateTotalSumAndCountItem } from "../../../store/reducers/cartSlice";
import PriceContainer from "../../../elements/containers/PriceContainer";
import OrderDetails from "../../../elements/containers/OrderDetails";
import ShowButton from "../../../elements/buttonCard/ShowButton";
import Button from "../../../elements/buttonCard/CheckOutBtn";
import Counter from "../../../elements/containers/Counter";
import {useDispatch, useSelector} from "react-redux";
import Title from "../../../elements/inputs/Title";
import React, { useEffect } from "react";
import style from "./Cart.module.css";
import {Link} from "react-router-dom";
import {ROOT_URL} from "../../..";

export default function Cart() {
    const products = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateTotalSumAndCountItem())
    }, [products])


    return (
        <div className={style.empty_cart}>
            
            <span className={style.span_cart}>
                <Title title={"Shopping cart"} />
                <hr className={style.hr} />
                <Link to="/AllProducts"  className={style.back_button1}>
                    <ShowButton title={"Back to the store"}/>
                </Link>
            </span>

            {products.items.length > 0 ?
                <span className={style.cart_wrapper}>
                    <div className={style.cart_with_products}>
                        {products.items.map(product => (
                            <span key={product.id} className={style.product_container}>
                                <img src={ROOT_URL + `${product.image}`} className={style.img_product}/>
                                <span className={style.product_wrapper}>
                                    <div className={style.counter_info}>
                                        <p className={style.product_name}>{product.title}</p>
                                        <div  className={style.cross} onClick={() => dispatch(deleteProduct(product.id))}>X</div>
                                    </div>
                                    <span className={style.price_container}>
                                        <Counter number={product.quantity} id={product.id}/>
                                        <PriceContainer price={product.price} discount={product.discont_price} />
                                    </span>
                                </span>
                            </span>
                        ))}
                    </div>
                    
                    <OrderDetails totalSum={products.totalSum} countItem={products.countItem} discountFactor={products.discountFactor}/>
                    <Link to="/AllProducts"  className={style.back_button2}>
                        <ShowButton title={"Back to the store"} />
                    </Link>
                </span>
            :
                <>
                <h1 className={style.cartInfo}>
                    Looks like you have no items in your basket currently.
                </h1>
                <Link to="/allProducts">
                    <Button info={"Continue Shopping"} width={"313px"} />
                </Link>
                <Link to="/AllProducts"  className={style.back_button2}>
                    <ShowButton title={"Back to the store"} />
                </Link>
                </>
            }
        </div>
    );
}
