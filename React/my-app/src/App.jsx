import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// import Demo from './component/Demo'
// import Props from './component/Props'
// import StudentCard from './component/Exp7'
import UseState from './component/Hooks/UseState'
import UseEffect from './component/Hooks/UseEffect'
import StudentRegForm from './component/StudentRegForm'
function App() {
  const name = "React JS"

  return (
    <>
      <h1>Hello {name}</h1>
      {/* <Demo></Demo> */}
      {/* <Props name = "Puspi" rollno = "2503201000"/> */}
      {/* <UseState></UseState> */}
      {/* <UseEffect></UseEffect> */}
      <StudentRegForm></StudentRegForm>
      
      
    </>
  )
}

export default App
