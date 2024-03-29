import axios from 'axios';
import { notifyNo } from '../components/Success/Success';

const BASE_URL='https://askcrushout.onrender.com/api/send-link/';

export const sendData= async (userdetails)=>{
    try{
      const {data} = await axios.post(BASE_URL,userdetails)
    }
    catch (error){
      notifyNo('Something went please try again')
    }

}

export const fetchAdmirerData = async({id})=>{
  try {

    const {data} = await axios.get(`https://askcrushout.onrender.com/api/person/${id}`)

    return data

  } catch (error) {
    notifyNo('Something went please try again')
  }

}

export const postResult = async ({ id, answer }) => {
  try {
    const { data } = await axios.post(`https://askcrushout.onrender.com/api/asking/${id}`, { message: answer });
  } catch (error) {
    notifyNo('Something went wrong. Please try again.');
  }
};