import './App.css';
import React, {useState} from "react";
import {motion} from "framer-motion";
import {Item} from "./components/sidebar-container/Item";
import "./components/sidebar-container/sidebarContainer.css";
import { MdKeyboardArrowRight } from 'react-icons/md';
import SidebarData from "./components/sidebar-container/SidebarData";
import { NavLink } from "react-router-dom";// import BodyContainer from "./components/body-container/BodyContainer";
import {BrowserRouter} from 'react-router-dom';
import RoutesContainer from "./components/RoutesContainer";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Carousel from "./components/body-container/carousel/Carousel";
import dataItems from './components/back/Data';


function App() {

  const {ProductsDataHome, ProductsDataGame, ProductsDataPen, ProductsDataDiscount, ProductsDataBrands, ProductsDataBags, ProductsDataArts} = dataItems;
          //cartState
  const [cartItems, setCartItems] = useState([]);

        //ADD PRODUCT
  const handleAddProduct = (product) => {
    const productExit = cartItems.find((item) => item.id === product.id);
    if(productExit){
      setCartItems(cartItems.map((item) => item.id === product.id ? 
      {...productExit, quantity: productExit.quantity + 1}: item)
    );
    }
    else{
      setCartItems([...cartItems, {...product, quantity: + 1}])
    }
  }
        //REMOVE PRODUCT
  const handleRemoveProduct = (product) => {
    const productExit = cartItems.find((item) => item.id === product.id);
    if(productExit.quantity === 1){
      setCartItems(cartItems.filter((item) =>item.id !== product.id));
    }else{
      setCartItems(
        cartItems.map((item) => item.id === product.id ?  
        {...productExit, quantity: productExit.quantity -1} : item)
      );
    }
  }

  
  

 

  
  const [open, setOpen] = useState(false);
  //for collapsing sidebar
  const handleToggle = ()=> {
    setOpen(!open)
  };
  const toggleVariants = {
    true: {
      left: '3rem',
    },
    false: {
      left: '0rem',
      transition: {
        delay: 0.6
      }
    }
   };
  const sideContainerVariants = {
    true :{
      width: '20%',
    },
    false:{
      width: '5%',
      transition: {
        delay: 0.6
      }
    }
  };
  const sidebarVariants = {
    true :{
      width: '90%'
    },
    false:{
      width: '70%',
      transition: {
        delay: 0.6
      }
    }
  };

  const profileVariants ={
    true: {
      with: '4rem',
      marginTop: '1rem'
    },
    false: {
      fontSize: '1rem',
      with: '1rem',
      marginTop: '4rem',
      transition: {
        delay: 0.6
      }
    }
  };

  const h3Variants = {
    true: {
      fontSize: '25px',
    },
    false: {
      fontSize: '15px',
      transition: {
        delay: 0.6
      }
    }
   };
   const spanVariants = {
    true: {
      display: 'flex',
    },
    false: {
      display: 'none',
      transition: {
        delay: 0.6
      }
    }
   };
  const bodyContainerVariants = {
    true :{
      width: '80%',
      left: '0'
    },
  false :{
    width: '95%',
    left: '0',
    transition: {
      delay: 0.6
    }
  }
};
  return (
    <div className="App">
      <BrowserRouter>
        <motion.div className="sidebar_container" 
        data-Open = {open}
        variants = {sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        >
          <motion.div  
        initial={`${open}`}
        animate={`${open}`}
        variants = {sidebarVariants}
          className='sidebar'>
          {/* lines_icon */}
          <motion.div   
          whileHover={{
              scale:1.2,
              rotate:180,
              backgroundColor:"rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3.5px)",
              webkitBackdropFilter:"blur(3.5px)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}
            variants={toggleVariants}
            onClick={handleToggle}          
          className='toggle mt-3'>
            <MdKeyboardArrowRight />
          </motion.div>
            {/* profile */}
            <motion.div className='profile'
            layout
            initial={`${open}`}
            animate={`${open}`}
            variants={profileVariants}
            transition={{duration: 0.4}}
            whileHover= {{
              backgroundColor:"rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(5.5px)",
              webkitBackdropFilter:"blur(5.5px)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              cursor: "pointer"
              }}
            >
              <motion.h3
              variants={h3Variants}
              className="d-flex"
              >
                <span className="focus-profile">R</span>
                <motion.span 
                variants = {spanVariants}
                >anen</motion.span></motion.h3>
            </motion.div>
          {/* groups */}
              <div className='groups'>
                <div className='group'>
                  {SidebarData.map((item, index) =>{
                    return(
                      <NavLink to={item.path} key={index} style={{textDecoration: 'none'}}>
                      <Item icon={item.icon} name={item.name}/>
                      </NavLink>
                    )
                  })}
                </div>
              </div>
          </motion.div>
        </motion.div>
        <motion.div className="body_container"
            data-Open = {open}
            variants = {bodyContainerVariants}
            initial={`${open}`}
            animate={`${open}`}
          >  
          <Navbar /> 
          {/* the Routes container */}
          <RoutesContainer
          cartItems={cartItems}
          handleRemoveProduct={handleRemoveProduct}
          handleAddProduct={handleAddProduct}
           ProductsDataHome={ProductsDataHome}
            ProductsDataGame={ProductsDataGame}
             ProductsDataPen={ProductsDataPen}
              ProductsDataDiscount={ProductsDataDiscount}
               ProductsDataBrands={ProductsDataBrands}
                ProductsDataBags={ProductsDataBags}
                ProductsDataArts={ProductsDataArts} />
          <Carousel />
          <Footer />
        </motion.div>
      </BrowserRouter>
    </div>
  );
}
export default App;