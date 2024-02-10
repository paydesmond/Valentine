import axios from 'axios';
import { notifyNo } from '../components/Success/Success';
const BASE_URL='http://localhost:8000/send-link/';

export const sendData= async (userdetails)=>{
    try{
      const {data} = await axios.post(BASE_URL,userdetails)
      console.log(data)
    }
    catch (error){
      notifyNo('Something went please try again')
    }
  
}

export const fetchAdmirerData = async(answer)=>{
  try {
    const {id} = answer
    const {data} = await axios.get(`http://localhost:8000/message/${id}`)

    if(data){
    const {id,user,speak_from_heart,admirer,image} = data
  
    const userDetails = {
      id,
      user,
      speak_from_heart,
      admirer,
      image
    }
    return userDetails
  }
  } catch (error) {
    notifyNo('Something went please try again')
  }

}

export const postResult = async(answer)=>{
  const {id} = answer
  console.log('desmond', answer)
//  await axios.post(`http://localhost:8000/message/${answer.id}`)
}