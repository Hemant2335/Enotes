import React, { useContext } from "react";
import { UilTrash } from "@iconscout/react-unicons";
import Notecontext from "../context/notes/Notecontext";
const Notescard = (props) => {
  const context = useContext(Notecontext);
  const { deletenote } = context;
  const { note} = props;
  return (
    <div>
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{note.Title}</h2>
          <p>{note.Task}</p>
          <div className="card-actions justify-end">
              <div className="badge badge-outline my-4">{note.Tag}</div>
            </div>
          <div className="card-actions justify-end">
            <button
              className="btn btn-error"
              onClick={() => {
                deletenote(note._id);
              }}
            >
              <UilTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Notescard;
