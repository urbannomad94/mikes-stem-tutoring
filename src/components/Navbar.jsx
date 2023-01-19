import { FaFlask } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className='nav-container'>
        <div className="nav-logo">
            <FaFlask style={{height: '30px'}} />
            <h1>Mike's STEM Tutoring Services</h1>
        </div>
        <div className="nav-sections">
            <a href="#">About Me</a>
            <a href="#">Services</a>
            <a href="#">Testimonials</a>
            <a href="#">Prices</a>
            <a href="#">Contact Me</a>
        </div>
    </nav>
  )
}
