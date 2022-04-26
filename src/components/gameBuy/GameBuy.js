import React from "react";
import { Button } from '../button';
import './GameBuy.sass';

export const GameBuy = ({game}) => {
    return(
        <div className="game-button">
            <span className="game-buy__price">{game.price} руб.</span>
            <Button 
                onClick={ () => null}
                type="primary"
                >                
                    В корзину 
            </Button>
        </div>
    )
}