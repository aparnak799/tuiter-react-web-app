import { createSlice } from "@reduxjs/toolkit";

const currentUser = {
  firstName: "Aparna",
  lastName: "Krishnan",
  handle: "@aparnak799",
  profilePicture:
    "https://as2.ftcdn.net/v2/jpg/04/41/81/99/1000_F_441819968_a1n8G5Y0XjF0kGcxZsoFbDhh8cgEBoys.jpg",
  bannerPicture: "https://img.freepik.com/free-vector/high-tech-futuristic-lines-technology-banner_1017-23966.jpg",
  bio: "Student, Dev, Learner",
  website: "youtube.com/webdevtv",
  location: "San Jose, CA",
  dateOfBirth: "7/10/1999",
  dateJoined: "4/2009",
  followingCount: 340,
  followersCount: 223,
};

export const convertDateToRequiredFormat = (date) => {
  const d = date.split("/");
  return `${d[2]}-${d[1] < 10 && d[1][0] !== "0" ? `0${d[1]}` : `${d[1]}`}-${
    d[0] < 10 && d[0][0] ? `0${d[0]}` : `${d[0]}`
  }`;
};

export const convertRequiredDateToReadableFormat = (date) => {
  const d = date.split("-");
  return `${d[2] < 10 ? `${d[2]}` : `${d[2]}`}/${
    d[1] < 10 ? `${d[1]}` : `${d[1]}`
  }/${d[0]}`;
};

const profileSlice = createSlice({
  name: "profile",
  initialState: currentUser,
  reducers: {
    updateProfile(state, action) {
      const { name, bio, website, location, dateOfBirth } = action.payload;
      state.firstName = name.split(" ")[0] || "";
      state.lastName = name.split(" ")[1] || "";
      state.bio = bio;
      state.website = website;
      state.location = location;
      state.dateOfBirth = convertRequiredDateToReadableFormat(dateOfBirth);
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;