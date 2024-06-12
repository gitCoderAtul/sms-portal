import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
  
    shareContactData: (state, action) => {
      console.log(action.payload)
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  shareContactData } = contactSlice.actions

export default contactSlice.reducer