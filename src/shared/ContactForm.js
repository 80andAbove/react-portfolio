// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import AMWaterMark from '../components/image/arya.png';

function ContactForm() {
  const [state, handleSubmit] = useForm("myylvdqk");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className="section" id="contact-section">
      <div className="title-flex">
        <h2 className="section-title name-title">ContactMeContact</h2>
        <h2 className="section-title title-color">ContactMe</h2>
        <h2 className="section-title name-title">ContactMeContactMeContactMeContactMeContactMeContactMe</h2>
      </div>
      <form className="contact-form center" onSubmit={handleSubmit}>
        <div className="flex">
          <input
            id="name"
            type="name" 
            name="name"
            placeholder="Name..."
          />
          <input
            id="email"
            type="email" 
            name="email"
            placeholder="Email address..."
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        <textarea
          id="message"
          name="message"
          placeholder="Message..."
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting} id="submit-btn" className="center center-margin">
          Send
        </button>
      </form>
      <img id="arya" className="center-margin" src={AMWaterMark} />
    </div>
  );
}

export default ContactForm