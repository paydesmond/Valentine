import React,{useEffect, useState} from 'react'
import './Asking.css';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {fetchAdmirerData,postResult} from '../../Hooks/Hooks'
import {notifyNo,notifyYes,toastBucket} from '../../components/Success/Success'
import { useDispatch,useSelector } from 'react-redux';


function Asking() {
  const [answer,setAnswer] = useState({
    id: '',
    answer:''
   });

  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate()
  const [userDetails,setUserDetails] = useState(null)

 const userData = useSelector(state=>state.id.userdata)
    


  useEffect(()=>{
    const fetchData = async()=>{
      const response = await fetchAdmirerData(userData)
      setUserDetails(response)
    }
    fetchData()
  },[userData])

  const handleDisableButton = () => {
    setButtonDisabled(true);
  };

  const navigateToHomePage = () => {
    setTimeout(()=>{
     navigate('/')
   },5000)
 }

 const handleOptionYes = async () => {
  const updatedAnswer = {
    ...answer,
    id: userDetails.id,
    answer: 'Yes'
  };
  setAnswer(updatedAnswer);
  handleDisableButton();
  notifyYes('❤️ You have accepted the proposal');
  await postResult(updatedAnswer);
  navigateToHomePage();
};

const handleOptionNo = async () => {
  const updatedAnswer = {
    ...answer,
    id: userDetails.id,
    answer: 'No'
  };
  setAnswer(updatedAnswer);
  handleDisableButton();
  notifyNo('❤️ You have declined the proposal');
  await postResult(updatedAnswer);
  navigateToHomePage();
};

  const alternativeName  = {
    name:'Name here',
    image: 'Image here',
    speak_from_heart:'Message here'
  }

const image ='https://th.bing.com/th/id/R.47cecf6ce91d73af7900067efeaacb63?rik=%2btKMy%2fBRVLblKA&pid=ImgRaw&r=0';

  return (
    <div className='asking-container'>
      
       {/* <img className='image' src={userDetails ? userDetails.image : image} alt='image'/>   */}

        <div className='ask-name'>{userDetails ? 
        userDetails.first_name : alternativeName.name}</div>

      <div className='random-love-quote'>
        <div className='love-quote'>{userDetails ? 
        userDetails.speak_from_heart : alternativeName.speak_from_heart}</div>
      </div>

      <div className='quote'>

        <div className='quote-holder'>
         <div>Would You be my valentine?💕</div>
        </div>

       <div className='btn-container'> 

          <button 
              className='btn-yes' 
              onClick={async()=>{
                handleOptionYes()
              }}
              disabled={isButtonDisabled}
          >Yes
          </button>

           <button 
           onClick={async()=>{
            handleOptionNo()
          }}
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