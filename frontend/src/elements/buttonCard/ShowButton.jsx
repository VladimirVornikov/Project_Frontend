import React from 'react'
import style from './ShowButton.module.css'

export default function ShowButton(props) {
  return (
        <button className={style.ShowButton}>
            {props.title}
        </button>
  )
}
