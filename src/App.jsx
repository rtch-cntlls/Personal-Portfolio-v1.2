import Nav from './components/layout/Navbar';
import Grid from './components/layout/UI';
import Hero from './sections/Hero';
import About from './sections/About';
import Project from './sections/Project';
import Skill from './sections/Skill';

function App() {
  return (
    <div id="app-container" className="position-relative overflow-hidden">
      <Grid />
      <Nav />
      <Hero />
      <About />
      <Project />
      <Skill />
    </div>
  );
}

export default App;