import React from 'react'
import {useEffect,useState} from 'react'
import '../css/cursor.css'

const Cursor = (props) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const addEventListenersMove = () => {
        document.addEventListener('mousemove',mMove);
      };
  
      const removeEventListeners = () => {
        document.removeEventListener('mousemove', mMove);
  
      };
  
      const mMove = (el) => {
        setPosition({ x: el.clientX, y: el.clientY });
      };
      addEventListenersMove();
      return () => removeEventListeners();
    }, []);
  
  
    return (
      <button className={props.st}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }} >
        {props.st}
        </button>
    );
  };
  
  export default Cursor;