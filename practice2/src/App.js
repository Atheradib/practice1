import logo from './logo.svg';
import './App.css';
import {HeaderSection } from "./Components/A_HeaderSection/HeaderSection"
import { Body } from "./Components/B_BodySection/Body"

function App() {
  return (
    <div className="App">
      <HeaderSection/>
      <hr style={{color:"black"}} />
      <Body/>
      
     
    </div>
  );
}

export default App;
