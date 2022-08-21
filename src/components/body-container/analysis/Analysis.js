import React from 'react';
import {AiFillTag, AiOutlineArrowDown, AiOutlineArrowUp, AiFillExperiment, AiFillDollarCircle} from 'react-icons/ai';
import "./Analysis.css";

function Analysis() {
    return (
        <section>
            <div className='analysis color'>
                <div className='design'>
                    <div className='logo'>
                        <AiFillTag />
                    </div>
                    <div className='content'>
                        <h5>$142,543,765</h5>
                    </div>
                </div>
                <div className='total'>
                    <h6>Total Sales</h6>
                    <span className='t'>+18%</span>
                    <AiOutlineArrowUp className='svg' />
                </div>
            </div>
            <div className='analysis color'>
                <div className='design'>
                    <div className='logo'>
                        <AiFillExperiment />
                    </div>
                    <div className='content'>
                        <h5>$142,543,346</h5>
                    </div>
                </div>
                <div className='total'>
                    <h6>Total Expenses</h6>
                    <span className='t'>+20%</span>
                    <AiOutlineArrowDown className='svg' />
                </div>
            </div>
            <div className='analysis color'>
                <div className='design'>
                    <div className='logo'>
                        <AiFillDollarCircle />
                    </div>
                    <div className='content'>
                        <h5>$142,543,807</h5>
                    </div>
                </div>
                <div className='total'>
                    <h6>Total Revenue</h6>
                    <span className='t'>+25%</span>
                    <AiOutlineArrowDown className='svg' />
                </div>
            </div>
        </section>
    )
}

export default Analysis
