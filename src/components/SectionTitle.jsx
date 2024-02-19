// eslint-disable-next-line react/prop-types
const SectionTitle = ({ text }) => {
  return (
    <div className='border-b border-gray-300 pb-'>
      <h2 className='text-3xl font-medium tracking-wide capitalize flex justify-center md:justify-start'>
        {text}
      </h2>
    </div>
  )
}
export default SectionTitle
