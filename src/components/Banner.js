import React from 'react'

const Banner = () => {
    return (
        <div className="banner section">
            <div className="banner-name">
                <h1>Shogo Miyagi</h1>
            </div>
            <div className="banner-title">
                <h1>Web Developer</h1>
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
            </div>
        </div>
    )
}

export default Banner;
