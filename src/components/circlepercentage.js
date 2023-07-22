import React from 'react'
import {
    CircularProgressbar,
    // CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";

export default function Circlepercentage(props) {
    const {percentage}=props
  return (
    <>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "black",
          pathColor: "#3be3b9",
          trailColor: "#c2f0ea",
          strokeLinecap: "butt"          
        })}
        strokeWidth={10}
      />
    </>
  )
}
