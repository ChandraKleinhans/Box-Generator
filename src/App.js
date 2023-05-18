import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

import Display from './components/Display';
import Box from './components/Box';

function App() {

  const[boxes, setBoxes] = useState([]);
  const [boxDetails, setBoxDetails] = useState({color:""})


  return (
    <div className="App">
      <Display
        boxDetails = {boxDetails}
        setBoxDetails = {setBoxDetails}
        boxes = {boxes}
        setBoxes = {setBoxes}
        />

        {boxes.map(box => <Box color = {box.color}/>)}
    </div>
  );
}

export default App;
