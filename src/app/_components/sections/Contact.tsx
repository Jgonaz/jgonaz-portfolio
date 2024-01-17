'use client'

import { useState } from 'react'

import SendIcon from '@/app/_assets/SendIcon'
import GitHubIcon from '@/app/_assets/social/GithubIcon'
import InstagramIcon from '@/app/_assets/social/InstagramIcon'
import LinkedinIcon from '@/app/_assets/social/LinkedinIcon'

import Spinner from '@/app/_components/Spinner'

export default function Contact () {
  const [isLoading, setLoading] = useState(false)
  const [sentEmail, setSentEmail] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)
    const formProps = Object.fromEntries(formData)
    const { from, subject, message } = formProps

    const delay = new Promise(resolve => setTimeout(resolve, 2000))

    const [response] = await Promise.all([
      fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ from, subject, message })
      }),
      delay
    ])

    const data = await response.json()

    setLoading(false)
    setSentEmail(true)
    if (!response.ok) {
      setErrorEmail(data.message)
    }
  }

  return (
    <section
      className='bg-jade-50 pt-16 sm:pt-12 md:pt-8 lg:pt-4 xl:pt-0 pb-12 md:pb-4'
      id='contact'
    >
      <div className='container flex flex-col items-center justify-center text-pretty gap-10 px-8 sm:px-12 md:p-16 lg:p-20 xl:p-24'>
        <div
          id='contact-title'
          className='flex justify-center sm:justify-start'
        >
          <h2 className='text-4xl font-extrabold text-jade-800'>¿Hablamos?</h2>
        </div>
        <div className='relative w-full max-w-screen-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8'>
          {isLoading && <Spinner />}
          <form className='space-y-6' action='#' onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='from'
                className='block mb-2 text-sm font-medium text-jade-900'
              >
                De:
              </label>
              <input
                type='from'
                name='from'
                id='from'
                className='bg-gray-50 border border-gray-300 text-jade-900 text-sm rounded-lg focus:ring-jade-900/50 focus:border-jade-900/50 focus:outline-none block w-full p-2.5'
                placeholder='nombre@mail.com'
                disabled={sentEmail}
                required
              />
            </div>
            <div>
              <label
                htmlFor='subject'
                className='block mb-2 text-sm font-medium text-jade-900'
              >
                Asunto:
              </label>
              <input
                type='subject'
                name='subject'
                id='subject'
                className='bg-gray-50 border border-gray-300 text-jade-900 text-sm rounded-lg focus:ring-jade-900/50 focus:border-jade-900/50 focus:outline-none block w-full p-2.5'
                placeholder='Propuesta sobre...'
                disabled={sentEmail}
                required
              />
            </div>
            <div>
              <label
                htmlFor='message'
                className='block mb-2 text-sm font-medium text-jade-900'
              >
                Mensaje:
              </label>
              <textarea
                name='message'
                id='message'
                className='bg-gray-50 border border-gray-300 text-jade-900 text-sm rounded-lg focus:ring-jade-900/50 focus:border-jade-900/50 focus:outline-none block w-full p-2.5'
                placeholder='¡Hola Jorge! He visto tu perfil en Linkedin y me gustaría hablar contigo para...'
                required
                disabled={sentEmail}
                rows={3}
              />
            </div>
            <div className='flex flex-col gap-2 sm:flex-row justify-between items-center'>
              <div>
                <button
                  type='submit'
                  className={`flex items-center justify-center w-full sm:w-fit text-white bg-jade-700 hover:bg-jade-800 focus:ring-4 focus:outline-none focus:ring-jade-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-nowrap ${
                    sentEmail ? 'opacity-50' : ''
                  }`}
                  disabled={sentEmail}
                >
                  <SendIcon className='mr-2' />
                  {!sentEmail ? 'Enviar mensaje' : 'Mensaje enviado'}
                </button>
                {sentEmail && (
                  <div className='flex p-2'>
                    <span className='text-xs text-gray-500'>
                      {!errorEmail &&
                        '¡Gracias por tu mensaje! Te responderé lo antes posible.'}
                      {errorEmail &&
                        'Ha ocurrido un error. Por favor, ponte en contacto conmigo a través de Linkedin..'}
                    </span>
                  </div>
                )}
              </div>
              <div className='flex w-full justify-center sm:justify-end'>
                <a
                  href='https://linkedin.com/in/jgonzalez-azpillaga/'
                  target='_blank'
                  className='p-2 hover:scale-125 transition-all'
                >
                  <LinkedinIcon fill='#126945' stroke='white' />
                  <span className='sr-only'>Linkedin page</span>
                </a>
                <a
                  href='https://github.com/jgonaz'
                  target='_blank'
                  className='p-2 hover:scale-125 transition-all'
                >
                  <GitHubIcon fill={'#126945'} />
                  <span className='sr-only'>GitHub account</span>
                </a>
                <a
                  href='https://instagram.com/jorgedelnueve'
                  target='_blank'
                  className='p-2 hover:scale-125 transition-all'
                >
                  <InstagramIcon fill='#126945' stroke='white' />
                  <span className='sr-only'>Instagram page</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}