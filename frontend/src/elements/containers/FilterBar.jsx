import React from 'react'
import style from './FilterBar.module.css'

export default function FilterBar() {
  return (
    <div className={style.filterContainer}>
        <span>
            <label htmlFor="price_from" >Price</label>
            <input className={style.inputRange} name="price_from" type="number" placeholder="from" />
            <input className={style.inputRange}  name="price_to" placeholder='to' ></input>
        </span>
        <span>
            <label htmlFor="discount">Discounted items</label>
            <input className={style.inputCheckBox}name="discount" type="checkbox"/>
        </span>
        <span>
            <label htmlFor="sort_category">Sorted</label>
            <select className={style.select} name="sort_category">
                <option value="">by default</option>
            </select>
        </span>

    </div>
  )
}
