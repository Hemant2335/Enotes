import React from "react";
import nbgimg from './img/blob-scene-haikei.png';
import Notecontext from "../context/notes/Notecontext";
import { useContext } from "react";
import { useState } from "react";
import Modal from "./Modal";
const Login = () => {

  const context = useContext(Notecontext)
  const {addnote} =  context ;



  const [note, setnote] = useState({Title : "" , Task : "" , Tag : ""})
  const handleClick =(e)=>{
    addnote(note.Title , note.Task , note.Tag);
    setnote({Title : "" , Task : "" , Tag : ""});
  }

  const Onchange=(e)=>{
    e.preventDefault();
    setnote({...note , [e.target.name]: e.target.value })
  }

  return (
    <div>
      <div className="hero min-h-screen " style={{ backgroundImage: `url(${nbgimg})` }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">CreateNote!</h1>
            <p className="py-6">
              Enter the Note Details to write to create a new note
              <br /><br /><br /><br /><br /><br />
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  className="input input-bordered"
                  name="Title"
                  onChange={Onchange}
                  required
                  minLength={5}
                  value={note.Title}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text" onChange={Onchange}>Task</span>
                </label>
                <textarea placeholder="Task" value={note.Task} minLength={5} required className="textarea textarea-bordered textarea-lg w-full max-w-xs" name="Task" onChange={Onchange} ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tag</span>
                </label>
                <input
                  type="text"
                  placeholder="Tag"
                  className="input input-bordered"
                  name="Tag"
                  onChange={Onchange}
                  value={note.Tag}
                />
              </div>
              <div className="form-control mt-6">
              <label htmlFor="my-modal" className="btn btn-primary" onClick={handleClick} disabled = {note.Title.length<5 || note.Task.length<5}>Create Note</label>
              <Modal desc = {'The Note has Sucessfully Created!'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
