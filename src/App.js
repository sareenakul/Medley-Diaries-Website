import './App.css';
import { NavBar } from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Main>
        <Contact/>
      </Main>
    </div>
  );
}

export default App;
