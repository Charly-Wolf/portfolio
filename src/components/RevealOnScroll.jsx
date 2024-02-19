/* eslint-disable react/prop-types */
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const RevealOnScroll = ({ children, onlyMobile= false }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref.current
      if (element) {
        const { top } = element.getBoundingClientRect()
        const isVisible = top < window.innerHeight - 120
        setIsVisible(isVisible)
      }
    }

    window.addEventListener('scroll', onWindScroll)

    return () => {
      window.removeEventListener('scroll', onWindScroll)
    }
  }, [])

  const classes = `transition-opacity duration-500 ${
    isVisible ? 'opacity-100' : 'opacity-0'
  } ${onlyMobile && 'md:opacity-100'}`

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  )
}
export default RevealOnScroll
