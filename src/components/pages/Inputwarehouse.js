import React,{useState} from 'react'
import SS from "..//../assets/images/ss2.png";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import logo from "..//../assets/images/logo.png"
const Inputwarehouse = () => {
     let navigate = useNavigate();
    const [productname,SetUserName]=useState("");
    const [Distance,SetUserDistance]=useState("");
    const [countryname,SetCountryname]=useState("");
    const handleSubmit = async (e) => {
      e.preventDefault();
      navigate('/Inputwarehouse');
      SetUserName("");
      SetUserDistance("");
      SetCountryname("");
      console.log(productname,Distance,countryname)
           axios.post("https://warehouse-si59.onrender.com",{
              productname : productname,     
              Distance : Distance,
        countryname:countryname
       })
             .then(result=>{
        console.log(result)
      
       }) 
             .catch(err=>{
              console.log(err)
                        
           }) 
    }
  return (
   <>
   <Link to="/home"><img alt="logo" src={logo}/></Link>
    
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
    <Link to="/home">
    <img src={SS} alt="react logo" />
    </Link>
    
    </div>
    <h1 style={HeaD}>Enter The Details ..!</h1>
    <form style={innerform}>
                <p>
                    <label>Product Name</label><br/>
                    <input
                  type="text"
                  required
                  id="Productname"
                  name="Productname"
                  value={productname}
                  onChange={(e)=>{SetUserName(e.target.value)}}
                />
                </p>
                <p>
                    <label>Countary Name</label><br/>
                    <input
                  type="text"
                  required
                  id="countryname"
                  name="countryname"
                  value={countryname}
                  onChange={(e)=>{SetCountryname(e.target.value)}}
                />
                </p>
                <p>
                    <label>Distance</label><br/>
                    <input
                  type="text"
                  required
                  id="Distance"
                  name="Distance"
                  value={Distance}
                  onChange={(e)=>{SetUserDistance(e.target.value)}}
                />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={handleSubmit}>Register</button>
                </p>
            </form>
   </>
  )
}
const innerform = {
    marginTop : "5%",
    marginLeft : "40%"
}
const HeaD = {
    marginLeft:"39%",
    color:"colar"
}


export default Inputwarehouse
