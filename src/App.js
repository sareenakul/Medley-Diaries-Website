import './App.css';
import { NavBar } from './components/NavBar';
import Main from './components/Main';
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from './components/Banner';
import DynamicLogo from './components/DynamicLogo';


function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <DynamicLogo />
      </div>
      <NavBar />
      <Banner />
      <Main />
    </div>
  );
}

export default App;
