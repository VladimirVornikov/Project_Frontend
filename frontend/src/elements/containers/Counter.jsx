import React from 'react'
import style from "./Counter.module.css"
import { decr, incr, set } from '../../store/reducers/counterSlice'
import { useDispatch } from 'react-redux'

export default function Counter(props) {
    const dispatch = useDispatch();

    return (
        <span className={style.additionSubtraction}>
            <button onClick={() => dispatch(decr())} className={style.addSubButtons} type='button'>-</button>
            <input 
                onChange={(e) => dispatch(set(Number(e.target.value)))} 
                className={style.price} 
                type={"text"} 
                value={props.number} 
            />
            <button onClick={() => dispatch(incr())} className={style.addSubButtons} type='button'>+</button>
        </span>
    )
}
