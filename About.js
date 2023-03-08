import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className='about'>
    <div className='main'> 
      <img src="https://pbs.twimg.com/media/FZ7yb4uaMAAculW?format=jpg&name=small" alt="logo" /> 
    </div>
      <div className='about-text'>  
        <h2>About</h2>
        <h5>Vikram Sarabhai</h5>
         <p>
         Indian Space Research Organisation (ISRO) is the space agency of India. The organisation is involved in science, engineering and technology to harvest the 
         benefits of outer space for India and the mankind. ISRO is a major constituent of the Department of Space (DOS), Government of India. The department 
         executes the Indian Space Programmeprimarily through various Centres or units within ISRO.<br/>
         ISRO was previously  the Indian National Committee for Space Research (INCOSPAR), set up by the Government of India in 1962, as envisioned by Dr. VikramA 
         Sarabhai. ISRO was formed on August 15, 1969 and superseded INCOSPAR with an expanded role to harness space technology. DOS was set up and ISRO was
         brought under DOS in 1972.<br/>
         Vikram Ambalal Sarabhai (12 August 1919 – 30 December 1971) was an Indian physicist and astronomer who initiated space research and helped develop nuclear 
         power in India. He was honoured with Padma Bhushan in 1966 and the Padma Vibhushan (posthumously) in 1972. He is internationally regarded as the Father 
         of the Indian Space Program.</p>
        <button type='button'><a href="#">more</a></button>
      </div>
    </section>
  )
}

export default About


