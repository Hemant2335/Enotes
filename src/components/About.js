import React, { useEffect } from 'react';
import aimg from "./img/WhatsApp Image 2023-01-26 at 10.14.09.jpg";
import nbgimg from './img/blob-scene-haikei.png';
import { useContext } from 'react';
import Notecontext from '../context/notes/Notecontext';
const About = () => {
    return <div>
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${nbgimg})` }}>
  <div className="hero-content flex-col lg:flex-row">
    <img src={aimg} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">About Me!</h1>
      <p className="py-6"> Web Developer and Btech CSE student
            at Jaypee University  <br /> Of Engineering and Technology. 
            <br /><br /><br />
            I am quite smartworking and Passionate Towards my Domain of Webdevelopment.
            <br />
            Most of the Time I give more time in desiging the user interface so I am <br />
            more expereinced in frontend part but that doesn't mark my Expertise in Backend.
            <br />
            Right now i am looking for different opputunities to increase my skills and 
            <br />
            expereince in corporate sector.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </div>;
}
export default About;