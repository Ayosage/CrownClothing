import {CheckoutItemContainer, Image, ImageContainer, Element, Quantity, Arrow, RemoveButton, Value} from "./checkout-item.styles.jsx"
import { useDispatch, useSelector } from "react-redux"
import { removeItemFromCart, addItemToCart, deleteItemFromCart } from "../../store/cart/cart.action.js"
import { selectCartItems } from "../../store/cart/cart.selector.js"
const CheckoutItem = ({cartItem}) => {
    
    const cartItems = useSelector(selectCartItems)
    const {name, imageUrl, quantity, price} = cartItem
    const dispatch = useDispatch()
   
    const addItem = () => dispatch(addItemToCart(cartItems, cartItem ))
    const deleteItem = () => dispatch(removeItemFromCart(cartItems, cartItem ))
    const clearItem = () => dispatch(deleteItemFromCart(cartItems, cartItem ))

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <Element>{name}</Element>
            <Quantity >
            <Arrow onClick={deleteItem}>&#10094;</Arrow>
            <Value >{quantity}</Value>
            <Arrow onClick={addItem}>&#10095;</Arrow>
            </Quantity>
            <Element className="price">{price}</Element>
            <RemoveButton onClick={clearItem}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem