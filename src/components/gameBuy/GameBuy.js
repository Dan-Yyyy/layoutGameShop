import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../redux/card/reducer";
import { Button } from '../button';
import './GameBuy.sass';

export const GameBuy = ({game}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemsInCart = items.some(item => item.id === game.id);

    const handelCkick = (e) => {
        e.stopPropagation();
        if(isItemsInCart) {
            dispatch(deleteItemFromCart(game.id))
        } else {
            dispatch(setItemInCart(game));
        }
    };

    return(
        <div className="game-button">
            <span className="game-buy__price">{game.price} руб.</span>
            <Button 
                onClick={ handelCkick }
                type={isItemsInCart? "secondary" : "primary"}
                >                
                    { isItemsInCart ? 'Убрать из корзины' :  'В корзину' }
            </Button>
        </div>
    )
}