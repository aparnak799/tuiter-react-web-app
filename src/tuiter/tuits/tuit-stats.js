import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";
const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  return (
    <div className="d-flex wd-margin-top">
      <div className="col-3 wd-hyperlink-grey wd-navbar wd-cursor-pointer">
        <i className="bi bi-chat-fill wd-margin-right"></i>
        {tuit.replies}
      </div>
      <div className="col-3 wd-hyperlink-grey wd-navbar wd-cursor-pointer">
        <i className="bi bi-arrow-up-left-square wd-margin-right"></i>
        {tuit.retuits}
      </div>
      <div
        onClick={() => {
          dispatch(
            updateTuitThunk({
              ...tuit,
              likes: tuit.likes + 1,
            })
          );
        }}
        className="col-3 wd-hyperlink-grey wd-navbar wd-cursor-pointer"
      >
        <i
          className={`bi bi-heart wd-icon wd-margin-right ${
            tuit.liked ? "wd-liked" : ""
          }`}
        ></i>
        {tuit.likes}
      </div>
      <div
        onClick={() => {
          dispatch(
            updateTuitThunk({
              ...tuit,
              dislikes: tuit.dislikes + 1,
            })
          );
        }}
        className="col-3 wd-hyperlink-grey wd-navbar wd-cursor-pointer"
      >
        <i
          className={`bi bi-hand-thumbs-down-fill wd-icon wd-margin-right`}
        ></i>
        {tuit.dislikes}
      </div>
      <div className="col-3 wd-hyperlink-grey wd-navbar wd-cursor-pointer">
        <i className="bi bi-box-arrow-up wd-icon wd-margin-right"></i>
      </div>
    </div>
  );
};

export default TuitStats;