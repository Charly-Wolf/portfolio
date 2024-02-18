import { useState } from 'react'
import SectionTitle from './SectionTitle'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { toast } from 'react-toastify'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(null)

  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all required fields.')
      return
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success('Email sent!')
        },
        error => {
          toast.error('There was an error! Message not sent.')
          setError(error.text)
        }
      )

    setName('')
    setEmail('')
    setMessage('')
    setError(null)
  }

  return (
    <section className='py-20 bg-teal-100' id='contact'>
      <div className='align-element'>
        <SectionTitle text='Get in Touch 💬' />
        <form
          ref={form}
          onSubmit={sendEmail}
          className='align-element md:text-center'
        >
          <div className='md:grid md:grid-cols-3 gap-8 mt-8'>
            <div className='col-span-1'>
              {/* name */}
              <div className='flex flex-col mb-4'>
                <label htmlFor='name'>Name:</label>
                <input
                  className='border-2 py-1 px-2 border-black border-opacity-70'
                  type='text'
                  name='user_name'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  id='name'
                  placeholder='Thomas Smith'
                  required
                />
              </div>
              {/* email */}
              <div className='flex flex-col mb-4'>
                <label htmlFor='email'>Email:</label>
                <input
                  className='border-2 py-1 px-2 border-black border-opacity-70'
                  type='email'
                  name='user_email'
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
                  className='h-28 border-2 py-1 px-2 border-black border-opacity-70'
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
              value='Send'
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
