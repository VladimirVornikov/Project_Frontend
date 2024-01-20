import React from "react";
import style from "./InfoBlock.module.css";

export default function InfoBlock(props) {
    debugger;
    return (
        <div className={style.infoBlock}>
            <p className={style.title}>{props.title}</p>
            <p className={style.text}>{props.text}</p>
            
            {/* Generate images if they are */}
            {props.images && (
                <div className={style.socialMedia}>
                    {props.images.map((social, index) => (
                        <img key={index} src={social} alt="No social image"/>
                    ))}
                </div>
            )}
        </div>
    );
}
