import React, { useState } from 'react';
import style from './Form.module.css';
import ButtonForm from '../buttonBanner/ButtonForm';
import Input from '../inputs/Input';

export default function Form(props) {
    const [userName, setUserName] = useState(false)
    const [userPhone, setUserPhone] = useState(false)
    const [userEmail, setUserEmail] = useState(false)

    const access = [userName, userPhone, userEmail]

    const [reset, setResetInput] = useState(false)
    console.log(reset);

    return (
        <form className={style.form}>
            <Input placeholder={'Name'} type={'text'} id={'name'} name={'name'} inputType={props.type} setConfig={setUserName} resetInput={reset}/>
            <Input placeholder={'Phone number'} type={'tel'} id={'phone'} name={'phone'} inputType={props.type} setConfig={setUserPhone} resetInput={reset}/>
            <Input placeholder={'Email'} type={'email'} id={'email'} name={'email'} inputType={props.type} setConfig={setUserEmail} resetInput={reset}/>
            <ButtonForm type={props.type} usersInfo={access} setReset={setResetInput}/>
        </form>
    );
}
