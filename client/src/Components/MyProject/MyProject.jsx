import React from 'react'
import './MyProject.css'
import mywork_data from '../../assets/mywork_data'
import theme_pattern from '../../assets/theme_pattern.svg'
import ProjectCard from './ProjectCard'

const MyProject = () => {
    return (
        <div id='projects' className='mywork'>
            <div className="mywork-title">
                <h1>My Projects</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return <ProjectCard key={index} work={work} />
                })}
            </div>
        </div>
    )
}

export default MyProject
