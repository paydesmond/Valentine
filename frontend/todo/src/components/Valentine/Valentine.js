import React, { useState,useEffect} from 'react';
import { sendData } from '../../Hooks/Hooks';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const BASE_URL='http://localhost:8000/send-link/'


export default function Valentine() {
  const [userData,setUserData]=useState({
    image:'',
    admirerLink:''
  })




  const [userdetails, setUserDetails] = useState({
    first_name: '',
    email: '',
    admirer: '',
    image:'',
    speak_from_heart:''
  });

  const handleSubmit = async (userdetails) => {
    try{
      const {data} = await axios.post(BASE_URL, userdetails)
      console.log(data)
      const {image,link} = data
      setUserData({
        ...userData,
        image,
        admirerLink:link
      })

      if(data){
        notify()
        setUserDetails({
          ...userdetails,
          first_name: '',
          email: '',
          admirer: '',
          image:'',
          speak_from_heart:''
        })
      }
      setUserDetails({
        ...userdetails,
        first_name: '',
        email: '',
        admirer: '',
        image:'',
        speak_from_heart:''
      })
    }
    catch (e){
      console.log(e)
    }
  };

  const handleChange = (e) => {
    
    setUserDetails({
      ...userdetails,
      [e.target.name]: e.target.value 
    });
  };

 

  const notify= ()=>{
    toast.success('❤️ Happy valentine!', {
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
    <div className='valentine-container'>
      <h1 className='ask-her-out'>ASK HIM/HER OUT</h1>

      <div className='valentine-ask-out'>
        <input
          placeholder='provide first name'
          className='name'
          value={userdetails.first_name}
          name='first_name'
          onChange={handleChange}
        />

        <input
          placeholder='provide email'
          className='email'
          name='email'
          value={userdetails.email}
          onChange={handleChange}
        />

        <input
          placeholder="provide admirer's name"
          value={userdetails.admirer}
          className='admirer'
          name='admirer'
          onChange={handleChange}
        />

          <input
          placeholder="provide message"
          value={userdetails.speak_from_heart}
          className='admirer'
          name='speak_from_heart'
          onChange={handleChange}
        />

        <label className='image-label' htmlFor='image'>Add your image here</label>
         <input 
         type="file" 
         name="image" 
         accept="image/*"
         className='image-input'
         value={userdetails.image}
         onChange={handleChange}
         />



        <button className='btn' onClick={() => {
           handleSubmit(userdetails)
        }
          }>
          SUBMIT
        </button>
      </div>
  <div className='toast'>
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
    {
      userData&&( 
        <div className='url-link'>
        <div className='link'>{userData.admirerLink}</div>
      </div>
      )
      
      }    

    </div>
  );
}
