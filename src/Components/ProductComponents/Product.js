import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Product = ({product}) =>{
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    return(
        <div className="product_cont">
            <p className="product_par one">{product.name}</p>
            <p className="product_par">{product.weight}</p>
            <p className="product_par">{product.price} рублей.</p>
        <div className="prod_cart">
            <ChangeQuantity className="product_par"  quantity={quantity} setQuantity = {setQuantity}/>
            <button className="btn_cart" onClick={() => {dispatch(addItemToCart({product, quantity}))}}>в корзину</button>
        </div>
        </div>
     
    )
}

export default Product;