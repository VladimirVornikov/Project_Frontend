import React from "react";
import style from "./GetDiscountContainer.module.css";
import HandImage from "../images/img2-getDiscount.png"
import GetDiscountBtn from "../buttonBanner/GetDiscountBtn";
import Input from "../inputs/Input";

export default function GetDiscountContainer() {
    return (
        <div className={style.GetDiscount}>
            <h1 className={style.title}>5% off on the first order</h1>
            <div className={style.GetDiscountMain}>
                <img src={HandImage} alt="No image" />
                <form className={style.form}>
                    <Input placeholder={"Name"} type={"text"} id={"name"} name={"name"}/>
                    <Input placeholder={"Phone number"} type={"tel"} id={"phone"} name={"phone"}/>
                    <Input placeholder={"Email"} type={"email"} id={"email"} name={"email"}/>
                    <GetDiscountBtn/>
                </form>
            </div>
        </div>
    );
}
