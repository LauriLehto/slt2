import * as types from './types'
import { filterSensors } from 'functions/helpers'

export async function getFarms(dispatch) { 
    
    try {
      const result = await fetch('/api/farms')
      const farms = await result.json()
      dispatch({ type: types.FARMS, payload: farms });
      return farms
    } catch (error) {
      dispatch({ type: types.ERROR, error });
      return error
    }
}

export async function getSensors({dispatch, farm_id}) { 
  try {
    const farm = {}
    const result = await fetch(`/api/farms?farm_id=${farm_id}`)
    const sensors = await result.json()
    if(sensors.length){
      const filtered = filterSensors(sensors)
      farm.farm_id = farm_id
      farm.data = filtered
    }
    
    dispatch({ type: types.SENSORS, payload: farm });
    return farm
  } catch (error) {
    dispatch({ type: types.ERROR, error });
    return error
  }
}

export function setDates({dispatch, dates}) {
  dispatch({ type: types.DATES, payload: dates})
  return dates
}