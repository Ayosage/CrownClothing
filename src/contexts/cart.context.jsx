import { createContext, useState, useEffect } from "react";


const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if(existingCartItem){
       return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    } 
    return ([...cartItems,  {...productToAdd, quantity: 1}])
}

const countCart = (cartItems) => {
    let total = 0
    cartItems.forEach(item => {
       total = total + item.quantity
    });
    console.log(total)
    return total
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    totalInCart: () => {},
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen]  = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartQty, setCartQty] = useState(0)

    useEffect(() => {
        const totalInCart = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartQty(totalInCart)
    }, [cartItems])
   
    const addItemToCart = (productToAdd) => {
        
            setCartItems(addCartItem(cartItems, productToAdd))
    }

    
  

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartQty, setCartQty }
    return (
        <CartContext.Provider value = {value}> {children} </CartContext.Provider>
    )
}