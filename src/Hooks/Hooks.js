import axios from 'axios';
import { notifyNo } from '../components/Success/Success';
import { useState } from 'react';
const BASE_URL='http://localhost:8000/send-link/';

export const sendData= async (userdetails)=>{
    try{
      const {data} = await axios.post(BASE_URL,userdetails)
    }
    catch (error){
      notifyNo('Something went please try again')
    }

}
// https://askcrushout.onrender.com/apiperson/


export const fetchAdmirerData = async(answer)=>{
  try {
    const {id} = answer
    const {data} = await axios.get(`https://askcrushout.onrender.com/apiperson/${43041}`)

    console.log('insidehooks',data)
    return data

  } catch (error) {
    notifyNo('Something went please try again')
  }

}

export const postResult = async(answer)=>{
try {
   const {id} = answer
   await axios.post(`http://localhost:8000/message/${id}`)
} catch (error) {
  notifyNo('Something went please try again')
}
}