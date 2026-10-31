import { getDictionary } from '@/app/i18n/get-dictionary'
import {
  CONTACT_EMAIL,
  FULL_NAME,
  GITHUB_URL,
  HARNESS_REPO_URL,
  LINKEDIN_URL,
  SITE_URL
} from '@/app/utils/constants'
import type { Locale } from '@/i18n-config'

// Esta capa fija el contrato público del MCP: las herramientas exponen estas
// formas, no las claves de los diccionarios. Si los diccionarios se
// reorganizan, solo cambia el mapeo.

type Dictionary = Awaited<ReturnType<typeof getDictionary>>

export interface Profile {
  name: string
  headline: string
  location: string
  summary: string
  languages: { name: string; level: string }[]
  languagesNote: string
  education: { degree: string; institution: string; period: string }[]
  links: { website: string; email: string; linkedin: string; github: string }
}

export interface Experience {
  positions: {
    company: string
    role: string
    location: string
    period: string
    focus?: string
    technologies?: string
    highlights: string[]
  }[]
}

export interface Projects {
  projects: {
    name: string
    url: string
    description: string
    technologies?: string
  }[]
}

export interface Skills {
  skills: { area: string; items: string }[]
}

export interface AiWorkflow {
  summary: string
  flow: { step: string; description: string }[]
  principles: { title: string; description: string }[]
  cases: {
    title: string
    type: string
    description: string
    tags: string[]
    note?: string
    repository?: string
  }[]
}

export const toProfile = (d: Dictionary): Profile => ({
  name: FULL_NAME,
  headline: d.cv.headline,
  location: d.cv.location,
  summary: d.cv.profile,
  languages: d.cv.languages.items.map(({ name, level }) => ({ name, level })),
  languagesNote: d.cv.languages.note,
  education: d.cv.education.map(({ degree, institution, period }) => ({
    degree,
    institution,
    period
  })),
  links: {
    website: SITE_URL,
    email: CONTACT_EMAIL,
    linkedin: LINKEDIN_URL,
    github: GITHUB_URL
  }
})

export const toExperience = (d: Dictionary): Experience => ({
  positions: d.cv.experience.map((job) => ({
    company: job.company,
    role: job.role,
    location: job.location,
    period: job.period,
    focus: 'function' in job ? job.function : undefined,
    technologies: 'tech' in job ? job.tech : undefined,
    highlights: job.bullets
  }))
})

export const toProjects = (d: Dictionary): Projects => ({
  projects: d.cv.projects.map((project) => ({
    name: project.name,
    url: project.url,
    description: project.description,
    technologies: 'tech' in project ? project.tech : undefined
  }))
})

export const toSkills = (d: Dictionary): Skills => ({
  skills: d.cv.skills.map(({ label, value }) => ({ area: label, items: value }))
})

export const toAiWorkflow = (d: Dictionary): AiWorkflow => {
  const { team, personal } = d.ai.cases
  return {
    summary: d.ai.subtitle,
    flow: d.ai.steps.map(({ title, description }) => ({ step: title, description })),
    principles: d.ai.principles.map(({ title, description }) => ({ title, description })),
    cases: [
      {
        title: team.title,
        type: team.badge,
        description: team.description,
        tags: team.tags,
        note: team.note
      },
      {
        title: personal.title,
        type: personal.badge,
        description: personal.description,
        tags: personal.tags,
        repository: HARNESS_REPO_URL
      }
    ]
  }
}

// Resúmenes en Markdown para los clientes que no leen structuredContent.
// Los títulos de sección salen de los diccionarios para respetar el idioma.

const list = (items: string[]) => items.map((item) => `- ${item}`).join('\n')

export const profileText = (p: Profile, d: Dictionary) =>
  [
    `# ${p.name}`,
    `${p.headline} · ${p.location}`,
    p.summary,
    `## ${d.cv.labels.languages}`,
    list(p.languages.map((l) => `${l.name}: ${l.level}`)) + `\n${p.languagesNote}`,
    `## ${d.cv.labels.education}`,
    list(p.education.map((e) => `${e.degree} — ${e.institution} (${e.period})`)),
    '## Links',
    list(Object.values(p.links))
  ].join('\n\n')

export const experienceText = (e: Experience, d: Dictionary) =>
  [
    `# ${d.cv.labels.experience}`,
    ...e.positions.map((job) =>
      [
        `## ${job.role} · ${job.company}`,
        `${job.period} · ${job.location}`,
        job.focus,
        job.technologies,
        list(job.highlights)
      ]
        .filter(Boolean)
        .join('\n')
    )
  ].join('\n\n')

export const projectsText = (p: Projects, d: Dictionary) =>
  [
    `# ${d.cv.labels.projects}`,
    ...p.projects.map((project) =>
      [`## ${project.name}`, project.url, project.description, project.technologies]
        .filter(Boolean)
        .join('\n')
    )
  ].join('\n\n')

export const skillsText = (s: Skills, d: Dictionary) =>
  [
    `# ${d.cv.labels.skills}`,
    list(s.skills.map((skill) => `**${skill.area}**: ${skill.items}`))
  ].join('\n\n')

export const aiWorkflowText = (a: AiWorkflow, d: Dictionary) =>
  [
    `# ${d.ai.title}`,
    a.summary,
    `## ${d.ai.flowTitle}`,
    a.flow.map((s, i) => `${i + 1}. **${s.step}**: ${s.description}`).join('\n'),
    '## Principles',
    list(a.principles.map((pr) => `**${pr.title}**: ${pr.description}`)),
    ...a.cases.map((c) =>
      [
        `## ${c.title} (${c.type})`,
        c.description,
        c.tags.join(', '),
        c.note,
        c.repository
      ]
        .filter(Boolean)
        .join('\n')
    )
  ].join('\n\n')

export const loadDictionary = (lang: Locale) => getDictionary(lang)
