import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";

const currentUser = {
  userName: "NASA",
  handle: "@nasa",
  image:
    "https://i.pinimg.com/originals/dd/f5/0e/ddf50e1451baf41d1aa01947fe9452bd.jpg",
};

const templateTuit = {
  ...currentUser,
  topic: "Space",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState: tuits,
  reducers: {
    deleteTuit(state, action) {
      const index = state.findIndex((tuit) => tuit._id === action.payload);
      state.splice(index, 1);
    },
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: new Date().getTime(),
      });
    },
    toggleTuitLike(state, action) {
      state.forEach((tuit) => {
        if (tuit._id === action.payload.tuitId) {
          if (tuit.liked === false) {
            tuit.likes += 1;
            tuit.liked = true;
          } else {
            tuit.likes -= 1;
            tuit.liked = false;
          }
        }
      });
    },
  },
});

export const { createTuit, deleteTuit, toggleTuitLike } = tuitsSlice.actions;
export default tuitsSlice.reducer;