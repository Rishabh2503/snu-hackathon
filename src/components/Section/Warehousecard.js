import React from 'react'
import { useNavigate } from 'react-router-dom'
import "..//../Styles/warehousecard.css"
const Warehousecard = (props) => {
    let navigate=useNavigate();
    const handleInput =(e) =>{
        e.preventDefault();
        navigate('/Inputwarehouse');
    } 
  return (
    <>
          <div class="card">
  <div class="card-img"></div>
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
