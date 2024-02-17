import React from 'react';
import './FrontDocs.css'; // Import CSS file here
import {  useNavigate } from 'react-router-dom';

const FrontDocs = () => {
    const navigate = useNavigate()
  return (
    <div className='docs-main-container'>
      <div className='docs-container-grid'>

      <div className='docs-container'>
         <h2>Overview</h2>
         <p>
          The Valentine app is a simple web application designed to help users express their affection by asking someone out for Valentine's Day. Users can provide their details, including their name, email, admirer's name, and a heartfelt message. Additionally, they can upload an image to personalize their invitation.
          </p>      
      </div>

      <div className='docs-container'>
        <h2>How to Use</h2>
        <h3>Enter Personal Details:</h3>
        <ol>
            <li>Provide your first name in the "provide first name" input field.</li>
            <li>Enter your email address in the "provide email" input field.</li>
            <li>Provide the name of your admirer in the "provide admirer's name" input field.</li>
            <li>Write a heartfelt message in the textarea provided.</li>
        </ol>


        <h3>Submit:</h3>
        <ol>
        <li>Click the "SUBMIT" button to submit your details and generate the invitation link.</li>
        </ol>
      </div>
    
     {/* <div className='docs-container'> 
     <h2>Copy Link:</h2>
        <ul>
        <li>Once the link is generated, it will be displayed on the screen.</li>
            <li>Click the "Copy" button next to the link to copy it to your clipboard.</li>
            <li>You will receive a notification confirming that the link has been copied successfully.</li>
        </ul>
     </div> */}

     <div className='docs-container'> 
     <h2>Share:</h2>
        <ul>
        <li>Share the generated link with your admirer via email, messaging apps, or any other preferred method.</li>
            <li><button className='docs-btn' onClick={()=>navigate('/')}>Click here to begin</button></li>
        </ul>
     </div>
      </div>
    </div>
  );
};

export default FrontDocs;
