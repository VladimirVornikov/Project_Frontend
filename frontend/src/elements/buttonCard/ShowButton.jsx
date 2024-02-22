import style from './ShowButton.module.css'
import React from 'react'

export default function ShowButton(props) {
  return (
        <button className={style.show_button}>
            {props.title}
        </button>
  )
}
