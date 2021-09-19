import { attribute, hero } from '../styles/Hero.module.scss';

const Hero = () => {
  return (
    <main className={hero}>
      <p className={attribute}>

      Photo by{' '}
      <a href='https://unsplash.com/@jplenio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
        Johannes Plenio
      </a>{' '}
      on{' '}
      <a href='https://unsplash.com/s/photos/fantasy-landscape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
        Unsplash
      </a>
      </p>
    </main>
  );
};

export default Hero;
