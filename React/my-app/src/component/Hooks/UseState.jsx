import { Button } from 'bootstrap';
import React, { useState } from 'react'

function UseState() {
    const[color, setcolor] = useState("red");
    const mouseover=()=>{
        setcolor(color=="red"? "blue" : "red");
    }
    //Increment, Decrement or Reset
    const[count, setcount] = useState(0);
    const increment=()=>{
        setcount(count+1);
    }
    const decrement=()=>{
        setcount(count-1);
    }
    const reset=()=>{
        setcount(0);
    }
  return (
     <>
    <h1>Use State Hook</h1>
    <p style={{color: color}} onMouseOver={mouseover}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo hic recusandae, quia harum amet iusto, placeat sint ipsa itaque eum eveniet? Recusandae magnam porro, explicabo mollitia, quibusdam cupiditate temporibus ad quam quidem adipisci impedit quae ab ipsum ipsam provident similique velit iure accusamus aspernatur soluta dolores quis animi fugiat. Eius!</p>
    <div>
        <h2>{count}</h2>
        <button onClick={increment}>+</button><br />
        <button onClick={decrement}>-</button><br />
        <button onClick={reset}>reset</button><br />
    </div>
    </>
  )
}

export default UseState