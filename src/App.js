import './App.css';
import React from 'react'
import Scroll from './components/js/Scroll';
import './App.css'
import Navbar from './components/js/Navbar';
import {useState} from "react"
import {
  RecoilRoot} from 'recoil';



function App() {
  const [show, setShow ] = useState(false);
  const Toggle = () => setShow(show => !show);
  return (
    <RecoilRoot>
    <div className="app">
{!show ?  <Navbar Toggle={Toggle} show={show}/>:""}      
<Scroll Toggle={Toggle} show={show}/>

    </div>
    </RecoilRoot>
  )
}

export default App


