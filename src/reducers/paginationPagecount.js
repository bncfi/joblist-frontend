import { createSlice } from '@reduxjs/toolkit'

const pageCount = createSlice({
  name: 'pageCount',
  initialState: 1,
  reducers: {
    setPageCount(state, action) {
      return action.payload
    },
  },
})

export const { setPageCount } = pageCount.actions

export default pageCount.reducer
