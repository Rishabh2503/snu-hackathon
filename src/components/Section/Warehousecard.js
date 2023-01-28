import React from 'react'
import { useNavigate } from 'react-router-dom'
import "..//../Styles/warehousecard.css"
import w1 from "..//../assets/images/w1.jpg"
import w2 from "..//../assets/images/w2.jpg"
import w3 from "..//../assets/images/w3.jpg"
const Warehousecard = (props) => {
    let navigate=useNavigate();
    const handleInput =(e) =>{
        e.preventDefault();
        navigate('/Inputwarehouse');
    } 
  return (
    <>
          <div class="card">
  <div class="card-img"><img alt="photo" src={props.productimg} style={{width:"150px" ,height:"120px"}} /></div>
  <div class="card-info">
    <p class="text-title">{props.fname} </p>
    <p class="text-body">{props.detailw}</p>
  </div>
  <div class="card-footer">
 <button className='warebutton' onClick={handleInput}>INPUT</button>
</div></div>
    </>
  )
}

export default Warehousecard
