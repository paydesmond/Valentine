import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate();
  return (
    <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'50vh',
        flexDirection:'column'
    }}>
    
    
     <h1>Not found</h1>
     <button 
     style={{
        textDecoration:'underline'
     }}
     onClick={()=>navigate('/valentine')}> Click here to go to homepage</button>
    </div>
  )
}

export default Notfound