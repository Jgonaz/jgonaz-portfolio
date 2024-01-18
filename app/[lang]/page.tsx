import Home from '@/app/[lang]/_components/sections/Home'
import Work from '@/app/[lang]/_components/sections/Work'
import Education from '@/app/[lang]/_components/sections/Education'
import Contact from '@/app/[lang]/_components/sections/Contact'
import Waves from '@/app/[lang]/_components/Waves'
import BackToTop from '@/app/[lang]/_components/BackToTop'

export default function Page () {
  return (
    <>
      <Home />

      <Waves
        background='var(--color-jade-50)'
        color1='var(--color-jade-200)'
        color2='var(--color-jade-400)'
        color3='var(--color-jade-600)'
        color4='var(--color-jade-900)'
      />

      <Work />
      <Education />

      <Waves
        background='var(--color-jade-900)'
        color1='var(--color-jade-600)'
        color2='var(--color-jade-400)'
        color3='var(--color-jade-200)'
        color4='var(--color-jade-50)'
      />

      <Contact />
      <BackToTop />
    </>
  )
}
