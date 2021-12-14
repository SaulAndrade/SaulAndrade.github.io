import { createSlice } from '@reduxjs/toolkit'
import classes from '../../components/BurguerButton/BurguerButton.module.css'

const initialState = {
  buttonClasses: [ classes.BurguerButton ],
  buttonActive: false
}

const toggleHandler = state => {
  if (state.buttonClasses.includes(classes.ButtonActive)){
    return deactivateHandler(state)
  }
  return activateHandler(state)
}

const activateHandler = state => {
  return {
    ...state, 
    buttonClasses: [ classes.BurguerButton, classes.ButtonActive ],
    buttonActive: true
  }
}

const deactivateHandler = state => {
  return {
    ...state, 
    buttonClasses: [ classes.BurguerButton ],
    buttonActive: false
  }
}

export const bButtonSlice = createSlice({
  name: 'bButton',
  initialState: initialState,
  reducers: {
    toggle: toggleHandler,
    activate: activateHandler,
    deactivate: deactivateHandler
  }
})

export const { toggle, activate, deactivate } = bButtonSlice.actions
export default bButtonSlice.reducer