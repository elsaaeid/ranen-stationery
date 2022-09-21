import {BiHomeSmile} from "react-icons/bi";
import { BiGame } from 'react-icons/bi';
import { AiOutlinePieChart } from 'react-icons/ai';
import { FaPencilRuler } from 'react-icons/fa';
import { TbPaperBag } from 'react-icons/tb';
import { TbShoppingCartDiscount } from 'react-icons/tb';
import { SiBrandfolder } from 'react-icons/si';

const SidebarData = [
    {index: 1, icon: <BiHomeSmile/>, name: 'Home', path: '/'},
    {index: 2, icon: <BiGame/>, name: 'Games', path: '/game'},
    {index: 3, icon: <AiOutlinePieChart/>, name: 'Artistic Tools', path: '/artistTools'},
    {index: 4, icon: <FaPencilRuler/>, name: 'pens', path: '/pens'},
    {index: 5, icon: <TbPaperBag/>, name: 'School Bags', path: '/schoolBags'},
    {index: 6, icon: <TbShoppingCartDiscount/>, name: 'Discount', path: '/discount'},
    {index: 7, icon: <SiBrandfolder/>, name: 'Commercial Brands', path: '/commercialBrands'},
  ]
  export default SidebarData;