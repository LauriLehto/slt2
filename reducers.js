import { combineReducers } from 'redux'
import * as types from './types'

const farmReducer = (state = [], { type, payload }) => {
  //console.log(type)
  switch (type) {
    case types.FARMS:
      return payload
    default:
      return state
  }
}

const sensorReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.SENSORS:
      //console.log("state length", state.length, "payload", payload)
      let newState = [...state]
      const farmIndex = newState.findIndex(object => object.farm_id === payload.farm_id )
      if(farmIndex!==-1){
        newState[farmIndex] = payload
      }else {
        newState = [...newState, payload]
      }
      return newState
    default:
      return state
  }
}

// COUNTER REDUCER
const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case types.INCREMENT:
      return state + 1
    case types.DECREMENT:
      return state - 1
    case types.RESET:
      return 0
    default:
      return state
  }
}

// INITIAL TIMER STATE
const initialTimerState = {
  lastUpdate: 0,
  light: false,
}

// TIMER REDUCER
const timerReducer = (state = initialTimerState, { type, payload }) => {
  switch (type) {
    case types.TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light,
      }
    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = {
  sensors: sensorReducer,
  farms: farmReducer,
}

export default combineReducers(reducers)