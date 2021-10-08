import React from 'react'

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
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg" />
              </div>
              <div className="stack-specific" id="framework">
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg" />
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg" />
              </div>
              <div className="stack-specific" id="frontend">
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              </div>
              <div className="stack-specific" id="database">
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
              </div>
              <div className="stack-specific" id="other">
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" />
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
              </div>
            </div>
        </div>
    )
}

export default About
