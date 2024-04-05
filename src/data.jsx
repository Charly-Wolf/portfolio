import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact, FaAngular } from 'react-icons/fa'
import Icon from '@mdi/react'
import { mdiLanguageTypescript, mdiTailwind } from '@mdi/js'
import imgRandomUsersList from './assets/1 - Random user List.png'
import imgMixMaster from './assets/01 - MixMaster.png'
import imgUnsplash from './assets/02 - Unsplash.png'
import imgProductsAPI from './assets/03 - ProductsAPI.png'

export const links = [
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#contact', text: 'contact' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'Angular',
    url: 'https://angular.dev/',
    icon: <FaAngular className='tech-icon text-rose-600' />,
    text: 'Its powerful directives, observables, routing and various other features let me develop dynamic applications with clean code modularity.',
  },
  {
    id: nanoid(),
    title: 'React',
    url: 'https://react.dev/',
    icon: <FaReact className='tech-icon text-cyan-400' />,
    text: 'With its component-based architecture, state management, JSX syntax, Hooks, Router, and more, creating web apps becomes a delight.',
  },

  {
    id: nanoid(),
    title: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: <FaJs className='tech-icon text-yellow-400' />,
    text: 'I love all JS has to offer, such as asynchronous programming, oop principles and array methods to build interactive and dynamic apps.',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    icon: (
      <Icon path={mdiLanguageTypescript} className='tech-icon text-sky-600' />
    ),
    text: 'I enjoy coding with its strong typing, interfaces, type inference, generics, and more for enhanced scalability, code integrity and maintainability.',
  },
  {
    id: nanoid(),
    title: 'HTML & CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    icon: <FaHtml5 className='tech-icon text-orange-500' />,
    text: 'They are the solid foundation of my web dev knowledge, which allows me craft visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    icon: <Icon path={mdiTailwind} className='tech-icon text-sky-400' />,
    text: 'Making use of its utility-centric workflow and comprehensive class system I create modern, visually consistent, and responsive web layouts.',
  },
]

export const projects = [
  {
    id: nanoid(),
    img: imgProductsAPI,
    url: 'https://products-react-redux-node.netlify.app/',
    github: 'https://github.com/Charly-Wolf/products-frontend',
    title: 'Products API',
    text: 'This is a Full Stack React / NodeJs app that displays a list of products, stored in a MongoDB database.',
  },
  {
    id: nanoid(),
    img: imgRandomUsersList,
    url: 'https://react-random-users-list.netlify.app/',
    github: 'https://github.com/Charly-Wolf/random_users_list',
    title: 'Random Users API',
    text: 'This is React app fetches data from the Random User Generator API and displays it in a table format.',
  },
  {
    id: nanoid(),
    img: imgMixMaster,
    url: 'https://mixmaster-react-router.netlify.app/',
    github: 'https://github.com/Charly-Wolf/react-router-practice',
    title: 'MixMaster - Cocktails DB API',
    text: 'It displays different cocktails based on a desired ingredient and uses React Router to navigate throughout different pages.',
  },
  {
    id: nanoid(),
    img: imgUnsplash,
    url: 'https://unsplash-react-search-engine.netlify.app/',
    github: 'https://github.com/Charly-Wolf/react_practice_image_search_engine',
    title: 'Unsplash API - Images Browser',
    text: 'Thanks to the Unsplash API, the user can search for beautiful and creative images using keywords.',
  },
]
