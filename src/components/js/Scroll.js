import React from 'react'
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Video from './Video'
import Episode from './Episode'
import {useState} from "react"
import episodesData from '../../data/episodesData';
import {
  atom,
  selector,
  useRecoilValue,
} from 'recoil';


export default function Scroll (props) {
  const dataState = atom({
    key: 'dataState', 
    default: episodesData, 
  });
  const arrayState = selector({
    key: 'arrayLengthState', 
    get: ({get}) => {
      const array = get(dataState);
      return array.length;
    },
  });
  const arrayLength = useRecoilValue(arrayState)
  const [currentIndex, setCurrentIndex ] = useState( 0);
  const  nextIndex = () => {
      if (currentIndex === arrayLength - 1) {
        return setCurrentIndex( 0 );
      }
      return setCurrentIndex(
      currentIndex + 1
      );
    };
  
  const  prevIndex = () => {
      if (currentIndex === 0) {
        return setCurrentIndex(
        arrayLength - 1
        );
      }
  
      return setCurrentIndex(
        currentIndex - 1
      );
    };
      return (
        <div>
          <ReactScrollWheelHandler
            upHandler={prevIndex}
            downHandler={nextIndex}
          >
            <button onClick={props.Toggle} className="button">
               {props.show ?  <Video index= {currentIndex}/>:<Episode index={currentIndex}/>}
</button>
          </ReactScrollWheelHandler>
        </div>
      );
    }