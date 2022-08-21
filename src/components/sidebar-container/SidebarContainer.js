import React, {useState} from "react";
import {motion} from "framer-motion";
import {MdOutlineDashboardCustomize} from "react-icons/md";
import { GiBugleCall } from 'react-icons/gi';
import { GiJerusalemCross } from 'react-icons/gi';
import { FiTrendingUp } from 'react-icons/fi';
import { BiSupport } from 'react-icons/bi';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { BsBorderStyle } from 'react-icons/bs';
import { BiAnalyse } from 'react-icons/bi';
import {FiSettings} from 'react-icons/fi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {Item} from "./Item";
import "./sidebarContainer.css";

const SidebarContainer = () => {
  const [open, setOpen] = useState(true)
  //for collapsimg sidebar
  const handleToggle = ()=> {
    setOpen(!open)
  };

  const sideContainerVariants = {
    true :{
      width: '15rem',
    },
    false:{
      width: '4rem',
      transition: {
        delay: 0.6
      }
    }
  };
  const sidebarVariants = {
    true :{
      width: '14rem'
    },
    false:{
      width: '3rem',
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
      with: '2rem',
      marginTop: '4rem',
      transition: {
        delay: 0.6
      }
    }
  };

  const h3Variants = {
    true: {
      fontSize: '30px',
    },
    false: {
      fontSize: '15px',
      transition: {
        delay: 0.6
      }
    }
   };

   const toggleVaraints = {
    true: {
      left: '12rem',
    },
    false: {
      left: '1rem',
      transition: {
        delay: 0.6
      }
    }
   };
    return(
      <motion.div 
      data-Open = {open}
      variants = {sideContainerVariants}
      initial={`${open}`}
      animate={`${open}`}
      className="sidebar_container">
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
          variants={toggleVaraints}
          onClick={handleToggle}          
        className='toggle'>
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
            ><span>C</span>RM</motion.h3>
          </motion.div>
        {/* groups */}
            <div className='groups'>
              <div className='group'>
              <Item icon={<MdOutlineDashboardCustomize/>} name="Dashboard" />
                <Item icon={<GiBugleCall/>} name="Marketing" />
                <Item icon={<GiJerusalemCross/>} name="Strategy" />
                <Item icon={<FiTrendingUp/>} name="Sales" />
                <Item icon={<BiSupport/>} name="Support" />
                <Item icon={<FaHandHoldingHeart/>} name="Service" />
                <Item icon={<BsBorderStyle/>} name="Inventory" />
                <Item icon={<BiAnalyse/>} name="Analysis" />
                <Item icon={<FiSettings/>} name="Settings" />
              </div>
            </div>
        </motion.div>
      </motion.div>
    )
}
export default SidebarContainer;