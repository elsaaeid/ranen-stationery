import React from 'react';
import "./Navbar.css";
import {Row, Col} from "react-bootstrap";
import SearchBar from './SearchBar'
import CartIcon from "./CartIcon";
import {BiLogIn} from "react-icons/bi"
import { NavLink } from "react-router-dom";

const Navbar = ()=> {
 

    return (
        <Row className='navbar d-flex flex-row align-items-end'>
            <Col xs={12} sm={12} md={4} lg={4} className='nav-center d-flex justify-around flex-row align-items-center'>
                <CartIcon />
                <NavLink to='/login'>
                    <BiLogIn className="cursor-pointer login-icon" />
                </NavLink>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8} className="nav-center d-flex justify-end align-items-center"> 
                <SearchBar placeholder="Search here..."></SearchBar>
            </Col>
        </Row>
    )
}

export default Navbar;
