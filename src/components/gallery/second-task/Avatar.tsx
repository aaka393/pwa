import { getImageUrl } from './utils.js';

// Define the types for the person object
interface Person {
  name: string;
  imageId: string;
}

// Define the props for the Avatar component
interface AvatarProps {
  person: Person;
  size: number;
}

export const Avatar: React.FC<AvatarProps> = ({ person, size }) => {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
};