import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='myWork'>
      <div className="myWork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="myWork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img}/>
        })}
      </div>
      <div className="myWork-showMore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork