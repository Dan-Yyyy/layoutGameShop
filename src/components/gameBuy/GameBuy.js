import React from "react";
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../redux/card/reducer";
import { Button } from '../button';
import './GameBuy.sass';

export const GameBuy = ({game}) => {
    const dispatch = useDispatch();

    const handelCkick = (e) => {
        e.stopPropagation();
        dispatch(setItemInCart(game));
    };

    return(
        <div className="game-button">
            <span className="game-buy__price">{game.price} руб.</span>
            <Button 
                onClick={ handelCkick }
                type="primary"
                >                
                    В корзину 
            </Button>
        </div>
    )
}