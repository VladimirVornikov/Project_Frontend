import React, { useEffect, useState } from 'react'
import style from './FilterBar.module.css'
import { useDispatch } from 'react-redux'
import { filterByInput, filterBySale, filterBySort} from '../../store/reducers/productsAllSlice'

export default function FilterBar({type}) {
    const [priceFrom, setFrom] = useState(0)
    const [priceTo, setTo] = useState(0)


    const dispatch = useDispatch()

    function handleSaleBox(e) {
        dispatch(filterBySale(e.target.checked))
    }

    function handleSortedBox(e) {
        dispatch(filterBySort(e.target.value))
    }

    useEffect(() => {
        setFrom('')
        setTo('')
    }, [type])

    useEffect(() => {
        dispatch(filterByInput({priceFrom, priceTo: priceTo || 200}))
    }, [priceFrom, priceTo, dispatch])

    return (
        <div className={style.filterContainer}>
            <span className={style.span}>
                <label htmlFor="price_from" >Price</label>
                <input  className={style.inputRange} 
                    value={priceFrom} 
                    onChange={(e) => e.target.value >= 0 && e.target.value <= 999 ? setFrom(+e.target.value) : priceFrom}
                    name="price_from" 
                    type="number" 
                    placeholder="from" />
                <input className={priceTo < priceFrom || priceTo === undefined ? style.inputRangeError : style.inputRange }
                    value={priceTo}
                    onChange={(e) =>  e.target.value >= 0 && e.target.value <=999 ? setTo(+e.target.value) : priceTo}
                    name="price_to" 
                    type="number" 
                    placeholder='to' ></input>
            </span>

            {type !== "Sales"  
                ?    <span className={style.span}>
                        <label htmlFor="discount">Discounted items</label>
                        <input className={style.inputCheckBox} onClick={handleSaleBox} type="checkbox" />
                    </span>
                : ''}

            <span className={style.span}>
                <label htmlFor="sort_category">Sorted</label>
                <select className={style.select} name="sort_category" onChange={handleSortedBox}>
                    <option value="">by default</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="high-low">price: high-low</option>
                    <option value="low-high">price: low-high</option>
                </select>
            </span>

        </div>
    )
}
