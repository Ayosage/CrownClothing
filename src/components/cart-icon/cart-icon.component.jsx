import {CartIconContainer, ItemCount, ShoppingIcon} from "./cart-icon.styles.jsx"
import { selectIsCartOpen, selectCartCount } from "../../store/cart/cart.selector.js";
import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen} from "../../store/cart/cart.action.js";


const CartIcon = () => {
   // const {isCartOpen, setIsCartOpen, totalInCart} = useSelector(CartContext);
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const totalInCart = useSelector(selectCartCount);
    

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    
    return (
        <CartIconContainer className="cart-icon-container" onClick={toggleIsCartOpen}>
           <ShoppingIcon></ShoppingIcon> 
            <ItemCount className="item-count"> {totalInCart} </ItemCount>
        </CartIconContainer>
        
    )
}

export default CartIcon; 

