import "../css/video.css";
import React from "react";
import episodesData from '../../data/episodesData'

import Cursor from "./Cursor";
export default function Video(props) {
  const el = episodesData[props.index]

  return (
    <div>
<video className="video2" src={el.Vdo}  type="video/mp4" autoPlay="true" loop/>
  
  <Cursor st={"STOP"}/>

      </div>

  );
}
