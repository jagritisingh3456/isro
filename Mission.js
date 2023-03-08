import React, { useState } from "react";
import './Mission.css';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 142) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "more" : " show less"}
      </span>
    </p>
  );
};

const Astronomy = () => {
  return (
    <section className='mission'>
        <div className="image">
        <img src="https://tse4.mm.bing.net/th?id=OIP.ryRIbYv_ivdMBbgfWnfmtgHaEg&pid=Api&P=0" alt="logo" />
      </div>
      <div className="chand-text">
       <h5>chandrayaan-1</h5>
      <p>
        <ReadMore>
        Chandrayaan, series of Indian lunar space probes. Chandrayaan-1 (chandrayaan is Hindi for “moon craft”) was the first lunar space probe of the Indian Space Research Organisation (ISRO) and found water on the Moon. It mapped the Moon in infrared, visible, and X-ray light from lunar orbit and used reflected radiation to prospect for various elements, minerals, and ice. It operated in 2008-09. Chandrayaan-2, which launched in 2019, 
        was designed to be ISRO's first lunar lander.

        A Polar Satellite Launch Vehicle launched the 590-kg (1,300-pound) Chandrayaan-1 on October 22, 2008, from the Satish Dhawan Space Centre on Sriharikota Island, Andhra Pradesh state. The probe then was boosted into an elliptical polar orbit around the Moon, 504 km (312 miles) high at its closest to the lunar surface and 7,502 km (4,651 miles) at its farthest. After checkout, it descended to a 100-km (60-mile) orbit. On November 
        14, 2008, Chandrayaan-1 launched a small craft, the Moon Impact Probe (MIP), that was designed to test systems for future landings and study the thin lunar atmosphere before crashing on the Moon's surface. MIP impacted near the south pole, but, before it crashed, it discovered small amounts of water in the Moon's atmosphere.
        </ReadMore> 
      </p>
      </div>

      <div className="image">
        <img src="https://tse3.mm.bing.net/th?id=OIP.eq8dWwBjFVkzc120x2N7WQHaEF&pid=Api&P=0" alt="logo"/>
      </div>
      <div className="chand-text">
       <h5>mars orbiter mission</h5>
      <p>
        <ReadMore>
        Mars Orbiter Mission (MOM), also called Mangalyaan (Hindi: “Mars Craft”), unmanned mission to Mars that is India's first interplanetary spacecraft. The Indian Space Research Organisation (ISRO) launched the Mars Orbiter Mission on November 5, 2013, using its Polar Satellite Launch Vehicle (PSLV) from the Satish Dhawan Space Centre on Sriharikota Island, Andhra Pradesh state.

       The Indian government approved the Mars Orbiter Mission (MOM) project in August 2012, a mere 15 months before launch. ISRO was able to keep mission costs down by basing MOM’s design on that of Chandrayaan-1, India’s first Moon probe. Because the PSLV did not have the power to place the 1,350-kg (3,000-pound) probe on a direct trajectory, the spacecraft used low-power 
       thrusters to raise its orbit over a period of four weeks until it broke free of Earth’s gravity on December 1 and headed to Mars. It arrived at Mars on September 24, 2014, and the spacecraft entered a highly elliptical orbit of 423 × 80,000 km (262 × 50,000 miles), which allows it to take pictures of one entire Martian hemisphere at a time. The spacecraft’s instruments 
       are a colour camera, a thermal infrared sensor, an ultraviolet spectrometer to study deuterium and hydrogen in Mars’s upper atmosphere, a mass spectrometer to study neutral particles in the Martian exosphere, and a sensor for methane. (Methane’s presence may indicate, but not necessarily confirm, life.) MOM arrived at Mars in time to observe Comet 
       Siding Spring when it flew by the planet at a distance of 132,000 km (82,000 miles) on October 19, 2014. 
        </ReadMore> 
      </p>
      </div>

      <div className="image">
        <img src="https://www.businessinsider.in/photo/67634701/isro-launches-satellite-to-keep-an-eye-on-pakistan-china-and-bangladesh.jpg?1832100" alt="logo" />
      </div>
      <div className="chand-text">
       <h5>satellites</h5>
      <p>
        <ReadMore>
        The Indian Space Research Organization (ISRO) achieved a major milestone last night (Feb. 14) with a successful record-setting launch of 104 satellites on a single rocket.

        The Polar Satellite Launch Vehicle (PSLV) blasted off from India's Satish Dhawan Space Centre at 10:58 p.m. EST (0358 GMT on Feb. 15) with three satellites from India and 101 smaller nano satellites (also called nanosats) from five other countries: the U.S., the Netherlands, Israel, Kazakhstan and Switzerland. This number crushes the previous record of 37 satellites sent into orbit aboard a single Russian Dnepr rocket in June 2014.

        With a combined payload of about 3,040 lbs. (1,380 kilograms), the mission aims to launch the Cartosat-2 series satellite for Earth observation and the other 103 spacecraft into polar sun-synchronous orbit at an altitude of 314 miles (505 kilometers), ISRO officials said.
        
        </ReadMore> 
      </p>
      </div>

      <div className="image">
        <img src="https://tse2.mm.bing.net/th?id=OIP.cBxOrexwdh5WJI122p1mCgHaEK&pid=Api&P=0" alt="logo"/>
      </div>
      <div className="chand-text">
       <h5>chandrayaan-2</h5>
      <p>
        <ReadMore>
        Chandrayaan-2 mission is a highly complex mission, which represents a significant technological leap compared to the previous missions of ISRO. It comprised an Orbiter, Lander and Rover to explore the unexplored South Pole of the Moon. The mission is designed to expand the lunar scientific knowledge through detailed study of topography, seismography, mineral identification and distribution, 
        surface chemical composition, thermo-physical characteristics of top soil and composition of the tenuous lunar atmosphere, leading to a new understanding of the origin and evolution of the Moon.

        After the injection of Chandrayaan-2, a series of maneuvers were carried out to raise its orbit and on August 14, 2019, following Trans Lunar Insertion (TLI) maneuver, the spacecraft escaped from orbiting the earth and followed a path that took it to the vicinity of the Moon. On August 20, 2019, Chandrayaan-2 was successfully inserted into lunar orbit. While orbiting the moon in a 100 km lunar polar orbit, 
        on September 02, 2019, Vikram Lander was separated from the Orbiter in preparation for landing. Subsequently, two de-orbit maneuvers were performed on Vikram Lander so as to change its orbit and begin circling the moon in a 100 km x 35 km orbit. Vikram Lander descent was as planned and normal performance was observed upto an altitude of 2.1 km. Subsequently communication from lander to the ground stations was lost.

        The Orbiter placed in its intended orbit around the Moon will enrich our understanding of the moon’s evolution and mapping of the minerals and water molecules in Polar regions, using its eight state-of-the-art scientific instruments. The Orbiter camera is the highest resolution camera (0.3 m) in any lunar mission so far and will provide high resolution images which will be immensely useful to the global scientific community. 
        The precise launch and mission management has ensured a long life of almost seven years instead of the planned one year.
        </ReadMore> 
      </p>
      </div> 
    </section>
  )
}

export default Astronomy