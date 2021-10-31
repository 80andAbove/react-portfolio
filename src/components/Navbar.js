import React, { Component } from 'react'
import DevIcon from "devicon-react-svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faWindowRestore } from '@fortawesome/free-solid-svg-icons'

const devIconStyle = {
    fill: "#587289",
    width: "50px",
};

const envelopeStyle = {
    color: "#587289",
    width: "50px",
}

// const navbar = document.getElementsByClassName('navbar');
// window.addEventListener('scroll', () => {
//     navbar.classList.toggle('sticky', window.scrollY > 0)
// });

window.onload = () => {
    const before_switch = document.querySelector('#test');
    const name = document.querySelector('#my-name')
    before_switch.addEventListener('change', ()=> {
        if(name){
            name.classList.toggle('red');
        }
    });
}

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-light">
                <div className="navbar-name-section">
                    <h1 id="my-name">宮城翔梧</h1>
                    <label className="switch">
                      <input id="test" type="checkbox"></input>
                      <span id="name-change" className="slider round"></span>
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
                            <a href="www.linkedin.com/in/shogo-miyagi/" target="_blank">
                                <DevIcon icon="linkedin" style={devIconStyle} viewBox="0 0 32 32" />
                            </a>
                        </li>
                        <li className="list-style" id="envelope-icon">
                            <a href="gmail.com" target="_blank">
                                <FontAwesomeIcon icon={faEnvelope} style={envelopeStyle} viewBox="0 0 200 200" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
