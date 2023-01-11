import { createSlice } from '@reduxjs/toolkit'
import jobsService from '../services/jobsService'

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: [],
  reducers: {
    setJobs(state, action) {
      return action.payload.sort(
        (a, b) => Date.parse(b.date_posted) - Date.parse(a.date_posted)
      )
    },
    orderJobsNewest(state, action) {
      return state.sort(
        (a, b) => Date.parse(b.date_posted) - Date.parse(a.date_posted)
      )
    },
    orderJobsOldest(state, action) {
      return state.sort(
        (a, b) => Date.parse(a.date_posted) - Date.parse(b.date_posted)
      )
    },
  },
})

export const { setJobs, orderJobsNewest, orderJobsOldest } = jobsSlice.actions

export const initializeJobs = () => {
  return async (dispatch) => {
    const jobs = await jobsService.getAll()
    dispatch(setJobs(jobs))
  }
}

export default jobsSlice.reducer
