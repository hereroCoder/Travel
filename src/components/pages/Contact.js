import { useState } from 'react';
import "./styles/Contact.css";

function Contact() {
  const [submitValue, setSubmitValue] = useState('Send');
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Avoid spamming buttons
    if (submitValue !== 'Send') {
      return;
    }

    let valid = true;
    Object.values(inputs).forEach((value) => {
      if (!value) {
        valid = false;
      }
    });

    if (!valid) {
  
   
    } else {
      setSubmitValue('Sending...');
      
      setTimeout(() => {
       
        setTimeout(() => {
          
          setSubmitValue('Thank you :)');
         
        }, 1000);
        setTimeout(() => {
        
          setInputs({
            name: '',
            email: '',
            message: ''
          });
          setSubmitValue('Send');
        }, 4000);
      }, 2000);
    }
  };

  return (
    <div id="contact-form">
      <h1 className='title-c'>Contact</h1>
      <form id="contact" name="contact" acceptCharset="utf-8" onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={inputs.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={inputs.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Message</span>
          <textarea
            name="message"
            placeholder="Message"
            value={inputs.message}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <input name="submit" type="submit" value={submitValue} disabled={!isValid} />
      </form>
    </div>
  );
}

export default Contact;
