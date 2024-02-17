import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import imgRandomUsersList from './assets/1 - Random user List.png'
import imgMixMaster from './assets/01 - MixMaster.png'
import imgUnsplash from './assets/02 - Unsplash.png'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Solid knowledge of HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Intermediate proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
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
