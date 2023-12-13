import React, { useState } from 'react';
import './Contact.css'


function ContactForm({ show, onFormSubmit }) {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [contactMethod, setContactMethod] = useState('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleOrganizationChange = (event) => {
    setOrganization(event.target.value);
  };

  const handleContactMethodChange = (event) => {
    setContactMethod(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit({
      name,
      organization,
      contactMethod,
      email,
      phone,
      note,
    });
  };

  if (!show) {
    return null;
  }

  return (
    <div className="contact-form">
      <h3>Help us prepare to contact you better</h3>
      <form action="https://formsubmit.co/your@email.com" method="POST">
        <input type="hidden" name="_subject" value="Contact Form Submission" />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required />
        <label htmlFor="organization">Organization:</label>
        <input type="text" id="organization" name="organization" value={organization} onChange={handleOrganizationChange} />
        <label htmlFor="contact-method">Contact Method:</label>
        <select id="contact-method" value={contactMethod} onChange={handleContactMethodChange}>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>
        {contactMethod === 'email' && (
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
          </div>
        )}
        {contactMethod === 'phone' && (
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value={phone} onChange={handlePhoneChange} />
          </div>
        )}
        <label htmlFor="note">Additional Notes:</label>
        <textarea id="note" name="note" value={note} onChange={handleNoteChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
