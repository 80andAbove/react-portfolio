import React from 'react'

const About = () => {
    return (
        <div className="section" id="about-me">
            <h2>About Me</h2>
            <div>
              <p className="about-area">
                I'm Japanese but been living abroad for most of my life.
                Started to take up coding, taken classes, did workshops, and created a few projects.
                I'm a pretty chill guy but really keen on making people's ideas into a digital reality.
                Feel free to look over my recent works, and I'd be happy to read your comments and suggestions via email - and 
                forget to follow me on my social media if you like my work or just want to follow my journey...
                or just want a friend to talk/discuss/game with
              </p>
              <ul>
                <li className="list-style">
                  <a href="#" target="_blank">
                    <p>
                      Photography Fanatic
                    </p>
                  </a>
                </li>
              </ul>
              <ul>
                <li className="list-style">
                  <a href="#" target="_blank">
                    <p>
                      Music Junkie
                    </p>
                  </a>
                </li>
              </ul>
              <ul>
                <li className="list-style">
                  <a href="#" target="_blank">
                    <p>
                      Third Cultural Kid
                    </p>
                  </a>
                </li>
              </ul>
              <ul>
                <li className="list-style">
                  <a href="https://steamcommunity.com/profiles/76561198303062013/" target="_blank">
                    <p>
                      Avid Gamer
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>My Stack</h3>
              <h5>Scripting Languages</h5>
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg" />
              <h5>Frameworks</h5>
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg" />
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg" />
              <h5>Frontend</h5>
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              <h5>Databases</h5>
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
              <h5>Other Tools</h5>
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" />
                <img className="devicons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
            </div>
        </div>
    )
}

export default About
