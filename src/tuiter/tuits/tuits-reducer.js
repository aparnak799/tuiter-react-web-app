import { createSlice } from "@reduxjs/toolkit";
import { createTuitThunk, findTuitsThunk, deleteTuitThunk, updateTuitThunk } from "../../services/tuits-thunks";

const initialState = {
  tuits: [],
  loading: false
}


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
  initialState,
  extraReducers: {
    [findTuitsThunk.pending]:
      (state) => {
        state.loading = true
        state.tuits = []
      },
    [findTuitsThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits = payload
      },
    [findTuitsThunk.rejected]:
      (state) => {
        state.loading = false
      },
    [deleteTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits = state.tuits
          .filter(t => t._id !== payload)
      },
    [createTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuits.push(payload)
      },
    [updateTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        const tuitNdx = state.tuits
          .findIndex((t) => t._id === payload._id)
        state.tuits[tuitNdx] = {
          ...state.tuits[tuitNdx],
          ...payload
        }
      }




  },
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