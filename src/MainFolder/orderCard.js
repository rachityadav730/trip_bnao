import React from 'react'
import Card from 'react-bootstrap/Card';

const orderCard = (props) => {
  return (
    <div style={{ }}>
        <a>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.src} style={{width:"286px",height:"180px"}} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.content}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

          
        </a>
     </div>
  )
}

export default orderCard
