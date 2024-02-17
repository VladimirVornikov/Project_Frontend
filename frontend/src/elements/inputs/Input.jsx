import React, { useState } from "react";
import style from "./Input.module.css";

export default function Input(props) {
    const { placeholder, type, id, name, inputType} = props;

    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const validateInput = (inputValue) => {
        switch (type) {
            case 'text':
                return inputValue.length > 3 && inputValue.length < 12;
                case "tel":
                    const telephonePattern = /^\+?\d{10,13}$/;
                    return telephonePattern.test(inputValue);
            case "email":
                const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return emailPattern.test(inputValue);
            default:
                return false;
        }
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);

        if (inputValue.trim() === "") {
            setError("This field is required");
        } else if (!validateInput(inputValue)) {
            type === "text" ? setError(`Invalid ${type} (Please, write your name)`) :
            type === "tel" ? setError(`Invalid ${type} (It should contais "+" and 10 - 13 digits)`) :
            setError(`Invalid ${type} (Your email, should contains "@mail" word)`)
        } else {
            setError("");
        }
    };

    return (
        <>
            <input
                className={inputType === "getDiscount" ? style.inputGetdiscount : style.inputOrders}
                placeholder={placeholder}
                type={type}
                id={id}
                name={name}
                onChange={handleInputChange}
                value={value}
            />
            {error ? <p className={style.error}>{error}</p> : ""}
            
        </>
    );
}
