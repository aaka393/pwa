import { MyButtonProps } from "./interface";
  
  export function MyButton({ title, disabled }: MyButtonProps) {
    return (
      <button disabled={disabled}>{title}</button>
    );
  }