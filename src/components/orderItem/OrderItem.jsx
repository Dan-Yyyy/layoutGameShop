import React from "react";
import { useDispatch } from "react-redux";
import { GameCover } from "../gameCover";
import { AiOutlineClose } from 'react-icons/ai';
import { deleteItemFromCart } from './../../redux/card/reducer';
import './OrderItem.sass';

export const OrderItem = ({game}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id))
  }
  
  return(
    <div className="order-item">
      <div className="order-item__cover">
        <GameCover image={game.image} />
      </div>
      <div className="order-item__title">
        <span>{ game.title }</span>
      </div>
      <div className="order-item__price">
        <span>{game.price} руб. </span>
        <AiOutlineClose 
          size={20} 
          className="cart-item__delete-icon"
          onClick={handleClick}/>
      </div>
    </div>
  )
}