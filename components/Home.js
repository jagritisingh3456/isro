import React from 'react'
import './Home.css'
import Earth from './Earth.mp4'

const Home = () => {
  return (
    <header className='home'>
    <div>    
    <video autoPlay loop muted><source src={Earth} type="video/mp4"/></video>
    <div className='main'>
      <img src="https://www.isro.gov.in/media_isro/image/isroBannerG20.png.webp" alt="logo" />
    </div>
      <div className='home-text'>
        <div>
          <p>Here You Can Find Images!!</p>
        </div>
        <form action="">
          <input type="text" placeholder='Search for image'/>
          <button>Search</button>
        </form>
      </div>
    </div>
    </header>
  )
}

export default Home 



// import "./Home.css"
// import Earth from './Earth.mp4'
// import { useState } from "react";
// import ImagePre from './ImagePre';

// export default function Home() {
//   const [search, setSearch] = useState("");
//   const [photos, setPhotos] = useState([]);
//   // useEffect(()=>{
//   //   async function getd(){
//   //     const results = await fetch(`https://images-api.nasa.gov/search?media_type=image&q=${search}`);
//   //     const previews = await results.json();
//   //     setPhotos(previews.collection.items);
//   //   }
//   //   getd()
//   // });
//   return (
//     <header className='home'>
//     <video autoPlay loop muted><source src={Earth} type="video/mp4"/></video>
//     <div className='main'>
//        <img src="https://www.isro.gov.in/media_isro/image/isroBannerG20.png.webp" alt="logo" />
//      </div>
//      <div className='home-text'>
//           <p>
//               Here you can find photos of our planet, the other planets and galaxies too!
//           </p>
//           <div className='tit'>
//           <input
//               autoComplete="off"
//               onChange={(e) => setSearch(e.target.value)}
//               type="text"
//               placeholder="Search for an image">
//             </input>
//             <button
//              onClick= {
//               async () => {
//                 if(search === ""){
//                   setPhotos([])
//                 }
//                 else{
//                   const results = await fetch(
//                     `https://images-api.nasa.gov/search?media_type=image&q=${search}&page=2`
//                   );
//                   const previews = await results.json();
//                   setPhotos(previews.collection.items.slice(0, 15));
//                 }
//                 }
//             }>  Search
//             </button></div>

//             <div className='frame'>
//             {              
//               photos.map((pre) =>
//               <ImagePre 
//               key={pre.data[0].title}
//               nasap={pre.links[0].href}
//               title={pre.data[0].title}
//               description={pre.data[0].description}
//               />
//               )
//             }
//             </div>
//         </div>    
//     </header>
//   )
// }