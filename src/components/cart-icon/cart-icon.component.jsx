import {CartIconContainer, ItemCount, ShoppingIcon} from "./cart-icon.styles.jsx"



import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, totalInCart} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <CartIconContainer className="cart-icon-container" onClick={toggleIsCartOpen}>
           <ShoppingIcon></ShoppingIcon> 
            <ItemCount className="item-count"> {totalInCart} </ItemCount>
        </CartIconContainer>
        
    )
}

export default CartIcon; 

