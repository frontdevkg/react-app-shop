import {BasketItem} from "./BasketItem";
import {ShopContext} from "../context";
import {useContext} from "react";

function BasketList() {
    const {
        order = [],
        handleBasketShow = Function.prototype,
    } = useContext(ShopContext)
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price.regularPrice * el.count
    }, 0)
    return <ul className="collection basket-list">
        <li className="collection-item active">Корзина</li>

        {order.length ? order.map(item => (
            <BasketItem
                key={item.id} {...item}
                // removeFromBasket={removeFromBasket}
                // incQuantity={incQuantity}
                // decQuantity={decQuantity}
            />

        )) : <li className='collection-item'>Корзина пуста</li>}

        <li className="collection-item active">Общая стоимость: {totalPrice} руб.</li>
        <li className='collection-item'>
            <button className='btn btn-small'>Оформить</button></li>
        <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
    </ul>
}

export {BasketList}