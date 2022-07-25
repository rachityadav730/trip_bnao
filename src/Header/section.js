import React from 'react'
import background from '../Assets/Img/background.avif'

const Section = () => {
  return (
    <div style={{width:"100%",height:"400px"}}>
        <div style={{backgroundImage:`url(${background})`,width:"100%",height:"100%"}}></div>
    </div>
  )
}

export default Section
