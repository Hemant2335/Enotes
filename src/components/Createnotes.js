import React from "react";
import nbgimg from './img/blob-scene-haikei.png';
const Login = () => {
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
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task</span>
                </label>
                <textarea placeholder="Task" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tag</span>
                </label>
                <input
                  type="text"
                  placeholder="Tag"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Create</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
