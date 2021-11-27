import React from 'react';
import melPhoto from '../assets/melphoto.PNG'

export default function About() {
  return (
    <div>
        <h1 className="uk-heading-line uk-text-center">
            <span>About Mel Jack</span>
        </h1>
        <div className="uk-container uk-container-small">
            <div id="about-container">
                <section id="skills">
                    <div className="circle">
                        <img src={melPhoto} alt="A photograph of Mel Jack"/>
                    </div>
                    <h2>Skills: </h2>
                    <ul>
                        <li><span className="uk-text-bold">LANGUAGES:</span> <br/>HTML5, CSS3, JavaScript</li>
                        <li><span className="uk-text-bold">FRAMEWORKS:</span> <br/> React, jQuery, Bootstrap, UIKit, Express.js</li>
                        <li><span className="uk-text-bold">DATABASES:</span> <br/> MySQL, Sequelize, MongoDB, Mongoose, IndexedDB</li>
                        <li><span className="uk-text-bold">OTHER:</span> <br/> Node.js, Git, Heroku, Handlebars.js</li>
                    </ul>
                </section>
                <section id="about-me">
                    <h2>About me: </h2>
                    <p>
                        I am a Birmingham-based web developer with a strong collaborative work ethic and past experience as a secondary school teacher. My first degree in Chemistry, and I recently earned a certificate in Web Development from the University of Birmingham’s Full-Stack Bootcamp.
                    </p>
                    <p>
                        I am adaptable, a quick learner and devoted problem solver. I enjoy learning new technologies and using them to build my own projects. My experience in teaching has made me an excellent communicator, both verbally and in writing, including keeping my code clean and descriptive.
                    </p>
                    <p>
                        I love programming because I enjoy solving problems, picking things apart and understanding how they work. Being a strong team player, problem solver and fast learner sets me up well as a programmer, and I hope to learn a lot more as my career progresses.
                    </p>
                </section>
            </div>
        </div>
    </div>
  );
}
