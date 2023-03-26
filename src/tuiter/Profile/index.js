import "./index.css";
import React from "react";
import { useSelector } from "react-redux";
import Profile from "./profile";
import EditProfile from "./edit-profile";
import { Routes, Route } from "react-router";

const ProfilePage = () => {
  const profile = useSelector((state) => state.profile);
  return (
    <div>
      <Routes>
        <Route index element={<Profile profile={profile} />} />
        <Route
          path="edit-profile"
          element={<EditProfile profile={profile} />}
        />
      </Routes>
    </div>
  );
};

export default ProfilePage;