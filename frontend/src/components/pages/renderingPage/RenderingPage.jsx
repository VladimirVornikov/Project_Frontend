import { fetchAllProducts, fetchAllSales, fetchCategory, fetchSale } from '../../../store/asyncAction/fetchCategories';
import ShowButton from '../../../elements/buttonCard/ShowButton';
import FilterBar from '../../../elements/containers/FilterBar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Title from '../../../elements/inputs/Title';
import style from './RenderingPage.module.css'
import React, { useEffect } from 'react'
import { ROOT_URL } from '../../..';
import { clearData } from '../../../store/reducers/productsAllSlice';
import { addProduct, updateTotalSumAndCountItem } from '../../../store/reducers/cartSlice';
import PriceContainer from '../../../elements/containers/PriceContainer';

export default function RenderingPage(props) {
    
    const productsList = useSelector(store => store.allProducts)
    const {id} = useParams()
    const dispatch = useDispatch()
    console.log(productsList);

    
    useEffect(() => {
        dispatch(props.type === "Sales" ? fetchAllSales() :
                props.type === "CategoryProducts" ? fetchCategory(id) :
                props.type === "Sale" ? fetchSale() :
                fetchAllProducts())
        return () => { dispatch(clearData());};
    }, [id, props.type, dispatch])

    function addItemToCart(product) {
        const productToCart = { ...product, quantity: 1 };
        dispatch(addProduct(productToCart));
        dispatch(updateTotalSumAndCountItem());
    }

    return (
        <div className={style.CategoryProducts}>

            {props.type === "Sale" 
                ?   <span className={style.spanCategories}>
                        <Title title={productsList.title} />
                        <hr className={style.hr} />
                        <Link to="/allSales">
                            <ShowButton title={'All sales'}/>
                        </Link>
                    </span> 
                :   <>
                    <Title title={productsList.title}/>
                    <FilterBar type={props.type}/> 
                    </>}

            <div className={style.productList}>
                {productsList.products.map(product => product.isShown === true 
                    ?
                        <div key={product.id} className={style.productContainer}>
                            <Link to={`/categories/${id ? id : product.categoryId}/${product.id}`}>
                                <img src={ROOT_URL + product.image} className={style.img}/>
                            </Link>
                            <button onClick={() => addItemToCart(product)} className={style.addToCartBtn}>Add to Cart</button>
                            <p className={style.name}>{product.title.length > 21 ? product.title.slice(0, 18) + "..." : product.title}</p>
                            <PriceContainer price={product.price} discount={product.discont_price} isAllPageList={true}/>
                        </div>
                    : ''
                )}
            </div>
        </div>
    )
}
