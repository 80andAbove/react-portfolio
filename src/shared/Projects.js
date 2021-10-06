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
            <h2>Recent Works</h2>
            <div className="projects">
                <div className="project-container"> 
                    <img className="project-container-img" src={JWP} alt="#" />
                    <h3>JWPFit</h3>
                    <p>Lorem Ipsum</p>
                    <span>Tools Used:</span>
                </div>
                <div className="project-container">
                    <img className="project-container-img" src={Justice} alt="#" />
                    <h3>Justice</h3>
                    <p>Lorem Ipsum</p>
                    <span>Tools Used:</span>
                </div>
                <div className="project-container">
                    <img className="project-container-img" src={CampQ} alt="#" />
                    <h3>CampQ</h3>
                    <p>Lorem Ipsum</p>
                    <span>Tools Used:</span>
                </div>
                <div className="project-container">
                    <img className="project-container-img" src={Watch} alt="#" />
                    <h3>Rails Watch List</h3>
                    <p>Lorem Ipsum</p>
                    <span>Tools Used:</span>
                </div>
            </div>
        </div>
    )
}

export default Projects
