import { createSlice } from '@reduxjs/toolkit'
import data from "../data.json";

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    value: data,
  },
  reducers: {},
})

export default dataSlice.reducer