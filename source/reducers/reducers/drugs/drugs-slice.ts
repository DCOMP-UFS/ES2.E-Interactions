import { createSlice } from '@reduxjs/toolkit'

type Drugs = {
  id: number
  name: string
  rxcui: string
  createdAt?: string
  updatedAt?: string
}

const drugsSlice = createSlice({
  name: 'drugs',
  initialState: [] as Drugs[],
  reducers: {
    drugAdded(state, action) {
      state.push({
        id: action.payload.rxcui,
        name: action.payload.name,
        rxcui: action.payload.rxcui,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })
    },
    drugRemove(state, action) {
      state = state.filter((drug) => drug.rxcui !== action.payload.rxcui)
    },
  },
})

export const { drugAdded, drugRemove } = drugsSlice.actions
export default drugsSlice.reducer
