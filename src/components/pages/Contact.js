import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import UIkit from 'uikit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {

  const [input, setValues] = useState({
    name: "",
    email: "",
    message: ""
  }); 

  const handleInputChange = (prop) => (event) => {
    setValues({ ...input, [prop]: event.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send('service_bsk2mm8', "template_knz0757", {
      name: input.name,
      email: input.email,
      message: input.message
    }, 'user_tAQWTFl4f5udfilPwKn1L')
      .then((result) => {
          window.location.reload();
      }, (error) => {
          UIkit.modal.alert('There was an error in submitting the form. Try again later, or contact me directly at mel.jack.developer@gmail.com')
          console.log(error.text);
      });
  };

  return (
    <div id="contact-container">
      <script src="https://kit.fontawesome.com/9303db13fa.js" crossorigin="anonymous"></script>
      <h1 className="uk-heading-line uk-text-center">
        <span>Contact</span>
      </h1>
      <form onSubmit={sendEmail} className="uk-container uk-container-xsmall">
        <fieldset className="uk-fieldset">
            <div className="uk-margin">
                <input className="uk-input" type="text" id="contact-name" placeholder="Name" onChange={handleInputChange("name")} required />
            </div>
            <div className="uk-margin">
                <input class="uk-input" type="text" id="contact-email" placeholder="Email" onChange={handleInputChange("email")} required />
            </div>
            <div className="uk-margin">
                <textarea class="uk-textarea" rows="5" id="contact-message" placeholder="Write your message here" onChange={handleInputChange("message")} required>
                </textarea>
            </div>
        </fieldset>
        <button className="uk-button uk-button-primary uk-position-center" id="submit-button" type="submit">Submit</button>
      </form>

      <div id="contact">
          <p>
            <a className="contact-link" href="https://www.linkedin.com/in/mel-jack/" target="_blank">  
            <FontAwesomeIcon icon={faLinkedin} />LinkedIn
            </a>
          </p>
          <p>
            <a className="contact-link" href="https://github.com/meljack1" target="_blank">
              <FontAwesomeIcon icon={faGithub} /> Github
            </a>
          </p>
          <p><a class="contact-link" href="mailto:melissa_jack@hotmail.co.uk">
            <i className="fas fa-envelope"></i> 
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </a></p>
          <p><a className="contact-link" href="tel:+447778211318">
            <FontAwesomeIcon icon={faMobileAlt} /> Mobile
            </a>
          </p>
      </div>
    </div>
  );
}
