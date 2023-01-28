import React from 'react'
import Navbar from "../Navbar/Navbar"
import "..//../Styles/Home.css"
import Sectionhead from '../Section/Sectionhead'
import Card from '../Section/Card'



export default function HomePage() {
    
    return (
        <>
            <Navbar />
            <Sectionhead />
            <div className='wave'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="coral" fillOpacity="1" d="M0,256L80,240C160,224,320,192,480,202.7C640,213,800,267,960,256C1120,245,1280,171,1360,133.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
</div>
<div className='wave2'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="coral" fillOpacity="1" d="M0,64L48,96C96,128,192,192,288,213.3C384,235,480,213,576,197.3C672,181,768,171,864,160C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
</div>
           <div className='reveal'>
            <h1 className='whychooseus'> Why Choose Us?</h1>
            
            <div className="Cardhome">
                
                <Card contentout="DISPATCH ORDERS FROM CLOSET WAREHOUSE." contentin="Choose the warehouse which is closest to the customer's location while you create a Sales order. This way you can deliver faster, save a lot of time and also cut down the transportation cost."/>
                <Card contentout="TRACK YOUR TRANSFER ORDERS." contentin="Select the specific batch or serial number while transferring an item from one warehouse to another. This way, you can keep a track on the movement of each item without any hassles."/>
                <Card contentout="GENERATE ACCURATE REPORTS." contentin="Find out the volume of items that are shipped in and out from each of your warehouses. Get more insights into each item's sales and purchase trends, in simple steps."/>
            </div>
            </div>
            <div>
            <p className="text-center" style={ FooterStyle }>Designed & coded by Team Cloud</p>
            </div>
        </>
    )
}

window.addEventListener('scroll',reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i=0;i<reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if(revealtop< windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "relative",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}