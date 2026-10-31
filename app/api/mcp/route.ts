import { i18n, type Locale } from '@/i18n-config'
import type { McpServer } from '@modelcontextprotocol/server'
import { createMcpHandler } from 'mcp-handler'
import { z } from 'zod'

import {
  aiWorkflowText,
  experienceText,
  loadDictionary,
  profileText,
  projectsText,
  skillsText,
  toAiWorkflow,
  toExperience,
  toProfile,
  toProjects,
  toSkills
} from './portfolio-data'

const inputSchema = z.object({
  lang: z
    .enum(i18n.locales)
    .default(i18n.defaultLocale)
    .describe('Content language: "es" (Spanish, default) or "en" (English).')
})

type Dictionary = Awaited<ReturnType<typeof loadDictionary>>

interface ToolDefinition<T> {
  name: string
  title: string
  description: string
  map: (d: Dictionary) => T
  text: (data: T, d: Dictionary) => string
}

// Las descripciones van en inglés porque las leen los modelos de cualquier cliente.
const registerReadOnlyTool = <T extends object>(
  server: McpServer,
  tool: ToolDefinition<T>
) => {
  server.registerTool(
    tool.name,
    {
      title: tool.title,
      description: tool.description,
      inputSchema,
      annotations: { readOnlyHint: true, openWorldHint: false }
    },
    async ({ lang }: { lang: Locale }) => {
      const dictionary = await loadDictionary(lang)
      const data = tool.map(dictionary)
      return {
        content: [{ type: 'text' as const, text: tool.text(data, dictionary) }],
        structuredContent: { ...data }
      }
    }
  )
}

const handler = createMcpHandler(
  (server) => {
    registerReadOnlyTool(server, {
      name: 'get_profile',
      title: 'Profile',
      description:
        'Overview of Jorge González Azpillaga, Senior Front-End & AI Engineer: headline, location, professional summary, spoken languages, education and public links (website, email, LinkedIn, GitHub). Start here.',
      map: toProfile,
      text: profileText
    })
    registerReadOnlyTool(server, {
      name: 'get_experience',
      title: 'Work experience',
      description:
        "Jorge's work history, most recent first: company, role, location, period, technologies and key achievements.",
      map: toExperience,
      text: experienceText
    })
    registerReadOnlyTool(server, {
      name: 'get_projects',
      title: 'Projects',
      description:
        "Jorge's own projects (products in production and open source), with URL, description and technologies.",
      map: toProjects,
      text: projectsText
    })
    registerReadOnlyTool(server, {
      name: 'get_skills',
      title: 'Skills',
      description:
        "Jorge's technical skills grouped by area: agentic engineering, AI tools, front-end, back-end, testing and deployment, UI/UX.",
      map: toSkills,
      text: skillsText
    })
    registerReadOnlyTool(server, {
      name: 'get_ai_workflow',
      title: 'How Jorge works with AI',
      description:
        'How Jorge develops software with AI agents: the flow of a change, his working principles and real cases (team harness and open source personal harness).',
      map: toAiWorkflow,
      text: aiWorkflowText
    })
  },
  {
    serverInfo: { name: 'jgonaz-portfolio', version: '1.0.0' },
    instructions:
      'Read-only access to Jorge González Azpillaga\'s professional portfolio (jgonaz.dev). Use the tools to answer questions about his profile, experience, projects, skills and AI-driven way of working. Pass lang="en" for English.'
  }
)

export { handler as DELETE, handler as GET, handler as POST }
