// import React from 'react';
// import { getImageUrl } from './utils';


// const Gallery: React.FC = () => {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <section className="profile">
//         <h2>Maria Skłodowska-Curie</h2>
//         <img
//           className="avatar"
//           src={getImageUrl('szV5sdG')}
//           alt="Maria Skłodowska-Curie"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b> 
//             physicist and chemist
//           </li>
//           <li>
//             <b>Awards: 4 </b> 
//             (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             polonium (chemical element)
//           </li>
//         </ul>
//       </section>
//       <section className="profile">
//         <h2>Katsuko Saruhashi</h2>
//         <img
//           className="avatar"
//           src={getImageUrl('YfeOqp2')}
//           alt="Katsuko Saruhashi"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b> 
//             geochemist
//           </li>
//           <li>
//             <b>Awards: 2 </b> 
//             (Miyake Prize for geochemistry, Tanaka Prize)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             a method for measuring carbon dioxide in seawater
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Gallery;



import Profile from "./Profile"

const Gallery = () => {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name='Maria Skłodowska-Curie'
        imageId='szV5sdG'
        profession='physicist and chemist'
        awards='(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)'
        discoveries='polonium (chemical element)'
      />
      <Profile
        name='Katsuko Saruhashi'
        imageId='YfeOqp2'
        profession='geochemist'
        awards='(Miyake Prize for geochemistry, Tanaka Prize)'
        discoveries='polonium (chemical element)' />
    </div>
  )
}

export default Gallery




