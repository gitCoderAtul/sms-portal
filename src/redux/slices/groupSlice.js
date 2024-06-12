import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
  
    shareGroupData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  shareGroupData } = groupSlice.actions

export default groupSlice.reducer