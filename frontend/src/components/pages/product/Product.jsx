import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import style from './Product.module.css'
import { fetchProduct } from '../../../store/asyncAction/fetchCategories'

export default function Product() {
    const product = useSelector(store => store.product)
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [])
  return (
    <div className={style.productContainer}>
        <img src={`http://localhost:3333${product.image}`}/>
        <div>
            <h3>{product.title}</h3>
            <span className={style.priceContainer}>
                <p>{product.price}</p>
                <p>{product.discont_price}</p>
            </span>
            <form action="">
                <button>-</button>
                <p>1</p>
                <button>+</button>
                <button>Add to cart</button>
            </form>
            <h3>Description</h3>
            <p>{product.description}</p>
        </div>
    </div>
  )
}
