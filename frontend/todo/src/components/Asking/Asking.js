import React,{useState} from 'react'
import './Asking.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Asking() {
  const [answer,setAnswer]=useState('');
  

  const notifyNo = ()=>{
    toast.error('❤️ You have decline the proposal', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }


  const notify= ()=>{
    toast.success('❤️ You have accepted the proposal', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }

  return (
    <div className='asking-container'>
      
      <div className='random-love-quote'>
        Something here
      </div>
      <div className='quote'>
        <div className=''>Roses are Red,Violets are blue,love is in the sky</div>
        <div className=''>Would You be my valentine?💕</div>

       <div className='btn-container'> 
          <button 
          className='btn-yes' 
          onClick={()=>{notify()}}
          >Yes</button>
           <button 
           onClick={()=>{notifyNo()}}
           className='btn-no'> No</button></div>
      </div>

      <ToastContainer
     position="top-center"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="light"
     transition='Bounce'
     />
    </div>
  )
}

export default Asking