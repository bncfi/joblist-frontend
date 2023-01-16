import { createSlice } from '@reduxjs/toolkit'

const jobState = createSlice({
  name: 'jobState',
  initialState: false,
  reducers: {
    setJobState(state, action) {
      return action.payload
    },
  },
})

export const { setJobState } = jobState.actions

export default jobState.reducer
