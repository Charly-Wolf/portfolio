import { projects } from '../data'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id='projects' className='py-20 align-element'>
      <SectionTitle text='Projects' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projects.map(project => {
          return <ProjectCard key={project.id} {...project} />
        })}
      </div>
    </section>
  )
}
export default Projects
