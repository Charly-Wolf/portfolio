import { useState, useEffect } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'

const BackToTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > 250)
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollUp = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      {showBtn && (
        <button className='back-to-top-btn' onClick={scrollUp}>
          <FaArrowCircleUp />
        </button>
      )}
    </>
  )
}
export default BackToTopBtn
