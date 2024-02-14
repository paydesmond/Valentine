import React from 'react';
import './FrontDocs.css'; // Import CSS file here
import {  useNavigate } from 'react-router-dom';

const FrontDocs = () => {
    const navigate = useNavigate()
  return (
    <div className='docs-main-container'>
      <div className='docs-container'>
        <h2>Overview</h2>
        <p>The front page of the application allows users to access their messages and ask someone out. It presents two main sections: "CHECK OUT YOUR MESSAGE VIA ID" and "ASK HIM / HER OUT".</p>

        <h2>How to Use</h2>
        <h3>Checking Your Message</h3>
        <ol>
          <li>Click on "CHECK OUT YOUR MESSAGE VIA ID" link.</li>
          <li>If prompted, enter your ID in the provided input field.</li>
          <li>Click the "GO" button to proceed.</li>
          <li>You will be redirected to view your message.</li>
        </ol>

        <h3>Asking Someone Out</h3>
        <ol>
          <li>Click on the "ASK HIM / HER OUT" link.</li>
          <li>You will be redirected to a page where you can ask your crush out.</li>
        </ol>

        <h2>Notes</h2>
        <ul>
          <li>Ensure you have your ID ready to check your message.</li>
          <li>Make sure to provide a valid ID when prompted.</li>
          <li>If you encounter any issues, a notification will be displayed.</li>
          <li><button className='docs-btn' onClick={()=>navigate('/')}>Click here to begin</button></li>
        </ul>
      </div>
    </div>
  );
};

export default FrontDocs;
