import { useState } from "react";
import { FaFlask } from "react-icons/fa";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav id="top" className='nav-container'>
      <a href="#top" className="nav-logo">
        <FaFlask />
        <h1>Mike's STEM Tutoring Services</h1>
      </a>
      <a href="#" className='toggle-btn' onClick={() => {
        setMenuOpen(prevState => !prevState)
      }}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <ul className={`nav-sections ${menuOpen ? 'active' : ''}`}>
        <li><a href="#">About Me</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Prices</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </nav>
  )
}
