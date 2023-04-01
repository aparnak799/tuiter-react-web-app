import React, { useState } from "react";
// import { createTuit } from "../tuits/tuits-reducer";
import { useDispatch } from "react-redux";
import { createTuitThunk } from "../../services/tuits-thunks";

const WhatsHappening = () => {
  const dispatch = useDispatch();
  let [whatsHappening, setWhatsHappening] = useState("");
  const tuitClickHandler = () => {
    const newTuit = {
      tuit: whatsHappening,
    };
    dispatch(createTuitThunk(newTuit));
    setWhatsHappening("");
  };
  return (
    <div className="row">
      <div className="col-auto">
        <img
          src="https://i.pinimg.com/originals/dd/f5/0e/ddf50e1451baf41d1aa01947fe9452bd.jpg"
          width={60}
          alt={"Avatar"}
        />
      </div>
      <div className="col-10">
        <textarea
          value={whatsHappening}
          placeholder="What's happening?"
          className="form-control border-0"
          onChange={(event) => setWhatsHappening(event.target.value)}
        ></textarea>
        <div>
          <button
            className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
            onClick={tuitClickHandler}
          >
            Tuit
          </button>
          <div className="text-primary fs-2">
            <i className="bi bi-card-image me-3"></i>
            <i className="bi bi-filetype-gif me-3"></i>
            <i className="bi bi-bar-chart me-3"></i>
            <i className="bi bi-emoji-smile me-3"></i>
            <i className="bi bi-geo-alt"></i>
          </div>
        </div>
      </div>
      <div className="col-12">
        <hr />
      </div>
    </div>
  );
};
export default WhatsHappening;