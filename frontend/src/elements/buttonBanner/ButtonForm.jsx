import React, { useEffect, useState } from 'react';
import style from './ButtonForm.module.css';
import Modal from '../containers/Modal';
import { useDispatch } from 'react-redux';
import { getDiscount, sendingGoodsToServer } from '../../store/reducers/cartSlice';

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
            alert("Your form is not full");
        }
    }
    function closeModal() {
        setReset(true);
        setModalOpen(false);
        if(type === "OrdersDetails") {
            localStorage.clear();
            dispatch(sendingGoodsToServer())
        }
    }



    return (
        <>
            <button
                onClick={handleActiveButton}
                className={
                    type === 'OrdersDetails' ? style.orderButton :
                        active ? style.getDiscountBtnActive : style.getDiscountBtn
                }>
                {type === 'OrdersDetails' ? 'Order' :
                    active ? 'Request Submitted' : 'Get a discount'}
            </button>
            {modalOpen && <Modal onClose={closeModal} typeOfButton={type} />}
        </>
    );
}
