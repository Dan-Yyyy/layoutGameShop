import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './card/reducer';
import gamesReduser from './games/reducer';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        game: gamesReduser
    },
})