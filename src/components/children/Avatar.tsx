interface Person {
    name: string;
    imageId: string;
}

interface AvatarProps {
    size: number;
    person: Person
}

const Avatar: React.FC<AvatarProps> = ({size, person}) => {
    return(
       <div className="avatar" style={{width: size, height: size}}>
           <img src={`https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?semt=ais_hybrid`} alt={person.name} style={{ width: '100%', height: '100%'}} />
           <span>{person.name}</span>
       </div>
    )
}
export default Avatar;