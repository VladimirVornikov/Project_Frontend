import React from 'react';
import style from './Form.module.css';
import ButtonForm from '../buttonBanner/ButtonForm';
import Input from '../inputs/Input';

export default function Form(props) {
    return (
        <form className={style.form}>
            <Input placeholder={'Name'} type={'text'} id={'name'} name={'name'} inputType={props.type} />
            <Input placeholder={'Phone number'} type={'tel'} id={'phone'} name={'phone'} inputType={props.type} />
            <Input placeholder={'Email'} type={'email'} id={'email'} name={'email'} inputType={props.type} />
            <ButtonForm type={props.type} />
        </form>
    );
}
