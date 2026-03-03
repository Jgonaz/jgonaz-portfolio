'use client'
import TranslationContext from '@/app/[lang]/_contexts/TranslationContext'
import { useState, useContext } from 'react'

import { SendIcon } from '@/app/[lang]/_assets/MenuIcons'
import { GitHubIcon } from '@/app/[lang]/_assets/TechnologiesIcons'
import { InstagramIcon } from '@/app/[lang]/_assets/MenuIcons'
import { LinkedinIcon } from '@/app/[lang]/_assets/MenuIcons'

import Spinner from '@/app/[lang]/_components/Spinner'

export default function Contact () {
  const { dict } = useContext(TranslationContext)

  const [isLoading, setLoading] = useState(false)
  const [sentEmail, setSentEmail] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const fallbackErrorMessage =
    dict?.contact?.errorMessage ??
    'Ha ocurrido un error al enviar el correo. Por favor, ponte en contacto conmigo a traves de Linkedin.'

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setErrorMessage(null)

    const formData = new FormData(event.currentTarget)
    const formProps = Object.fromEntries(formData)
    const { from, subject, message } = formProps

    const delay = new Promise(resolve => setTimeout(resolve, 2000))

    try {
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

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        const apiMessage =
          typeof data?.message === 'string' ? data.message : fallbackErrorMessage

        setSentEmail(false)
        setErrorMessage(apiMessage)
        return
      }

      setSentEmail(true)
    } catch(e) {
      console.error('Error in handleSubmit:', e)
      setSentEmail(false)
      setErrorMessage(fallbackErrorMessage)
    } finally {
      setLoading(false)
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
          className='flex justify-center md:justify-start'
        >
          <h2 className='text-4xl font-extrabold text-jade-800'>
            {dict?.contact?.shallWeTalk}
          </h2>
        </div>
        <div className='relative w-full max-w-screen-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8'>
          {isLoading && <Spinner />}
          <form className='space-y-6' action='#' onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='from'
                className='block mb-2 text-sm font-medium text-jade-900'
              >
                {dict?.contact?.from}
              </label>
              <input
                type='from'
                name='from'
                id='from'
                className='bg-gray-50 border border-gray-300 text-jade-900 text-sm rounded-lg focus:ring-jade-900/50 focus:border-jade-900/50 focus:outline-none block w-full p-2.5'
                placeholder={dict?.contact?.mailPlaceholder}
                disabled={isLoading || sentEmail}
                required
              />
            </div>
            <div>
              <label
                htmlFor='subject'
                className='block mb-2 text-sm font-medium text-jade-900'
              >
                {dict?.contact?.subject}
              </label>
              <input
                type='subject'
                name='subject'
                id='subject'
                className='bg-gray-50 border border-gray-300 text-jade-900 text-sm rounded-lg focus:ring-jade-900/50 focus:border-jade-900/50 focus:outline-none block w-full p-2.5'
                placeholder={dict?.contact?.subjectPlaceholder}
                disabled={isLoading || sentEmail}
                required
              />
            </div>
            <div>
              <label
                htmlFor='message'
                className='block mb-2 text-sm font-medium text-jade-900'
              >
                {dict?.contact?.message}
              </label>
              <textarea
                name='message'
                id='message'
                className='bg-gray-50 border border-gray-300 text-jade-900 text-sm rounded-lg focus:ring-jade-900/50 focus:border-jade-900/50 focus:outline-none block w-full p-2.5'
                placeholder={dict?.contact?.messagePlaceholder}
                required
                disabled={isLoading || sentEmail}
                rows={3}
              />
            </div>
            <div className='flex flex-col gap-2 xsm:flex-row justify-between items-center'>
              <div>
                <button
                  type='submit'
                  className={`flex items-center justify-center w-full sm:w-fit text-white bg-jade-700 hover:bg-jade-800 focus:ring-4 focus:outline-none focus:ring-jade-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-nowrap ${
                    sentEmail ? 'opacity-50' : ''
                  }`}
                  disabled={isLoading || sentEmail}
                >
                  <SendIcon className='mr-2' />
                  {!sentEmail
                    ? dict?.contact?.sendMessage
                    : dict?.contact?.messageSent}
                </button>
                {(sentEmail || errorMessage) && (
                  <div className='flex p-2'>
                    <span
                      className={`text-xs ${
                        errorMessage ? 'text-red-600' : 'text-gray-500'
                      }`}
                    >
                      {sentEmail && !errorMessage && dict?.contact?.thankYouMessage}
                      {errorMessage}
                    </span>
                  </div>
                )}
              </div>
              <div className='w-full flex flex-col gap-2 sm:flex-row items-center xsm:items-end sm:items-center justify-center xsm:justify-end '>
                <span className='mt-2 xsm:mt-0 bg-green-100 text-jade-800 border border-jade-800 border-opacity-50 text-xs font-medium px-2.5 py-0.5 rounded'>
                  jgonaz.dev@gmail.com
                </span>
                <div className='flex'>
                  <a
                    href='https://linkedin.com/in/jgonaz/'
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
                    <GitHubIcon height='22' width='22' fill={'#126945'} />
                    <span className='sr-only'>GitHub account</span>
                  </a>
                  <a
                    href='https://instagram.com/jorgedelnueve'
                    target='_blank'
                    className='p-2 hover:scale-125 transition-all'
                  >
                    <InstagramIcon fill='#126945' />
                    <span className='sr-only'>Instagram page</span>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
