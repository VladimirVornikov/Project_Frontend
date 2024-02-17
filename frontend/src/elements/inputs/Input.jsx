import React, { useEffect, useState } from "react";
import style from "./Input.module.css";

export default function Input(props) {
    const { placeholder, type, id, name, inputType, setConfig, resetInput} = props;

    const [value, setValue] = useState("");
    const [error, setError] = useState("");


    useEffect(() => {
        if (resetInput) {
            setValue("");
        }
    }, [resetInput]);

    const validateInput = (inputValue) => {
        switch (type) {
            case 'text':
                if(inputValue.length > 3 && inputValue.length < 12 ) {
                    return [inputValue, setConfig(true)]
                };
                case "tel":
                    const telephonePattern = /^\+?\d{10,13}$/;
                    if(telephonePattern.test(inputValue)) {
                        return [inputValue, setConfig(true)]
                    };
            case "email":
                const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(emailPattern.test(inputValue)) {
                    return [inputValue, setConfig(true)]
                };
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
            type === "tel" ? setError(`Invalid ${type} (It should contain "+" and 10 - 13 digits)`) :
            setError(`Invalid ${type} (Your email, should contain "@mail" word)`)
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
