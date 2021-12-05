
import React from 'react'
import '../css/episode.css'
import episodesData from '../../data/episodesData'
import Footer from './Footer';
import Cursor from './Cursor';
function Episode(props) {

  const el = episodesData[props.index]

    return (
        <>
                
      <div className="container">
        <video className="video" src={el.Vdo} type="video/mkv" autoPlay muted loop/>
        
      </div>

      <div className="page-content">
    <p>
    {el.infos}
    </p>
        <h1>{el.title}</h1>
      </div>
    <Footer index ={props.index}/>
    <Cursor st={"PLAY"}/>
        </>
    )
}

export default Episode
