import React from "react";
import { useDispatch } from "react-redux";
import { toggleTuitLike } from "./tuits-reducer";
const TuitStats = ({ liked, replies, retuits, likes, tuitId }) => {
  const dispatch = useDispatch();
  return (
    <div className="row wd-margin-top">
      <div className="col-3 wd-hyperlink-grey wd-navbar wd-cursor-pointer">
        <i className="bi bi-chat-fill wd-margin-right"></i>
        {replies}
      </div>
      <div className="col-3 wd-hyperlink-grey wd-navbar wd-cursor-pointer">
        <i className="bi bi-arrow-up-left-square wd-margin-right"></i>
        {retuits}
      </div>
      <div
        onClick={() => {
          dispatch(toggleTuitLike({ tuitId }));
        }}
        className="col-3 wd-hyperlink-grey wd-navbar wd-cursor-pointer"
      >
        <i
          className={`bi bi-heart wd-icon wd-margin-right ${
            liked ? "wd-liked" : ""
          }`}
        ></i>
        {likes}
      </div>
      <div className="col-3 wd-hyperlink-grey wd-navbar wd-cursor-pointer">
        <i className="bi bi-box-arrow-up wd-icon wd-margin-right"></i>
      </div>
    </div>
  );
};

export default TuitStats;