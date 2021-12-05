import React from 'react'
import "../css/navbar.css";
import Menu from './Menu'

function Navbar(props) {
    return (
        <div>
        <navbar className="navbar">
        
        <ul>
        <li>
            <a >ABOUT</a>
          </li>
          <li>
            <a style={{fontSize:'20px'}}>FOR THE LOVE OF BREAD </a>
          </li>
          <li>
              <Menu props={props}/>
            
          </li>
        </ul>
      </navbar>
        </div>
    )
}

export default Navbar
