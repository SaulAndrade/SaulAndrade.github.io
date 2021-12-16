import { createSlice } from '@reduxjs/toolkit'
import portfolioData, {c as crumbs} from '../../portfolioData/portfolio'

const initialState = {
  activeCrumb: '',
  crumbs: crumbs,
  projects: portfolioData
}

const setActiveCrumbHandler = (state, action) => {
  return { ...state, activeCrumb: action.payload }
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