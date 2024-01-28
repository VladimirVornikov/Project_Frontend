import { fetchAllProducts, fetchAllSales, fetchCategory } from '../../../store/asyncAction/fetchCategories';
import FilterBar from '../../../elements/containers/FilterBar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Title from '../../../elements/inputs/Title';
import style from './RenderingPage.module.css'
import React, { useEffect } from 'react'
import { ROOT_URL } from '../../..';

export default function RenderingPage(props) {
    const {id} = useParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(props.type === "Sales" ? fetchAllSales() :
                props.type === "CategoryProducts" ? fetchCategory(id) :
                fetchAllProducts())
                console.log(productsList);
    }, [id, props.type, dispatch])

    const productsList = useSelector(store => store.allProducts)
    console.log(productsList);

    
    return (
        <div className={style.CategoryProducts}>
        <Title title={productsList.title}/>
        <FilterBar/>
            <div className={style.productList}>
                {productsList.products.map(product => 
                    <div key={product.id} className={style.productContainer}>
                        <Link to={`/categories/${id ? id : product.categoryId}/${product.id}`}>
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
    )
}

function discountPercentage(price, discount) {
    return "-" + Math.round(Number(100 * (price - discount) /price))+"%"
}