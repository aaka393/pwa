// Define the interface for the person object
interface Person {
    imageId: string;
  }
  
  // Define the function with types
  export function getImageUrl(person: Person, size: string): string {
    return `https://i.imgur.com/${person.imageId}${size}.jpg`;
  }
  