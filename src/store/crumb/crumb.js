import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeCrumb: '',
}

const setActiveCrumbHandler = (state, action) => {
  const newActiveCrumb = action.payload === state.activeCrumb ? '' : action.payload
  return { ...state, activeCrumb: newActiveCrumb }
}

export const crumbSlice = createSlice({
  name: 'crumb',
  initialState: initialState,
  reducers: {
    setActiveCrumb: setActiveCrumbHandler
  }
})

export const { setActiveCrumb } = crumbSlice.actions
export default crumbSlice.reducer