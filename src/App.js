import './App.css';
import { NavBar } from './components/NavBar';
import Main from './components/Main';
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from './components/Banner';


function App() {
  return (
    <div className="App">
      <Main/>
      <NavBar></NavBar>
      <Banner></Banner>
      
    </div>
  );
}

export default App;
