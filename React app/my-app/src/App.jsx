Props
import { UseState } from 'react';
import './App.css'
import Props from './Component/props/Props';
import UseState from './Component/useEffect';
import UseEffect from './UseEffect';


function App() {
  const name = "Saurabh";

  return (
    <>
      {/* <h1>shivendra </h1>
      <h2>my name is {name}</h2>
      <Props name ={"Vikas"} mob={8948995797}/> */}
      <UseState />
      <UseEffect />
    
     </> 
  
  )
}

export default App
