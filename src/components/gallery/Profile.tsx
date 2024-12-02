import { getImageUrl } from "./utils";


interface ProfileProps {
      name: string;
      imageId: string;
      profession: string;
      awards: string;
      discoveries: string;
  }
  
  const Profile = ({name, imageId, profession, awards, discoveries}:ProfileProps) => {
      return (
          <section className="profile">
            <h2>{name}</h2>
            <img
              className="avatar"
              src={getImageUrl(imageId)}
              alt={name}
              width={70}
              height={70}
            />
            <ul>
              <li>
                  <b>Pofession: {profession}</b>
              </li>
              <li>
                  <b>Award: {awards}</b>
              </li>
              <li>
                  <b>Discoveris: {discoveries}</b>
              </li>
            </ul>
          </section>
        )
      }
      
      export default Profile
      
      
      

      

