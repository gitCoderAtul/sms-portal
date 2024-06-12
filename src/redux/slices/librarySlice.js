import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
  
    sharelibraryData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  sharelibraryData } = librarySlice.actions

export default librarySlice.reducer