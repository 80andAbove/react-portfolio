// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("myylvdqk");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className="section" id="contact-section">
      <form className="contact-form" onSubmit={handleSubmit}>
      <h1>Contact</h1>
      <label htmlFor="name">
        Name
      </label>
      <input
        id="name"
        type="name" 
        name="name"
      />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      </form>
    </div>
  );
}

export default ContactForm