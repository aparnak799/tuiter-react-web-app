import React from "react";
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";
import TuitStats from "./tuit-stats";
const TuitItem = ({ post }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <li className="list-group-item d-flex">
      <div className="wd-image-div-border">
        <img
          src={`${post.image}`}
          className="wd-avatar-img rounded-circle "
          alt="avatar"
        />
      </div>
      <div className="row w-100">
        <div className="col-10">
          <div>
            {post.userName} {post.handle} . {post.time}
          </div>
          <div>{post.tuit}</div>
        </div>

        <TuitStats
          tuitId={post._id}
          liked={post.liked}
          likes={post.likes}
          replies={post.replies}
          retuits={post.retuits}
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