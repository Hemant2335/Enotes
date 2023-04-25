import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Footer from './components/Footer';
import Login from './components/Login';
import CreateUser from './components/CreateUser';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
        <Route exact path="/" element={<Hero/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/createuser" element={<CreateUser/>} />
        <Route exact path="/about" element={<About/>} />
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
