import React from "react";
import { useDispatch } from "react-redux";
import './CartItem.sass';
import { deleteItemFromCart } from "../../redux/card/reducer";
import { AiOutlineClose } from 'react-icons/ai';

export const CartItem = ({title, price, id}) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteItemFromCart(id));
  }

  return(
    <div className="cart-item">
      <div className="cart-item__title">
        <AiOutlineClose size={16} 
          onClick={ deleteItem }
          className="cart-item__delete"/>
        <span>{ title }</span>
      </div>
      <div className="cart-item__price">
        <span>{ price } руб.</span>
      </div>
    </div>
  )
}