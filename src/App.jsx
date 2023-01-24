import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { ServicesAndPrices } from './components/ServicesAndPrices';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';

function App() {

  return (
    <div>
      <Navbar />
      <About />
      <Testimonials />
      <ServicesAndPrices />
      <ContactForm />
    </div>
  )
}

export default App
