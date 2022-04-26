import React from "react";
import { Link } from 'react-router-dom';
import { CardBlock } from "../cardBlock";
import './Header.sass';

export const Header = () => {
    return(
        <div className="header">
            <div className="wrapper">
                <Link to="/" className="header__store-title">
                    Game Store
                </Link>
            </div>
            <div className="wrapper header__card-btn">
                <CardBlock />
            </div>
        </div>
    )
};