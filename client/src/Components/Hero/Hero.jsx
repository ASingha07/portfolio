import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    const handleResumeDownload = async () => {
        try {
            // First try the fetch approach for better filename control
            const response = await fetch('/resume.pdf');
            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);

                const link = document.createElement('a');
                link.href = url;
                link.download = 'Atin_Singha_Resume.pdf';
                link.setAttribute('download', 'Atin_Singha_Resume.pdf');
                link.style.display = 'none';

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // Clean up the blob URL
                setTimeout(() => window.URL.revokeObjectURL(url), 100);
            } else {
                throw new Error('Resume file not found');
            }
        } catch (error) {
            console.error('Resume download error:', error);

            // Fallback: Use direct link method
            try {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Atin_Singha_Resume.pdf';
                link.setAttribute('download', 'Atin_Singha_Resume.pdf');
                link.target = '_blank';
                link.style.display = 'none';

                document.body.appendChild(link);
                setTimeout(() => {
                    link.click();
                    document.body.removeChild(link);
                }, 100);
            } catch (fallbackError) {
                // Final fallback: open in new tab
                window.open('/resume.pdf', '_blank');
            }
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
