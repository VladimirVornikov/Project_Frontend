import style from "./InfoBlock.module.css";
import React from "react";

export default function InfoBlock(props) {
    return (
        <div className={style.info_block}>
            <p className={style.title}>{props.title}</p>
            <p className={style.text}>{props.text}</p>
            
            {props.images && (
                <div className={style.social_media}>
                    {props.images.map((social, index) => (
                        <a href={index === 0 ? 
                            "https://www.instagram.com/startainstitute/" : "https://t.me/Starta_Institute_By_TelRan"} 
                            key={index} target="_blank">
                            <img  className= {style.img} key={index} src={social} alt="No social image" href={"https://www.instagram.com/startainstitute/"}/>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
