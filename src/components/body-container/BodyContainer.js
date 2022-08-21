import React from "react";
import Navbar from "../navbar/Navbar";
// import {Marketing} from "./marketing/Marketing";
// import {Strategy} from "./strategy/Strategy";
// import {Sales} from "./sales/Sales";
// import {Support} from "./support/Support";
// import {Service} from "./service/Service";
// import {Inventory} from "./inventory/Inventory";
import Analysis from "./analysis/Analysis";
// import {Settings} from "./settings/Settings";


const BodyContainer = () => {
    return(
        <div className="body_container">
            <Navbar />
            {/* <Marketing />
            <Strategy />
            <Sales />
            <Support />
            <Service />
            <Inventory />*/}
            <Analysis />
            {/* <Settings />  */}
        </div>
    )
}

export default BodyContainer;