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
import Createnotes from './components/Createnotes';
import Notestate from './context/notes/Notestate';
import Yournotes from './components/Yournotes' ;
import Yourprofile from './components/Yourprofile';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  const [profile, setprofile] = useState({ Name: "", Email: "", Date: "" });

  return (
    <div className="App">
      <Notestate>
      <Router>
      <Navbar profile = {profile} setprofile = {setprofile}/>
        <Routes>
        <Route exact path="/" element={<Hero/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/createuser" element={<CreateUser/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/createnotes" element={<Createnotes/>} />
        <Route exact path="/yournotes" element={<Yournotes/>} />
        <Route exact path="/yourprofile" element={<Yourprofile profile = {profile}/>} />
      </Routes>
      </Router>
      <Footer/>
      </Notestate>
    </div>
  );
}

export default App;
