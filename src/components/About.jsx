import aboutSvg from '../assets/about2.svg'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className='bg-teal-100 py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} alt='about-img' className='w-full h-64' />
        <article>
          <SectionTitle text={'about me'} />
          <div className='bio'>
            <p>
              😃 A passionate learner, that is who I am! 🧑🏻‍💻
            </p>
            <p>
              ➡️ After graduating from the University of Buenos aires, I worked in
              Accounting and as a Tax Advisor. However, I then decided I wanted to
              change my career so I took a break to travel around Europe.
            </p>
            <p>
              📖 While taking language courses and working in different cities, I
              learned how to code and discovered my new passion. In 2021 I
              enrolled in a 3 year vocational training program in Germany to become a
              Software Developer.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
export default About
