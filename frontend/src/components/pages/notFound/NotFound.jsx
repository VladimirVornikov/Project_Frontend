import BackToMainBtn from "../../../elements/buttonCard/CheckOutBtn";
import ErrorImage from "../../../elements/images/404.png";
import style from "./NotFound.module.css";
import {Link} from 'react-router-dom';
import React from "react";

export default function NotFound() {
    return (
        <div className={style.not_found_container}>
            <img src={ErrorImage} alt="No image"  className={style.img}/>
            <div className={style.error_info}>
                <h1 className={style.h1}>Page Not Found</h1>
                <p className={style.p}>
                    We're sorry, the page you requested could not be found,{" "}
                    <br />
                    Please go back to the homepage
                </p>
                <Link to={"/"}>
                    <BackToMainBtn info={"Go Home"} width={"209px"}/>
                </Link>
            </div>
        </div>
    );
}
