import type { CvDictionary } from '@/app/[lang]/_interfaces/cvInterface'
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  SITE_URL
} from '@/app/utils/constants'

const CONTACT_LINKS = [
  { href: `mailto:${CONTACT_EMAIL}`, text: CONTACT_EMAIL },
  { href: SITE_URL, text: 'jgonaz.dev' },
  { href: LINKEDIN_URL, text: 'linkedin.com/in/jgonaz' },
  { href: GITHUB_URL, text: 'github.com/Jgonaz' }
]

const displayUrl = (url: string) => url.replace(/^https?:\/\//, '')

// Hoja del CV: una sola hoja continua en pantalla que, al imprimir, se reparte en páginas A4
export default function CvSheet ({ cv }: { cv: CvDictionary }) {
  const { labels } = cv
  return (
    <article className='cv-sheet'>
      <header className='cv-header'>
        <h1>Jorge González Azpillaga</h1>
        <p className='cv-headline'>{cv.headline}</p>
        <p className='cv-contact'>
          {cv.location}
          {CONTACT_LINKS.map(link => (
            <span key={link.href}>
              {' · '}
              <a href={link.href}>{link.text}</a>
            </span>
          ))}
        </p>
      </header>

      <section className='cv-section'>
        <h2>{labels.profile}</h2>
        <p className='cv-text'>{cv.profile}</p>
      </section>

      <section className='cv-section'>
        <h2>{labels.skills}</h2>
        <dl className='cv-skills'>
          {cv.skills.map(skill => (
            <div key={skill.label}>
              <dt>{skill.label}</dt>
              <dd>{skill.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className='cv-section cv-section--experience'>
        <h2>{labels.experience}</h2>
        {cv.experience.map(job => (
          <div key={`${job.company}-${job.period}`} className='cv-item'>
            <div className='cv-row'>
              <h3>
                {job.company} · {job.role}
              </h3>
              <span className='cv-meta'>
                {job.period} · {job.location}
              </span>
            </div>
            {job.function && <p className='cv-function'>{job.function}</p>}
            {job.tech && <p className='cv-tech'>{job.tech}</p>}
            <ul>
              {job.bullets.map(bullet => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className='cv-section cv-section--projects'>
        <h2>{labels.projects}</h2>
        {cv.projects.map(project => (
          <div key={project.url} className='cv-item'>
            <h3>
              {project.name} · <a href={project.url}>{displayUrl(project.url)}</a>
            </h3>
            <p className='cv-text'>{project.description}</p>
            {project.tech && <p className='cv-tech'>{project.tech}</p>}
          </div>
        ))}
      </section>

      <section className='cv-section cv-section--education'>
        <h2>{labels.education}</h2>
        {cv.education.map(item => (
          <div key={item.degree} className='cv-row cv-edu'>
            <p className='cv-text'>
              <strong>{item.degree}</strong> · {item.institution}
            </p>
            <span className='cv-meta'>{item.period}</span>
          </div>
        ))}
      </section>

      <section className='cv-section'>
        <h2>{labels.languages}</h2>
        <p className='cv-text'>
          {cv.languages.items.map((language, index) => (
            <span key={language.name}>
              {index > 0 && ' · '}
              <strong>{language.name}</strong> {language.level}
            </span>
          ))}
          {', '}
          {cv.languages.note}
        </p>
      </section>
    </article>
  )
}
