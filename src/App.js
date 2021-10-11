import './App.css';
import './App.scss';
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import About from './shared/About'
import Projects from './shared/Projects'
import ContactForm from './shared/ContactForm'

function App() {
  return (
    <div className="container noisy">
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
