import React from 'react';
import {AiOutlineBell, AiOutlineCaretDown} from "react-icons/ai";
import Avatar from "../../assets/avatar.png";
import "./Navbar.css";
import {Row, Col} from "react-bootstrap";
import SearchBar from './SearchBar'
import CartIcon from "./CartIcon";

const Navbar = ({cartItems})=> {
 

    return (
        <Row className='navbar'>
            <Col className='content'> 
                <CartIcon cartItems={cartItems} />
                <SearchBar placeholder="Search here..."></SearchBar>
            </Col>
            <Col className='notification'>

                <div className='icon-nav'>
                    <span className='span-nav'>|</span>
                    <AiOutlineBell />
                    <span className='span-nav'>|</span>
                    <div className='image'>
                        <img src={Avatar} alt="account" />
                    </div>
                </div>
                <AiOutlineCaretDown />
            </Col>
        </Row>
    )
}

export default Navbar;
