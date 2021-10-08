import React from 'react'
import DevIcon from "devicon-react-svg";

const devIconStyle = {
  fill: "#587289",
  width: "50px",
  color: "#587289",
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
                <svg viewBox="0 0 900 900">
                  <path style={devIconStyle} fill-rule="evenodd" clip-rule="evenodd" fill="#C00" d="M109.682 14.737c-12.206-6.023-24.708-6.636-37.508-2.111-11.779 4.164-21.175 11.615-28.16 21.763C32.195 51.561 23.61 70.298 18.799 90.652c-2.464 10.417-4.06 21.466-3.631 32.224.035.873.165 1.124.251 3.124h60.366c-.173-2-.287-1.416-.437-1.797a153.86 153.86 0 01-7.428-25.198c-2.498-12.251-3.806-24.729-1.226-37.093 3.611-17.313 13.48-29.805 30.117-36.283 9.424-3.667 18.369-2.624 26.214 4.262.072.063.22.025.412.056l2.565-3.883c-4.94-4.703-10.368-8.389-16.32-11.327zM3.336 94.394c-.46 3.923-.89 7.596-1.34 11.451l11.132 1.336 2.039-11.893-11.831-.894zm21.85-34.186l-10.471-4.097-3.384 9.607 10.671 3.42c1.08-3.031 2.096-5.882 3.184-8.93zm49.419 53.659c3.575.266 7.157.449 11.103.679-1.433-2.979-2.706-5.673-4.039-8.335-.146-.289-.639-.568-.974-.573-3.033-.044-6.068-.025-9.291-.025.726 2.628 1.357 5.053 2.096 7.443.111.361.707.782 1.105.811zM42.933 31.103l-7.955-5.268-6.359 7.105 8.178 5.496 6.136-7.333zm25.334 53.369c-.013.321.276.832.558.959 2.865 1.288 5.76 2.515 8.912 3.873-.131-2.492-.219-4.575-.368-6.654-.027-.374-.203-.912-.48-1.066-2.631-1.456-5.299-2.847-8.216-4.395-.159 2.665-.321 4.972-.406 7.283zM65.91 12.3l-5.446-6.181-7.499 3.898 5.455 6.644 7.49-4.361zm3.415 49.176c-.163.374.052 1.167.373 1.456 2.175 1.962 4.424 3.84 6.926 5.981.573-2.4 1.113-4.539 1.571-6.693.081-.383-.032-1.016-.298-1.23-1.946-1.569-3.955-3.063-6.037-4.651-.915 1.815-1.802 3.443-2.535 5.137zm12.45-52.424c2.78.075 5.563.042 8.499.042-.293-2.044-.433-3.593-.782-5.092-.104-.446-.775-1.04-1.228-1.078-2.787-.226-5.585-.313-8.651-.459.409 2.063.721 3.881 1.162 5.668.093.379.647.909 1 .919zm3.385 35.675c.142-.266.178-.749.029-.981-1.366-2.137-2.785-4.241-4.254-6.455l-4.76 4.372 6.582 7.294c.884-1.539 1.675-2.868 2.403-4.23zM90.295 30.2l2.843 5.281c4.449-2.438 4.875-3.32 3.3-6.834L90.295 30.2zm21.287-16.273c1.851 1.142 3.806 2.115 5.792 3.185l1.33-2.07c-2.422-1.771-4.76-3.484-7.413-5.426-.104 1.104-.259 1.875-.219 2.637.032.581.129 1.44.51 1.674zM109 30.646c2 .217 5 .424 7 .643v-2.718c-2-.438-5-.872-7-1.323v3.398z"></path>
                </svg>
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
