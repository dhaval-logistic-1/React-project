import React, { useState } from 'react'
import Chaild from './Chaild';

const Perente = () => {

const [name, setName] = useState("");
const [number, setNumber] = useState(0);

console.log("Perenet Re-render");


    
  return (
    <>
    <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)}/>
    <input type="number" name="number" id="number" value={number} onChange={e => setNumber(e.target.value)}/>
    
    <Chaild name={name}/>
    
    </>
  )
}

export default Perente