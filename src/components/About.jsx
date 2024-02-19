import aboutSvg from '../assets/about2.svg'
import RevealOnScroll from './RevealOnScroll'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className='main-gradient-lighter py-20' id='about'>
      <RevealOnScroll>
        <div className='align-element grid md:grid-cols-2 items-center gap-16'>
          <img
            src={aboutSvg}
            alt='about-img'
            className='hidden md:block w-full h-64'
          />
          <article>
            <SectionTitle text='Who am I? 🧑🏻‍💻' />
            <div className='bio'>
              <p className='text-2xl font-semibold'>A passionate learner! </p>
              <p>
                After graduating from the University of Buenos aires, I worked
                in Accounting and as a Tax Advisor. However, I then decided I
                wanted to change my career so I took a break to travel around
                Europe.
              </p>
              <p>
                While taking language courses and working in different cities, I
                learned how to code and discovered my new passion. In 2021 I
                enrolled in a 3 year vocational training program in Germany to
                become a Software Developer. I will graduate in July 2024.
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
      </RevealOnScroll>
    </section>
  )
}
export default About
