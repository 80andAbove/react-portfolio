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
                        <a href="http://jwpfit.com">
                            Website
                        </a>
                    </span>
                    <br />
                    <br />
                    <span>
                        <DevIcon icon="html5" style={devIconStyle} />
                        <DevIcon icon="css3" style={devIconStyle} />
                        <DevIcon icon="javascript" style={devIconStyle} />
                        <DevIcon icon="python" style={devIconStyle} />
                        <DevIcon icon="django" style={devIconStyle} />
                        <DevIcon icon="mysql" style={devIconStyle} />
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
                        <DevIcon icon="html5" style={devIconStyle} />
                        <DevIcon icon="css3" style={devIconStyle} />
                        <DevIcon icon="javascript" style={devIconStyle} />
                        <DevIcon icon="ruby" style={devIconStyle} />
                        <DevIcon icon="postgresql" style={devIconStyle} />
                        <svg viewBox="0 0 150 150">
                        <path style={devIconStyle} d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path style={devIconStyle} d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path style={devIconStyle} d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path style={devIconStyle} d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path style={devIconStyle} d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
                        </svg>
                        <DevIcon icon="heroku" style={devIconStyle} />
                        <DevIcon icon="git" style={devIconStyle} />
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
                        <DevIcon icon="html5" style={devIconStyle} />
                        <DevIcon icon="css3" style={devIconStyle} />
                        <DevIcon icon="javascript" style={devIconStyle} />
                        <DevIcon icon="ruby" style={devIconStyle} />
                        <svg viewBox="0 0 32 32">
                        <path className="devicon-svg" style={devIconStyle} fill-rule="evenodd" clip-rule="evenodd" fill="#C00" d="M109.682 14.737c-12.206-6.023-24.708-6.636-37.508-2.111-11.779 4.164-21.175 11.615-28.16 21.763C32.195 51.561 23.61 70.298 18.799 90.652c-2.464 10.417-4.06 21.466-3.631 32.224.035.873.165 1.124.251 3.124h60.366c-.173-2-.287-1.416-.437-1.797a153.86 153.86 0 01-7.428-25.198c-2.498-12.251-3.806-24.729-1.226-37.093 3.611-17.313 13.48-29.805 30.117-36.283 9.424-3.667 18.369-2.624 26.214 4.262.072.063.22.025.412.056l2.565-3.883c-4.94-4.703-10.368-8.389-16.32-11.327zM3.336 94.394c-.46 3.923-.89 7.596-1.34 11.451l11.132 1.336 2.039-11.893-11.831-.894zm21.85-34.186l-10.471-4.097-3.384 9.607 10.671 3.42c1.08-3.031 2.096-5.882 3.184-8.93zm49.419 53.659c3.575.266 7.157.449 11.103.679-1.433-2.979-2.706-5.673-4.039-8.335-.146-.289-.639-.568-.974-.573-3.033-.044-6.068-.025-9.291-.025.726 2.628 1.357 5.053 2.096 7.443.111.361.707.782 1.105.811zM42.933 31.103l-7.955-5.268-6.359 7.105 8.178 5.496 6.136-7.333zm25.334 53.369c-.013.321.276.832.558.959 2.865 1.288 5.76 2.515 8.912 3.873-.131-2.492-.219-4.575-.368-6.654-.027-.374-.203-.912-.48-1.066-2.631-1.456-5.299-2.847-8.216-4.395-.159 2.665-.321 4.972-.406 7.283zM65.91 12.3l-5.446-6.181-7.499 3.898 5.455 6.644 7.49-4.361zm3.415 49.176c-.163.374.052 1.167.373 1.456 2.175 1.962 4.424 3.84 6.926 5.981.573-2.4 1.113-4.539 1.571-6.693.081-.383-.032-1.016-.298-1.23-1.946-1.569-3.955-3.063-6.037-4.651-.915 1.815-1.802 3.443-2.535 5.137zm12.45-52.424c2.78.075 5.563.042 8.499.042-.293-2.044-.433-3.593-.782-5.092-.104-.446-.775-1.04-1.228-1.078-2.787-.226-5.585-.313-8.651-.459.409 2.063.721 3.881 1.162 5.668.093.379.647.909 1 .919zm3.385 35.675c.142-.266.178-.749.029-.981-1.366-2.137-2.785-4.241-4.254-6.455l-4.76 4.372 6.582 7.294c.884-1.539 1.675-2.868 2.403-4.23zM90.295 30.2l2.843 5.281c4.449-2.438 4.875-3.32 3.3-6.834L90.295 30.2zm21.287-16.273c1.851 1.142 3.806 2.115 5.792 3.185l1.33-2.07c-2.422-1.771-4.76-3.484-7.413-5.426-.104 1.104-.259 1.875-.219 2.637.032.581.129 1.44.51 1.674zM109 30.646c2 .217 5 .424 7 .643v-2.718c-2-.438-5-.872-7-1.323v3.398z"></path>
                        </svg>
                        <DevIcon icon="postgresql" style={devIconStyle} />
                        <svg viewBox="0 0 150 150">
                        <path style={devIconStyle} d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path style={devIconStyle} d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path style={devIconStyle} d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path style={devIconStyle} d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path style={devIconStyle} d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
                        </svg>
                        <DevIcon icon="heroku" style={devIconStyle} />
                        <DevIcon icon="git" style={devIconStyle} />
                    </span>
                </div>
            </div>
            <div className="project-container">
                <img className="project-container-img" src={Notes} alt="#" />
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
                        <DevIcon icon="html5" style={devIconStyle} />
                        <DevIcon icon="css3" style={devIconStyle} />
                        <DevIcon icon="javascript" style={devIconStyle} />
                        <DevIcon icon="ruby" style={devIconStyle} />
                        <DevIcon icon="postgresql" style={devIconStyle} />
                        <svg viewBox="0 0 150 150">
                        <path style={devIconStyle} d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path style={devIconStyle} d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path style={devIconStyle} d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path style={devIconStyle} d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path style={devIconStyle} d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
                        </svg>
                        <DevIcon icon="heroku" style={devIconStyle} />
                        <DevIcon icon="git" style={devIconStyle} />
                    </span>
                </div>
            </div>
            <div className="project-container">
                <img className="project-container-img" src={watchList} alt="#" />
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
                        <DevIcon icon="html5" style={devIconStyle} />
                        <DevIcon icon="css3" style={devIconStyle} />
                        <DevIcon icon="javascript" style={devIconStyle} />
                        <DevIcon icon="ruby" style={devIconStyle} />
                        <DevIcon icon="postgresql" style={devIconStyle} />
                        <svg viewBox="0 0 150 150">
                        <path style={devIconStyle} d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path style={devIconStyle} d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path style={devIconStyle} d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path style={devIconStyle} d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path style={devIconStyle} d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
                        </svg>
                        <DevIcon icon="heroku" style={devIconStyle} />
                        <DevIcon icon="git" style={devIconStyle} />
                    </span>
                </div>
            </div>
            </Carousel>
        </div>
    );
}

export default ProjectList
