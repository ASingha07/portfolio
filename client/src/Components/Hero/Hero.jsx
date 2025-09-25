import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    const handleResumeDownload = () => {
        try {
            // Create a link element to trigger download
            const link = document.createElement('a');
            link.href = '/resume.pdf'; // Path to your resume file in public folder
            link.download = 'Atin_Singha_Resume.pdf'; // Filename for download
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (error) {
            alert('Sorry, there was an error downloading the resume. Please try again.');
        }
    };

    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt='' className='profile' />
            <h1><span>I'm Atin Singha,</span> full stack developer</h1>
            <p>I am a Computer Science & Engineering Student of the JIS University, and have had a practical experience in full stack development in MERN stack.</p>
            <div className="hero-action">
                <AnchorLink className='anchor-link' href='#contact'>
                    <div className="hero-connect">Connect With Me</div>
                </AnchorLink>
                <div className="hero-resume" onClick={handleResumeDownload}>My Resume</div>
            </div>
        </div>
    )
}

export default Hero
