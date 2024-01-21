import React from 'react'
import style from './DiscountInfoContainer.module.css'
import CheckOut from '../buttonCard/CheckOut.jsx'


export default function DiscountInfoContainer() {
  return (
    <div className={style.DiscountInfo}>
        <h1 className={style.InfoTextDiscount}>Amazing Discounts <br/> on Gardern Products!</h1>
        <CheckOut color={"rgba(51, 153, 51, 1)"} info={"Check out"}/>
    </div>
  )
}
