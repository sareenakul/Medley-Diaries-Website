import './App.css';
import { NavBar } from './components/NavBar';
import Main from './components/Main';
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from './components/Banner';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Main />
    </div>
  );
}

export default App;
