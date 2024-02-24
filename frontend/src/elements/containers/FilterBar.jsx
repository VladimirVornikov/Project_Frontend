import { filterByInput, filterBySale, filterBySort} from '../../store/reducers/productsAllSlice'
import React, { useEffect, useState } from 'react'
import style from './FilterBar.module.css'
import { useDispatch } from 'react-redux'

export default function FilterBar({type}) {
    const [priceFrom, setFrom] = useState(0)
    const [priceTo, setTo] = useState(0)
    const [selectedSort, setSelectedSort] = useState('')

    const dispatch = useDispatch()

    function handleSaleBox(e) {
        e.target.checked === true 
            ? dispatch(filterBySale(e.target.checked))
            : dispatch(filterByInput({priceFrom, priceTo: priceTo || 200}))

    }

    function handleSortedBox(e) {
        dispatch(filterBySort(e.target.value))
        setSelectedSort(e.target.value)
        if(e.target.value == "default") {
            dispatch(filterByInput({priceFrom, priceTo: priceTo || 200}))
        };
    }

    useEffect(() => {
        setFrom('');
        setTo('');
        setSelectedSort('');
    }, [type]);

    useEffect(() => {
        dispatch(filterByInput({priceFrom, priceTo: priceTo || 200}))
    }, [priceFrom, priceTo, dispatch])

    return (
        <div className={style.filter_container}>
            <span className={style.span}>
                <label htmlFor="price_from" >Price</label>
                <input  className={style.input_range} 
                    value={priceFrom} 
                    onChange={(e) => e.target.value >= 0 && e.target.value <= 999 ? setFrom(+e.target.value) : priceFrom}
                    name="price_from" 
                    type="number" 
                    placeholder="from" />
                <input className={priceTo < priceFrom || priceTo === undefined ? style.input_range_error : style.input_range }
                    value={priceTo}
                    onChange={(e) =>  e.target.value >= 0 && e.target.value <=999 ? setTo(+e.target.value) : priceTo}
                    name="price_to" 
                    type="number" 
                    placeholder='to' ></input>
            </span>

            {type !== "Sales"  
                ?    <span className={style.span}>
                        <label htmlFor="discount">Discounted items</label>
                        <input className={style.input_check_box} onClick={handleSaleBox} type="checkbox" />
                    </span>
                : ''}

            <span className={style.span}>
                <label htmlFor="sort_category">Sorted</label>
                <select className={style.select} name="sort_category" onChange={handleSortedBox} value={selectedSort}>
                    <option value="default">by default</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="high-low">price: high-low</option>
                    <option value="low-high">price: low-high</option>
                </select>
            </span>
        </div>
    )
}
