import React from "react";
import './GameCover.sass';

export const GameCover = ({ image = "" }) => {
    return(
        <div className="game-cover" style={{ backgroundImage: `url(${image})`}}></div>
    )
}