import React from 'react';
import classes from './Projects.module.css';
import Image from '../Images/Image';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

interface CardItem {
  link: string;
  title: string;
  techStack: string;
  desc: string;
  image: JSX.Element;
}

// Web projects
const cardItems: CardItem[] = [
  {
    link: 'https://2C2145-app.netlify.app/',
    title: 'purple_2C2145',
    techStack: 'purple_2C2145',
    desc: 'purple_2C2145',
    image: <Image src="../Images/purple_2C2145.png" alt="Description for purple_2C2145 image"/>,
  },
  {
    link: 'https://3C4553-web-online.netlify.app/',
    title: 'lightgray_3C4553',
    techStack: 'lightgray_3C4553',
    desc: 'lightgray_3C4553',
    image: <Image src="../Images/olive_4A561.png" alt="Description for purple_2C2145 image"/>,
  },
  {
    link: 'https://olive_4A561-frontend-two.vercel.app/',
    title: 'olive_4A561',
    techStack: 'olive_4A561',
    desc: 'olive_4A561',
    image: <Image src="../Images/olive_4A561.png" alt="Description for purple_2C2145 image"/>,
  },
  {
    link: 'https://6B2D1A.netlify.app/',
    title: 'rust_6B2D1A',
    techStack: 'rust_6B2D1A',
    desc: 'rust_6B2D1A',
    image: <Image src="../Images/rust_6B2D1A.png" alt="Description for purple_2C2145 image"/>
  },
  {
    link: 'https://play.google.com/store/apps/details?id=com.thesachin.your_dictionary',
    title: 'grey_26292F',
    techStack: 'grey_26292F',
    desc: 'grey_26292F',
    image: <Image src="../Images/grey_26292F.png" alt="Description for purple_2C2145 image"/>
  },
  {
    link: 'https://play.google.com/store/apps/details?id=com.thesachin.superheroes',
    title: 'vylitegray_878787',
    techStack: 'vylitegray_878787',
    desc: 'vylitegray_878787',
    image: <Image src="../Images/vylitegray_878787.png" alt="Description for purple_2C2145 image"/>
  },
  {
    link: 'https://play.google.com/store/apps/details?id=com.thesachin.memestemplate',
    title: 'mustard_815617',
    techStack: 'mustard_815617',
    desc: 'mustard_815617',
    image: <Image src="../Images/mustard_815617.png" alt="Description for purple_2C2145 image"/>
  },
];

const Projects: React.FC = () => {
  const getProjectCard = (cardItem: CardItem) => {
    return (
      <li key={cardItem.title}>
        <a href={cardItem.link} className={classes.card} target='_blank' rel='noopener noreferrer'>
          {React.cloneElement(cardItem.image, { className: classes.card__image })}
          <div className={classes.card__overlay}>
            <div className={classes.card__header}>
              <svg className={classes.card__arc} xmlns='http://www.w3.org/2000/svg'>
                <path />
              </svg>
              <div className={classes.card__header_text}>
                <h3 className={classes.card__title}>{cardItem.title}</h3>
                <span className={classes.card__status}>{cardItem.techStack}</span>
              </div>
            </div>
            <p className={classes.card__description}>{cardItem.desc}</p>
          </div>
        </a>
      </li>
    );
  };
  

  return (
    <div className={classes.box} id='projects'>
      <ScrollAnimation offset={0} animateIn='fadeInLeft' duration={2.4} animateOnce initiallyVisible>
        <span className={classes.head}>MY WORK</span>
        <h2 className={classes.heading}>PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItems.map((item) => {
            return getProjectCard(item);
          })}
        </ul>
        {/* <h2 className={classes.heading}>ANDROID APP PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItemApps.map((item) => {
            return getProjectCard(item);
          })}
        </ul> */}
      </ScrollAnimation>
    </div>
  );
};

export default Projects;