import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLoggedIn: {
      userName: "",
      email: "",
      password: "",
      name: "",
      sex: "",
      age: "",
      country: ""
  }, // Updated to handle user logged in
};

const userLoggedInSlice = createSlice({
  name: "userLoggedIn",
  initialState,
  reducers: {
   setUserLoggedIn: (state, action) => {
     state.userLoggedIn = action.payload;
   },
   clearUserLoggedIn: (state) => {
     state.userLoggedIn = initialState.userLoggedIn;
   }
  },
});

export const { setUserLoggedIn, clearUserLoggedIn } = userLoggedInSlice.actions;
export default userLoggedInSlice.reducer;
