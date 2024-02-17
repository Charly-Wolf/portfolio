import heroImg from '../assets/hero.svg'
import {
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaYoutubeSquare,
} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='bg-teal-300 py-24'>
      <div className='mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>
            Hola! I&lsquo;m Charly
          </h1>
          <p className='mt-2 text-xl text-slate-100 tracking-wide'>
            a.k.a. Carlos
          </p>
          <p className='mt-4 text-3xl text-slate-800 capitalize tracking-wide'>
            Front-End Developer
          </p>
          <p className='mt-2 text-lg text-slate-800 capitalize tracking-tighter-wide'>
            Building Beautifully Creative Web Experiences.
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/Charly-Wolf' target='_blank'>
              <FaGithubSquare className='h-8 w-8 text-slate-700 hover:text-black duration-300' />
            </a>
            <a href='https://linkedin.com/in/carlosparedes90' target='_blank'>
              <FaLinkedin className='h-8 w-8 text-slate-700 hover:text-black duration-300' />
            </a>
            <a href='https://www.youtube.com/@charlyalemania' target='_blank'>
              <FaYoutubeSquare className='h-8 w-8 text-slate-700 hover:text-black duration-300' />
            </a>
            <a href='https://www.instagram.com/quit_and_travel' target='_blank'>
              <FaInstagramSquare className='h-8 w-8 text-slate-700 hover:text-black duration-300' />
            </a>
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
