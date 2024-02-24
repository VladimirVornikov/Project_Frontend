import { addProduct, updateTotalSumAndCountItem } from '../../../store/reducers/cartSlice'
import PriceContainer from '../../../elements/containers/PriceContainer'
import { fetchProduct } from '../../../store/asyncAction/fetchCategories'
import Button from '../../../elements/buttonCard/CheckOutBtn'
import { set } from '../../../store/reducers/counterSlice'
import Counter from '../../../elements/containers/Counter'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import React, { useEffect}  from 'react'
import style from './Product.module.css'
import { ROOT_URL } from '../../..'

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
        <div className={style.product_container}>
            <img src={`${ROOT_URL}${product.image}`} className={style.img}/>
                <h3 className={style.title}>{product.title}</h3>
                <PriceContainer price={product.price} discount={product.discont_price} isProduct={true} />
                <form onSubmit={cartAddHandler} className={style.form}>
                    <Counter number={counter}/>
                    <Button info={"Add to cart"} width={"316px"} />
                </form>
                <div className={style.description}>
                    <h3 className={style.description_title}>Description</h3>
                    <p className={style.info_block}>{product.description}</p>
                </div>
        </div>
    )
}
