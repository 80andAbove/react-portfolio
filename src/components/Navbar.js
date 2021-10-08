import React from 'react'
import DevIcon from "devicon-react-svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const devIconStyle = {
    fill: "#587289",
    width: "50px",
};

const envelopeStyle = {
    color: "#587289",
    width: "50px",
}

const Navbar = () => {
    return (
        <nav className="navbar bg-light">
            <div className="navbar-name-section">
                <h1 className="navbar-name">宮城翔梧</h1>
                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                </label>
            </div>
            <div className="navbar-social-list-section">
                <ul>
                    <li className="list-style">
                        <a href="www.instagram.com" target="_blank">
                            <DevIcon icon="github_badge" style={devIconStyle} viewBox="0 0 32 32" />
                        </a>
                    </li>
                    <li className="list-style" id="linkedin-icon">
                        <a href="#" target="_blank">
                            <DevIcon icon="linkedin" style={devIconStyle} viewBox="0 0 32 32" />
                        </a>
                    </li>
                    <li className="list-style" id="envelope-icon">
                        <a href="#" target="_blank">
                            <FontAwesomeIcon icon={faEnvelope} style={envelopeStyle} viewBox="0 0 200 200" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
