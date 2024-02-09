import React,{useState} from 'react'
const image1=require('C:/Users/KUMI/Desktop/frontend/todo/src/components/canvas.jpg')
function Asking() {
  const [answer,setAnswer]=useState('')
  return (
    <div style={{
        flex:1,
        // display:'flex',
        // flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }}
    className='bg-pink-100 flex-1'
    >
      <span className=' flex-row mt-5'>
        <div className='flex items-center justify-center text-2xl font-bold text-white'>Roses are Red,Violets are blue,love is in the sky</div>
        <div className='text-white font-bold font-sans'>Would You be my valentine?💕</div>
        <button className='mt-4 bg-green-600 text-white rounded-lg p-1' onClick={()=>{setAnswer('Yes')}}>Yes</button>
        <button className='mt-4 bg-red-600 text-white rounded-lg p-1'>Big No</button>
      </span>
      <div>
      <img src={image1} alt='valentine ' className='h-[100%] w-[100%]'></img>
      </div>
      {
        answer &&(
          <div> <h2>Yah!! you accepted the proposal</h2></div>
        )
      }
      <div className='bottom-0 absolute z-1 items-center justify-center bg-red-600 w-[100%] flex'>From NCK Studio With Love{new Date().getFullYear()}</div>
    </div>
  )
}

export default Asking