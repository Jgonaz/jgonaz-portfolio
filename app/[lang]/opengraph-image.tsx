import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { getDictionary } from '@/app/i18n/get-dictionary'
import { i18n, Locale } from '@/i18n-config'

const size = { width: 1200, height: 630 }

// Satori no admite woff2: sin User-Agent, Google Fonts sirve la fuente en TTF
const loadOnest = async (weight: 400 | 800) => {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Onest:wght@${weight}`
  ).then(res => res.text())
  const url = css.match(/src: url\((.+?)\) format\('truetype'\)/)?.[1]
  if (!url) throw new Error(`No se ha encontrado la fuente Onest ${weight}`)
  return fetch(url).then(res => res.arrayBuffer())
}

export function generateStaticParams () {
  return i18n.locales.map(lang => ({ lang }))
}

// Permite traducir el alt, que como export estático sería igual en ambos idiomas
export async function generateImageMetadata ({
  params
}: {
  params: Promise<{ lang: string }> | { lang: string }
}) {
  const { lang } = await params
  const { metadata } = await getDictionary(lang as Locale)
  return [{ id: 'cover', alt: metadata.ogAlt, size, contentType: 'image/png' }]
}

export default async function Image ({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)
  const [regular, extraBold, photo] = await Promise.all([
    loadOnest(400),
    loadOnest(800),
    readFile(join(process.cwd(), 'public/images/profile.png'))
  ])
  const photoSrc = `data:image/png;base64,${photo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          fontFamily: 'Onest',
          backgroundColor: '#effef7',
          backgroundImage:
            'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(67,229,160,0.45), rgba(255,255,255,0))'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 44
          }}
        >
          <div style={{ fontSize: 30, color: '#11563a' }}>{dict.home.hi}</div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.15,
              backgroundImage: 'linear-gradient(135deg, #03301f, #108554, #1acd81)',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Jorge González Azpillaga
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 14,
              padding: '8px 26px',
              borderRadius: 999,
              backgroundColor: '#11563a',
              color: '#effef7',
              fontSize: 30,
              fontWeight: 800
            }}
          >
            Front-End & AI Engineer
          </div>
          <div style={{ marginTop: 14, fontSize: 26, color: '#11563a' }}>
            {dict.home.rotatingPhrases[1]}
          </div>
        </div>
        <img
          src={photoSrc}
          width={330}
          height={330}
          alt=''
          style={{ position: 'absolute', bottom: 0 }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 26,
            backgroundImage: 'linear-gradient(90deg, #11563a, #1acd81, #11563a)'
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Onest', data: regular, weight: 400, style: 'normal' },
        { name: 'Onest', data: extraBold, weight: 800, style: 'normal' }
      ]
    }
  )
}
