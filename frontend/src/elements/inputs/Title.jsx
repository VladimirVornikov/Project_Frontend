import React from 'react'
import style from './Title.module.css'

export default function Title(props) {
  return (
    <div>
      <h1 className={style.title}>{props.title}</h1>
    </div>
  )
}
