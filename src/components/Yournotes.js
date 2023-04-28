import React from "react";
import nbgimg from './img/blob-scene-haikei.png';
import { useContext } from "react";
import Notecontext from "../context/notes/Notecontext";
import Notescard from "./Notescard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Yournotes = () => {
  let navigate = useNavigate();
  const context = useContext(Notecontext)
  const {notes , getnote} = context ;
  useEffect(()=>{
    if (localStorage.getItem('token'))
    {
      getnote()
    }
    else
    {
      navigate("/");
    }
    
  }, [getnote , navigate])

  return (
    <>
     <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${nbgimg})` }}>
     {notes.length===0 && <div className="flex justify-center content-center flex-col"> <p> No Notes to Display </p></div>}
    <div className="grid grid-cols-3 gap-5 px-20 py-10 min-h-screen">
      {notes.map((note)=>{
          return <Notescard note = {note}/>;
          })}
    </div>
    </div>
    </>
  );
};

export default Yournotes;
