import React, { useEffect, useState } from 'react'
import './styles/App.scss';
import { arrayLoop } from './functions/arrayLoop';


function App() {
  const [index, setIndex] = useState(0)
  const list = [1,2,3,4,5]


  const clickFunc = (e) => {    
    arrayLoop(e, list, index, setIndex)     
  }
  // useEffect(() => {    
  //   const testFunction = async () => {      
  //   } 
  //   testFunction()   
  // }, [])

  return (
    <div className="App">
      <h1>React Custom Hooks</h1>
      <h2>In Github</h2>       
      
      <button name="prev" onClick={clickFunc}>prev</button>
      <br/>
      <button name="next" onClick={clickFunc}>next</button>
    </div>
  );
}

export default App;
