import { projects } from '../data'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import RevealOnScroll from './RevealOnScroll'

const Projects = () => {
  return (
    <div className='bg-gradient-to-bl from-white via-70% via-slate-50 to-slate-300'>
      <RevealOnScroll>
        <section id='projects' className='py-20 align-element'>
          <SectionTitle text='Projects 💼' />
          <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
            {projects.map(project => {
              return <ProjectCard key={project.id} {...project} />
            })}
          </div>
        </section>
      </RevealOnScroll>
    </div>
  )
}
export default Projects
