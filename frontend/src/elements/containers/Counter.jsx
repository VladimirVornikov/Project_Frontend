import React from 'react'
import style from "./Counter.module.css"
import { decr, incr, set } from '../../store/reducers/counterSlice'
import { decrCart, incrCart, setCart } from '../../store/reducers/cartSlice'
import { useDispatch } from 'react-redux'

export default function Counter(props) {
    const {number, id} = props
    console.log(id);
    const dispatch = useDispatch();

    return (
            <span className={style.additionSubtraction}>
                <button 
                    onClick={id ? () => dispatch(decrCart(id)) : () => dispatch(decr())}  
                    className={style.addSubButtons} type='button'>-</button>
                <input 
                    onChange={(e) => id ? dispatch(setCart({ quantity: Number(e.target.value), id })) : dispatch(set(Number(e.target.value)))}
                    className={style.price} 
                    type={"text"} 
                    value={number} 
                />
                <button 
                    onClick={id ? () => dispatch(incrCart(id)) : () => dispatch(incr())}
                    className={style.addSubButtons} type='button'>+</button>
            </span>

    )
}
