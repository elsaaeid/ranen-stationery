import React from 'react';
import ReactEasySlider from 'react-easy-slider';
import "./Carousel.css";


import item1 from '../../../product-img/item1.png';
import item2 from '../../../product-img/item2.png';
import item3 from '../../../product-img/item3.png';
import item4 from '../../../product-img/item4.png';
import item5 from '../../../product-img/item5.png';
import item6 from '../../../product-img/item6.png';
import item7 from '../../../product-img/item7.png';
import item8 from '../../../product-img/item8.png';



let imageList = [
    {url: item1},
    {url: item2},
    {url: item3},
    {url: item4},
    {url: item5},
    {url: item6},
    {url: item7},
    {url: item8},
];
export default function Carousel() {
    return (
        <div className='container'>
            <h2 style={{color: 'white'}}>explore the best brands</h2>
            <ReactEasySlider imageList={imageList} />
        </div>
    )
}







