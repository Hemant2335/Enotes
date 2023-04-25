import React from "react";
import bgimg from "./img/stacked-peaks-haikei.png";
import nbgimg from './img/blob-scene-haikei.png';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${nbgimg})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              This is App Where you can come and Create your Notes and Save them forfuture using reference and also to read them in future. Another reason
              to join us is we provide a very secure database which is end to end encrypted.
              Feel free to Create your Notes.
            </p>
            <Link to = "/login"><button className="btn btn-primary">Get Started</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
