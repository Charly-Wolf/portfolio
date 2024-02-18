import { useState } from 'react'
import SectionTitle from './SectionTitle'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all required fields.')
      return
    }

    setName('')
    setEmail('')
    setMessage('')
    setError(null)
  }

  return (
    <section className='py-20 bg-teal-100' id='contact'>
      <div className='align-element'>
        <SectionTitle text='Get in Touch 💬' />
        <form onSubmit={handleSubmit} className='align-element md:text-center'>
          <div className='md:grid md:grid-cols-3 gap-8 mt-8'>
            <div className='col-span-1'>
              {/* name */}
              <div className='flex flex-col mb-4'>
                <label htmlFor='name'>Name:</label>
                <input
                  className='border-2 border-black border-opacity-70'
                  type='text'
                  name='name'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  id='name'
                  placeholder='Thomas Smith'
                  required
                />
              </div>
              {/* email */}
              <div className='flex flex-col mb-4'>
                <label htmlFor='email'>Email</label>
                <input
                  className='border-2 border-black border-opacity-70'
                  type='email'
                  name='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  id='email'
                  placeholder='cto@google.com'
                  required
                />
              </div>
            </div>

            <div className='col-span-2 mb-2'>
              {/* message */}
              <div className='flex flex-col mb-8'>
                <label htmlFor='message'>Message:</label>
                <textarea
                  className='h-24 border-2 border-black border-opacity-70'
                  id='message'
                  name='message'
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder='Ask me anything you would like to know about me and I will get in touch as soon as possible!'
                  required
                />
              </div>
            </div>
          </div>

          <div className='text-center'>
            {error && (
              <div className='bg-red-500 text-white rounded-lg'>{error}</div>
            )}
            <button
              type='submit'
              className='mt-4 px-20 py-2 bg-black text-white font-bold rounded-lg duration-300 hover:bg-teal-500'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
export default ContactForm
