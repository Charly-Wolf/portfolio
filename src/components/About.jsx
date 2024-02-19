import aboutSvg from '../assets/about2.svg'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className='main-gradient-lighter py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img
          src={aboutSvg}
          alt='about-img'
          className='hidden md:block w-full h-64'
        />
        <article>
          <SectionTitle text={'about me 🧑🏻'} />
          <div className='bio'>
            <p>🧑🏻‍💻 A passionate learner, that is who I am! </p>
            <p>
              After graduating from the University of Buenos aires, I worked in
              Accounting and as a Tax Advisor. However, I then decided I wanted
              to change my career so I took a break to travel around Europe.
            </p>
            <p>
              While taking language courses and working in different cities, I
              learned how to code and discovered my new passion. In 2021 I
              enrolled in a 3 year vocational training program in Germany to
              become a Software Developer.
            </p>
            <p>
              When I am not coding, you can find me playing my guitar, making
              photos while traveling, hiking in the mountains or at some
              language exchange meetup somewhere in the world 🌏.
            </p>
          </div>
        </article>
        <img
          src={aboutSvg}
          alt='about-img'
          className='md:hidden w-full h-40'
        />
      </div>
    </section>
  )
}
export default About
