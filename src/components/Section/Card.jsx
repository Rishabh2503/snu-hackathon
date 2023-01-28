import React from 'react'
import "..//../Styles/card.css"


export default function Card(props) {
  return (
    <>
      <section>
      <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title">{props.contentout}</p>
            <p>Hover Me</p>
        </div>
        <div className="flip-card-back">
            <p className="title">{props.contentin}</p>
        </div>
    </div>
</div>
      </section>
        
    </>
  )
}
