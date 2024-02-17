import { useState } from 'react'
import { useEffect } from 'react'

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
          ^
        </button>
      )}
    </>
  )
}
export default BackToTopBtn
