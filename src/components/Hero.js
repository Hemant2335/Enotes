import React from "react";
import nbgimg from "./img/blob-scene-haikei.png";
import bbgimg from "./img/arrangement-desk-elements-yellow-background.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${nbgimg})` }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="flex justify-end">
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg min-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
            This is App Where you can come and Create your Notes and Save them forfuture using reference and also to read them in future. Another reason
              to join us is we provide a very secure database which is end to end encrypted.
              Feel free to Create your Notes.
            </p>
            <Link to="/login"><button className="btn btn-primary ">Get Started</button></Link>
            {!localStorage.getItem('token')?null:<Link to  = "/createnotes"><button className="btn btn-primary mx-5">Add Note</button></Link>}
          </div>
          <img src={bbgimg} className="max-w-sm  rounded-lg shadow-2xl" alt="img"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


