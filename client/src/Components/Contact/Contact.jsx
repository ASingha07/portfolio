import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import axios from 'axios';
import { toast } from 'react-toastify';

// Create axios instance with base URL
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'
});

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show loading toast
    const loadingToastId = toast.loading('Sending your message...', {
      position: "top-right",
    });

    // Here you can handle the form submission, e.g., send the data to a server or display a success message
    const formData = {
      name,
      email,
      message
    };

    try {
      const response = await api.post('/api/contact', formData);
      if (response.data.success) {
        toast.update(loadingToastId, {
          render: '🎉 Message sent successfully! I will get back to you soon.',
          type: 'success',
          isLoading: false,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        // Clear the form fields after successful submission
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast.update(loadingToastId, {
          render: '❌ Failed to send message. Please try again later.',
          type: 'error',
          isLoading: false,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.update(loadingToastId, {
        render: '⚠️ An error occurred while sending your message. Please try again later.',
        type: 'error',
        isLoading: false,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Feel free to reach out to me for collaboration, project opportunities, or just to connect.You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p><a href='mailto:atinkumarsingha2002@gmail.com'>atinkumarsingha2002@gmail.com</a></p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 9339756471</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Ghatal, Paschim Medinipur, PIN:721232, West Bengal, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Enter your name' name='name' required />
          <label htmlFor="">Your Email</label>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Enter your email' name='email' required />
          <label htmlFor="">Write your message here</label>
          <textarea onChange={(e) => setMessage(e.target.value)} value={message} name="message" placeholder='Enter your message' rows="8" required ></textarea>
          <button type='submit' className="contact-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit now'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
