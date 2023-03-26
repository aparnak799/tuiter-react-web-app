import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import BannerSection from "./banner-section";
import { convertDateToRequiredFormat, updateProfile } from "./profile-reducer";

const EditProfile = ({ profile }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [profileData, setProfileData] = useState({
    name: `${profile.firstName} ${profile.lastName}`,
    bio: profile.bio,
    website: profile.website,
    location: profile.location,
    dateOfBirth: convertDateToRequiredFormat(profile.dateOfBirth),
  });

  return (
    <div>
      <div className="wd-space-between">
        <div className="d-flex">
          <i onClick={() => navigate(-1)} className="bi bi-x-lg wd-pointer"></i>
          <div className="wd-name-display">
            <div>Edit Profile</div>
          </div>
        </div>
        <button
          onClick={() => {
            dispatch(updateProfile(profileData));
            navigate(-1);
          }}
          className="wd-save"
        >
          Save
        </button>
      </div>
      <BannerSection profile={profile} />
      <div className="d-flex flex-column">
        <input
          type="text"
          placeholder="Name"
          className="my-4 wd-curved-border"
          value={profileData.name}
          onChange={(e) => {
            setProfileData({ ...profileData, name: e.target.value });
          }}
        />
        <textarea
          placeholder="bio"
          value={profileData.bio}
          className="my-4 wd-curved-border"
          onChange={(e) => {
            setProfileData({ ...profileData, bio: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Location"
          className="my-4 wd-curved-border"
          value={profileData.location}
          onChange={(e) => {
            setProfileData({ ...profileData, location: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Website"
          value={profileData.website}
          className="my-4 wd-curved-border"
          onChange={(e) => {
            setProfileData({ ...profileData, website: e.target.value });
          }}
        />
        <input
          type="date"
          className="my-4"
          value={profileData.dateOfBirth}
          onChange={(e) => {
            setProfileData({ ...profileData, dateOfBirth: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

export default EditProfile;