// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { appendFile } from "fs";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css'
import NavBar from "./components/NavBar";

const ArtWall = () => {
  return (

    <div className="components">
      <NavBar/>
    </div>
  );
};

export default ArtWall;
