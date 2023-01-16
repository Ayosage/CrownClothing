import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from "./checkout.styles.jsx";

const Checkout = () => {
  const { cartItems, cartPriceTotal} =
    useContext(CartContext);
  return (
    
      <CheckoutContainer>
        <CheckoutHeader>
          <HeaderBlock>Product</HeaderBlock>
          <HeaderBlock>Description</HeaderBlock>
          <HeaderBlock>Quantity</HeaderBlock>
          <HeaderBlock>Price</HeaderBlock>
          <HeaderBlock>Remove</HeaderBlock>
        </CheckoutHeader>
      

      {cartItems.map((cartItem) => {
        

        return (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
          
        );
      })}

      <Total>Total: ${cartPriceTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
