import React from 'react'
import OrderCard from './orderCard'
import Img1 from '../Assets/Img/img1.avif'
import Img2 from '../Assets/Img/img2.avif'
import Img3 from '../Assets/Img/img3.avif'


const ordertype = () => {
  return (
  

        <div style={{width:"100%",height:"400px"}}>

            <div style={{width:"100%",height:"250px",padding:"20px",display:"flex" ,justifyContent:"space-around"}}>
                <div style={{border:"1px solid black",borderRadius:"5px" }}>
            <OrderCard name={"order online"} content={"stay home and order from doorstep"} src ={Img1} />
            </div>
            <div style={{border:"1px solid black",borderRadius:"5px"}}>

            <OrderCard name={"Dining"} content={"View the city's favourite dining venues"} src ={Img2} />
            </div>
            <div style={{border:"1px solid black",borderRadius:"5px"}}>

            <OrderCard name={"Nightlife and Clubs"} content={"Explore the city’s top nightlife outlets"} src ={Img3} />
            </div>
            </div>
      
        </div>
     
     

  )
}

export default ordertype

