import React, { useEffect } from 'react'
import style from './CategoryPage.module.css'
import { fetchCategory } from '../../../store/asyncAction/fetchCategories'
import { useDispatch, useSelector } from 'react-redux'
import { ROOT_URL } from '../../..'
import { useParams } from 'react-router-dom'
import Title from '../../../elements/inputs/Title'
import Button from '../../../elements/buttonCard/CheckOutBtn'

export default function CategoryPage() {
    const dispatch = useDispatch()
    const {id} = useParams()

    const category = useSelector(store => store.category)

    useEffect(() => {
            dispatch(fetchCategory(id))
    }, [id, dispatch])

  return (
    <div>
        <div className={style.CategoryProducts}>
            <Title title={category.title}/>
            <div>IN PROGRESS</div>
            <div className={style.productList}>
                {category.products.map(product => 
                    <div key={product.id} className={style.productContainer}>
                        <img src={ROOT_URL + product.image} className={style.img}/>
                        <button className={style.addToCartBtn}>Add to Cart</button>
                        <p className={style.name}>{product.title}</p>
                        <span className={style.priceContainer}>
                            <p className={style.price}>{product.discont_price ? `$${product.discont_price}` : `$${product.price}`}</p>
                            <p className={style.discontPrice}>{product.discont_price ? `$${product.price}` : ''}</p>
                        </span>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}
