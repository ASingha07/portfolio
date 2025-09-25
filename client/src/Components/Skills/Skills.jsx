import React from 'react'
import './Skills.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import { img } from '../../assets/img'

const Skills = React.memo(() => {
    const skillsData = {
        frontend: [
            { name: 'HTML', icon: img.html },
            { name: 'CSS', icon: img.css },
            { name: 'React JS', icon: img.react },
            { name: 'Redux', icon: img.redux },
            { name: 'Tailwind CSS', icon: img.tailwind },
            { name: 'Bootstrap', icon: img.bootstrap }
        ],
        backend: [
            { name: 'Node JS', icon: img.node },
            { name: 'Express JS', icon: img.express },
            { name: 'MySQL', icon: img.mysql },
            { name: 'MongoDB', icon: img.mongo },
            { name: 'Firebase', icon: img.firebase },
        ],
        languages: [
            { name: 'C', icon: img.c },
            { name: 'Java', icon: img.java },
            { name: 'JavaScript', icon: img.javascript },
        ],
        tools: [
            { name: 'Git', icon: img.git },
            { name: 'Github', icon: img.github },
            { name: 'VS Code', icon: img.vscode },
            { name: 'Postman', icon: img.postman },
            { name: 'MongoDB Compass', icon: img.mongoCompass },
        ]
    };

    return (
        <div id='skills' className='skills'>
            <div className="skills-title">
                <h1>My Skills</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="skills-container">
                <div className="skills-category">
                    <h2>Frontend</h2>
                    <div className="skills-grid">
                        {skillsData.frontend.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-category">
                    <h2>Backend</h2>
                    <div className="skills-grid">
                        {skillsData.backend.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-category">
                    <h2>Languages</h2>
                    <div className="skills-grid">
                        {skillsData.languages.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-category">
                    <h2>Tools</h2>
                    <div className="skills-grid">
                        {skillsData.tools.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
})

Skills.displayName = 'Skills';

export default Skills
