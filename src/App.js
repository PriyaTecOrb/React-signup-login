import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route,Routes} from "react-router-dom";
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  return (
    <>    
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Signup/>} />
          <Route path="/login" element = {<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
