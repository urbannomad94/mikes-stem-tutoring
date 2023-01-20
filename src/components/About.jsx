import headshot from '../assets/headshot.jpeg';

export const About = () => {
  return (
    <section id="about">
      <h1 className='section-heading'>About Me</h1>
      <div className='about-flex'>
        <img src={headshot} alt="headshot" className='headshot' />
        <div className='about-desc'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nostrum alias laboriosam quae tempora asperiores ex perspiciatis? Possimus, distinctio mollitia ipsa impedit ex assumenda totam corrupti. Laborum nemo est officia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nostrum alias laboriosam quae tempora asperiores ex perspiciatis? Possimus, distinctio mollitia ipsa impedit ex assumenda totam corrupti. Laborum nemo est officia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nostrum alias laboriosam quae tempora asperiores ex perspiciatis? Possimus, distinctio mollitia ipsa impedit ex assumenda totam corrupti. Laborum nemo est officia.</p>
        </div>
      </div>
    </section>
  )
}
