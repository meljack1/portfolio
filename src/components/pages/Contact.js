import React, {useRef} from 'react';
import emailjs from 'emailjs-com';
import UIkit from 'uikit';
export default function Contact() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('default_service', 'Portfolio', form.current, 'user_tAQWTFl4f5udfilPwKn1L')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          UIkit.modal.alert('There was an error in submitting the form. Try again later, or contact me directly at mel.jack.developer@gmail.com')
          console.log(error.text);
      });
  };

  return (
    <div>
      <h1 className="uk-heading-line uk-text-center">
            <span>Contact</span>
      </h1>
      <form ref={form} onSubmit={sendEmail} className="uk-container uk-container-xsmall">
        <fieldset className="uk-fieldset">
            <div className="uk-margin">
                <input className="uk-input" type="text" id="contact-name" placeholder="Name" required />
            </div>
            <div className="uk-margin">
                <input class="uk-input" type="text" id="contact-email" placeholder="Email" required />
            </div>
            <div className="uk-margin">
                <textarea class="uk-textarea" rows="5" id="contact-message" placeholder="Write your message here" required>
                </textarea>
            </div>
        </fieldset>
        <button className="uk-button uk-button-primary" id="submit-button" type="submit">Submit</button>
      </form>
    </div>
  );
}
