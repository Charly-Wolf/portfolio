import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact, FaAngular } from 'react-icons/fa'
import Icon from '@mdi/react'
import { mdiLanguageTypescript } from '@mdi/js'
import imgRandomUsersList from './assets/1 - Random user List.png'
import imgMixMaster from './assets/01 - MixMaster.png'
import imgUnsplash from './assets/02 - Unsplash.png'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='tech-icon text-cyan-400' />,
    text: 'Intermediate proficiency, leveraging its component-based architecture, state management, JSX syntax, Hooks, React Router and other features.',
  },
  {
    id: nanoid(),
    title: 'Angular',
    icon: <FaAngular className='tech-icon text-rose-600' />,
    text: 'One year experience, employing its powerful directives, observables, routing and more to develop dynamic applications with clean code modularity.',
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    icon: <FaJs className='tech-icon text-yellow-400' />,
    text: 'Expertise, adept at using its features such as asynchronous programming, oop principles and array methods to build interactive and dynamic web apps.',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: (
      <Icon path={mdiLanguageTypescript} className='tech-icon text-sky-600' />
    ),
    text: 'Intermediate proficiency, taking advantage of its strong typing, interfaces and type inference for enhanced scalability, code integrity and maintainability.',
  },
  {
    id: nanoid(),
    title: 'HTML & CSS',
    icon: <FaHtml5 className='tech-icon text-orange-500' />,
    text: 'Solid knowledge, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
]

export const projects = [
  {
    id: nanoid(),
    img: imgRandomUsersList,
    url: 'https://react-random-users-list.netlify.app/',
    github: 'https://github.com/Charly-Wolf/random_users_list',
    title: 'Random Users List',
    text: 'This is a React application that fetches random user data from the Random User Generator API and displays it in a list format.',
  },
  {
    id: nanoid(),
    img: imgMixMaster,
    url: 'https://mixmaster-react-router.netlify.app/',
    github: 'https://github.com/Charly-Wolf/react-router-practice',
    title: 'MixMaster React Router Practice',
    text: 'React Router practice project. The site display different cocktails and uses React Router to navigate throughout different pages inside of a SPA.',
  },
  {
    id: nanoid(),
    img: imgUnsplash,
    url: 'https://unsplash-react-search-engine.netlify.app/',
    github: 'https://github.com/Charly-Wolf/react_practice_image_search_engine',
    title: 'Unsplash Images Browser - React Router Practice',
    text: 'React practice project where the user can search for Unsplash images.',
  },
]
