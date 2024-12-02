
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* nav bar */}
      <Navbar/>
      {/* about */}
      <About/>
      {/* skills */}
      <Skills/>
      {/* projects */}
      <Projects/>
      {/* contact me */}
      <ContactMe/>
      {/* footer */}
      <Footer/>
    </div>
  );
}

export default App;
