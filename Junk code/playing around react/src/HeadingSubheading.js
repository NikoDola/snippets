import React from 'react'
import './HeadingSubheading.scss'

const HeadingSubheading = ({ heading, subheading }) => {


  return (
    <div className='heading'>
      <h1 className='heading'>{heading}</h1>
      <p className='subheading'>{subheading}</p>
    </div>
    
  )
}

export default HeadingSubheading
