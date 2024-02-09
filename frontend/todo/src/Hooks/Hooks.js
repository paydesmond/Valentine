import axios from 'axios';
const BASE_URL='http://localhost:8000/send-link/';

export const sendData= async (userdetails)=>{
    console.log(userdetails)
    try{
      const res = await axios.post(BASE_URL,userdetails)
      console.log(res.data)
    }
    catch (E){
        console.log(E)
    }
  
}