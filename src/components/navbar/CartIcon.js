import React from 'react'
import {FaShoppingCart} from "react-icons/fa";
import { NavLink } from "react-router-dom";// import BodyContainer from "./components/body-container/BodyContainer";



const CartIcon = () => {



 

    return (
        <div className='cart-icon'>
                <span>
                    
                </span>
            <NavLink to='/cart'>
                <span><FaShoppingCart /></span>
            </NavLink>
        </div>
    )
}

export default CartIcon
