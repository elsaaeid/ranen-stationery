import Carousel from 'react-bootstrap/Carousel';
import body1 from "../../../product-img/body1.png";
import body2 from "../../../product-img/body2.png";
import body3 from "../../../product-img/body3.png";
import "./Swiper.css";


function Swiper() {
    const swiperImg ={
      width: '100%',
      height: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
    const CarouselStyle ={
        width: '80%',
        height: '40rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        zIndex: '0'
     }
  return (
    <Carousel style={CarouselStyle}>
      <Carousel.Item>
        <img
         style={swiperImg}
          className="d-block"
          src={body1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
         style={swiperImg}
          className="d-block"
          src={body2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={swiperImg}
          className="d-block"
          src={body3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Swiper;