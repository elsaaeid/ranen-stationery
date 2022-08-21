import React from 'react';
import {BiSearch} from "react-icons/bi";
import {AiOutlineCalendar} from "react-icons/ai";
import {AiOutlineBell} from "react-icons/ai";
import {AiOutlineCaretDown} from "react-icons/ai";
import Avatar from "../../assets/avatar.png";
import "./Navbar.css";



const Navbar = ()=> {
    return (
        <div className='navbar'>
            <div className='title'><h1>Dashboard</h1></div>
            <div className='notification'>
                <div className='date'>
                    <AiOutlineCalendar />
                    <span className='span-nav'>Feb 20, 2022</span>
                </div>
                <div className='icon-nav'>
                    <BiSearch />
                    <span className='span-nav'>|</span>
                    <AiOutlineBell />
                    <span className='span-nav'>|</span>
                    <div className='image'>
                        <img src={Avatar} alt="account" />
                    </div>
                </div>
                <AiOutlineCaretDown />
            </div>
        </div>
    )
}

export default Navbar;
