import React from "react";
const Notescard = (props) => {

    const {note} = props
  return (
    <div>
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{note.Title}</h2>
          <p>{note.Task}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary ">Update</button>
            <button className="btn btn-error">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Notescard;
