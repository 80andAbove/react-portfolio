import React from 'react'
import JWP from '../components/image/jwp.png'
import Justice from '../components/image/justice.png'
import CampQ from '../components/image/campq.png'
import Notes from '../components/image/notes.png'
import watchList from '../components/image/watch-list.png'
import DevIcon from "devicon-react-svg";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import  '@brainhubeu/react-carousel/lib/style.css';
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';


const devIconStyle = {
    fill: "#FFFFFF",
    width: "50px",
    color: "#587289",
}

const ProjectList = () => {
    return (
        <div className="projects">
            <Carousel
                plugins={[
                    'centered',
                    'infinite',
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                       numberOfSlides: 4,
                      },
                    },
                  ]}   
            >
            <div className="project-container"> 
                <img className="project-container-img" src={JWP} alt="#" />
                <div className="project-detail-container">
                    <h3>JWPFit</h3>
                    <p>
                        JWPFit is a web application built for our client who is a personal trainer 
                        and it aims to help his clients attain their fitness goals by closely monitoring
                        their fitness and health progress.
                    </p>
                    <span>
                        <a className="text-decoration-none" href="http://jwpfit.com">
                            Website
                        </a>
                    </span>
                    <br />
                    <br />
                    <span>
                        Tools Used: HTML5, CSS3, JS, Python, & Django
                    </span>
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
                    <span>
                        <a href="https://justice-app.herokuapp.com/">
                            Website
                        </a>
                    </span>
                    <br />
                    <br />
                    <span>
                        Tools Used: Ruby, Rails, HTML5, CSS3, JS, Heroku, & Figma
                    </span>
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
                    <span>
                        <a href="https://justice-app.herokuapp.com/">
                            Website
                        </a>
                    </span>
                    <br />
                    <br />
                    <span>
                        Tools Used: Ruby, Rails, HTML5, CSS3, JS, Heroku, & Figma
                    </span>
                </div>
            </div>
            <div className="project-container">
                <img className="project-container-img" src={Notes} alt="#" />
                <div className="project-detail-container">
                    <h3>Notes</h3>
                    <p>
                        Notes is a web application built that allows users to create, edit, 
                        and save their notes. Built in React, it was my first React app
                    </p>
                    <span>
                        <a href="https://justice-app.herokuapp.com/">
                            Website
                        </a>
                    </span>
                    <br />
                    <br />
                    <span>
                        Tools Used: React, HTML5, CSS3, & JS
                    </span>
                </div>
            </div>
            <div className="project-container">
                <img className="project-container-img" src={watchList} alt="#" />
                <div className="project-detail-container">
                    <h3>Must Watch</h3>
                    <p>
                        Must Watch is a Ruby on Rails application that allows users to search
                        and store the movies they want to see. It is one of the projects I worked 
                        on in the Le Wagon Bootcamp.
                    </p>
                    <span>
                        <a href="https://railswatchlist-shogo.herokuapp.com/">
                            Website
                        </a>
                    </span>
                    <br />
                    <br />
                    <span>
                        Tools Used: Ruby, Rails, HTML5, CSS3, JS, Heroku, & Figma
                    </span>
                </div>
            </div>
            </Carousel>
        </div>
    );
}

export default ProjectList
