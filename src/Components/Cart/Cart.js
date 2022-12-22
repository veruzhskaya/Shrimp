import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import Stripe from "../../Stripe/StripeContainer";
import CartItem from "./CartItem";


const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const [showMyCart, setShowMyCart] = useState(false);
    return(
        <div>
              {showMyCart ? <div><Stripe/></div> :
        <div>
        <div className="cart_container">
            <div className="cart_content">
                <div className="cart_par">
                    <p className="par_header">Товар</p>
                </div>
                <div className="cart_par">
                    <p className="par_header">Колличество</p>
                </div>
                <div className="cart_par">
                    <p className="par_header">Цена</p>
                </div>
                <div className="cart_par">
                    <p className="par_header">Сумма</p>
                </div>
            </div>
                <hr/>
            <div>
                {cartItems.map(cartItem => <CartItem key={cartItem} cartItem={cartItem}/> )}
            </div>
                <div className="cart_par">
                <p className="par_header">ИТОГО: {totalPrice} руб.</p>
                </div>
        </div>
            <div className="btn_pay_cont">
                <button className="btn_pay"  onClick={()=> setShowMyCart(true)}>Оплатить</button>
            </div>
        </div> }
        </div>
    )
}

export default Cart;