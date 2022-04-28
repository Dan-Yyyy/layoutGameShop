import React from "react";
import { useSelector } from "react-redux";
import { BiCartAlt } from 'react-icons/bi';
import { CartMenu } from "../cartMenu/CartMenu";
import './CardBlock.sass';
import { calcTotalPrice } from "../utils";

export const CardBlock = () => {
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);

    return(
        <div className="card-block">
            <BiCartAlt size={25} className="card-block__icon"/>
            <span className="card-block__total-price"> {totalPrice} руб.</span>
            <CartMenu />
        </div>
    )
};