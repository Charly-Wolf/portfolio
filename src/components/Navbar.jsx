import { links } from '../data'

const Navbar = () => {
  return (
    <nav className='bg-teal-400'>
      <div className='align-element py-4 flex flex-col justify-between sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <h2 className='text-3xl font-bold'>
          Web<span className='text-white'>Dev</span> Portfolio
        </h2>
        <div className='flex gap-x-3'>
          {links.map(link => {
            const { id, href, text } = link
            return (
              <a
                key={id}
                href={href}
                className='section-btn'
              >
                {text}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
export default Navbar
