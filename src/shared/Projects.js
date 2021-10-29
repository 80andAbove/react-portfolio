import 'react-device-frameset/lib/css/marvel-devices.min.css'
import React from 'react'
import ProjectList from './ProjectList'

const Projects = () => {
    return (
        <div className="section" id="recent-work">
            <div className="title-flex">
            <h2 id="decrease-margin-top" className="section-title name-title">RecentWorksRece</h2>
            <h2 className="section-title title-color">RecentWorks</h2>
            <h2 className="section-title name-title">RecentWorksRecentWorksRecentWorksRecentWorksRecentWorksRecentWorks</h2>
            </div>
            <ProjectList />
            <div className="projects-summary center-margin">
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
