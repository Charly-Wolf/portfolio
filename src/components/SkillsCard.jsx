/* eslint-disable react/prop-types */
const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span className='flex justify-center md:justify-start'>{icon}</span>
      <h4 className='mt-6 font-bold flex justify-center md:justify-start'>
        {title}
      </h4>
      <p className='mt-2 text-slate-600'>{text}</p>
    </article>
  )
}
export default SkillsCard
