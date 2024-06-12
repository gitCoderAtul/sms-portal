import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
  
    shareMessageData: (state, action) => {
      console.log(action.payload);
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  shareMessageData } = messageSlice.actions

export default messageSlice.reducer