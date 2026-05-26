import React, { useEffect, useState } from 'react'

function UseEffect() {
    //State Declaration for Timer
    const[timer, setTimer] = useState(0)
    //Call Back function
  const cb=()=>{
    setTimer(timer => timer+1)
  }
  //Update SetTimer using useEffect
  useEffect(()=>{
    setTimeout(cb,1000);
  });
  //Fetch Data
  const[apiData, setApiData] = useState([]);
  useEffect(()=>{
    fetch('https://dummyjson.com/users').then(response=>response.json()).then(apiData=>setApiData(apiData))
  },[]);
  return(
    <div>
        <h1>Counter {timer}</h1>
        <h2>Api ID :- {apiData.users && apiData.users[0].id}</h2>
    </div>
  )

}

export default UseEffect