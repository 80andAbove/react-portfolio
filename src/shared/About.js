import React from 'react'
import DevIcon from "devicon-react-svg";

const devIconStyle = {
  fill: "#587289",
    width: "50px",
}

const About = () => {
    return (
        <div className="section" id="about-me">
            <h2 className="section-title">AboutMe</h2>
            <div>
              <p className="about-area">
                I'm Japanese but been living abroad for most of my life.
                Started to take up coding, taken classes, did workshops, and created a few projects.
                I'm a pretty chill guy but really keen on making people's ideas into a digital reality.
                Feel free to look over my recent works, and I'd be happy to read your comments and suggestions via email - and 
                forget to follow me on my social media if you like my work or just want to follow my journey...
                or just want a friend to talk/discuss/game with
              </p>
            </div>
            <div className="me-area">
              <ul>
                <li className="list-style about-me-stack">
                  <span>Grew up in 5 different countries</span>
                </li>
              </ul>
              <ul>
                <li className="list-style about-me-stack">
                  <span>Worked for the Olympics</span>
                </li>
              </ul>
              <ul>
                <li className="list-style about-me-stack">
                    <span>Aims to continue growing in life</span>
                </li>
              </ul>
              <ul>
                <li className="list-style about-me-stack">
                    <span>Die Hard Arsenal Fan</span>
                </li>
              </ul>
            </div>
            <div className="stack-area">
              <h3 id="title-mystack">My Stack</h3>
              <div className="stack-titles">
                <h5>Languages</h5>
                <h5>Frameworks</h5>
                <h5>Frontend</h5>
                <h5>Databases</h5>
                <h5>Other Tools</h5>
              </div>
              <div className="stack-specific">
                <DevIcon icon="python" style={devIconStyle} />
                <DevIcon icon="ruby" style={devIconStyle} />
              </div>
              <div className="stack-specific" id="framework">
                <DevIcon icon="django" style={devIconStyle} />
                <DevIcon icon="rail" style={devIconStyle} />
              </div>
              <div className="stack-specific" id="frontend">
                <DevIcon icon="html5" style={devIconStyle} />
                <DevIcon icon="css3" style={devIconStyle} />
                <DevIcon icon="javascript" style={devIconStyle} />
                <DevIcon icon="react" style={devIconStyle} />
              </div>
              <div className="stack-specific" id="database">
                <DevIcon icon="mysql" style={devIconStyle} />
                <DevIcon icon="postgresql" style={devIconStyle} />
              </div>
              <div className="stack-specific" id="other">
                <DevIcon icon="figma" style={devIconStyle} />
                <DevIcon icon="heroku" style={devIconStyle} />
                <DevIcon icon="git" style={devIconStyle} />
              </div>
            </div>
        </div>
    )
}

export default About
