import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Connect from "./Components/Connect";


function App() {
  const [active, setActiveState] = useState('Home'); // Renamed state variable to avoid conflict
  function handleActive(classNaam) {
    setActiveState(classNaam);
  }
  const [render, setRender] = useState(1);

  return (
    <>
      <ul>
        <li className={active=='Home'?'active underline':undefined} onClick={()=>{handleActive('Home')}}>Home</li>
        <li className={active=='About'?'active underline':undefined} onClick={()=>{handleActive('About')}}>About</li>
        <li className={active=='Skills'?'active underline':undefined} onClick={()=>{handleActive('Skills')}}>Skills</li>
        <li className={active=='Contact'?'active underline':undefined} onClick={()=>{handleActive('Contact')}}>Contact Me</li>
      </ul>
      {active == 'Home' ? <Home /> : undefined}
      {active == 'About' ? <About /> : undefined}
      {active == 'Skills' ? <Skills /> : undefined}
      {active == 'Contact' ? <Connect /> : undefined}
    </>
  );
}

export default App;
