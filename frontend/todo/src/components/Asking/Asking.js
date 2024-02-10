import React,{useEffect, useState} from 'react'
import './Asking.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Asking() {
  const [answer,setAnswer] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate()

  const fetchAdmirerData = async()=>{
      const {data} = await axios.get('')
      console.log(data)
  }

  useEffect(()=>{
    
  })

  const handleDisableButton = () => {
    setButtonDisabled(true);
  };


  const handleAnswer = async (answer) => {
    try {
      console.log('Answer', answer);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOptionYes = () => {
    handleAnswer('Yes');
    setAnswer('Yes');
    handleDisableButton()
    notify();
    navigateToHomePage();
  };

  const handleOptionNo = () => {
    handleAnswer('No');
    setAnswer('No');
    handleDisableButton()
    notifyNo();
    navigateToHomePage();
  };

  const handleRandomQuote = async () =>{
    //  const {data} =await axios.post('https://api-ninjas.com/api/quotes')
    //  console.log(data)

    console.log()
  }


  const notifyNo = ()=>{
    toast.error('❤️ You have decline the proposal', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }

  const navigateToHomePage = () => {
     setTimeout(()=>{
      navigate('/valentine')
    },5000)
  }


  const notify= ()=>{
    toast.success('❤️ You have accepted the proposal', {
      position: "top-center",
      autoClose: 4000,
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
      
       <img className='image' width='200px' height='200px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-_G35VUQ2CYarDn1li3-w25wJHqH6P-07xb-Wt2jXwY8tV_3ybTfOfRrOA6kPt2jNrQ&usqp=CAU' alt='image'/>       <div className='ask-name'>name</div>

      {/* <div className='random-love-quote'>
        Something here
      </div> */}
      <div className='quote'>
        <div className=''>Roses are Red,Violets are blue,love is in the sky</div>
        <div className=''>Would You be my valentine?💕</div>

       <div className='btn-container'> 
          <button 
          className='btn-yes' 
          onClick={handleOptionYes}
          disabled={isButtonDisabled}
          >Yes</button>
           <button 
           onClick={handleOptionNo}
           disabled={isButtonDisabled}
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