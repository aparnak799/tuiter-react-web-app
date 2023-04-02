import React from "react";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";
const TuitItem = ({ post }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  return (
    <li className="list-group-item d-flex">
      <div className="wd-image-div-border">
        <img
          src={`${post.image || 'https://thumbs.dreamstime.com/b/profile-picture-smiling-indian-female-employee-profile-picture-smiling-millennial-indian-female-employee-posing-office-198022033.jpg'}`}
          className="wd-avatar-img rounded-circle "
          alt="avatar"
        />
      </div>
      <div className="row w-100">
        <div className="col-10">
          <div>
            {post.username || "Aparna Krishnan"} {post.handle || "@aparna"} . {post.time || "2h"}
          </div>
          <div>{post.tuit}</div>
        </div>

        <TuitStats
          tuit={post}
        />
      </div>
      <i
        className="bi bi-x-lg float-end"
        onClick={() => deleteTuitHandler(post._id)}
      ></i>
    </li>
  );
};
export default TuitItem;