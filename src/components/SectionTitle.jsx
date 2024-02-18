// eslint-disable-next-line react/prop-types
const SectionTitle = ({ text }) => {
  return (
    <div className='border-b border-gray-200 pb-5'>
      <h2 className='text-3xl font-medium tracking-wide capitalize'>{text}</h2>
    </div>
  )
}
export default SectionTitle