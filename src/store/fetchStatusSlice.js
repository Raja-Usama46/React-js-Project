import { createSlice } from '@reduxjs/toolkit';

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    fetching: false,
  },
  reducers: {
    setFetchDone: (state) => {
      state.fetchDone = true; // No return needed
    },
    startFetching: (state) => {
      state.fetching = true; // No return needed
    },
    finishFetching: (state) => {
      state.fetching = false; // No return needed
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;