import React from "react";
import { useNavigate } from "react-router";
import BannerSection from "./banner-section";
import { Link } from "react-router-dom";
const Profile = ({ profile }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="d-flex">
        <i
          onClick={() => navigate(-1)}
          className="bi bi-arrow-return-left wd-pointer"
        ></i>
        <div className="wd-name-display">
          <div>
            {profile.firstName} {profile.lastName}
          </div>
          <label className="wd-tweets-count">400 Tuits</label>
        </div>
      </div>
      <BannerSection profile={profile} />
      <div className="wd-profile-pic-layout">
        <img
          className="wd-profile-pic"
          src={profile.profilePicture}
          alt="Profile"
        />
        <button className="wd-edit-profile-button">
          <Link
            to="/tuiter/profile/edit-profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            Edit Profile
          </Link>
        </button>
      </div>

      <div className="d-flex flex-column">
        <label className="wd-profile-name">
          {profile.firstName} {profile.lastName}
        </label>
        <label className="wd-gray-text">{profile.handle}</label>
      </div>
      <div className="wd-profile-bio">{profile.bio}</div>
      <div className="d-flex mt-2">
        <div className="mx-2">
          <i className="bi bi-geo-alt mx-2"></i>
          <label className="wd-gray-text wd-font-sm">{profile.location}</label>
        </div>
        <div className="mx-2">
          <i className="bi bi-balloon mx-2"></i>
          <label className="wd-gray-text wd-font-sm">
            {" "}
            Born on {profile.dateOfBirth}
          </label>
        </div>
        <div className="mx-2">
          <i className="bi bi-calendar3 mx-2"></i>
          <label className="wd-gray-text wd-font-sm">
            Joined on {profile.dateJoined}
          </label>
        </div>
      </div>
      <div className="wd-margin-top">
        <span className="mx-2">
          <b>{profile.followersCount}</b> Following
        </span>
        <span>
          <b>{profile.followingCount}</b> Followers
        </span>
      </div>
    </div>
  );
};

export default Profile;