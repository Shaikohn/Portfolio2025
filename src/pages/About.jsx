import './About.css';
import argentina from '../assets/argentina.png'
import utn from '../assets/UTN.jpg'
import soyHenry from '../assets/soyHenry.jpg'

function About() {
  return (
    <div className='aboutContainer'>
      <h1>About</h1>
      <h2>Front-End, Back-End or Full-Stack?</h2>
      <p className='description'>Hi! I'm Shai Kohn, an Argentine programmer, a Soy Henry bootcamp graduate, and currently a student of the University Degree in Programming at UTN. I have an advanced C2 level of English, certified by the EF SET test.

Since the beginning of my career, I’ve developed skills in both front-end and back-end, working on various projects as a full-stack developer. However, my true focus lies in front-end development, as that’s where I took my first steps in programming and where I have the most experience. Although I’ve worked on back-end tasks, it has always been as part of a full-stack role rather than exclusively back-end. On the other hand, I do have projects where I’ve worked solely on the front-end, which reinforces my inclination toward that field.

With this portfolio, my goal is to showcase my versatility as a full-stack developer while making it clear that my expertise and strength are in front-end development.</p>
    <div>
    <img src={argentina} alt="UTN logo" className='educationLogos' />
      <img src={utn} alt="UTN logo" className='educationLogos' />
      <img src={soyHenry} alt="Soy Henry logo" className='educationLogos' />
    </div>
    </div>
  )
}

export default About;