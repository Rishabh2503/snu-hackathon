import React,{useEffect, useState} from "react";
import "..//../Styles/Warehouse.css"
import SS from "..//../assets/images/ss2.png";
import Preloader from '../Section/Preloader';
import logo from "..//../assets/images/logo.png"
import Warehousecard from "../Section/Warehousecard";
import w1 from "..//../assets/images/w1.jpg"
import w2 from "..//../assets/images/w2.jpg"
import w3 from "..//../assets/images/w3.jpg"
import { Link } from "react-router-dom";
const Warehouses =() => {
  const[counter,setCounter]=useState(3)
  useEffect(()=>{
      const timer = 
      counter > 0 && setInterval(() => setCounter(counter-1),1000);
      return() => clearInterval(timer);
  })

  return (
      <>
      {(counter!==0)?(<Preloader/>):
     ( <>
      <Link to="/home"><img alt="logo" src={logo} /></Link>
      <div className='first'>
        <h1>Warehouses</h1>
      </div>
      <hr
   style={{
   background: "black",
   height: "3px",
   border: "none",
   marginTop:"-2rem",
   }}
/>
    <div className='second'>
    <img src={SS} alt="react logo" />
    </div>

    <div className="Wcard">
    <Warehousecard fname="Warehouse1"  detailw="Estancia IT Park,
Vallancherry Village Chengalpattu,
Tamilnadu,India 603202
kartik@gmail.com" productimg={w1}/>    
    <Warehousecard  fname="Warehouse2" detailw="Parv IT Park,
Vallancherry Village Chengalpattu,
US  94588
rishabh@gmail.com" productimg={w2}/> 
    <Warehousecard  fname="Warehouse3" detailw="138 Civil line
Singapore,Singapore,
55566 Chowk
sarthak@gmail.com" productimg={w3}/> 

    </div>

      </>
      )
}
      </>
        )
}

export default Warehouses;

