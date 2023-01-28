import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from "./checkout.styles.jsx";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartPriceTotal = useSelector(selectCartTotal)
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
