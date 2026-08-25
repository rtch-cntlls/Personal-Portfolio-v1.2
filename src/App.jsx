import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Grid from './components/layout/UI';
import Hero from './sections/Hero';
import About from './sections/About';
import Project from './sections/Project';
import Service from './sections/Service';
import Skill from './sections/Skill';
import AllProjects from './pages/AllProjects';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Project />
      <Service />
      <Skill />
    </>
  );
}

function App() {
  return (
    <Router>
      <div id="app-container" className="position-relative overflow-hidden">
        <Grid />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;