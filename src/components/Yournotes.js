import React from "react";
// import { Link } from 'react-router-dom';
import { useContext } from "react";
import Notecontext from "../context/notes/Notecontext";
import Notescard from "./Notescard";
const Yournotes = () => {

  const context = useContext(Notecontext)
  const {notes , setnotes} = context ;
  return (
    <div className="grid grid-cols-3 gap-5 px-20 py-10 min-h-screen">
      {notes.map((note)=>{
          return <Notescard note = {note}/>;
          })}
    </div>
  );
};

export default Yournotes;
