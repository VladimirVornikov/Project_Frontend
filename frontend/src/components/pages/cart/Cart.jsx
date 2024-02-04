import React from 'react'
import style from './Cart.module.css'
import Title from '../../../elements/inputs/Title'
import Button from '../../../elements/buttonCard/CheckOutBtn'
import ShowButton from '../../../elements/buttonCard/ShowButton'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Cart() {

    const products = useSelector(store => store.cart)
    console.log(products);


    return (
      
      <div className={style.emptyCart}>
          <span className={style.spanCart}>
                      <Title title={"Shopping cart"} />
                      <hr className={style.hr} />
                      <Link to="/allProducts">
                          <ShowButton title={'Back to the store'}/>
                      </Link>
          </span>

          {products.map(element => 
            <div className={style.cartWithProducts}>
              <span >

              </span>
            </div>
          )}
            
          <h1 className={style.cartInfo}>Looks like you have no items in your basket currently.</h1>
          <Link to="/allProducts">
            <Button info={"Continue Shopping"} width={"313px"}/>
          </Link>
      </div>
    )
}
