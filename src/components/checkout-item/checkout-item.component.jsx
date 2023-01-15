import {CheckoutItemContainer, Image, ImageContainer, Element, Quantity, Arrow, RemoveButton, Value} from "./checkout-item.styles.jsx"
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"

const CheckoutItem = ({cartItem}) => {
    const {deleteItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext)
    const {name, imageUrl, price, quantity} = cartItem
    const addItem = () => addItemToCart(cartItem)
    const deleteItem = () => removeItemFromCart(cartItem)
    const clearItem = () => deleteItemFromCart(cartItem)

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <Element className="name">{name}</Element>
            <Quantity className="quantity">
            <Arrow className="arrow" onClick={deleteItem}>&#10094;</Arrow>
            <Value className="value">{quantity}</Value>
            <Arrow className="arrow" onClick={addItem}>&#10095;</Arrow>
            </Quantity>
            <Element className="price">{price}</Element>
            <RemoveButton className="remove-button" onClick={clearItem}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem