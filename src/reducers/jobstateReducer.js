import { createSlice } from '@reduxjs/toolkit'

const jobState = createSlice({
  name: 'filteredjobs',
  initialState: false,
  reducers: {
    setJobstate(state, action) {
      return action.payload.sort(
        (a, b) => Date.parse(b.date_posted) - Date.parse(a.date_posted)
      )
    },
  },
})

export const { setJobstate } = jobState.actions

export default jobState.reducer
