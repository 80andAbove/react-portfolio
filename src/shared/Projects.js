import React from 'react'
import JWP from '../components/image/jwp.png'

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
                    <img src="#" alt="#" />
                    <p>Lorem Ipsum</p>
                    <span>Tools Used:</span>
                </div>
                <div>
                    <h3>CampQ</h3>
                    <img src="#" alt="#" />
                    <p>Lorem Ipsum</p>
                    <span>Tools Used:</span>
                </div>
                <div>
                    <h3>Rails Watch List</h3>
                    <img src="#" alt="#" />
                    <p>Lorem Ipsum</p>
                    <span>Tools Used:</span>
                </div>
                <div>
                    <h3>Notes</h3>
                    <img src="#" alt="#" />
                    <p>Lorem Ipsum</p>
                    <span>Tools Used:</span>
                </div>
            </div>
        </div>
    )
}

export default Projects
