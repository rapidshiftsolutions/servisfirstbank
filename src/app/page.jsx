import Footer from '@/components/nj_footer'
import Hero from '@/components/nj_hero'
import Navbar from '@/components/nj_navbar'
import QuickNav from '@/components/nj_quicknav'

export const metadata = {
  description:
    'ServisFirst Bank helps you sell more by revealing sensitive information about your customers.',
}

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <QuickNav />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
