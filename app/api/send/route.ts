import { EmailTemplate } from '@/app/[lang]/_components/templates/EmailTemplate'
import { CONTACT_EMAIL } from '@/app/utils/constants'
import { render } from '@react-email/render'
import nodemailer from 'nodemailer'

type SendPayload = {
  from: string
  subject: string
  message: string
}

const ERROR_MESSAGE =
  'Ha ocurrido un error al enviar el correo. Por favor, ponte en contacto conmigo a traves de Linkedin.'

export const runtime = 'nodejs'

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

function getSmtpConfig () {
  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null

  const port = Number(process.env.SMTP_PORT ?? 587)

  if (!Number.isInteger(port) || port <= 0) return null

  return {
    host: SMTP_HOST,
    port,
    secure: process.env.SMTP_SECURE === 'true' || port === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  }
}

export async function POST (req: Request) {
  try {
    const body: unknown = await req.json()

    if (!isValidPayload(body)) {
      return Response.json({ message: 'Invalid payload' }, { status: 400 })
    }

    const smtpConfig = getSmtpConfig()

    if (!smtpConfig) {
      return Response.json({ message: ERROR_MESSAGE }, { status: 500 })
    }

    const { from, subject, message } = body
    const email = EmailTemplate({
      user: from,
      subject,
      message
    })
    const html = await render(email)
    const text = await render(email, { plainText: true })
    const transporter = nodemailer.createTransport(smtpConfig)

    const response = await transporter.sendMail({
      from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
      to: process.env.CONTACT_TO ?? CONTACT_EMAIL,
      replyTo: from,
      subject,
      html,
      text
    })

    return Response.json({ message: 'Email sent', messageId: response.messageId })
  } catch (error) {
    console.error('Error sending email:', error)
    return Response.json({ message: ERROR_MESSAGE }, { status: 500 })
  }
}
