import { skills } from '../data'

const Skills = () => {
  return (
    <section
      className='pb-14 align-element flex justify-center md:block'
      id='skills'
    >
      <div className='grid grid-cols-2 gap-5 w-52 md:w-auto md:flex md:justify-between md:flex-row '>
        {skills.map(skill => {
          return (
            <div key={skill.id}>
              <div className=' p-4 rounded-lg'>
                <a href={skill.url} target='_blank'>
                  {skill.icon}
                </a>
              </div>

              <h4 className='mt-1 mb-2 font-bold text-center bg-slate-900 text-white p-1 rounded-lg'>
                {skill.title}
              </h4>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Skills
