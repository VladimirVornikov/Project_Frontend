import { fetchProduct } from '../../../store/asyncAction/fetchCategories'
import Button from '../../../elements/buttonCard/CheckOutBtn'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import React, { useEffect}  from 'react'
import style from './Product.module.css'
import { set } from '../../../store/reducers/counterSlice'
import { addProduct, updateTotalSumAndCountItem } from '../../../store/reducers/cartSlice'
import Counter from '../../../elements/containers/Counter'
import PriceContainer from '../../../elements/containers/PriceContainer'

export default function Product() {
    const product = useSelector(store => store.product)
    const counter = useSelector(store => store.counter)
    const {id} = useParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(set(1))
        dispatch(fetchProduct(id))
    }, [id])

    const cartAddHandler = (event) => {
        event.preventDefault()
        dispatch(set(1))
        const productToCart = {...product, quantity: counter}
        dispatch(addProduct(productToCart))
        dispatch(updateTotalSumAndCountItem())
    }

    return (
        <div className={style.productContainer}>
            <img src={`http://localhost:3333${product.image}`} className={style.img}/>
            <div>
                <h3 className={style.title}>{product.title}</h3>
                <PriceContainer price={product.price} discount={product.discont_price} isProduct={true}/>
                <form onSubmit={cartAddHandler} className={style.form}>
                    <Counter number={counter}/>
                    <Button info={"Add to cart"} width={"316px"} />
                </form>
                <h3 className={style.description}>Description</h3>
                <p className={style.infoBlock}>{product.description}</p>
            </div>
        </div>
    )
}
