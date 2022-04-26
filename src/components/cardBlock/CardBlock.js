import React from "react";
import { BiCartAlt } from 'react-icons/bi';
import './CardBlock.sass';

export const CardBlock = () => {
    return(
        <div className="card-block">
            <BiCartAlt size={25} className="card-block__icon"/>
            <span className="card-block__total-price">20 руб.</span>
        </div>
    )
};