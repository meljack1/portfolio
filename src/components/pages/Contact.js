import React, {useRef} from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('default_service', 'Portfolio', form.current, 'user_tAQWTFl4f5udfilPwKn1L')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <h1 className="uk-heading-line uk-text-center">
            <span>Contact</span>
      </h1>
      <form ref={form} onSubmit={sendEmail}>
        <fieldset className="uk-fieldset">
            <div className="uk-margin">
                <input className="uk-input" type="text" id="contact-name" placeholder="Name" />
            </div>
            <div className="uk-margin">
                <input class="uk-input" type="text" id="contact-email" placeholder="Email" />
            </div>
            <div className="uk-margin">
                <textarea class="uk-textarea" rows="5" id="contact-message" placeholder="Write your message here"></textarea>
            </div>
        </fieldset>
        <button className="uk-button uk-button-primary" id="submit-button" type="submit">Submit</button>
      </form>
    </div>
  );
}
