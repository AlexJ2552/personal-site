import { useState } from 'react';
import Navigation from '../components/Navigation';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS send function (you'll need to configure this)
    emailjs.send('service_q580dej', 'template_165w0ya', formData, 'SFUXrZm11jk9OPddZ')
      .then(() => {
        setSubmitMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setSubmitMessage('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Navigation />
      
      <h1>Contact Me</h1>
      
      <div className="page-content">
        <form onSubmit={handleSubmit} className="contact-form">

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitMessage && <p className="submit-message">{submitMessage}</p>}
        </form>
      </div>
    </>
  );
}

export default Contact;