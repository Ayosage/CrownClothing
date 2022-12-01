import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation.styles.scss"
import { UserContext } from "../../contexts/user.context";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { SignOutUser } from "../../utils/firebase/firebase.utils";


export default function Navigation(){

    const {currentUser} =  useContext(UserContext)

   
  
        return(
          <Fragment>
            <div className="navigation">
            <Link className="logo-container" to="/">
               <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">SHOP</Link>
                <Link className="nav-link" to="/contact">CONTACT</Link>
                {currentUser ? (<span className="nav-link" onClick={SignOutUser}> SIGN OUT</span> ):( <Link className="nav-link" to="/auth"> SIGN IN</Link>)}
                <Link className="nav-link" to="/cart">IMG</Link>
            </div>
            </div>
           
            <Outlet/>

          </Fragment>
        )
      
}