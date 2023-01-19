import { createSlice } from '@reduxjs/toolkit'

const currentJobs = createSlice({
  name: 'currentJobs',
  initialState: null,
  reducers: {
    setcurrentJobs(state, action) {
      return action.payload
    },
  },
})

export const { setcurrentJobs } = currentJobs.actions

export default currentJobs.reducer
