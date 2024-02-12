import React,{useEffect, useState} from 'react'
import './Asking.css';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {fetchAdmirerData,postResult} from '../../Hooks/Hooks'
import {notifyNo,notifyYes,toastBucket} from '../../components/Success/Success'

function Asking() {
  const [answer,setAnswer] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate()
  const params = useParams()
  const [userDetails,setUserDetails] = useState(null)
  console.log(params)
    
  useEffect(()=>{
    const fetchData = async(params)=>{
      const response = await fetchAdmirerData(params)
      setUserDetails(response)
    }
    fetchData(params)
  },[params])

  const handleDisableButton = () => {
    setButtonDisabled(true);
  };

  const navigateToHomePage = () => {
    setTimeout(()=>{
     navigate('/askcrushout')
   },5000)
 }

  const handleOptionYes = (answer) => {
    setAnswer('Yes');
    postResult(answer)
    handleDisableButton()
    notifyYes('❤️ You have accepted the proposal');
    navigateToHomePage();
  };

  const handleOptionNo = (answer) => {
    setAnswer('No');
    postResult(answer)
    handleDisableButton()
    notifyNo('❤️ You have decline the proposal');
    navigateToHomePage();
  };

  const alternativeName  = {
    name:'Name here',
    image: 'Image here',
    speak_from_heart:'love message here'
  }

const image ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-_G35VUQ2CYarDn1li3-w25wJHqH6P-07xb-Wt2jXwY8tV_3ybTfOfRrOA6kPt2jNrQ&usqp=CAU';

  return (
    <div className='asking-container'>
      
       <img className='image' src={image} alt='image'/>  

        <div className='ask-name'>{userDetails ? 
        userDetails.first_name : alternativeName.name}</div>

      <div className='random-love-quote'>
        <div>{userDetails ? 
        userDetails.speak_from_heart : alternativeName.speak_from_heart}</div>
      </div>

      <div className='quote'>

        <div className='quote-holder'>
        <div>Roses are Red,Violets are blue,love is in the sky</div>
        <div>Would You be my valentine?💕</div>
        </div>

       <div className='btn-container'> 

          <button 
              className='btn-yes' 
              onClick={(answer)=>handleOptionYes(answer)}
              disabled={isButtonDisabled}
          >Yes
          </button>

           <button 
           onClick={(answer)=>handleOptionNo(answer)}
           disabled={isButtonDisabled}
           className='btn-no'> 
           No
          </button>

        </div>
        {toastBucket}
      </div>


    </div>
  )
}

export default Asking