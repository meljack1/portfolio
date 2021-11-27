import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1 className="uk-heading-line uk-text-center">
            <span>Contact</span>
      </h1>
      <form>
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
