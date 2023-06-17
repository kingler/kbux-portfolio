import React from 'react';
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const About: React.FC = () => {
  return (
    <div className={classes.box} id='about'>
      <ScrollAnimation offset={0} animateIn='fadeInLeft' duration={2.4} animateOnce initiallyVisible>
        <span className={classes.head}>ABOUT ME</span>
        <h2 className={classes.heading}>Who Am I?</h2>
        <div className={classes.About}>
          <p>
            My name is <b>Kingler</b> and I am currently working as <b>UX/UI Designer & Prompt Engineer</b> at{' '}
            <b>
              {' '}
              <a className={classes.link} target='_blank' rel='noopener noreferrer' href='https://www.springworks.in/'>
                Springworks
              </a>
            </b>
            . I completed my degree in Bachelor of Technology in Computer Science and Engineering from Sant Longowal Institute
            of Engineering and Technology. I am much interested in developing new things which excite me a lot. :)
          </p>
          <p className={classes.br}>
            I love exploring new technologies and being a practitioner, I like to stay on top of latest trends. I try to leave
            every line of code I write more readable, accessible, and modular.
          </p>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;