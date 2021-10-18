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
        <div className="section" id="recent-work">
            <div className="title-flex">
            <h2 id="decrease-margin-top" className="section-title name-title">RecentWorksRece</h2>
            <h2 className="section-title title-color">RecentWorks</h2>
            <h2 className="section-title name-title">RecentWorksRecentWorksRecentWorksRecentWorksRecentWorksRecentWorks</h2>
            </div>
            <div className="projects">
                <div className="project-container"> 
                    <img className="project-container-img" src={JWP} alt="#" />
                    <div className="project-detail-container">
                        <h3>JWPFit</h3>
                        <p>
                            JWPFit is a web application built for our client who is a personal trainer 
                            and it aims to help his clients attain their fitness goals by closely monitoring
                            their fitness and health progress.
                        </p>
                        <span>Website: </span>
                        <span>Tools Used:</span>
                    </div>
                </div>
                <div className="project-container">
                    <img className="project-container-img" src={Justice} alt="#" />
                    <div className="project-detail-container">
                        <h3>Justice</h3>
                        <p>
                            Justice is a web application built to protect victims of sexual abuse by allowing
                            them to collect, organize, and securely store hard evidence. This aims to 
                            help victims seek justice within the judicial system.
                        </p>
                        <span>Website: </span>
                        <span>Tools Used:</span>
                    </div>
                </div>
                <div className="project-container">
                    <img className="project-container-img" src={CampQ} alt="#" />
                    <div className="project-detail-container">
                        <h3>CampQ</h3>
                        <p>
                            CampQ is a web application that allows hikers to rent and rent out 
                            camping gear. Created from the love of camping, the app was created
                            to resolve the issue of having storing issues for camping gear, especially
                            in cities with small homes.
                        </p>
                        <span>Website: </span>
                        <span>Tools Used:</span>
                    </div>
                </div>
            </div>
            <div>
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
