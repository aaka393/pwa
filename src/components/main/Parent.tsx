import { MyButton } from "./MyButton";
export default function Parent() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton title="I'm a disabled button" disabled={true}/>
      </div>
    );
  }