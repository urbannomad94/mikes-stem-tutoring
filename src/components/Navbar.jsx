import { FaFlask } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav id="top" className='nav-container'>
      <a href="#top" className="nav-logo">
        <FaFlask />
        <h1>Mike's STEM Tutoring Services</h1>
      </a>
      <div className="nav-sections">
        <a href="#">About Me</a>
        <a href="#">Services</a>
        <a href="#">Testimonials</a>
        <a href="#">Prices</a>
        <a href="#contact">Contact Me</a>
      </div>
    </nav>
  )
}
