import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

export default function Navigation(){

    
        return(
          <Fragment>
            <div className="navigation">
            <Link className="logo-container" to="/">
               <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">SHOP</Link>
                <Link className="nav-link" to="/contact">CONTACT</Link>
                <Link className="nav-link" to="/auth">SIGN IN</Link>
                <Link className="nav-link" to="/cart">IMG</Link>
            </div>
            </div>
           
            <Outlet/>

          </Fragment>
        )
      
}