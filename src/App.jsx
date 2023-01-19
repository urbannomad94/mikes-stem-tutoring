import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Prices } from './components/Prices';
import { ContactForm } from './components/ContactForm';

function App() {

  return (
    <div>
      <Navbar />
      <About />
      <Services />
      <Testimonials />
      <Prices />
      <ContactForm />
    </div>
  )
}

export default App
