import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "../pages/home/Home";
import Cart from "../pages/Cart/Cart";
import Pens from "../pages/pens/Pens";
import Discount from "../pages/discount/Discount";
import CommercialBrands from "../pages/commercial-brands/CommercialBrands";
import Game from "../pages/games/Game";
import ArtistTools from "../pages/artist-tools/ArtistTools";
import SchoolBags from "../pages/school-bags/SchoolBags";
import {Login} from "./login/Login";
import {Reset} from "./password-reset/Reset"; 

const RoutesContainer = ({cartItems, handleAddProduct, handleRemoveProduct, ProductsDataHome, ProductsDataGame, ProductsDataPen, ProductsDataDiscount, ProductsDataBrands, ProductsDataBags, ProductsDataArts}) => {
    return (
        <div>
            <Routes>
              <Route exact path='/reset' element={<Reset />}></Route>
              <Route exact path='/login' element={<Login />}></Route>
              <Route exact path='/cart' element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />}></Route>
              <Route exact path='/' element={<Home ProductsDataHome={ProductsDataHome} handleAddProduct={handleAddProduct} />}></Route>
              <Route exact path='/:id' element={<Home ProductsDataHome={ProductsDataHome} handleAddProduct={handleAddProduct} />}></Route>
              <Route path='/game' element={<Game ProductsDataGame={ProductsDataGame} handleAddProduct={handleAddProduct} />}></Route>
              <Route path='/artistTools' element={<ArtistTools ProductsDataArts={ProductsDataArts} handleAddProduct={handleAddProduct} />}></Route>
              <Route path='/pens' element={<Pens ProductsDataPen={ProductsDataPen} handleAddProduct={handleAddProduct} />}></Route>
              <Route path='/schoolBags' element={<SchoolBags ProductsDataBags={ProductsDataBags} handleAddProduct={handleAddProduct} />}> </Route>
              <Route path='/discount' element={<Discount ProductsDataDiscount={ProductsDataDiscount} handleAddProduct={handleAddProduct} />}></Route>
              <Route path='/commercialBrands' element={<CommercialBrands ProductsDataBrands={ProductsDataBrands} handleAddProduct={handleAddProduct} />}></Route>
        </Routes>
        </div>
    )
}

export default RoutesContainer
