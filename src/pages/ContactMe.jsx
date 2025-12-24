import { useState } from 'react';
import Navigation from '../components/Navigation';
import emailjs from '@emailjs/browser';

function ContactMe() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    title: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      setSubmitMessage('Message sent successfully! I\'ll get back to you soon.');
      setMessageType('success');
      setFormData({ from_name: '', from_email: '', title: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      setSubmitMessage('Failed to send message. Please try again or email me directly.');
      setMessageType('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <>
      <Navigation />
      
      <div className="page-content">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>
            Have a project in mind? Want to collaborate? Or just want to say hello? 
            I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="contact-info">
          <div className="contact-info-card">
            <span className="icon">📧</span>
            <h3>Email</h3>
            <p>your.email@example.com</p>
          </div>
          <div className="contact-info-card">
            <span className="icon">💼</span>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/yourprofile</p>
          </div>
          <div className="contact-info-card">
            <span className="icon">🔗</span>
            <h3>GitHub</h3>
            <p>github.com/yourusername</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="from_name">Your Name *</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="John Smith"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="from_email">Your Email *</label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Subject *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Project Inquiry, Collaboration, etc."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Tell me about your project, ask a question, or just say hello..."
              required
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? '✉️ Sending...' : '🚀 Send Message'}
          </button>

          {submitMessage && (
            <p className={`submit-message ${messageType}`}>
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default ContactMe;