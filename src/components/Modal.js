import React from "react";
const Modal = (props) => {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations!
          </h3>
          <p className="py-4">
            {props.desc}
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              OK
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
