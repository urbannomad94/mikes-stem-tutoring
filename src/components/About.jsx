import headshot from '../assets/headshot.jpeg';

export const About = () => {
  return (
    <section id="about">
      <h1 className='section-heading'>About Me</h1>
      <div className='about-flex'>
        <img src={headshot} alt="headshot" className='headshot' />
        <div className='about-desc'>
          <p>I have over 25 years of teaching experience in both college and high school education. I am highly experienced in teaching Advanced Placement (AP) and International Baccalaureate (IB) programs, with a deep understanding of the curricula and pedagogy required for success in these rigorous programs. My wealth of experience allows me to effectively engage, explain, guide and support students to reach their full potential. I have a proven track record of helping students achieve their goals and excel in their studies. Overall, I am a seasoned educator who brings a wealth of knowledge, expertise, and passion for science education.</p>
        </div>
      </div>
    </section>
  )
}
