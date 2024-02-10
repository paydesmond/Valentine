import React, { useState } from 'react';
import { sendData } from '../../Hooks/Hooks';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';



export default function Valentine() {
  const [userdetails, setUserDetails] = useState({
    name: '',
    email: '',
    admirer: '',
    imageFile:''
  });

  const handleSubmit = async (userdetails) => {
    notify()
    setUserDetails({
      ...userdetails,
      name: '',
      email: '',
      admirer: '',
      imageFile:''
    })
    await sendData(userdetails);
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
          value={userdetails.name}
          name='name'
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

        <label className='image-label' htmlFor='image'>Add your image here</label>
         <input 
         type="file" 
         name="imageFile" 
         accept="image/*"
         className='image-input'
         value={userdetails.imageFile}
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
      <div className='url-link'>
        <div className='link'>Desmond</div>
      </div>}
    </div>
  );
}
