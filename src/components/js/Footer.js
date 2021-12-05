import React from 'react'
import '../css/footer.css'
import episodesData from '../../data/episodesData'


function Footer(props) {
    const el = episodesData[props.index]

    return (
        <div>
                  <div className="footer">
      
        <ul>
        <li>
            <h5 >FOLLOW</h5>
          </li>
          <li>
            <h5 >INSTAGRAM </h5>
          </li>
          <li>
            <h5>{el.episode}</h5>
          </li>
          <li>
            <h5>{el.duration}</h5>
          </li>
          <li>
            <h5>WATCH NOW</h5>
          </li>
        </ul>
      </div>
        </div>
    )
}

export default Footer
