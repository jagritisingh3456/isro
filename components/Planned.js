import React, { useState } from "react";
import './Planned.css';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="">
      {isReadMore ? text.slice(0, 35) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "more" : " show less"}
      </span>
    </p>
  );
};

const Astronomy = () => {
  return (
    <section className='upcomingMission'>
        <div className="image">
        <img src="https://tse1.mm.bing.net/th?id=OIP.o5tkKAk2wAcTjT1BeMwA4AHaEK&pid=Api&P=0" alt="logo" />
      </div>
      <div className="text">
       <h5>Aditya-L1</h5>
      <p>
        <ReadMore>
           This is India's first mission for solar observation and currently, It is being developed by ISRO and various other Indian research institutes. it is Expected to launch in March 2023.
           Aditya L1 shall be the first space based Indian mission to study the Sun. The spacecraft shall be placed in a halo orbit around the Lagrange point 1 (L1) of the Sun-Earth system, which is 
           about 1.5 million km from the Earth. A satellite placed in the halo orbit around the L1 point has the major advantage of continuously viewing the Sun without any occultation/eclipses. This will 
           provide a greater advantage of observing the solar activities and its effect on space weather in real time. The spacecraft carries seven payloads to observe the photosphere, chromosphere and 
           the outermost layers of the Sun (the corona) using electromagnetic and particle and magnetic field detectors. Using the special vantage point L1, four payloads directly view the Sun and the remaining
           three payloads carry out in-situ studies of particles and fields at the Lagrange point L1, thus providing important scientific studies of the propagatory effect of solar dynamics in the interplanetary medium
        </ReadMore> 
      </p>
      </div>

      <div className="imag">
        <img src="https://tse2.mm.bing.net/th?id=OIP.s_RcaHAcC1Rtqs01NSxSnQHaFj&pid=Api&P=0" alt="logo"/>
      </div>
      <div className="text">
       <h5>Chandrayaan-3</h5>
      <p>
        <ReadMore>
           July 2023
           Expected to launch in mid-2023 , the Chandrayaan-3 is the successor of Chandrayaan-2.
           Mission repeat of Chandrayaan-2 with lander, rover, and a propulsion module to attempt a soft landing of the lunar surface.
           It will not have an orbiter, but its propulsion module will behave like a communications relay satellite. The spacecraft is scheduled to be launched in June 2023.
        </ReadMore> 
      </p>
      </div>

      <div className="image">
        <img src="https://tse3.mm.bing.net/th?id=OIP.5Adlp7e6ZiQZUgCHuelNNgAAAA&pid=Api&P=0" alt="logo" />
      </div>
      <div className="text">
       <h5>Shukrayaan-1</h5>
      <p>
        <ReadMore>
             The Indian Venusian orbiter mission is a planned orbiter to a Venus by the Indian Space Research Organization (ISRO) to study the atmosphere of Venus.
             Funds were released in 2017 to complete preliminary studies, and solicitations for instruments have been announced. The orbiter, depending on its final configuration, would have a science payload capability of approximately 100 kilograms (220 lb) with 500  available power. The initial elliptical orbit around Venus is expected to have 500 km (310 mi) at periapsis and 60,000 km (37,000 mi) at apoapsis.
        </ReadMore> 
      </p>
      </div>

      <div className="image">
        <img src="https://tse3.mm.bing.net/th?id=OIP.qExhM1_awPmTPkcrhSP8ggHaFj&pid=Api&P=0" alt="logo"/>
      </div>
      <div className="text">
       <h5>Mangalyaan 2</h5>
      <p>
        <ReadMore>
            Mars Orbiter Mission 2 (MOM 2) also called Mangalyaan-2 ("Mars-craft", from Sanskrit: मंगल mangal, "Mars" and यान yān, "craft, vehicle"), is India's second interplanetary mission planned by the Indian Space Research Organisation (ISRO). In a recorded interview in October 2019, Vikram Sarabhai Space Centre (VSSC) director indicated possibility of inclusion of a lander but in an interview to 
            The Times Of India in February 2021 ISRO chairman clarified that the mission will consist of only an orbiter. The orbiter will use aerobraking to lower its initial apoapsis and enter into an orbit more suitable for observations.
            The Indian Space Research Organization plans to launch this mission by 2025. The mission will include a hyperspectral camera, a high resolution panchromatic camera and a radar to understand early Martian crust, recent basalts and boulder falls. The mission is proposed to be followed by another, including soft landing on Mars in 2030.
        </ReadMore> 
      </p>
      </div> 


      <div className="image">
        <img src="https://tse2.mm.bing.net/th?id=OIP.xMegLjVEY7Y8eiHWKZ6I3QHaE7&pid=Api&P=0" alt="logo"/>
      </div>
      <div className="text">
       <h5>AstroSat-2</h5>
      <p>
        <ReadMore>
        AstroSat-2 is India's second dedicated multi-wavelength space telescope, proposed by the Indian Space Research Organization (ISRO) as the successor of the current Astrosat-1 observatory. ISRO launched an 'Announcement of Opportunity in February 2018 requesting proposals from Indian scientists for ideas and the development of instruments for astronomy and astrophysics.
        </ReadMore> 
      </p>
      </div>


      <div className="image">
        <img src="https://tse2.mm.bing.net/th?id=OIP.CxzW4Tb9n2zqSVzzDHHt_gHaD3&pid=Api&P=0" alt="logo" />
      </div>
      <div className="text">
       <h5>Gaganyaan 3</h5>
      <p>
        <ReadMore>
        (Sanskrit IAST: gagan-yāna, transl. "Space Craft") is an Indian crewed orbital spacecraft intended to be the formative spacecraft of the Indian Human Spaceflight Programme. The spacecraft is being designed to carry three people, and a planned upgraded version will be equipped with rendezvous and docking capability. In its maiden crewed mission, Indian Space Research Organisation (ISRO)'s largely autonomous 5.3 metric tonnes capsule will orbit the Earth at 400 km altitude for up to seven days with a two or three-person crew on board. The first crewed mission was originally planned to be launched on ISRO's LVM3 in December 2021, but this has since been delayed due to lockdown to no earlier than 2024.
        </ReadMore> 
      </p>
      </div>


    </section>
  )
}

export default Astronomy