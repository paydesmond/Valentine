import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function Valentine() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [admirer,setAdmirer]=useState('')
//   useEffect(()=>{
//     sendData()
// },[])
  const BASE_URL='http://localhost:8000/send-link/'
  const sendData= async ()=>{
    try{
      const res=await axios.post(BASE_URL,{
        first_name:name,
        admirer:admirer,
        email:email
      })
      console.log(res.data)
    }
    catch (E){
        console.log(E)
    }
  
}

  return (
    <div style={{display:'flex',flexDirection:'column',flex:1}} 
    className='bg-pink-400  items-center justify-center'
    >
        <h1 className='text-3xl font-bold text-white'>#Ask her out</h1>
        <div>

        <input placeholder='provide first name'
          value={name}
          onChange={(e)=>{setName(e.target.value)}}>  
          </input>

          <br></br>

          <input placeholder='provide email'
          className='mt-5'
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}>  
          </input>

          <br></br>

          <input placeholder="provide admirer's name"
          value={admirer}
          onChange={(e)=>{setAdmirer(e.target.value)}}>  
          </input>
          <button className='bg-purple-500 rounded-xl p-1 text-white border-white border'
            onClick={()=>{sendData()}}>
            Submit
          </button>
        </div>
    </div>
  )
}
