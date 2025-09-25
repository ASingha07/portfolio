import React from 'react'
import './MyProject.css'

const ProjectCard = ({ work }) => {
    const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

    // Adjust the threshold value to control the tilt effect
    const threshold = 12;

    const handleMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setTilt({ x: y * -threshold, y: x * threshold });
    };

    return (
        <div
            className="project-card"
            onMouseMove={handleMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
            <div className="project-image">
                <img src={work.w_img} alt={work.w_name} />
            </div>
            <div className="project-content">
                <h3 className="project-title">{work.w_name}</h3>
                <p className="project-desc">{work.w_desc}</p>
                <div className="project-stack">
                    <h4>Tech Stack:</h4>
                    <div className="stack-tags">
                        {work.w_stack.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                </div>
                <div className="project-links">
                    <a href={work.w_git} target="_blank" rel="noopener noreferrer" className="project-btn github-btn">
                        <i className="fab fa-github"></i>
                        GitHub Repo
                    </a>
                    {work.w_demo && (
                        <a href={work.w_demo} target="_blank" rel="noopener noreferrer" className="project-btn demo-btn">
                            <i className="fas fa-external-link-alt"></i>
                            Live Link
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard
