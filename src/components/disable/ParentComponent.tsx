import React, { memo } from 'react';

interface MyComponentProps {
    value: number;
  }

// A functional component wrapped with React.memo
const MyComponent = memo(({ value } : MyComponentProps) => {
  console.log('Rendering MyComponent');
  return <div>{value}</div>;
});

// Parent component
export const ParentComponent:React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <MyComponent value={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
