import React from "react";
import simg from "./img/7309681.jpg";

const Yourprofile = (props) => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={simg} className="max-w-sm rounded-lg shadow-2xl" alt="img" />
          <div>
            <h1 className="text-5xl font-bold">Profile</h1>
            <div className="form-control">
              <label className="input-group my-5">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="info@site.com"
                  className="input input-bordered"
                  value={props.profile.Name}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input-group my-5">
                <span>Email</span>
                <input
                  type="text"
                  placeholder="info@site.com"
                  className="input input-bordered"
                  value={props.profile.Email}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input-group my-5">
                <span>Date</span>
                <input
                  type="text"
                  placeholder="info@site.com"
                  className="input input-bordered"
                  value={props.profile.Date.slice(0,10)}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Yourprofile;
