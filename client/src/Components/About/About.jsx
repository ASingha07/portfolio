import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" className='img'/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a serious Computer Science and Engineering student at JIS University and I will carry a fantastic 8.23 CGPA to graduate in 2026. As a full-stack developer experienced with MERN stack, Java, and MySQL, I have developed creative initiatives such as quick stay hotel booking, Life Link health care management system, as well as healthcare administration software.</p>
                <p>Both have JWT authentication and real-time capabilities where my technical knowledge is urgently needed. This is an autonomous, self driven and West Bengal based individual who excels academically and is capable of applying the learned concepts in practice and shows great problem solving skills. </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
