import { fetchProduct } from '../../../store/asyncAction/fetchCategories'
import Button from '../../../elements/buttonCard/CheckOutBtn'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import style from './Product.module.css'
import { decrAction, incrAction, setAction } from '../../../store/reducers/counter'

export default function Product() {
    const counter = useSelector(store => store.counter)
    const product = useSelector(store => store.product)
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [])
  return (
    <div className={style.productContainer}>
        <img src={`http://localhost:3333${product.image}`} className={style.img}/>
        <div>
            <h3 className={style.title}>{product.title}</h3>
            <span className={style.priceContainer}>
                <p className={style.mainPrice}>{`$${product.discont_price ? product.discont_price : product.price}`}</p>
                <p className={style.discountPrice}>{product.discont_price ? `$${product.price}` : ''}</p>
                {product.discont_price ? (
                        <span className={style.discountBlock}>{discountPercentage(product.price, product.discont_price)}</span>
                        ) : null}
            </span>
            <form className={style.form}>
                <span className={style.additionSubtraction}>
                    <button onClick={() => { console.log("Decrement clicked"); dispatch(decrAction()); }} className={style.addSubButtons} type='button'>-</button>

                    <input
                        onChange={(e) => { console.log("Input value changed"); dispatch(setAction(Number(e.target.value) || 1)); }}
                        placeholder={counter}
                        className={style.price}
                        type={"text"}
                    ></input>

                    <button onClick={() => { console.log("Increment clicked"); dispatch(incrAction()); }} className={style.addSubButtons} type='button'>+</button>
                </span>
                <Button info={"Add to cart"} width={"316px"} />
            </form>

            <h3 className={style.description}>Description</h3>
            <p className={style.infoBlock}>{product.description}</p>
        </div>
    </div>
  )
}


function discountPercentage(price, discount) {
    return "-" + Math.round(Number(100 * (price - discount) /price))+"%"
}