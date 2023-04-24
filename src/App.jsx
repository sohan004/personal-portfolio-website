import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaListUl, FaMouse } from 'react-icons/fa';
import { VscChromeClose } from "react-icons/vsc";
import logo from '../src/assets/Screenshot (45) copy.svg'
import Home from './components/Home/Home';
import { FaJs } from "react-icons/fa";
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { useScroll } from './components/usescroll';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'

// https://asif-ullah-sikder.web.app/?fbclid=IwAR3aA3rlJ6HWjwzfiHlJrdbJb0XVI0R89TW0OYOBydwZqS5eBTTXANPBe8g#_

function App() {
  const navigate = useNavigate()
  const [tr, setTr] = useState(false)
  const [element, view] = useInView({ threshold: 0.1 });

  return (
    <>
      <div className="container">
        <div className='text-white d-flex justify-content-between  align-items-center p-3 mb-4  '>
          <div id='mouse'>
            <h4 ref={element} className='logo2'><span className='logo display-4'>$</span>OHAN</h4>
          </div>

          <div className='d-none d-md-flex gap-5 '>
            <Link className='alink' to="/"><h6>Home</h6></Link>
            <a className='alink' href="#service"><h6>Services</h6></a>
            <a className='alink' href="#about"><h6>About</h6></a>
            <a className='alink' href="#Skills"><h6>Skills</h6></a>
            <a className='alink' href="#projects"><h6>Projects</h6></a>
            <a className='alink' href="#contact"><h6>Contact</h6></a>
          </div>


          <h3 className='d-flex d-md-none ' onClick={() => setTr(!tr)}>
            {!tr ? <FaListUl></FaListUl> : <VscChromeClose></VscChromeClose>}</h3>
        </div>
      </div>



      <div className={tr ? 'side start-0 top-0 z-1' : 'side z-1'}>
        <div className='text-center d-flex flex-column gap-4 my-5'>
          <h2 className='mb-5 text-danger' onClick={() => setTr(false)}><VscChromeClose></VscChromeClose></h2>
          <Link className='alink' to="/"><h6>Home</h6></Link>
          <a className='alink' href="#service"><h6>Services</h6></a>
          <a className='alink' href="#about"><h6>About</h6></a>
          <a className='alink' href="#Skills"><h6>Skills</h6></a>
          <a className='alink' href="#projects"><h6>Projects</h6></a>
          <a className='alink' href="#contact"><h6>Contact</h6></a>
        </div>
      </div>
      <a href="#mouse">
        <div className={view ? 'd-none' : 'mouse d-block'}>
          <FaMouse className='main-mouse'></FaMouse>
        </div>
      </a>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
