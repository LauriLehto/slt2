import * as types from './types'

export async function getFarms(dispatch) { 
    function onSuccess(farms) {
      dispatch({ type: types.FARMS, payload: farms });
      return farms;
    }
    function onError(error) {
      dispatch({ type: types.ERROR, error });
      return error;
    }
    try {
      const result = await fetch('api/farms')
      const farms = await result.json()
      console.log(farms)
      return onSuccess(farms);
    } catch (error) {
      return onError(error);
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