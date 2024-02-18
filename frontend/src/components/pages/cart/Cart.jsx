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
import PriceContainer from "../../../elements/containers/PriceContainer";
import OrderDetails from "../../../elements/containers/OrderDetails";

export default function Cart() {
    const products = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateTotalSumAndCountItem())
    }, [products])


    return (
        <div className={style.emptyCart}>
            
            <span className={style.spanCart}>
                <Title title={"Shopping cart"} />
                <hr className={style.hr} />
                <Link to="/AllProducts">
                    <ShowButton title={"Back to the store"} />
                </Link>
            </span>

            {products.items.length > 0 ?
                <span className={style.cartWrapper}>
                    <div className={style.cartWithProducts}>
                        {products.items.map(product => (
                            <span key={product.id} className={style.productContainer}>
                                <img src={ROOT_URL + `${product.image}`} className={style.imgProduct}/>
                                <span className={style.productWrapper}>
                                    <div className={style.counterInfo}>
                                        <p className={style.productName}>{product.title}</p>
                                        <div  className={style.cross} onClick={() => dispatch(deleteProduct(product.id))}>X</div>
                                    </div>
                                    <span className={style.priceContainer}>
                                        <Counter number={product.quantity} id={product.id}/>
                                        <PriceContainer price={product.price} discount={product.discont_price} />
                                    </span>
                                </span>
                            </span>
                        ))}
                    </div>
                    
                    <OrderDetails totalSum={products.totalSum} countItem={products.countItem} discountFactor={products.discountFactor}/>
                    
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
