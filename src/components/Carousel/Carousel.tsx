import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';
import { GoProject } from 'react-icons/go';
import { FaArrowCircleDown } from 'react-icons/fa';
import Rust_6B2D1A from '../Images/rust_6B2D1A.png';
import Purple_2C2145 from '../Images/purple_2C2145.png';

class CarouselImages extends Component {
  render() {
    return (
      <div className={classes.carousel_container} id='start'>
        <Carousel
          className={classes.carousel}
          dynamicHeight
          infiniteLoop={true}
          interval={6000}
          useKeyboardArrows={true}
          transitionTime={1700}
          emulateTouch
          showArrows={false}
          autoPlay
          showStatus={false}
          showThumbs={false}
        >
          <div className={classes.image_container}>
            <img className={classes.image} src={Rust_6B2D1A} alt='myImage' />
            <div className={classes.h1}>
              <h1>I'm Kingler</h1>
              <a
                href='https://drive.google.com/'
                rel='opener noreferrer'
                target='_blank'
              >
                VIEW CV <FaArrowCircleDown />
              </a>
            </div>
          </div>
          <div className={classes.image_container}>
            <img className={classes.image} src={Purple_2C2145} alt='myImage' />
            <div className={classes.h2}>
              <h1> I love building</h1>
              <h1>THINGS!!</h1>
              <a
                href='https://github.com/mittalsam98?tab=repositories&q=&type=&language=javascript&sort=stargazers'
                rel='opener noreferrer'
                target='_blank'
              >
                VIEW REACT PROJECTS <GoProject />
              </a>
              <div className={classes.secondButton}>
                <a
                  href='https://github.com/mittalsam98?tab=repositories&q=&type=&language=dart&sort='
                  rel='opener noreferrer'
                  target='_blank'
                >
                  VIEW ANDROID PROJECTS <GoProject />
                </a>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default CarouselImages;
