import React from 'react'
import ProgressBar from 'react-customizable-progressbar'


const CircleProgress = (props) => {
    return (

    <div>
      <ProgressBar className='mx-auto'
         progress={props.progress}
         radius={65}
          strokeColor={props.strokeColor}
         strokeLinecap="round"
         initialAnimation={true}
         transition="1.5s ease 0.5s"
         trackTransition="1.5s ease"
         strokeWidth={14}
         trackStrokeWidth={14}
         Clockwise
         ></ProgressBar>
    </div>
  )
}

export default CircleProgress
