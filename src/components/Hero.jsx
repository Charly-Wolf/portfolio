import heroImg from '../assets/hero3.svg'
import {
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaYoutubeSquare,
} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='main-gradient py-14 md:py-28 2xl:big-hero-height text-center md:text-left'>
      <div className='align-element grid lg:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider mb-2 '>
            Hola! I&lsquo;m Carlos
          </h1>
          <p className='real-name'>
            <span>a.k.a. Charly</span>
          </p>
          <p className='mt-4 text-4xl font-semibold text-slate-800 md:gradient-bg capitalize tracking-wide'>
            Front-End Developer
          </p>
          <p className='mt-2 text-2xl text-slate-800 capitalize tracking-tighter-wide'>
            Building Beautifully Creative Web Experiences
          </p>
          <div className='flex gap-x-4 mt-8 md:mt-14 justify-center md:justify-start'>
            <a href='https://github.com/Charly-Wolf' target='_blank'>
              <FaGithubSquare className='social-icon' />
            </a>
            <a href='https://linkedin.com/in/carlosparedes90' target='_blank'>
              <FaLinkedin className='social-icon' />
            </a>
            {/* <a href='https://www.youtube.com/@charlyalemania' target='_blank'>
              <FaYoutubeSquare className='social-icon' />
            </a> */}
            {/* <a href='https://www.instagram.com/quit_and_travel' target='_blank'>
              <FaInstagramSquare className='social-icon' />
            </a> */}
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} alt='hero image' className='h-80 lg:h-96' />
        </article>
      </div>
    </div>
  )
}
export default Hero
