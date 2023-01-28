import React from 'react'
import "..//../Styles/warehousecard.css"
const Warehousecard = (props) => {
  return (
    <>
          <div class="card">
  <div class="card-img"></div>
  <div class="card-info">
    <p class="text-title">{props.fname} </p>
    <p class="text-body">{props.detailw}</p>
  </div>
  <div class="card-footer">
 <button className='warebutton'>INPUT</button>
</div></div>
    </>
  )
}

export default Warehousecard
