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
    <section className='py-20 main-gradient' id='contact'>
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
                <label className='mb-2 text-lg text-slate-800' htmlFor='name'>
                  Name:
                </label>
                <input
                  className='input-field'
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
              <div className='flex flex-col mb-4 '>
                <label className='mb-2 text-lg text-slate-800' htmlFor='email'>
                  Email:
                </label>
                <input
                  className='input-field'
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
                <label
                  className='mb-2 text-lg text-slate-800'
                  htmlFor='message'
                >
                  Message:
                </label>
                <textarea
                  className='input-field max-h-48 min-h-32'
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
              className='text-2xl mb-4 px-20 py-2 bg-slate-800 text-white font-bold shadow-md rounded-lg duration-300 md:hover:bg-slate-100 md:hover:text-black md:hover:shadow-xl'
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
