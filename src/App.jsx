

import React, {useState} from 'react'
import './App.css'
import { Button,TextField } from '@mui/material';

function App() {

  const [amount,setAmount]=useState(0)
  const [year,setYear]=useState(0)
  const [rate,setRate]=useState(0)

  const [interest,setInterest]=useState(0)

  const Calculate=(e)=>{
    const output=(amount*year*rate/100)
    console.log(output);
    setInterest(output)
    
  }

  const Reset=(e)=>{
    setAmount(0)
    setYear(0)
    setRate(0)
    setInterest(0)
  }

  return (
    <>
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Simple-Interest-Calculator</h1>
          <p>Calculate your simple interest with us</p>
        </div>
        <div className="total">
          <h2>&#8377;{interest}</h2>
          <p>Your Total Interest</p>
        </div>
        <div className="form">
          <form action="" className="input">
          <TextField className='feild' id="standard-basic" label="Amount" variant="outlined" value={amount||""} onChange={(e)=>setAmount(e.target.value)} />
          <TextField className='feild' id="standard-basic" label="Year" variant="outlined" value={year||""} onChange={(e)=>setYear(e.target.value)} />
          <TextField className='feild' id="standard-basic" label="Rate of Interest" variant="outlined" value={rate||""} onChange={(e)=>setRate(e.target.value)} />
          </form>
        </div>
        <div className="button">
        <Button style={{backgroundColor:"bisque", color:"black"}} variant="contained" onClick={e=>Reset(e)}>Reset</Button>
        <Button style={{backgroundColor:"bisque", color:"black"}} variant="contained" onClick={e=>Calculate(e)}>Calculate</Button>
        </div>
      </div>
    </div>

    </>//react fragments<></>
  )
}

export default App
