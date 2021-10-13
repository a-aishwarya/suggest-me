import happy from './happy.jpg';
import suggest from './suggest-me.jpg';
import './App.css';

import Axios from 'axios';
import { useState } from 'react';



function App() {

  
  
  const [task,setTask]=useState();
  
    let getTask=function(){
    Axios.get("https://www.boredapi.com/api/activity").then(
      (response)=>{
        console.log(response);
        setTask(response.data.activity);
      }
    );

  };

  return(
    <div className="App">
    <h1 className="head-align">Hey! Feeling bored and indecisive at the same time? 
      Click below to find out what you can do!</h1>
    <img className="img-cont"  src={suggest} alt="happy" />
    <button className='btn  center-place' onClick={getTask}>Click me!</button>
    <h1 id="final-task" > {task}</h1>
    </div>
  );
}

export default App;
