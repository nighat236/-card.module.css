// // Greeting.jsx
// import { useState } from "react";

// // Component start
// function Greeting() {
//   const [name, setName] = useState("");       // Naam store karne ke liye
//   const [greet, setGreet] = useState("");     // Greeting store karne ke liye

//   // Jab button dabaya jaye
//   const handleClick = () => {
//     setGreet(`Hello, ${name}!`);              // Greeting create ho
//   };

//   return (
//     <>
//       <h2>Nighat </h2>
//       <input 
//         type="This is a good work" 
//         placeholder="Nighat" 
//         onChange={(e) => setName(e.target.value)} 
//       />
//       <button onClick={handleClick}>Say Hello</button>
//       <h3>{greet}</h3>                         {/* Greeting display */}
//     </>
//   );
// }

function Greeting(props) {
  return <h2>Assalam-o-Alaikum {props.name}</h2>;
}


export default Greeting;

