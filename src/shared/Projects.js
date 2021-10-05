import React from 'react'
import JWP from '../components/image/jwp.png'
import Justice from '../components/image/justice.png'
import CampQ from '../components/image/campq.png'
import Watch from '../components/image/watch-list.png'
import Notes from '../components/image/notes.png'

const Projects = () => {
    return (
        <div className="section">
            <h2>Recent Works</h2>
            <div className="projects">
                <div>
                    <h3>JWPFit</h3>
                    <img src={JWP} alt="#" />
                    <p>Lorem Ipsum</p>
                    <span>Tools Used:</span>
                </div>
                <div>
                    <h3>Justice</h3>
                    <img src={Justice} alt="#" />
                    <p>Lorem Ipsum</p>
                    <span>Tools Used:</span>
                </div>
                <div>
                    <h3>CampQ</h3>
                    <img src={CampQ} alt="#" />
                    <p>Lorem Ipsum</p>
                    <span>Tools Used:</span>
                </div>
                <div>
                    <h3>Rails Watch List</h3>
                    <img src={Watch} alt="#" />
                    <p>Lorem Ipsum</p>
                    <span>Tools Used:</span>
                </div>
                <div>
                    <h3>Notes</h3>
                    <img src={Notes} alt="#" />
                    <p>Lorem Ipsum</p>
                    <span>Tools Used:</span>
                </div>
            </div>
        </div>
    )
}

export default Projects
