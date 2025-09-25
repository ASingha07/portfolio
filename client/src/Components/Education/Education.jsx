import React from 'react'
import './Education.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import jis from '../../assets/jis.png'
import wbchse from '../../assets/wbchse.webp'
import class_10 from '../../assets/class_10.jpg'

const Education = () => {
    const experienceData = [
        {
            id: 1,
            position: 'Bachelor of Technology (Computer Science & Engineering)',
            company: 'JIS University',
            duration: 'July 2022 - Present',
            logo: jis,
            data: {
                Degree: "B.Tech", Stream: "Computer Science & Engineering",
                Address: "Agarpara, Kolkata, West Bengal, Pin : 700109 , INDIA",
                Board: "AICTE & UGC & NAAC (approved)", Average_CGPA: "8.23 (till 6th Sem)",
                Government_ABC_ID: "663502090419", BTech_Registration_No: "22CS011046 OF 2022-2026",
            }
        },
        {
            id: 2,
            position: 'Higher Secondary Education [12th]',
            company: 'Natuk Vivekananda Bidyamandir',
            duration: 'May 2019 - Mar 2021',
            logo: wbchse,
            data: {
                Board: "West Bengal Council of Higher Secondary Education [ WBCHSE ]",
                School_Address: "Natuk, Paschim Mednipur, West Bengal, Pin : 721232 , INDIA", Stream: "Science ( Math + Physics + Chemistry )",
                Marks_Percentage: "82%", Registration_No: "3191234521"
            }

        },
        {
            id: 3,
            position: 'Secondary Education [10th]',
            company: 'Natuk Vivekananda Bidyamandir',
            duration: 'Jan 2018 - Feb 2019',
            logo: class_10,
            data: {
                Board: "West Bengal Board of Secondary Education [ WBBSE ]",
                School_Address: "Natuk, Paschim Mednipur, West Bengal, Pin : 721232 , INDIA", Marks_Percentage: "77.14%", Registration_No: "7181-049531"
            }
        }
    ];


    return (
        <div id='education' className='education'>
            <div className="education-title">
                <h1>Education</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="experience-timeline">
                <div className="timeline-vertical-line"></div>
                {experienceData.map((experience, index) => (
                    <div key={experience.id} className="experience-card">
                        <div className="timeline-dot"></div>
                        <div className="card-content">
                            <div className="card-header">
                                <img
                                    src={experience.logo}
                                    alt={`${experience.company} logo`}
                                    className="company-logo"
                                />
                                <div className="position-info">
                                    <h3 className="position-title">{experience.position}</h3>
                                    <div className="company-duration">
                                        <span className="company-name">{experience.company}</span>
                                        <span className="duration-separator">•</span>
                                        <span className="duration">{experience.duration}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="description">
                                {experience.data && (
                                    <ul className="data-list">
                                        {Object.entries(experience.data).map(([key, value]) => (
                                            <li key={key}><strong>{key.replace(/_/g, ' ')}:</strong> {value}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education
