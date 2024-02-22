import { getDiscount, sendItemsToServer, } from '../../store/reducers/cartSlice';
import style from './ButtonForm.module.css';
import { useDispatch } from 'react-redux';
import React, {  useState } from 'react';
import Modal from '../containers/Modal';

export default function ButtonForm({ type, usersInfo, setReset }) {
    const [active, setActive] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    function handleActiveButton(e) {
        const trueCount = usersInfo.filter(value => value === true).length;
        if (trueCount === 3) {
            e.preventDefault();
            setActive(true);
            setModalOpen(true);
            dispatch(getDiscount());
        } else {
            e.preventDefault();
            alert("Please, fill out your form");
        }
    }

    function closeModal() {
        setReset(true);
        setModalOpen(false);
        if(type === "OrdersDetails") {
            localStorage.clear();
            dispatch(sendItemsToServer())
        }
    }

    return (
        <>
            <button
                onClick={handleActiveButton}
                className={
                    type === 'OrdersDetails' ? style.order_button :
                        active ? style.get_discount_btn_active : style.get_discount_btn
                }>
                {type === 'OrdersDetails' ? 'Order' :
                    active ? 'Request Submitted' : 'Get a discount'}
            </button>
            {modalOpen && <Modal onClose={closeModal} typeOfButton={type} />}
        </>
    );
}
