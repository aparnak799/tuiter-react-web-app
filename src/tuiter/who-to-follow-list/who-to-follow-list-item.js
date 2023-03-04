import React from "react";
const WhoToFollowListItem = ({
  who = {
    userName: "NASA",
    handle: "NASA",
    avatarIcon:
      "https://i.pinimg.com/originals/dd/f5/0e/ddf50e1451baf41d1aa01947fe9452bd.jpg",
  },
}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img
            className="rounded-circle"
            height={48}
            src={`${who.avatarIcon}`}
            alt="WhoToFollow Img"
          />
        </div>
        <div className="col-8">
          <div className="fw-bold">{who.userName}</div>
          <div>@{who.handle}</div>
        </div>
        <div className="col-2">
          <button className="btn btn-primary rounded-pill float-end">
            Follow
          </button>
        </div>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;