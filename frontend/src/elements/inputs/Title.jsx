import style from './Title.module.css'
import React from 'react'

export default function Title(props) {
    return (
        <div>
          <h1 className={style.title}>{props.title}</h1>
        </div>
    )
}
