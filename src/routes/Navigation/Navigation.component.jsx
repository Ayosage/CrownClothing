import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import {NavigationContainer, NavLink, NavLinks, LogoContainer} from "./navigation.styles.jsx"
import { selectCurrentUser } from "../../store/user/user.selector.js";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { useSelector } from "react-redux";


export default function Navigation(){

    const currentUser = useSelector(selectCurrentUser)
    const {isCartOpen} = useContext(CartContext)

   
  
        return(
          <Fragment>
            <NavigationContainer>
            <LogoContainer  to="/">
               <CrwnLogo className="logo"/>
            </LogoContainer>
            <NavLinks className="nav-links-container">
                <NavLink  to="/shop">SHOP</NavLink>
                <NavLink  to="/contact">CONTACT</NavLink>
                {currentUser ? (<NavLink as="span"  onClick={SignOutUser}> SIGN OUT</NavLink> ):( <NavLink  to="/auth"> SIGN IN</NavLink>)}
                <CartIcon/>
            </NavLinks>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
           
            <Outlet/>

          </Fragment>
        )
      
}