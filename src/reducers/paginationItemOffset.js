import { createSlice } from '@reduxjs/toolkit'

const itemOffset = createSlice({
  name: 'itemOffset',
  initialState: 0,
  reducers: {
    setItemOffset(state, action) {
      return action.payload
    },
  },
})

export const { setItemOffset } = itemOffset.actions

export default itemOffset.reducer
