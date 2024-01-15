import Home from './_components/sections/home'
import Work from './_components/sections/work'
import Education from './_components/sections/education'
import Contact from './_components/sections/contact'
import Waves from './_components/waves'
import BackToTop from './_components/backToTop'

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
