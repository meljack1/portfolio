import React from 'react';
import melPhoto from '../assets/melphoto.PNG'

export default function About() {
  return (
    <div>
        <h1 className="uk-heading-line uk-text-center">
            <span>About</span>
        </h1>
        <div className="uk-container uk-container-xsmall">
            <div className="circle">
                <img src={melPhoto} alt="A photograph of Mel Jack"/>
            </div>
            <p>
                I am a Birmingham-based web developer with a strong collaborative work ethic and past experience as a secondary school teacher. My first degree in Chemistry, and I recently earned a certificate in Web Development from the University of Birmingham’s Full-Stack Bootcamp.
            </p>
            <p>
                I am adaptable, a quick learner and devoted problem solver. I enjoy learning new technologies and using them to build my own projects. My experience in teaching has made me an excellent communicator, both verbally and in writing, including keeping my code clean and descriptive.
            </p>
            <p>
                I love programming because I enjoy solving problems, picking things apart and understanding how they work. Being a strong team player, problem solver and fast learner sets me up well as a programmer, and I hope to learn a lot more as my career progresses.
            </p>
        </div>
    </div>
  );
}
