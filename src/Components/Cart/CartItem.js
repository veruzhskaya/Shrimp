import { useDispatch } from "react-redux";
import dataProducts from "../../data/dataProducts";
import { removeItemFromCart } from "../../redux/cartSlice";
import close from '../../img/iclose.png'



const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();
    console.log (cartItem)
    const products = dataProducts.find(item => item.id === cartItem.productID)
    console.log (products)
    return(
        <div className="cart_product">
            <div  className="cart_par">
                <p className="cart_item">{products.name}</p>  
            </div>
            <div  className="cart_par">
                <p className="cart_item">{cartItem.quantity} шт.</p>
            </div>
            <div  className="cart_par">
                <p className="cart_item">{products.price} рублей</p>
            </div>
            <div  className="cart_par">
                <p className="cart_item">{products.price*cartItem.quantity} рублей</p>
            </div>
            <div>
                <span onClick={() => dispatch(removeItemFromCart({cartItemId : cartItem.id}))}>  
                    <img className="icon" src={close} alt="icon" width="30px"/>
                </span> 
            </div>
        </div>
    )
}

export default CartItem;