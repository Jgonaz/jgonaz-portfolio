// Forma de la clave `cv` de los diccionarios (es.json y en.json deben coincidir)
export interface CvDictionary {
  metadata: { title: string; description: string }
  headline: string
  location: string
  bar: { navLabel: string; back: string; language: string; print: string; download: string }
  labels: {
    profile: string
    skills: string
    experience: string
    projects: string
    education: string
    languages: string
  }
  profile: string
  skills: { label: string; value: string }[]
  experience: {
    company: string
    role: string
    location: string
    period: string
    function?: string
    tech?: string
    bullets: string[]
  }[]
  projects: { name: string; url: string; description: string; tech?: string }[]
  education: { degree: string; institution: string; period: string }[]
  languages: { items: { name: string; level: string }[]; note: string }
}
