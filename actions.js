import * as types from './types'
import { filterSensors } from 'functions/helpers'

export async function getFarms(dispatch) { 
    
    try {
      const result = await fetch('/api/farms')
      const farms = await result.json()
      return dispatch({ type: types.FARMS, payload: farms });
    } catch (error) {
      return dispatch({ type: types.ERROR, error });
    }
}

export async function getSensors({dispatch, farm_id}) { 
  console.log("getSensors",farm_id)
  try {
    const farm = {}
    const result = await fetch(`/api/farms?farm_id=${farm_id}`)
    const sensors = await result.json()
    const filtered = filterSensors(sensors)
    console.log(filtered)
    farm.farm_id = farm_id
    farm.sensors = filtered
    console.log(farm)
    return dispatch({ type: types.SENSORS, payload: farm });
  } catch (error) {
    return dispatch({ type: types.ERROR, error });
  }
}

// INITIALIZES CLOCK ON SERVER
export const serverRenderClock = () => (dispatch) =>
  dispatch({
    type: types.TICK,
    payload: { light: false, ts: Date.now() },
  })

// INITIALIZES CLOCK ON CLIENT
export const startClock = () => (dispatch) =>
  setInterval(() => {
    dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } })
  }, 1000)

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: types.INCREMENT })

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: types.DECREMENT })

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET })