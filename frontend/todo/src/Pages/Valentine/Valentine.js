import React, { useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {notifyHappyValentine,valentineToast,notifyNo,toastBucket, notifyYes} from '../../components/Success/Success'
import Clipboard from '../../components/Clipboard/Clipboard';
import { useNavigate } from 'react-router-dom';

const BASE_URL='http://localhost:8000/send-link/'


export default function Valentine() {
  const navigate = useNavigate();
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
      const {first_name,email,admirer,image,speak_from_heart} = userdetails

      if(!first_name || !email || !admirer || !image || !speak_from_heart){
        notifyNo('Please provide all details')
      } else{
        
        const {data:{image,link}} = await axios.post(BASE_URL, userdetails)

        if(image || link){
          setUserData({
            ...userData,
            image,
            admirerLink:link
          })
  
          notifyHappyValentine('❤️ Happy valentine!')
  
          setUserDetails({
            ...userdetails,
            first_name: '',
            email: '',
            admirer: '',
            image:'',
            speak_from_heart:''
          })
        }
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
    catch (error){
      notifyNo('Something went please try again')
      setUserDetails({
        ...userdetails,
        first_name: '',
        email: '',
        admirer: '',
        image:'',
        speak_from_heart:''
      })
    }
  };

  const handleChange = (e) => {
     setUserDetails({
      ...userdetails,
      [e.target.name]: e.target.value 
    });
  };
  const userdata = {
    admirerLink: 'https://google.com',
  };
 
  return (
    <div className='valentine-container'>
      <button onClick={()=>navigate('/valentine/documentation')} className='docs-v'>FOR INFO ON USAGE CLICK HERE</button>

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

          <textarea
          placeholder="provide message"
          value={userdetails.speak_from_heart}
          className='admirer'
          name='speak_from_heart'
          onChange={handleChange}
        ></textarea>

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
    {valentineToast}
    {toastBucket}
  </div>

   <div>
   {
      // userData.admirerLink
      true
       ?( 
      <>
            
              <button onClick={()=>{
                notifyYes('Copied Successfully')
                 
                }} className='link'>
              <Clipboard linkText={userData.admirerLink} />
              </button>
      </>
      ) : (
        null
      )
      
    } 
  </div>   

    </div>
  );
}
