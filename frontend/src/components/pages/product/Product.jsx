import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import style from './Product.module.css'
import { fetchProduct } from '../../../store/asyncAction/fetchCategories'
import Button from '../../../elements/buttonCard/CheckOutBtn'

export default function Product() {
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
                    <button className={style.addSubButtons}>-</button>
                    <p className={style.price}>1</p>
                    <button className={style.addSubButtons}>+</button>
                </span>
                <Button color={"green"} info={"Add to cart"} width={"316px"} />
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