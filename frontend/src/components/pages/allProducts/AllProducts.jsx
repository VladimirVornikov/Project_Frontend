import React, { useEffect } from 'react'
import style from '../category/CategoryPage.module.css'
import { fetchAllProducts } from '../../../store/asyncAction/fetchCategories'
import { useDispatch, useSelector } from 'react-redux'
import { ROOT_URL } from '../../..'
import { Link } from 'react-router-dom'
import FilterBar from '../../../elements/containers/FilterBar'
import Title from '../../../elements/inputs/Title'

export default function AllProducts() {
    const dispatch = useDispatch()
    const productsList = useSelector(store => store.allProducts)

    useEffect(() =>{
      dispatch(fetchAllProducts())
    }, [])

  return (
    <div>
      <div className={style.CategoryProducts}>
            <Title title={productsList.title}/>
            <FilterBar/>
            <div className={style.productList}>
                {productsList.products.map(product => 
                    <div key={product.id} className={style.productContainer}>
                        <Link to={`/categories//${product.id}`}>
                            <img src={ROOT_URL + product.image} className={style.img}/>
                        </Link>
                        <button className={style.addToCartBtn}>Add to Cart</button>
                        {product.discont_price ? (
                        <span className={style.discountBlock}>{discountPercentage(product.price, product.discont_price)}</span>
                        ) : null}
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



function discountPercentage(price, discount) {
  return "-" + Math.round(Number(100 * (price - discount) /price))+"%"
}