import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaListUl } from 'react-icons/fa';
import { VscChromeClose } from "react-icons/vsc";
import logo from '../src/assets/Screenshot (45) copy.svg'
import Home from './components/Home/Home';

// https://asif-ullah-sikder.web.app/?fbclid=IwAR3aA3rlJ6HWjwzfiHlJrdbJb0XVI0R89TW0OYOBydwZqS5eBTTXANPBe8g#_

function App() {
  const [tr, setTr] = useState(false)

  return (
    <>
      <div className="container">
        <div className='text-white d-flex justify-content-between  align-items-center p-3 mb-4'>
          <div>
            <h4 className='logo2'><span className='logo display-4'>$</span>OHAN</h4>
          </div>

          <div className='d-none d-md-flex gap-5'>
            <h6>Home</h6>
            <h6>Services</h6>
            <h6>Skills</h6>
            <h6>About</h6>
            <h6>Projects</h6>
            <h6>Contact</h6>
          </div>


          <h3 className='d-flex d-md-none' onClick={() => setTr(!tr)}>
            {!tr ? <FaListUl></FaListUl> : <VscChromeClose></VscChromeClose>}</h3>
        </div>
      </div>



      <div className={tr ? 'side top-0' : 'side'}>
        <div className='text-center d-flex flex-column gap-4 my-5'>
          <h2 className='mb-5 text-danger' onClick={() => setTr(false)}><VscChromeClose></VscChromeClose></h2>
          <h5>Home</h5>
          <h5>Services</h5>
          <h5>Skills</h5>
          <h5>About</h5>
          <h5>Projects</h5>
          <h5>Contact</h5>
        </div>
      </div>
      <Home></Home>
    </>
  )
}

export default App
