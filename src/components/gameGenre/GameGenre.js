import React from "react";
import './GameGenre.sass';

export const GameGenre = ({ genre }) => {
    return (
        <span className="game-genre">{genre}</span>
    )
}