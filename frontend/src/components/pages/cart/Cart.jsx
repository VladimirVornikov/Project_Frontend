import React from 'react'
import style from './Cart.module.css'
import Title from '../../../elements/inputs/Title'
import Button from '../../../elements/buttonCard/CheckOutBtn'
import ShowButton from '../../../elements/buttonCard/ShowButton'
import { Link } from 'react-router-dom'

export default function Cart() {
  return (
    <div className={style.cart}>
        <span className={style.spanCart}>
                    <Title title={"Shopping cart"} />
                    <hr className={style.hr} />
                    <Link to="/allSales">
                        <ShowButton title={'Back to the store'}/>
                    </Link>
            </span>
        <h1 className={style.cartInfo}>Looks like you have no items in your basket currently.</h1>
        <Button info={"Continue Shopping"} width={"313px"}/>
    </div>
  )
}
