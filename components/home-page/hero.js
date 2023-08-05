import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/Me.jpg'
          alt='Image showing the master developer Abdullah!'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Abdullah</h1>
      <p>
        I am a front end developer who also aspires AI and cloud computing!
      </p>
    </section>
  );
}

export default Hero;
