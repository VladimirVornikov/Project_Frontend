import React from 'react'
import style from "./Form.module.css"
import GetDiscountBtn from '../buttonBanner/GetDiscountBtn'
import Input from '../inputs/Input'

export default function Form(props) {

    return (
      <form className={style.form}>
          <Input placeholder={"Name"} type={"text"} id={"name"} name={"name"} inputType={props.type}/>
          <Input placeholder={"Phone number"} type={"tel"} id={"phone"} name={"phone"} inputType={props.type}/>
          <Input placeholder={"Email"} type={"email"} id={"email"} name={"email"} inputType={props.type}/>
          <GetDiscountBtn type={"Orders"}/>
      </form>
    )
}
