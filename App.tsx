import * as React from 'react';
import { useState } from 'react';
import './style.css';

/** example 1 */
// const App: React.FC = () => {
//   // const [counter, setCounter] = useState(0);
//   const [counter, setCounter] = useState<number>(); //如果不指定初始值

//   const btnClickHandler = (): void => {
//     if (counter !== undefined) {
//       setCounter(counter + 1);
//     } else {
//       setCounter(0);
//     }
//   };

//   return (
//     <div>
//       <p>Counter: {counter}</p>
//       <button onClick={btnClickHandler}>+1</button>
//     </div>
//   );
// };

/** example 2 batching update 避免不必要的渲染 */
// const App: React.FC = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div onClick={() => setCount((prev) => prev + 1)}>
//       Parent Clicked {count} times.
//       <br />
//       <br />
//       <Child />
//     </div>
//   );
// };

// const Child: React.FC = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Child Click {count} times.
//     </button>
//   );
// };

/** example 3 */
function App() {
  const [counter, setCount] = useState(0);

  const handleClick = () => {
    function cb(prev: number) {
      return prev + 1;
    }
    setCount(cb);
    setCount(cb);
  };

  return (
    <div className="App">
      <h1>Counter 組件</h1>
      <div>Counter: {counter}</div>
      <br />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
