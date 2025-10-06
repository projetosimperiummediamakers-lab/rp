import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Testimonials from './components/Testimonials';
import Offer from './components/Offer';
import Guarantee from './components/Guarantee';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header isScrolled={false} />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Testimonials />
        <Offer />
        <Guarantee />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

export default App
