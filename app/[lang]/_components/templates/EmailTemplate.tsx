interface EmailTemplateProps {
  user: string
  subject: string
  message: string
}

export function EmailTemplate ({
  user,
  subject,
  message
}: Readonly<EmailTemplateProps>) {
  return (
    <div>
      <p>
        El usuario <b>{user}</b> te ha enviado el siguiente mensaje:
      </p>
      <div>
        <h3>{subject}</h3>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default EmailTemplate
