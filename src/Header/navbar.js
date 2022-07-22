import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/Img/logo.jpg'
import axios from 'axios';

const Navbars = () => {

    const [name,setName]=useState("rachit")
    const [password,setPassword]=useState("rachitpassword")
    
    useEffect(()=>{

        axios.get('https://railtrip.herokuapp.com/api/v1/users')
        .then(res => {
          const persons = res.data;
          console.log("data",res.data)
          // setName(res.data[0].name)
          // setPassword(res.data[0].password)

        })

        

        
    },[])



  return (
    <div>

    <>
      
      <br />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Trip Banao
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>

{name}
<br></br>
{password}
    </div>
  )
}

export default Navbars
