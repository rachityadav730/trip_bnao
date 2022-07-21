import React,{useState,useEffect} from 'react'

const Main = () => {
  const [name,setname] =useState(" ")
  const [password,setpassword] =useState(" ")

  let changename =(e)=>{
    console.log("name",e)
    setname(e.target.value)
  }
  let changepassword =(e)=>{
    console.log()
    setpassword(e.target.value)
  }

  let onsubmit =()=>{
    console.log("values",name,password)
  }
  return (
    <div>
      <h1>First deploy</h1>

      <form onSubmit={onsubmit}>
        <label>name
        <input type="text" value ={name} onChange={changename}/>
        </label>
        <br>
        </br>
        <label>password
        <input type="text" value ={password} onChange={changepassword}/>
        </label>
        <button >submit</button>
      </form>
    </div>
  )
}

export default Main
