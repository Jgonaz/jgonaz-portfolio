// Genera los PDF descargables del CV imprimiendo /es/cv y /en/cv con Chrome headless.
// Usa los mismos estilos @media print que el botón «Imprimir», así que el archivo es
// idéntico a lo que el visitante imprimiría. Hay que volver a ejecutarlo cada vez que
// cambie la clave `cv` de los diccionarios.
//
// Uso: pnpm cv:pdf [url-base]   (por defecto http://localhost:3000, con el servidor arrancado)
// Navegador: CHROME_BIN o, si no, google-chrome / chromium del PATH.
import { execFileSync } from 'node:child_process'
import { mkdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const baseUrl = (process.argv[2] ?? 'http://localhost:3000').replace(/\/$/, '')
const outDir = join(process.cwd(), 'public', 'cv')
const locales = ['es', 'en']

const findChrome = () => {
  if (process.env.CHROME_BIN) return process.env.CHROME_BIN
  for (const bin of ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser']) {
    try {
      execFileSync('which', [bin], { stdio: 'ignore' })
      return bin
    } catch {}
  }
  throw new Error('No se ha encontrado Chrome ni Chromium; define CHROME_BIN')
}

const chrome = findChrome()
mkdirSync(outDir, { recursive: true })

// Si el servidor sirve HTML de un build antiguo, su CSS ya no existe y Chrome imprimiría
// la página sin estilos sin dar ningún error: se comprueba antes de generar nada
const assertStylesheets = async url => {
  const html = await (await fetch(url)).text()
  const sheets = [...html.matchAll(/href="([^"]+\.css)"/g)].map(match => match[1])
  if (sheets.length === 0) throw new Error(`${url} no enlaza ninguna hoja de estilos`)
  for (const sheet of sheets) {
    const { ok, status } = await fetch(new URL(sheet, url))
    if (!ok) throw new Error(`${sheet} responde ${status}: reinicia el servidor antes de generar el PDF`)
  }
}

for (const locale of locales) {
  await assertStylesheets(`${baseUrl}/${locale}/cv`)
  const file = join(outDir, `jorge-gonzalez-azpillaga-cv-${locale}.pdf`)
  execFileSync(chrome, [
    '--headless',
    '--disable-gpu',
    '--no-pdf-header-footer',
    // Da tiempo a que carguen las fuentes antes de imprimir
    '--virtual-time-budget=5000',
    `--print-to-pdf=${file}`,
    `${baseUrl}/${locale}/cv`
  ], { stdio: 'ignore' })
  console.log(`${file} (${Math.round(statSync(file).size / 1024)} KB)`)
}
