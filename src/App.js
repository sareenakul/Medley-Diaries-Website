import './App.css';
import { NavBar } from './components/NavBar';
import Main from './components/Main';
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Main />
    </div>
  );
}

export default App;
