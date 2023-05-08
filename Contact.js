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
      // Invalid inputs animation
      // You can add animation libraries like React Spring for smoother animations
      // Example: formRef.current.animate({ left: '-3em' }, 50).animate({ left: '3em' }, 100).animate({ left: '0' }, 50);
    } else {
      setSubmitValue('Sending...');
      // Simulate AJAX response
      setTimeout(() => {
        // Step 1: Slide labels and inputs when AJAX responds with success
        // No animation for AJAX failure yet
        // You can add animation libraries like React Spring for smoother animations
        // Example: formRef.current.find('label').animate({ left: '100%' }, 500).animate({ opacity: '0' }, 500);
        setTimeout(() => {
          // Step 2: Show thank you message after Step 1
          setSubmitValue('Thank you :)');
          // You can add additional actions here after successful submission
        }, 1000);
        setTimeout(() => {
          // Step 3: Reset form after Step 2
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
      <h2>Contact</h2>
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
