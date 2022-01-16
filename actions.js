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
  //console.log("getSensors",farm_id)
  try {
    const farm = {}
    const result = await fetch(`/api/farms?farm_id=${farm_id}`)
    const sensors = await result.json()
    const filtered = filterSensors(sensors)
    //console.log(filtered)
    farm.farm_id = farm_id
    farm.data = filtered
    //console.log(farm)
    return dispatch({ type: types.SENSORS, payload: farm });
  } catch (error) {
    return dispatch({ type: types.ERROR, error });
  }
}
