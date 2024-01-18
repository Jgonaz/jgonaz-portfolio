interface EmailTemplateProps {
  user: string
  subject: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  user,
  subject,
  message
}) => (
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

export default EmailTemplate
