import React from "react";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../components/utils";
import { OrderItem } from './../../components/orderItem/OrderItem';
import './Order.sass';

export const Order = () => {
  const items = useSelector(state => state.cart.itemsInCart);

  if(items.length < 1) {
    return (
      <div className="order-page">
        <h1>Ваша карзина пуста</h1>
      </div>
    )
  }

  return(
    <div className="order-page">
      <div className="order-page__left">
        { items.map(game => <OrderItem game={game}/>)}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>
            { items.length } товаров на сумму { calcTotalPrice(items) } руб.
          </span>
        </div>
      </div>
    </div>
  )
}