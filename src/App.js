import './App.css';
import './App.scss';
import Banner from './components/Banner'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className="section" id="about-me">
        <h3>About Me</h3>
        <p className="about-area">
          I'm Japanese but been living abroad for most of my life.
          Started to take up coding, taken classes, did workshops, and created a few projects.
          I'm a pretty chill guy but really keen on making people's ideas into a digital reality.
          Feel free to look over my recent works, and I'd be happy to read your comments and suggestions via email - and 
          forget to follow me on my social media if you like my work or just want to follow my journey...
          or just want a friend to talk/discuss/game with
        </p>
      </div>
    </div>
  );
}

export default App;
