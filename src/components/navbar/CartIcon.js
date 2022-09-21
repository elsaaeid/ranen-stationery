import React from 'react'
import {FaShoppingCart} from "react-icons/fa";
import { NavLink } from "react-router-dom";// import BodyContainer from "./components/body-container/BodyContainer";


const CartIcon = (props) => {
    return (
        <div className='cart-icon'>
                <span>
                    { props.cartItems.quantity  }
                </span>
            <NavLink to='/cart'>
                <span><FaShoppingCart /></span>
            </NavLink>
        </div>
    )
}

export default CartIcon
