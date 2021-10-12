import React from 'react'
import WebBackground from '../components/image/shogo-web.png'
import Shogo from '../components/image/shogo.png'
import { ReactComponent as ArrowDown } from '../assets/icons/chevron-down.svg'

const devIconStyle =  {
    fill: "#587289",   
}

const Banner = () => {
    return (
        <div className="banner section">
            <div className="banner-name">
                <h1>Shogo Miyagi</h1>
            </div>
            <div className="banner-title-area">
                <h1 class="banner-title" id="web-title">Web</h1>
                <h1 class="banner-title" id="developer-title">Developer</h1>
            </div>
            <div>
                <img id="web-background" src={WebBackground} alt="" />
                <img id="web-shogo" src={Shogo} alt="" />
            </div>
            <div className="banner-section-list">
                <ul>
                    <li className="list-style">
                        <h3>Intro</h3>
                    </li>
                </ul>
                <ul>
                    <li className="list-style">
                        <h3>About Me</h3>
                    </li>
                </ul>
                <ul>
                    <li className="list-style">
                        <h3>Recent Works</h3>
                    </li>
                </ul>
                <ul>
                    <li className="list-style">
                        <h3>Contact Me</h3>
                    </li>
                </ul>
            </div>
            <ArrowDown className="icon" style={devIconStyle} />
        </div>
    )
}

export default Banner;
