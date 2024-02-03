import React from "react";
import style from "./NotFound.module.css";
import ErrorImage from "../../../elements/images/404.png";
import BackToMainBtn from "../../../elements/buttonCard/CheckOutBtn";
import {Link} from 'react-router-dom';

export default function NotFound() {
    return (
        <div className={style.NotFoundContainer}>
            <img src={ErrorImage} alt="No image" />
            <div className={style.ErrorInfo}>
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
