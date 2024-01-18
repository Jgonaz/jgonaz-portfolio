import { EmailTemplate } from '@/app/[lang]/_components/templates/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST (req: any) {
  const data = await req.json()

  try {
    const { from, subject, message } = data as {
      from: string
      subject: string
      message: string
    }

    const response = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['jgonaz.dev@gmail.com'],
      subject: subject,
      react: EmailTemplate({
        user: from,
        subject: subject,
        message: message
      }),
      text: ''
    })

    return Response.json(response)
  } catch (error) {
    return Response.json({ error })
  }
}
