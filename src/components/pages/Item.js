import React from 'react'
import "..//../Styles/Item.css"
import aa from "..//../assets/images/aa.jpg";
import logo from "..//../assets/images/logo.png";
function Item() {
  return (
    <>
    <img alt="logo" src={logo} />
    <div className ="head1">
     <div className="head2">
        <h1>Primary Details</h1>
        <hr
         style={{
        background: "black",
        height: "3px",
        border: "none",
       marginTop:"-15px",
        width:"300px",
           }}
/>
        <h3>Item Group Name</h3>
        <h3>Item Type</h3>
        <h3>Style</h3>
        <h3>SKU</h3>
        <h3>Unit</h3>
        <h3>Created Score</h3>
        <h3>Tax</h3>
        <h3>Inventory Account</h3>
     </div>
     <div className="head3">
     <h3>Item Group Name</h3>
        <h3>Item Type</h3>
        <h3>Style</h3>
        <h3>SKU</h3>
        <h3>Unit</h3>
        <h3>Created Score</h3>
        <h3>Tax</h3>
        <h3>Inventory Account</h3>
        </div>
        
        <div className="head4">
        <img src={aa} alt="react logo" /> 
        
        </div>
        <div className='wave3'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="coral" fillOpacity="1" d="M0,128L0,96L1440,96L1440,320L0,320L0,320Z"></path>
</svg>
        </div>
        
        

    

      
    </div>
    </>
  )
}

export default Item
