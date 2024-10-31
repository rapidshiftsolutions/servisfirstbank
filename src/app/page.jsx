
import Hero from '@/components/nj_hero'
import  Footer  from '@/components/nj_footer'
import  Navbar  from '@/components/nj_navbar'

export const metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main>
      <Hero />
      </main>
      <Footer />
    </div>
  )
}
