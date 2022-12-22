import Cart from "./Components/Cart/Cart";

const CartIcon = () => {
    return(
        <div>
              <div className="header">
                <h1>Ваша корзина</h1>
            </div>
            <Cart/>
        </div>
    )
}

export default CartIcon;