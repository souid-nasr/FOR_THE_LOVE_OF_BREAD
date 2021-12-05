import '../css/menu.css'
import React, {useState } from "react";
import episodesData from '../../data/episodesData'

function Menu() {
  const [style, setStyle] = useState("close");
  const changeStyle = () => {
    setStyle(style === "close" ? "open" : "close");
  };

  return (
    <div>
    <div id={style} className="overlay">
    <a href="javascript:void(0)" className="closebtn" onClick={changeStyle}>&times;</a>
    
    <div className="overlay-content" >
    {episodesData.map((el)=>
        <div className="ui-block-a"key={el.id}
>
      <a>{el.title}</a>

    </div>
)}
      </div>
  </div>
  <a style={{fontSize:'20px',marginRight:"-10px"}}onClick={changeStyle}> EPISODES</a>
    </div>
  );
}
export default Menu;




