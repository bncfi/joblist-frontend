import { createSlice } from '@reduxjs/toolkit'

const pageState = createSlice({
  name: 'pageState',
  initialState: 0,
  reducers: {
    setCurrentPage(state, action) {
      return action.payload
    },
  },
})

export const { setCurrentPage } = pageState.actions

export default pageState.reducer
