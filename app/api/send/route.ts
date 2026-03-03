import { EmailTemplate } from '@/app/[lang]/_components/templates/EmailTemplate'
import { Resend } from 'resend'

type SendPayload = {
  from: string
  subject: string
  message: string
}

const CONTACT_TO = 'jgonaz.dev@gmail.com'
const DEFAULT_FROM = 'jgonaz.dev <onboarding@resend.dev>'
const ERROR_MESSAGE =
  'Ha ocurrido un error al enviar el correo. Por favor, ponte en contacto conmigo a traves de Linkedin.'

function isValidPayload (data: unknown): data is SendPayload {
  if (!data || typeof data !== 'object') return false

  const payload = data as Partial<SendPayload>
  return (
    typeof payload.from === 'string' &&
    typeof payload.subject === 'string' &&
    typeof payload.message === 'string' &&
    payload.from.trim().length > 0 &&
    payload.subject.trim().length > 0 &&
    payload.message.trim().length > 0
  )
}

export async function POST (req: Request) {
  try {
    const body: unknown = await req.json()

    if (!isValidPayload(body)) {
      return Response.json({ message: 'Invalid payload' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json({ message: ERROR_MESSAGE }, { status: 500 })
    }

    const { from, subject, message } = body
    const resend = new Resend(process.env.RESEND_API_KEY)

    const response = await resend.emails.send({
      from: process.env.RESEND_FROM ?? DEFAULT_FROM,
      to: [CONTACT_TO],
      subject,
      react: EmailTemplate({
        user: from,
        subject,
        message
      })
    })

    return Response.json(response)
  } catch(e) {
    console.error('Error sending email:', e)
    return Response.json({ message: e || ERROR_MESSAGE }, { status: 500 })
  }
}
