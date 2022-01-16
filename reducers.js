import { combineReducers } from 'redux'
import * as types from './types'

const farmReducer = (state = [], { type, payload }) => {
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

const datesReducer = ( state = [null, null], { type, payload }) => {
  switch (type) {
    case types.DATES:
      return payload
    default:
      return state
  }
}


// COMBINED REDUCERS
const reducers = {
  sensors: sensorReducer,
  farms: farmReducer,
  dates: datesReducer
}

export default combineReducers(reducers)