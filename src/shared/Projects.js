import 'react-device-frameset/lib/css/marvel-devices.min.css'
import React from 'react'
import JWP from '../components/image/jwp.png'
import Justice from '../components/image/justice.png'
import CampQ from '../components/image/campq.png'
import Watch from '../components/image/watch-list.png'
import Notes from '../components/image/notes.png'
import { DeviceFrameset } from 'react-device-frameset'

const Projects = () => {
    return (
        <div className="section">
            <h2 className="section-title">RecentWorks</h2>
            <div className="projects">
                <div className="project-container"> 
                    <img className="project-container-img" src={JWP} alt="#" />
                    <h3>JWPFit</h3>
                </div>
                <div className="project-container">
                    <img className="project-container-img" src={Justice} alt="#" />
                    <h3>Justice</h3>
                </div>
                <div className="project-container">
                    <img className="project-container-img" src={CampQ} alt="#" />
                    <h3>CampQ</h3>
                </div>
            </div>
            <div className="">
                <p>
                    Like what you see? I'm mostly a frontend developer for these projects
                    and I work closely with the design. Learned a few nifty tricks to implement
                    in the projects that I've been working on - maybe it's something you want 
                    in your website too. So have a look through them and, when you're ready,
                    tell me about this next project that you have for me!
                </p>
            </div>
        </div>
    )
}

export default Projects
