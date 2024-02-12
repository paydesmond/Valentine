import { useNavigate } from 'react-router-dom';
import './Documentation.css'

const Documentation = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="container">
      <h1>Valentine App Documentation</h1>

      <h2>Overview</h2>
      <p>
        The Valentine app is a simple web application designed to help users express their affection by asking someone out for Valentine's Day. Users can provide their details, including their name, email, admirer's name, and a heartfelt message. Additionally, they can upload an image to personalize their invitation.
      </p>

      <h2>Usage</h2>
      <ol>
        <li><strong>Enter Personal Details:</strong>
          <ul>
            <li>Provide your first name in the "provide first name" input field.</li>
            <li>Enter your email address in the "provide email" input field.</li>
            <li>Provide the name of your admirer in the "provide admirer's name" input field.</li>
            <li>Write a heartfelt message in the textarea provided.</li>
          </ul>
        </li>
        <li><strong>Upload Image:</strong>
          <ul>
            <li>Click on the "Add your image here" label to select an image file from your device.</li>
          </ul>
        </li>
        <li><strong>Submit:</strong>
          <ul>
            <li>Click the "SUBMIT" button to submit your details and generate the invitation link.</li>
          </ul>
        </li>
        <li><strong>Copy Link:</strong>
          <ul>
            <li>Once the link is generated, it will be displayed on the screen.</li>
            <li>Click the "Copy" button next to the link to copy it to your clipboard.</li>
            <li>You will receive a notification confirming that the link has been copied successfully.</li>
          </ul>
        </li>
        <li><strong>Share:</strong>
          <ul>
            <li>Share the generated link with your admirer via email, messaging apps, or any other preferred method.</li>
            <li><button className='docs-btn' onClick={()=>navigate('/')}>Click here to begin</button></li>
          </ul>
        </li>
      </ol>
    </div>

    

    </>
    
  );
}

export default Documentation;
