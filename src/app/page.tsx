import Home from './_components/sections/Home'
import Work from './_components/sections/Work'
import Education from './_components/sections/Education'
import Contact from './_components/sections/Contact'
import Waves from './_components/Waves'
import BackToTop from './_components/BackToTop'

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
