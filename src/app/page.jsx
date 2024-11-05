import Footer from '@/components/nj_footer'
import Hero from '@/components/nj_hero'
import Intro from '@/components/nj_intro'
import Navbar from '@/components/nj_navbar'
import QuickNav from '@/components/nj_quicknav'
import BankServices from '@/components/nj_services'

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
        <Intro />
        <BankServices />
      </main>
      <Footer />
    </div>
  )
}
