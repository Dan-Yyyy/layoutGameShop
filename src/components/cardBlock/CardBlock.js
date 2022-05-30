import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { BiCartAlt } from 'react-icons/bi';
import { CartMenu } from "../cartMenu/CartMenu";
import './CardBlock.sass';
import { calcTotalPrice } from "../utils";
import { ItemsInCart } from './../itemsInCart/ItemsInCart';

export const CardBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);
    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false);
        navigate('/order');
    }, [navigate]);

    return(
        <div className="card-block">
            {totalPrice > 0 ? <span className="card-block__total-price"> {totalPrice} руб.</span> : null}
            <ItemsInCart quantity={items.length}/>
            <BiCartAlt size={25} className="card-block__icon" onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
            {isCartMenuVisible && <CartMenu items={ items } onClick={ handleClick }/>}
        </div>
    )
};