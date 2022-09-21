import React from 'react'
import { Image } from 'react-bootstrap';
import BannerImage from "../../../product-img/BannerImage.jpg";
import "./Banner.css";

const Banner = () => {

    const bannerStyle = {
        width: '100%',
        height: '100%',
    }
  return (
    <div className="banner">
        <Image src= {BannerImage} style={bannerStyle} />
    </div>
  )
}

export default Banner
