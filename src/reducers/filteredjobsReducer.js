import { createSlice } from '@reduxjs/toolkit'

const filteredJobsSlice = createSlice({
  name: 'filteredjobs',
  initialState: [],
  reducers: {
    setFilteredJobs(state, action) {
      return action.payload
    },
    orderFilteredNewest(state, action) {
      return state.sort(
        (a, b) => Date.parse(b.date_posted) - Date.parse(a.date_posted)
      )
    },
    orderFilteredOldest(state, action) {
      return state.sort(
        (a, b) => Date.parse(a.date_posted) - Date.parse(b.date_posted)
      )
    },
  },
})

export const { setFilteredJobs, orderFilteredNewest, orderFilteredOldest } =
  filteredJobsSlice.actions

export default filteredJobsSlice.reducer
