import './App.css';
import './App.scss';
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import About from './shared/About'
import Projects from './shared/Projects'
import ContactForm from './shared/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
